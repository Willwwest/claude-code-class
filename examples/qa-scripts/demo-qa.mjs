// Checks the demo build: a brand-new browser opening /admin gets sample data with no clicks, the data adds up,
// and every section renders without errors at desktop and phone widths.
// usage: node demo-qa.mjs <origin+base, e.g. http://localhost:5183/axis-quote/>
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const root = process.argv[2].replace(/\/?$/, "/");
const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", ["--headless=new", "--remote-debugging-port=9353", `--user-data-dir=${mkdtempSync(join(tmpdir(), "dq-"))}`, "--window-size=1280,900", "about:blank"]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);
const page = (await (await fetch("http://127.0.0.1:9353/json")).json()).find((t) => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let n = 0; const pending = new Map(); const problems = []; let current = "";
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
  if (d.method === "Runtime.exceptionThrown") problems.push(`${current}: exception ${d.params.exceptionDetails.exception?.description ?? d.params.exceptionDetails.text}`);
  if (d.method === "Runtime.consoleAPICalled" && d.params.type === "error") problems.push(`${current}: console.error ${d.params.args.map((a) => a.value ?? a.description).join(" ")}`);
  if (d.method === "Network.responseReceived" && d.params.response.status >= 400 && d.params.type !== "Document") problems.push(`${current}: ${d.params.response.status} ${d.params.response.url}`);
};
const send = (method, params = {}) => new Promise((r) => { const id = ++n; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (e) => (await send("Runtime.evaluate", { expression: e, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable");
const go = async (path, wait = 2200) => { current = path; await send("Page.navigate", { url: root + path }); await sleep(wait); };

// 1. Fresh browser straight to the dashboard.
await go("admin", 3500);
const gate = await ev(`document.body.innerText`);
console.log("gate shows demo PINs:", /Demo PINs/.test(gate));
const seeded = await ev(`JSON.stringify(Object.fromEntries(Object.keys(localStorage).sort().map(k => { try { const v = JSON.parse(localStorage[k]); return [k, Array.isArray(v) ? v.length : typeof v]; } catch { return [k, localStorage[k].slice(0, 24)]; } })))`);
console.log("seeded without clicks:", seeded);

// 2. Sign in by typing the owner PIN like a visitor would.
await ev(`(() => { const i = document.querySelector('input[aria-label=PIN]'); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(i, '1234'); i.dispatchEvent(new Event('input', { bubbles: true })); i.form.requestSubmit(); })()`);
await sleep(2000);
console.log("after PIN:", await ev(`document.querySelector('h1')?.textContent`));

// 3. Does the data add up?
const check = await ev(`(() => {
  const g = (k) => JSON.parse(localStorage['axis.' + k + '.v1'] || '[]');
  const rolls = g('rolls'), log = g('filmlog'), inv = g('invoices'), pays = g('payments'), appts = g('appointments'), leads = g('leads');
  const settings = JSON.parse(localStorage['axis.settings.v1'] || '{}');
  const days = settings.regionDays || { quad: [1, 3, 5], phx: [2, 4], other: [1, 2, 3, 4, 5] };
  const out = [];
  for (const r of rolls) { const left = r.lengthFt * 12 - log.filter(u => u.rollId === r.id).reduce((a, u) => a + u.inches, 0); if (left < 0) out.push('roll ' + r.code + ' negative ' + left); }
  for (const i of inv.filter(i => i.status === 'paid')) { const total = i.lines.reduce((a, l) => a + l.rate * l.qty, 0); const paid = pays.filter(p => p.leadId === i.leadId).reduce((a, p) => a + (p.kind === 'refund' ? -p.amount : p.amount), 0); if (Math.abs(total - paid) > 0.01) out.push('invoice ' + i.number + ' total ' + total + ' paid ' + paid); }
  for (const a of appts.filter(a => a.id.startsWith('AP-SMPA'))) { const l = leads.find(l => l.id === a.leadId); const wd = new Date(a.date + 'T12:00').getDay(); if (l && !days[l.region].includes(wd)) out.push('off-route ' + a.id + ' ' + l.region + ' ' + a.date); }
  const by = (f) => leads.reduce((m, l) => (m[f(l)] = (m[f(l)] || 0) + 1, m), {});
  const rollLeft = rolls.map(r => r.code + ':' + Math.round((r.lengthFt * 12 - log.filter(u => u.rollId === r.id).reduce((a, u) => a + u.inches, 0)) / 12) + 'ft').join(' ');
  return JSON.stringify({ problems: out, jobs: leads.length, byRegion: by(l => l.region), byCity: by(l => l.city), byStatus: by(l => l.status), rollLeft }, null, 1);
})()`);
console.log(check);

// 4. Every section, desktop then phone.
const routes = ["admin", "admin/jobs", "admin/calendar", "admin/calendar?view=week", "admin/contacts", "admin/proposals", "admin/invoices", "admin/inventory", "admin/inventory/rolls", "admin/inventory/forecast", "admin/inventory/remnants", "admin/messages", "admin/reviews", "admin/analytics", "admin/tasks", "admin/documents", "admin/settings", "reviews"];
for (const width of [1280, 390]) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 500 });
  for (const r of routes) {
    await go(r);
    const i = JSON.parse(await ev(`JSON.stringify({ text: document.body.innerText.length, overflow: document.documentElement.scrollWidth > innerWidth + 1 })`));
    if (i.text < 40) problems.push(`${width} ${r}: blank`);
    if (i.overflow) problems.push(`${width} ${r}: horizontal overflow`);
  }
}
// A Valley job page and the reviews page content.
await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
await go("admin/jobs/AX-SMPA28"); console.log("Layla job:", await ev(`document.querySelector('h1')?.textContent`));
await go("reviews"); console.log("reviews page mentions Sedona gallery:", await ev(`/Art Gallery/.test(document.body.innerText)`));
console.log(problems.length ? "PROBLEMS:\n" + [...new Set(problems)].join("\n") : "NO PROBLEMS");
chrome.kill(); process.exit(0);
