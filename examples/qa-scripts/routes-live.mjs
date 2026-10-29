// Drives the route planner on the LIVE site in a fresh headless Chrome, like a first-time visitor:
// demo data seeds itself, sign in with the PIN, Day → Optimize → Apply, Week → Plan → Book, Settings → Routing,
// then open a crew route link on a phone-sized screen. Screenshots go next to this script.
// usage: node routes-live.mjs https://willwwest.github.io/axis-quote/ 2026-10-30
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const root = process.argv[2].replace(/\/?$/, "/");
const day = process.argv[3];
const PORT = 9381;
const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), "rl-"))}`, "--window-size=1280,900", "about:blank"]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);
const page = (await (await fetch(`http://127.0.0.1:${PORT}/json`)).json()).find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let n = 0; const pending = new Map(); const problems = []; let step = "";
const net = { osrm: 0, osrmFail: 0, tiles: 0, tileFail: 0, nominatim: 0 };
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  if (d.method === "Runtime.exceptionThrown") problems.push(`${step}: exception ${d.params.exceptionDetails.exception?.description ?? d.params.exceptionDetails.text}`);
  if (d.method === "Runtime.consoleAPICalled" && d.params.type === "error") problems.push(`${step}: console.error ${d.params.args.map((a) => a.value ?? a.description).join(" ").slice(0, 300)}`);
  if (d.method === "Network.responseReceived") {
    const { url, status } = d.params.response;
    if (url.includes("router.project-osrm.org")) { net.osrm++; if (status >= 400) net.osrmFail++; }
    else if (url.includes("tile.openstreetmap.org")) { net.tiles++; if (status >= 400) net.tileFail++; }
    else if (url.includes("nominatim")) net.nominatim++;
    else if (status >= 400 && d.params.type !== "Document") problems.push(`${step}: ${status} ${url}`);
  }
  if (d.method === "Network.loadingFailed" && !d.params.canceled) problems.push(`${step}: load failed ${d.params.errorText}`);
};
const send = (method, params = {}) => new Promise((r) => { const id = ++n; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (e) => { const r = await send("Runtime.evaluate", { expression: e, awaitPromise: true, returnByValue: true }); return r.result?.result?.value; };
await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
const go = async (path, wait = 3000) => { await send("Page.navigate", { url: path.startsWith("http") ? path : root + path }); await sleep(wait); };
const shot = async (name) => { const s = await send("Page.captureScreenshot", { format: "png" }); writeFileSync(join(here, name), Buffer.from(s.result.data, "base64")); };
const width = async (w) => send("Emulation.setDeviceMetricsOverride", { width: w, height: w < 500 ? 844 : 900, deviceScaleFactor: 1, mobile: w < 500 });
// Click the first visible button/link whose text matches.
const click = async (re) => ev(`(() => { const re = ${re}; const el = [...document.querySelectorAll('button, a, [role=tab]')].find(e => re.test(e.textContent.trim()) && e.offsetParent !== null && !e.disabled); if (!el) return 'NOT FOUND'; el.click(); return el.textContent.trim().slice(0, 60); })()`);
const text = () => ev(`document.body.innerText`);
const waitFor = async (re, ms = 20000) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (re.test(await text())) return Date.now() - t0; await sleep(500); } return -1; };
const overflow = () => ev(`document.documentElement.scrollWidth > innerWidth + 1`);
const mapState = () => ev(`JSON.stringify({ tiles: document.querySelectorAll('.leaflet-tile-loaded').length, markers: document.querySelectorAll('.leaflet-marker-icon').length, lines: document.querySelectorAll('.leaflet-overlay-pane path').length })`);
const log = (...a) => console.log(...a);

