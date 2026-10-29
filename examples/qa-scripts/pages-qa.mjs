// Smoke-tests a built site served under a base path: deep links, lazy chunks, demo data, console errors.
// usage: node pages-qa.mjs <origin+base, e.g. http://localhost:5181/axis-quote/>
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const root = process.argv[2].replace(/\/?$/, "/");
const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", ["--headless=new", "--remote-debugging-port=9352", `--user-data-dir=${mkdtempSync(join(tmpdir(), "pq-"))}`, "--window-size=1280,900", "about:blank"]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);
const page = (await (await fetch("http://127.0.0.1:9352/json")).json()).find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let n = 0; const pending = new Map(); const problems = [];
let current = "";
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  if (d.method === "Runtime.exceptionThrown") problems.push(`${current}: exception ${d.params.exceptionDetails.exception?.description ?? d.params.exceptionDetails.text}`);
  if (d.method === "Runtime.consoleAPICalled" && d.params.type === "error") problems.push(`${current}: console.error ${d.params.args.map((a) => a.value ?? a.description).join(" ")}`);
  if (d.method === "Network.responseReceived" && d.params.response.status >= 400 && !d.params.response.url.endsWith("/axis-quote/" + current.split("?")[0]) && d.params.type !== "Document") problems.push(`${current}: ${d.params.response.status} ${d.params.response.url}`);
};
const send = (method, params = {}) => new Promise((r) => { const id = ++n; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (e) => (await send("Runtime.evaluate", { expression: e, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
const go = async (path, wait = 2500) => { current = path; await send("Page.navigate", { url: root + path }); await sleep(wait); };

await go("");
await ev(`localStorage.clear(); sessionStorage.setItem('axis.session','owner'); true`);
await go("admin/settings/data", 3000);
const loaded = await ev(`(() => { window.confirm = () => true; const b = [...document.querySelectorAll('button')].find(b => /load demo data/i.test(b.textContent)); if (!b) return 'no button'; b.click(); return 'clicked'; })()`);
await sleep(1500);
const counts = await ev(`JSON.stringify(Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith('axis')).map(k => { try { const v = JSON.parse(localStorage[k]); return [k, Array.isArray(v) ? v.length : typeof v]; } catch { return [k, '?']; } })))`);
console.log("demo:", loaded, counts);

const routes = ["", "admin", "admin/jobs", "admin/calendar", "admin/contacts", "admin/proposals", "admin/invoices", "admin/inventory", "admin/inventory/rolls", "admin/inventory/forecast", "admin/inventory/labels", "admin/messages", "admin/reviews", "admin/analytics", "admin/tasks", "admin/documents", "admin/settings", "admin/design", "reviews", "warranty"];
for (const r of routes) {
  await go(r);
  const info = await ev(`JSON.stringify({ path: location.pathname, text: document.body.innerText.length, h1: document.querySelector('h1')?.textContent?.slice(0, 40) ?? '' })`);
  const i = JSON.parse(info);
  if (i.text < 40) problems.push(`${r}: blank page (${i.text} chars)`);
  console.log(r.padEnd(26), i.path.padEnd(36), i.h1);
}
// A job page and a customer proposal link from the demo data.
await go("admin/jobs");
const job = await ev(`[...document.querySelectorAll('a[href*="/admin/jobs/"]')].map(a => a.getAttribute('href'))[0]`);
if (job) { await go(job.replace("/axis-quote/", "")); console.log("job page", await ev(`document.querySelector('h1')?.textContent`)); }
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "NO PROBLEMS");
chrome.kill(); process.exit(0);