// 1. First visit, sign in.
step = "sign in"; await width(1280);
await go("admin", 4000);
log("seeded on first visit:", await ev(`!!localStorage.getItem('axisDemoSeeded') && JSON.parse(localStorage['axis.leads.v1']).length + ' jobs'`));
await ev(`(() => { const i = document.querySelector('input[aria-label=PIN]'); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(i, '1234'); i.dispatchEvent(new Event('input', { bubbles: true })); i.form.requestSubmit(); })()`);
await sleep(2000);
log("signed in:", await ev(`document.querySelector('h1')?.textContent`));

// 2. Day view on the showcase day.
step = "day view"; await go(`admin/routes?d=${day}`, 2000);
log("road times arrived in", await waitFor(/m driving/), "ms");
await sleep(4000);
const t1 = await text();
log("estimate fallback shown:", /using distance estimates|unavailable/i.test(t1));
log("cards:", (t1.match(/\d+ stops? · [^\n]+/g) || []).join(" | "));
log("map:", await mapState(), "overflow:", await overflow());
await shot("live-day-1280.png");

// 3. Optimize → Apply.
step = "optimize";
log("click:", await click(/^Optimize( day)?$/i)); await sleep(1200);
const opt2 = await click(/^Find the best plan$/i); if (opt2 !== "NOT FOUND") log("confirm:", opt2);
log("optimized in", await waitFor(/saves|Driving .* → /), "ms");
await sleep(3000);
log("result:", ((await text()).match(/Driving [^\n]+/) || ["(none)"])[0]);
log("map:", await mapState());
await shot("live-optimized-1280.png");
log("click:", await click(/^Apply plan$/i)); await sleep(2500);
log("after apply:", ((await text()).match(/Saved[^\n]*/) || ["(no confirmation)"])[0]);

// 4. Capture a crew route link via Copy link.
step = "copy link";
await ev(`window.__copied = []; navigator.clipboard.writeText = async (t) => { window.__copied.push(t); }; true`);
log("click:", await click(/^Copy link$/i)); await sleep(800);
const link = await ev(`window.__copied[0] || ''`);
log("route link:", link.slice(0, 90) + (link.length > 90 ? `… (${link.length} chars)` : ""));

// 5. Week planner.
step = "week"; await go(`admin/routes`, 2500);
log("click:", await click(/^Plan the week/i)); await sleep(1500);
const wk = await text();
log("waiting jobs:", (wk.match(/\d+ jobs? waiting[^\n]*/i) || ["?"])[0]);
log("click:", await click(/^Plan next 7 days$/i));
log("planned in", await waitFor(/installs? over|Book these/i, 30000), "ms");
await sleep(2000);
log("plan:", ((await text()).match(/\d+ installs? over[^\n]*/i) || ["(none)"])[0]);
await shot("live-week-1280.png");
log("click:", await click(/^Book these/i)); await sleep(3000);
log("after book:", ((await text()).match(/Booked[^\n]*/i) || ["(no confirmation)"])[0]);

// 6. Settings → Routing.
step = "settings"; await go("admin/settings/routing", 3000);
const st = await text();
log("settings defaults:", ["OSRM", "Built-in", "Nominatim"].map((k) => `${k}:${st.includes(k)}`).join(" "));
await shot("live-settings-1280.png");

// 7. Phone: routes page and the crew route link.
step = "phone routes"; await width(390);
await go(`admin/routes?d=${day}`, 7000);
log("phone routes overflow:", await overflow(), "map:", await mapState());
await shot("live-day-390.png");
if (link) {
  step = "route link"; await go(link, 7000);
  const rl = await text();
  log("route link page:", (rl.match(/Friday[^\n]*|\w+day, \w+ \d+/) || ["?"])[0], "·", (rl.match(/\d+ stops?[^\n]*/) || [""])[0]);
  log("route link map:", await mapState(), "overflow:", await overflow());
  await shot("live-route-link-390.png");
}
log("network:", JSON.stringify(net));
log(problems.length ? "PROBLEMS:\n" + [...new Set(problems)].join("\n") : "NO PROBLEMS");
chrome.kill(); process.exit(0);
