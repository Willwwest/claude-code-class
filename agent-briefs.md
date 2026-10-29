# Agent briefs from the Axis build

The exact briefs the lead session gave its helper agents, in order. They are examples of how to delegate: goal, decisions already made, file ownership, how to verify, and what to report back.

## 1. Tint Wiz inventory research (general-purpose)

_2026-10-28T01:49_

```text
You are researching the public documentation of Tint Wiz (a SaaS CRM for window-tint shops) so we can build feature parity in our own app. Your slice: **film inventory and the film cut optimizer** — this is the most important slice, be exhaustive and precise.

Sources to cover (all public):
- Help collection "Inventory Management": https://help.tintwiz.com/en/collections/2198065-inventory-management (7 articles: 3783326 introduction, 3786731 inventory-overview, 3790325 adding-your-film-rolls, 3790354 film-type-overview, 3790420 film-roll-overview, 4169817 tools-we-recommend, 4778781 brother-ql-820nwb-label-printer-setup)
- https://help.tintwiz.com/en/articles/7130989-how-to-assign-film-rolls-to-your-projects-in-tint-wiz
- Marketing pages https://tintwiz.com/inventory and https://tintwiz.com/cut-optimizer
- Any other help articles about rolls, film types, labels, QR codes, scales/weight, check-in/check-out, cut optimizer, film usage, measurements. Find them via the other collections' index pages (https://help.tintwiz.com/en/collections/3815128-video-guides-tutorials, https://help.tintwiz.com/en/collections/1393512-tips-tricks, https://help.tintwiz.com/en/collections/1175761-getting-started) — only take the inventory/cut/measurement-related ones; other agents cover the rest.

How to fetch: `curl -sL <url>` via Bash gives raw HTML (Intercom help center; article body is in the HTML, also often in a __NEXT_DATA__ JSON blob). Extract the text yourself rather than relying only on WebFetch summaries, because we need exact field names, button labels, options, units and formulas. Article lists: grep `href="https://help.tintwiz.com/en/articles/[^"]+"`. Screenshots are at downloads.intercomcdn.com with signed, expiring URLs (decode `&amp;` to `&`) — DOWNLOAD every screenshot to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\img\inventory\` with a descriptive filename prefixed by the article id (e.g. `3790325-add-roll-form.png`). Look at the important ones with the Read tool to describe what the UI shows (fields, columns, layout). Note YouTube/Vimeo/Loom video links and titles; if a YouTube video has a description or public transcript available cheaply, note key points, but don't spend long on video.

Write your findings to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\inventory.md`:
- Per article: title, URL, a faithful detailed summary (every field, setting, option, unit, workflow step, button label), list of downloaded screenshot filenames with a one-line description of each.
- Then a section "Feature inventory" — a flat checklist of every distinct inventory/cut-optimizer capability you found, each with the source URL.
- Then "Data model as inferred": entities (film type, roll, check-in/out, label…) and their fields.
- Note anything ambiguous or not documented publicly.

Do not log in to app.tintwiz.com or sign up for anything. Don't modify any files outside docs/reference/tintwiz/. Your final message should be a concise summary (≤300 words) of the most important findings plus the file path and screenshot count.
```

## 2. Tint Wiz core product research (general-purpose)

_2026-10-28T01:49_

```text
You are researching the public documentation of Tint Wiz (a SaaS CRM for window-tint shops, $150/mo) so we can build feature parity in our own app. Your slice: **the core product outside inventory** — getting started, setup, proposals, scheduling, projects, invoices, payments, reviews, tasks, documents, analytics, lead capture, integrations.

Sources (all public):
- Help collections: "What is Tint Wiz?" https://help.tintwiz.com/en/collections/1175775-what-is-tint-wiz (1), "Getting Started" https://help.tintwiz.com/en/collections/1175761-getting-started (25), "TintWizPay" https://help.tintwiz.com/en/collections/18884603-tintwizpay (3), "Troubleshooting" https://help.tintwiz.com/en/collections/2743186-troubleshooting (6).
- Marketing pages: https://tintwiz.com/ (incl. #pricing and FAQ), /lead-capture, /proposals, /deposits, /scheduling, /window-tint-reminders, /project-management, /invoices, /reviews, /tasks, /documents, /support.
- Skip inventory / film rolls / cut optimizer topics — another agent covers those.

How to fetch: `curl -sL <url>` via Bash gives raw HTML (help center is Intercom; article body is in the HTML and often in a __NEXT_DATA__ JSON blob). Extract text yourself rather than relying only on WebFetch summaries, because we need exact field names, settings, options, workflow steps and button labels. Article lists: grep `href="https://help.tintwiz.com/en/articles/[^"]+"`. Help screenshots are at downloads.intercomcdn.com with signed expiring URLs (decode `&amp;` to `&`) — DOWNLOAD them to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\img\core\` with descriptive filenames prefixed by article id. Marketing-page screenshots (tintwiz.com/wp-content/uploads/...) too, prefixed `site-<page>-`. Skip logos/icons/placeholder SVGs. Look at key screenshots with the Read tool to describe UI (fields, columns, layout). Note video links/titles.

Write findings to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\core.md`:
- Per article/page: title, URL, detailed faithful summary (every field, setting, option, workflow step, notification, automation), screenshot filenames with one-line descriptions.
- Section "Feature inventory": flat checklist of every distinct capability, grouped by area (Leads, Proposals, Deposits/Payments, Scheduling & Reminders, Projects, Invoices, Reviews, Tasks, Documents, Analytics, Users/Roles, Integrations, Mobile, Settings), each with source URL.
- Section "Pricing & plan details".
- Note gaps / things not publicly documented.

Do not log in to app.tintwiz.com or sign up. Don't modify files outside docs/reference/tintwiz/. Final message: concise summary (≤300 words) of key findings, file path, screenshot count.
```

## 3. Tint Wiz tips & tricks research (general-purpose)

_2026-10-28T01:49_

```text
You are researching the public documentation of Tint Wiz (a SaaS CRM for window-tint shops) so we can build feature parity in our own app. Your slice: the help collection **"Tips & Tricks"** (35 articles): https://help.tintwiz.com/en/collections/1393512-tips-tricks . These articles tend to reveal detailed settings and lesser-known features.

Skip articles that are purely about film inventory, film rolls, labels or the cut optimizer (another agent covers those) — just list their titles+URLs under "Skipped (inventory)".

How to fetch: `curl -sL <url>` via Bash gives raw HTML (Intercom help center; article body is in the HTML and often in a __NEXT_DATA__ JSON blob). Extract text yourself rather than relying only on WebFetch summaries, because we need exact field names, settings, options, workflow steps and button labels. Article list: grep `href="https://help.tintwiz.com/en/articles/[^"]+"` on the collection page (check for sub-sections/pagination). Screenshots are at downloads.intercomcdn.com with signed expiring URLs (decode `&amp;` to `&`) — DOWNLOAD them to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\img\tips\` with descriptive filenames prefixed by article id. Look at key ones with the Read tool to describe the UI. Note video links/titles.

Write findings to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\tips.md`:
- Per article: title, URL, detailed faithful summary (every setting, option, workflow step, automation, template variable), screenshot filenames with one-line descriptions.
- Section "Feature inventory": flat checklist of every distinct capability found, grouped by product area, each with source URL.
- Note gaps/ambiguities.

Do not log in to app.tintwiz.com or sign up. Don't modify files outside docs/reference/tintwiz/. Final message: concise summary (≤300 words), file path, screenshot count.
```

## 4. Tint Wiz video guides research (general-purpose)

_2026-10-28T01:49_

```text
You are researching the public documentation of Tint Wiz (a SaaS CRM for window-tint shops) so we can build feature parity in our own app. Your slice: the help collection **"Video Guides & Tutorials"** (60 articles): https://help.tintwiz.com/en/collections/3815128-video-guides-tutorials , plus the Tint Wiz YouTube channel if you can find it (search the web / the articles' embedded links).

Skip articles purely about film inventory, film rolls, labels or the cut optimizer (another agent covers those) — just list title+URL under "Skipped (inventory)".

How to fetch: `curl -sL <url>` via Bash gives raw HTML (Intercom help center; article body in the HTML and often in a __NEXT_DATA__ JSON blob). Most of these articles embed a video (YouTube/Vimeo/Loom/Wistia) plus some text. For each: title, URL, video URL, any text/steps in the article. For YouTube videos, fetch the watch page (`curl -sL https://www.youtube.com/watch?v=ID`) and extract title, description, duration, and the thumbnail (https://i.ytimg.com/vi/ID/maxresdefault.jpg or hqdefault.jpg). Download thumbnails and any in-article screenshots (downloads.intercomcdn.com, signed URLs; decode `&amp;` to `&`) to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\img\videos\`, filenames prefixed with article id. Video thumbnails often show the actual app UI — look at the most informative ones with the Read tool and describe what UI they show. Don't try to download videos themselves. If transcripts are cheaply obtainable, note key points but don't spend long.

Write findings to `C:\Users\mare_\Documents\Code\axis\docs\reference\tintwiz\videos.md`:
- Per article: title, URL, video link + duration, summary of described functionality/steps, image filenames with descriptions.
- Section "Feature inventory": flat checklist of every distinct capability these videos reveal, grouped by product area, each with source URL.
- The YouTube channel URL and any notable videos not in the help center.

Do not log in to app.tintwiz.com or sign up. Don't modify files outside docs/reference/tintwiz/. Final message: concise summary (≤300 words), file path, image count.
```

## 5. Build inventory and cut optimizer (general-purpose)

_2026-10-28T02:51_

```text
You are one of five engineers building out "Axis", a React + TypeScript + Vite + Tailwind app for Axis Glass Tinting (a mobile window-tint shop in Arizona), at C:\Users\mare_\Documents\Code\axis. The goal is feature parity with Tint Wiz (a tint-shop SaaS), on the Axis brand design system. Your area: **FILM INVENTORY + CUT OPTIMIZER + flat-glass MEASUREMENTS**. It's the most important area to the owner, so make it excellent.

## Shared context (read before coding)
- `docs/design-system.md`: token + component rules. **Mandatory.** Only semantic token classes (bg-surface, text-fg/50, border-fg/10, accent, success, warn, info, danger…). No raw palette classes and no hex. Build UI from `src/components/ui.tsx` (Button, IconButton, Card, CardHeader, PageHeader, Badge, Dot, Kpi, Progress, Table/Td, Tabs, Sheet, Drawer, Field, Input, Select, Textarea, MoneyInput, SearchInput, Toggle, Chip, Segmented, EmptyState, KeyValue, Avatar). Phone-first: everything must work at 390px wide.
- Domain types: `src/lib/types.ts` (FilmType, FilmRoll incl. code/status/cost/weights/reservedLeadId, FilmUse, Remnant, Lead with rooms/Measurement, Note…). Storage: `src/lib/store.ts`. Use the collections `rolls`, `filmLog`, `filmTypes`, `remnants`, `notes`, `leads`, with `.all() .get() .save() .saveMany() .update() .remove() .use() .useOne()`. Also `useSettings()`, `patchSettings()`, `nextNumber("roll")` for auto roll codes starting 10001, and `newId()`.
- Settings: `src/data/config.ts`. Use `filmWastePct`, `inventory.largeLabels`, `inventory.forecastDays`, `CUTS`, `ROLL_WIDTHS`, `BODY_TYPES`, `ZONES`.
- Helpers:
  - `src/lib/format.ts`: money, sqft, shortDate, relative, downloadFile, toCsv.
  - `src/lib/session.ts`: `useSession()` gives `.user` and `.can("inventory.manage")`; `personName(id)`.
  - `src/lib/notify.ts`: `notify("stock", text, href)`.
  - `src/lib/project.ts`: jobTitle, statusMeta.
- Existing inventory code to migrate and improve: `src/lib/film.ts` (pullInches, vehiclePieces, inchesLeft, feet, rollHealth, sedansLeft, jobNeeds, needInches, suggestRoll) and `src/components/FilmStock.tsx` (old Stock tab plus the JobFilm wrap-up deduction).
  - **Keep the existing exports of lib/film.ts working with their current signatures.** Other areas use inchesLeft, rollHealth and feet.
  - Delete `src/components/FilmStock.tsx` once everything is ported. `src/pages/JobComplete.tsx` imports JobFilm from it; another engineer is deleting JobComplete.tsx. If it still exists when you delete FilmStock, change that one import to your FilmCard, or leave a tiny re-export. Don't otherwise edit JobComplete.tsx.
- Tint Wiz research: read `docs/reference/tintwiz/inventory.md` fully (feature checklist, data model, cut optimizer). Screenshots are in `docs/reference/tintwiz/img/inventory/`; view key ones with Read. Also see `docs/tintwiz-parity.md`.
- Working in parallel: four other engineers edit other files at the same time.
  - **Only create or edit the files you own (listed below).** Do NOT edit shared files: ui.tsx, store.ts, types.ts, config.ts, session/format/messages/notify/links/project/money/outbox libs, AdminApp.tsx, nav.ts, SettingsPage.tsx, main.tsx.
  - If you truly need a new optional field on a type, you may make ONE small additive Edit to `src/lib/types.ts` (never change existing fields), and report it.
  - Put any new helpers in your own lib files.
- Commands: Bash needs `export PATH="/c/Program Files/nodejs:$PATH"` first.
  - Type-check with `npx tsc -b 2>&1 | grep -E "inventory|film|cutopt|FilmCard|Measurements|InventorySettings"`. Errors in other people's in-progress files are not yours.
  - Token lint: `node scripts/tokenize.cjs --check`.
  - To check visually, run your own dev server: `npx vite --port 5181 --strictPort` (background). Drive headless Chrome over CDP with remote-debugging-port 9341; see the example script at `C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\shot.mjs`. The admin PIN is 1234: set `sessionStorage['axis.session']='owner'` to skip it. Seed test data via localStorage keys `axis.rolls.v1` etc.
  - Kill only processes you started. Don't commit to git.
- Code style: match the existing code (concise, sparse comments that explain why, small focused components, Tailwind classes inline). No new npm dependencies except you MAY install `qrcode` and `@types/qrcode` for labels.

## Your files
- `src/admin/inventory/InventoryPage.tsx` (default export; mounted at `/admin/inventory/*`, so use nested `<Routes>`), plus any other files under `src/admin/inventory/`
- `src/lib/film.ts` (extend), `src/lib/cutopt.ts` (new)
- `src/components/project/FilmCard.tsx` (`export function FilmCard({ lead }: { lead: Lead })`, shown on every job page)
- `src/components/project/MeasurementsCard.tsx` (`export function MeasurementsCard({ lead }: { lead: Lead })`, shown on every job page; return null for vehicle jobs)
- `src/admin/settings/InventorySettings.tsx` (`export function InventorySettings()`)
- delete `src/components/FilmStock.tsx`

## Build (Tint Wiz parity, and beyond where cheap)
1. **Inventory home**, with tabs or sub-routes: Summary · Rolls · Film types · Remnants · Forecast · Labels · Scan.
   - **Summary:** per film type, show installs count (jobs whose film log used rolls of that type), retail $/sqft, roll count, stock sqft and ft (excluding lost rolls). Sortable, searchable, printable. KPIs: rolls, film on hand, running low, used in the last 30 days, and stock value (cost of what's left).
   - **Rolls:** cards or list with search and filters (status In/Out/Lost, film type, low).
   - **Add/edit roll:** film type (from the catalog, or a free name), auto inventory code (nextNumber("roll"); editable, unique, 4–10 chars), width chips, length, low alert, lot #, roll cost, core weight and full weight (lb), notes.
2. **Roll detail** `/admin/inventory/rolls/:id`:
   - Header: code, W × current length, status pill, Check-out/Check-in.
   - Check-in/out asks for the "length of film on roll" plus notes, and creates an adjust entry when the length changes.
   - **Weigh**: enter the current weight; remaining = full × (w − core)/(fullWt − core). Log it as source "weigh".
   - Progress bar with sqft and %. Summary: width, full length, current length, sqft full/left, cost, $/sqft.
   - Update history (every FilmUse, with personName(byId) and the job link). Undo.
   - Notes on the roll: notes collection with rollId; simple add and list.
   - Mark lost / found, delete, print label, reserve for a job.
3. **Log a cut** (port and improve the old sheet): by car / measured / feet / weigh, linked to a job optionally. Record byId = session user. If a cut takes a roll under its low threshold, `notify("stock", …)`.
4. **Film type catalog** CRUD: brand, series, name, vlt, category, $/sqft, description. Seed on first open if empty: Axis house Carbon 5/15/20/35/50 and Ceramic 5/15/20/35/50/70, Edge Ultra View 5/15/25/35 and Edge Pristine 30/40/50/70/80 (from HOME_FILMS in config). Descriptions empty; no invented specs.
5. **QR labels:** printable sheet (window.print with print CSS) at 1.1"×3.5" (default) or 2.4"×3.9" (largeLabels). Show business name, code, film, width × length, sqft left, and a QR that encodes `${origin}${BASE_URL}admin/inventory/r/<code>`. Add a route `r/:code` that opens the roll. Batch-print selected rolls.
6. **Scan:** camera QR scanning via the BarcodeDetector API when available (Android Chrome), with a manual code-entry fallback. It opens the roll, with a quick "Log a cut" button.
7. **Remnants:** offcuts with film/roll, W×H, location; mark used on a job. A "fits" helper shows remnants big enough for a given piece.
8. **Forecast:** jobs with status approved/booked and appointments in the next forecastDays days. Use `appointments` from store for dates, and jobNeeds for the film needed per film and shade. Compare with stock and show shortages ("short 20 ft of Ceramic 20%") with an order hint.
9. **Cut optimizer** (`lib/cutopt.ts` plus a component):
   - Input: pieces (w, h, qty, label) from a job's approved rooms.
   - Settings: roll widths (multi-select from ROLL_WIDTHS, or rolls in stock), trim margin in inches (default 0.5 total, 0.25/edge), rotate on/off, use multiple widths vs single best, max length per sheet.
   - Algorithm: deterministic shelf/guillotine packing (best-fit decreasing height is fine). Try each width and pick the least waste, or mix widths when allowed.
   - Output: cut sheets per film type with roll width, used length, film sqft vs pieces sqft, waste sqft and %. Draw a to-scale SVG with labelled pieces like `LR_36×60_1` (room initials, dims, index), token colors only.
   - Then "Take this off roll ___", which deducts the used length as a FilmUse with source "cutsheet" and the leadId.
   - Unit-test the packer mentally on edge cases: a piece wider than every roll needs splicing or a warning; zero pieces.
10. **MeasurementsCard** (home/business jobs):
    - Rooms editor: add rooms (comma-separated names creates several), room film type, approve/unapprove.
    - Items: type, direction, qty, W, H (inches, decimals ok), price optional, notes.
    - Totals: sqft and linear ft (perimeter 2(W+H)×qty/12), with round-up to the nearest sqft as an option.
    - Printable work sheet, plus "Cut optimizer" opening a Sheet with the optimizer for this job.
    - Save to `lead.rooms` via `leads.update`.
11. **FilmCard** (every job):
    - Port JobFilm: needs per film and shade with suggested rolls and feet estimates, and one-tap deduction.
    - For flat glass, estimates come from the rooms (area-based or the cut optimizer).
    - Show logged usage with roll codes, film cost for the job ($ from roll cost ÷ roll length × inches used), and reserve/unreserve a roll.
12. **InventorySettings:** waste %, large labels, forecast window days, and a link to the catalog.

Verify it builds (`npx tsc -b` clean for your files; `npx vite build` once others are stable is nice-to-have) and passes the token lint. Take at least one desktop and one 390px screenshot of the inventory home and a roll page to check the layout. Final message (≤300 words): what you built, the files, any shared-file edit, and known gaps.
```

## 6. Build jobs, proposals, documents (general-purpose)

_2026-10-28T02:52_

```text
You are one of five engineers building out "Axis", a React + TypeScript + Vite + Tailwind app for Axis Glass Tinting (a mobile window-tint shop in Arizona), at C:\Users\mare_\Documents\Code\axis. The goal is feature parity with Tint Wiz (a tint-shop SaaS), on the Axis brand design system. Your area: **JOBS (pipeline + job hub page) + PROPOSALS + DOCUMENTS/E-SIGN**, including their customer-facing pages.

## Shared context (read before coding)
- `docs/design-system.md`: token + component rules. **Mandatory.** Only semantic token classes (bg-surface, text-fg/50, border-fg/10, accent, success, warn, info, danger…). No raw palette classes and no hex. Build UI from `src/components/ui.tsx` (Button, IconButton, Card, CardHeader, PageHeader, Badge, Dot, Kpi, Progress, Table/Td, Tabs, Sheet, Drawer, Field, Input, Select, Textarea, MoneyInput, SearchInput, Toggle, Chip, Segmented, EmptyState, KeyValue, Avatar, Logo, Stars). Phone-first: everything must work at 390px wide.
- Domain types: `src/lib/types.ts` (Lead = the job, with status, contactId, title, tags, assigneeId, services, price, attachments, rooms, completion, vehicle incl. vin; Proposal, ProposalOption, ProposalTemplate, DocTemplate, SignedDoc, Contact…).
- Storage: `src/lib/store.ts`. Use the collections `leads`, `contacts`, `proposals`, `proposalTemplates`, `docTemplates`, `signedDocs`, `payments`, `staff`, with `.all() .get() .save() .update() .remove() .use() .useOne()`. Also `useSettings()`, `nextNumber("proposal")` and `newId()`.
- Settings: `src/data/config.ts` (`proposals.*` settings, `templates.proposalSend/docSign/review`, BUSINESS, pricing helpers in `src/lib/pricing.ts`, warranty links in `src/lib/warranty.ts`).
- Helpers:
  - `src/lib/project.ts`: STATUSES (9-stage pipeline + lost, with tones), statusMeta, setStatus, jobTitle, jobPrice, jobValueLabel, jobKindLabel, ensureContact, newJob, OPEN_STATUSES.
  - `src/lib/messages.ts`: fill, template, leadContext, reach, sendSms, sendEmail, markSent.
  - `src/lib/links.ts`: `publicUrl("p"|"s", id, snapshot)` and `decodeSnap`. Customer pages are on other phones: they read the local record by id first, else the snapshot in the URL hash.
  - `src/lib/notify.ts`: `notify(kind, text, href)`.
  - `src/lib/session.ts`: useSession, can(), personName.
  - `src/lib/format.ts`.
  - `src/lib/money.ts` (paidOnLead, balanceOnLead).
- Job page cards owned by OTHER engineers. Import and place them; don't edit them. Each is `({ lead }: { lead: Lead })`:
  - `AppointmentsCard` (components/project/AppointmentsCard)
  - `MeasurementsCard` and `FilmCard` (inventory)
  - `InvoiceCard` (money)
  - `NotesCard` (CRM)
- Existing code to absorb:
  - `src/pages/JobComplete.tsx`: the wrap-up checklist, photo capture/compress, warranty cert, and the review + referral text. Port it into the job page (e.g. a "Wrap-up" section or a `/admin/jobs/:id/wrapup` sub-route), then **delete src/pages/JobComplete.tsx**. Use `<FilmCard lead/>` where it used JobFilm.
  - The old pipeline/lead-drawer UI was deleted; recreate it better. Git history has it: `git show HEAD:src/pages/Admin.tsx`.
- Tint Wiz research: read `docs/reference/tintwiz/core.md` (Projects, Proposals, Documents sections and per-article notes) and `videos.md` (project page layout, 9 statuses, proposal videos). Skim `tips.md` for proposal/canned proposal/solution scope/approval settings. Screenshots are in `docs/reference/tintwiz/img/*`; view key ones with Read. Also see `docs/tintwiz-parity.md`.
- Working in parallel: four other engineers edit other files at the same time.
  - **Only create or edit the files you own (listed below).** Do NOT edit shared files: ui.tsx, store.ts, types.ts, config.ts, the libs listed above, AdminApp.tsx, nav.ts, SettingsPage.tsx, main.tsx.
  - If you truly need a new optional field on a type, you may make ONE small additive Edit to `src/lib/types.ts` and report it.
- Commands: Bash needs `export PATH="/c/Program Files/nodejs:$PATH"` first.
  - Type-check with `npx tsc -b 2>&1 | grep -E "jobs/|proposals/|documents/|public/(Proposal|Sign)|ProposalCard|DocumentsCard|ProposalSettings|markdown"`. Others' in-progress files may error; ignore those.
  - Token lint: `node scripts/tokenize.cjs --check`.
  - Visual check: your own dev server `npx vite --port 5182 --strictPort` in the background, plus headless Chrome over CDP on remote-debugging-port 9342. See the example at `C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\shot.mjs`. Skip the PIN with `sessionStorage['axis.session']='owner'`.
  - Kill only processes you started. Don't commit to git.
- Code style: match the existing code (concise, sparse comments that explain why, small focused components). No new npm dependencies.

## Your files
- `src/admin/jobs/JobsPage.tsx`, `src/admin/jobs/JobPage.tsx` (mounted at `/admin/jobs/:id/*`), plus anything else under `src/admin/jobs/`
- `src/admin/proposals/ProposalsPage.tsx`, plus anything under `src/admin/proposals/`
- `src/admin/documents/DocumentsPage.tsx`, plus anything under `src/admin/documents/`
- `src/public/ProposalPage.tsx` (`/p/:id`), `src/public/SignPage.tsx` (`/s/:id`)
- `src/components/project/ProposalCard.tsx`, `src/components/project/DocumentsCard.tsx`
- `src/admin/settings/ProposalSettings.tsx` (`export function ProposalSettings()`)
- `src/lib/markdown.tsx` (new: a tiny safe renderer for paragraphs, # headings, - bullets, **bold**, _italic_; React elements, no dangerouslySetInnerHTML)
- delete `src/pages/JobComplete.tsx`

## Build
1. **JobsPage** (pipeline):
   - Kanban over STATUSES (hide Lost behind a toggle) and a list/table view toggle.
   - Search (name, phone, vehicle, job id) and filters: kind (auto/residential/commercial), assignee, tag.
   - Cards: name, title, value, next appointment (read the `appointments` collection), and badges for no garage / overdue.
   - Change status from the card menu.
   - **New job:** search an existing contact or create one (name, phone, email, city), pick the kind, then `newJob()` and navigate to the job.
   - Technicians (no "jobs.all" perm) see only jobs assigned to them or with their appointments.
2. **JobPage** (the hub; Tint Wiz's project page is the reference):
   - **Header:** title (editable), id, created time, status dropdown (setStatus), assignee select (staff + owner), tags editor, kind label, quick call/text buttons.
   - **Contact card:** call `ensureContact(lead)` on open, link to `/admin/contacts/:id`, show phone, email and address.
   - **Job details:**
     - Vehicle: year/make/model, VIN, body, paint, zones, film, shades, removal. All editable, and the price recalculates from the instant quote (`buildQuote`) unless a price is set.
     - Flat glass: address, goals, film/shade.
   - **Quote and services:** instant-quote lines, services (ServiceLine add/edit/remove), and an agreed price override.
   - **Cards, stacked on mobile and in a two-column grid on desktop:** AppointmentsCard, MeasurementsCard, FilmCard, ProposalCard, InvoiceCard, DocumentsCard, NotesCard.
   - **Attachments:** upload photos and files (compress images like JobComplete does), tags, remove.
   - **Wrap-up:** checklist, before/after photos, "Mark installed & create warranty" (status installed, completion record, warranty cert via lib/warranty), and the send-warranty / review / referral message via lib/messages (`sendSms`/`sendEmail` with kind "review").
   - **Options:** duplicate job, mark lost with reason, delete (confirm).
3. **Proposals:**
   - **ProposalCard:**
     - Create a proposal: from a canned template (proposalTemplates), or auto-built from the instant quote as Good/Better/Best (e.g. Carbon vs Ceramic vs Ceramic + windshield for vehicles; film options for flat glass from rooms).
     - Options builder: title, description (markdown), lines, discount %, film type (the `filmTypes` collection if non-empty), room scope for flat glass, recommended flag.
     - Add-ons with select-together, deposit % (`settings.proposals.depositOptions`), expiry (default expiryDays), notes.
     - Send by text/email with the proposalSend template and `publicUrl("p", id, snapshot)`, or copy the link. Status becomes "sent" and the job status "proposal".
     - Show status (draft/sent/viewed/approved/declined/expired; expired is computed from expiresAt), viewed and approved times, and the chosen option(s).
     - "Mark approved" for phone approvals. Approval sets `lead.price`, status "approved", and notify("proposal").
     - Duplicate/revise, delete.
   - **ProposalsPage:**
     - List with status tabs, value, age, and follow-up flags: not viewed after 24h, viewed but not approved after 48h.
     - KPIs: sent, approval rate, average value, open value.
     - Canned proposal templates CRUD ("save current proposal as template" too).
   - **Public `/p/:id`:**
     - Branded page (Logo, BUSINESS details) with the options as Choice cards (multi-select if selectTogether), add-ons, a live total, and deposit due.
     - A notes / preferred install date textarea, and a typed full name if `settings.proposals.requireName`. Show fine print.
     - On open, set viewedAt when the record exists locally.
     - **Approve:** local → update the proposal and job, notify, and show the approvalMessage with `:approved_at` (`fill()`), plus a Pay-deposit button if `settings.invoices.payUrl` is set.
     - Not local (another phone) → show a summary and a "Send my approval" button that texts BUSINESS.phone with the code, choices and name.
     - Handle expired and already-approved states. Must look great on a phone. Customer pages are always dark (don't set data-theme).
4. **Documents:**
   - **DocumentsPage:** templates CRUD (title, markdown body with live preview, require full name, show customer details). Seed on first open if empty:
     - "Dark tint waiver" (Arizona: front side windows must allow ≥33% light per A.R.S. 28-959.01; the customer acknowledges choosing darker)
     - "Aftercare instructions"
     - "Residential install agreement"
     - Also list sent/signed docs.
   - **DocumentsCard:** send a template to the customer (the body can be edited per send; the snapshot is stored in a signedDocs record with status sent) by text/email with the docSign template and `publicUrl("s", id, snapshot)`. Show status. For signed docs, view the signature, name and time, and print/PDF via window.print.
   - **Public `/s/:id`:** render the document, first/last name, a canvas signature pad (pointer events, clear button, works with touch), then "Confirm & Submit".
     - Local → save signature, signedName and signedAt, notify("document").
     - Not local → let them download/print a signed copy, and explain how to send it to the shop.
5. **ProposalSettings:** expiry days, default deposit %, deposit options list, follow-ups toggle, require name, approval message (with a :approved_at hint), fine print, and a link to the templates.

Verify: `npx tsc -b` clean for your files, and the token lint passes. Screenshot the jobs pipeline, a job page and the public proposal page at desktop and 390px. Final message (≤300 words): what you built, the files, any shared-file edits, and known gaps.
```

## 7. Build invoices and payments (general-purpose)

_2026-10-28T02:52_

```text
You are one of five engineers building out "Axis", a React + TypeScript + Vite + Tailwind app for Axis Glass Tinting (a mobile window-tint shop in Arizona), at C:\Users\mare_\Documents\Code\axis. The goal is feature parity with Tint Wiz (a tint-shop SaaS), on the Axis brand design system. Your area: **MONEY — invoices, deposits, payments, tax, the customer invoice page, QuickBooks export.**

## Shared context (read before coding)
- `docs/design-system.md`: token + component rules. **Mandatory.** Only semantic token classes (bg-surface, text-fg/50, border-fg/10, accent, success, warn, info, danger…). No raw palette classes and no hex. Build UI from `src/components/ui.tsx` (Button, IconButton, Card, CardHeader, PageHeader, Badge, Dot, Kpi, Table/Td, Tabs, Sheet, Drawer, Field, Input, Select, Textarea, MoneyInput, SearchInput, Toggle, Chip, Segmented, EmptyState, KeyValue, Logo). Phone-first: everything must work at 390px wide.
- Domain types: `src/lib/types.ts` (Invoice, InvoiceLine incl. rollCodes, InvoiceStatus, PaymentTerms, Payment kind deposit/payment/refund with tip, Lead with price/services/quote, Proposal with depositPct/chosenOptionIds/chosenAddonIds).
- Storage: `src/lib/store.ts`. Collections `invoices`, `payments`, `leads`, `contacts`, `proposals`, `filmLog`, `rolls`; `useSettings()`, `patchSettings()`, `nextNumber("invoice")` (starts 1001), `newId()`.
- Settings: `src/data/config.ts` → `invoices` (terms, notes, taxRates[], defaultTaxRateId, payUrl, showRollCodes), `templates.invoiceSend/paymentThanks`, `reviews.autoRequest`, BUSINESS, `businessAddress`.
- Helpers:
  - `src/lib/money.ts`: **you own this file.** It already exports invoiceTotals, paymentValue, paidOnLead, invoiceForLead and balanceOnLead, which other areas use. Keep those signatures; extend freely.
  - `src/lib/project.ts`: setStatus, jobTitle, jobPrice, ensureContact.
  - `src/lib/messages.ts`: fill, template, leadContext, reach, sendSms, sendEmail.
  - `src/lib/links.ts`: `publicUrl("i", id, snapshot)`, decodeSnap. The customer page opens on another phone, so it reads the local record by id first, else the hash snapshot.
  - `src/lib/notify.ts`: `notify("payment", …)`.
  - `src/lib/session.ts`: useSession, can("payments"), personName.
  - `src/lib/format.ts`: money(n, cents), toCsv, downloadFile, addDays, today.
- Tint Wiz research: read `docs/reference/tintwiz/core.md`, especially the Invoices, Deposits/Payments, TintWizPay and QuickBooks sections and articles. Read the invoice, tax and payment parts of `docs/reference/tintwiz/tips.md` (Business Configuration Guide, invoice editor, deposits & manual payments). Screenshots are in `docs/reference/tintwiz/img/core` and `img/tips`; view key ones. Also see `docs/tintwiz-parity.md`.
- Working in parallel: four other engineers edit other files at the same time.
  - **Only create or edit the files you own (listed below).** Do NOT edit shared files: ui.tsx, store.ts, types.ts, config.ts, other libs, AdminApp.tsx, nav.ts, SettingsPage.tsx, main.tsx.
  - If you truly need a new optional field on a type, you may make ONE small additive Edit to `src/lib/types.ts` and report it.
  - The job page (another engineer) renders your `<InvoiceCard lead />`.
- Commands: Bash needs `export PATH="/c/Program Files/nodejs:$PATH"` first.
  - Type-check with `npx tsc -b 2>&1 | grep -E "invoices/|public/Invoice|InvoiceCard|InvoiceSettings|lib/money"`. Others' in-progress files may error; ignore those.
  - Token lint: `node scripts/tokenize.cjs --check`.
  - Visual check: your own dev server `npx vite --port 5183 --strictPort` in the background, plus headless Chrome over CDP on remote-debugging-port 9343. See the example at `C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\shot.mjs`. Skip the PIN with `sessionStorage['axis.session']='owner'`. Seed data via localStorage (`axis.leads.v1`, `axis.invoices.v1`, …).
  - Kill only processes you started. Don't commit to git.
- Code style: match the existing code (concise, sparse why-comments, small components). No new npm dependencies.

## Your files
- `src/lib/money.ts`
- `src/admin/invoices/InvoicesPage.tsx` (`/admin/invoices`), `src/admin/invoices/InvoiceEditor.tsx` (`/admin/invoices/:id`, default export), plus anything else under `src/admin/invoices/`
- `src/public/InvoicePage.tsx` (`/i/:id`)
- `src/components/project/InvoiceCard.tsx` (`export function InvoiceCard({ lead }: { lead: Lead })`)
- `src/admin/settings/InvoiceSettings.tsx` (`export function InvoiceSettings()`)

## Build
1. **money.ts:**
   - `createInvoiceFromLead(lead)`:
     - Lines come from the approved proposal's chosen options and add-ons (minus discount), else the job's quote lines plus services, else a single line at jobPrice.
     - If `showRollCodes`, attach the roll codes from filmLog entries with this leadId (roll.code).
     - Tax rate = default (none if the contact is taxExempt). Terms default to the setting; dueAt is computed from terms (receipt=issue date, net7/15/21/30).
     - Number via nextNumber("invoice"). Status "draft".
   - Status recomputation from payments (partial/paid), plus the past-due check.
   - On fully paid: set the job status to "paid" via setStatus and notify("payment").
   - Deposit helpers: deposit due from the approved proposal's depositPct × price, and deposit paid.
   - Totals for analytics: `collectedBetween(fromIso, toIso)`, `invoicedBetween()`.
2. **InvoiceCard** (job page):
   - Price summary: job price, deposit due/paid, invoice total, paid, balance.
   - Buttons: Request deposit (texts the customer the pay link and amount, using payUrl if set), Record deposit, Create invoice / Open invoice, Record payment (amount with a one-tap full balance, method, date, tip, notes), Refund, and Send invoice.
   - A payment list with delete (confirm).
3. **InvoicesPage:**
   - Tabs: All, Draft, Sent/Viewed, Partial, Paid, Past due, Void.
   - Table: number, customer, job, issued, due, total, balance, status badge. Search.
   - KPIs: awaiting payment, past due, collected this month, deposits held.
   - **Export:**
     - QuickBooks Online–compatible invoice CSV (InvoiceNo, Customer, InvoiceDate, DueDate, Terms, Item(Product/Service), ItemDescription, ItemQuantity, ItemRate, ItemAmount, Taxable, TaxRate), one row per line.
     - Payments CSV (Date, Customer, InvoiceNo, Amount, Method, Reference/Notes).
     - Add a short help note on importing into QuickBooks.
4. **InvoiceEditor** `/admin/invoices/:id`:
   - Header: number, status, job link.
   - Editable lines (description, rate, qty, taxable, roll codes shown), Add line, a tax rate select, terms, issue/due dates, notes.
   - Live totals: subtotal, taxable, tax, total, paid, balance.
   - Actions: Send by text/email (invoiceSend template + public link; status sent), Copy link, Print/PDF (a clean branded print layout via print CSS; hide the app chrome with the `no-print` class that exists globally), Record payment, Void, Delete (draft only).
   - Show payment history.
5. **Public `/i/:id`:**
   - Branded invoice: Logo, BUSINESS name, phone, email, businessAddress, customer, lines with roll codes in small text, tax, total, paid, balance due.
   - Status (Paid stamp).
   - A tip picker (none/10/15/20/custom) that changes the shown "amount to pay".
   - A "Pay now" button that opens `settings.invoices.payUrl` (note "enter $X at checkout" since Payment Links can't take a dynamic amount). If payUrl isn't set, show "Call/Text to pay" options.
   - Print button.
   - Mark viewedAt when local.
   - Always dark (don't set data-theme). Great on a phone.
6. **InvoiceSettings:** default terms, default notes, tax rates CRUD (name, %) with default selection and an exemption note, pay URL (with help on creating a Stripe Payment Link), show roll codes toggle, and the next invoice number (editable via patchSettings on `sequences.invoice`).

Verify: `npx tsc -b` clean for your files, and the token lint passes. Screenshot the invoices list, the editor and the public invoice at desktop and 390px. Final message (≤300 words): what you built, the files, any shared-file edits, and known gaps.
```

## 8. Build calendar and messaging (general-purpose)

_2026-10-28T02:53_

```text
You are one of five engineers building out "Axis", a React + TypeScript + Vite + Tailwind app for Axis Glass Tinting (a mobile window-tint shop in Arizona), at C:\Users\mare_\Documents\Code\axis. The goal is feature parity with Tint Wiz (a tint-shop SaaS), on the Axis brand design system. Your area: **CALENDAR/SCHEDULING + CUSTOMER MESSAGING (reminders, follow-ups, outbox, templates) + IN-APP NOTIFICATIONS bell**, plus hooking the customer quote app into it.

## Shared context (read before coding)
- `docs/design-system.md`: token + component rules. **Mandatory.** Only semantic token classes (bg-surface, text-fg/50, border-fg/10, accent, success, warn, info, danger…). No raw palette classes and no hex. Build UI from `src/components/ui.tsx` (Button, IconButton, Card, CardHeader, PageHeader, Badge, Dot, Kpi, Table/Td, Tabs, Sheet, Drawer, Field, Input, Select, Textarea, SearchInput, Toggle, Chip, Segmented, EmptyState, KeyValue, Avatar, Logo). Phone-first: everything must work at 390px wide.
- Domain types: `src/lib/types.ts` (Appointment with type/status/check-in-out/recurrence/remindersSent/history, Lead, Contact with prefs, MessageLog, Notification, Staff, Proposal for follow-ups).
- Storage: `src/lib/store.ts`. Collections `appointments`, `leads`, `contacts`, `messages`, `notifications`, `staff`, `proposals`; `useSettings()`, `patchSettings()`, `newId()`.
- Settings: `src/data/config.ts` → `calendar` (startHour, endHour, slotMin, defaultDurationMin, weekStart), `reminders` toggles, `templates` + TEMPLATE_LABELS + TEMPLATE_VARS, `slots` (customer arrival windows), `regionDays`, `blockedDates`, `REGIONS`, `proposals.followups`, `reviews` (sites, autoRequest), `googleReviewUrl`, `notify`.
- Helpers:
  - `src/lib/messages.ts`: fill(template, ctx), template(key), leadContext, reach(lead) (phone/email + opt-outs), sendSms, sendEmail, markSent, sentFor.
  - `src/lib/notify.ts`: notify, visibleTo, markAllRead.
  - `src/lib/session.ts`: useSession (user, can("calendar.all")), personName, OWNER_ID, ownerUser().
  - `src/lib/links.ts`: `publicUrl("a", id, snapshot)`, decodeSnap, reviewsUrl.
  - `src/lib/project.ts`: setStatus, jobTitle, ensureContact, statusMeta.
  - `src/lib/format.ts`: time12, to24, addMinutes, at, dayDate, shortDate, relative, addDays, today.
  - `src/lib/schedule.ts`: isoDate, parseIso, prettyDate, upcomingDays, downloadIcs.
- `src/lib/outbox.ts`: **you own it.** It's a stub whose exported types and signatures (OutboxKind, OutboxItem, dueMessages(), useOutbox()) are already imported by the dashboard engineer. Keep them, implement them, and you may add kinds.
- Tint Wiz research: read `docs/reference/tintwiz/core.md` (Scheduling & Reminders, notifications, appointment articles). Read `docs/reference/tintwiz/tips.md`: the Business Configuration Guide calendar + customer appointment messages + public appointment page sections, calendar event fields/colours, and the notifications matrix. Read the calendar/appointment parts of `videos.md`. Screenshots are in `docs/reference/tintwiz/img/*`. Also see `docs/tintwiz-parity.md`.
- Working in parallel: four other engineers edit other files at the same time.
  - **Only create or edit the files you own (listed below).** Do NOT edit shared files: ui.tsx, store.ts, types.ts, config.ts, other libs, AdminApp.tsx, nav.ts, SettingsPage.tsx, main.tsx.
  - If you truly need a new optional field on a type, you may make ONE small additive Edit to `src/lib/types.ts` and report it.
  - The job page renders your `<AppointmentsCard lead />`; the shell header renders your `<NotificationBell />`.
- Commands: Bash needs `export PATH="/c/Program Files/nodejs:$PATH"` first.
  - Type-check with `npx tsc -b 2>&1 | grep -E "calendar/|messages/|public/Appointment|AppointmentsCard|NotificationBell|CalendarSettings|MessageSettings|outbox|schedule|Quote"`. Others' in-progress files may error; ignore those.
  - Token lint: `node scripts/tokenize.cjs --check`.
  - Visual check: your own dev server `npx vite --port 5184 --strictPort` in the background, plus headless Chrome over CDP on remote-debugging-port 9344. See the example at `C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\shot.mjs`. Skip the PIN with `sessionStorage['axis.session']='owner'`.
  - Kill only processes you started. Don't commit to git.
- Code style: match the existing code (concise, sparse why-comments, small components). No new npm dependencies. No Google Maps key exists: use "Open in Maps" links (`https://maps.google.com/?q=` / `maps://`) instead of embedded maps.

## Your files
- `src/admin/calendar/CalendarPage.tsx` (`/admin/calendar`), plus anything under `src/admin/calendar/` (e.g. an AppointmentSheet editor you also use from the card)
- `src/admin/messages/MessagesPage.tsx` (`/admin/messages`), plus anything under `src/admin/messages/`
- `src/public/AppointmentPage.tsx` (`/a/:id`)
- `src/components/project/AppointmentsCard.tsx`, `src/components/NotificationBell.tsx`
- `src/admin/settings/CalendarSettings.tsx`, `src/admin/settings/MessageSettings.tsx`
- `src/lib/outbox.ts`, `src/lib/schedule.ts` (you may extend; keep existing exports working)
- `src/pages/Quote.tsx`: only the submit integration described below. Keep the change minimal.

## Build
1. **CalendarPage:**
   - Views: Day (team columns, one per active staff + owner + Unassigned), Week (7 columns, events positioned by time between startHour and endHour), and an Agenda list (best default on phones).
   - Today / prev / next / date picker. Filters: job kind (auto / flat / mobile), appointment type (consult/install/misc), team members.
   - Click an empty slot or "New appointment" to open the editor.
   - Events are colored by type with tokens: consult=info, install=accent, misc=neutral; cancelled are dimmed or hidden by a toggle.
   - Show blocked dates (settings.blockedDates) and let the owner block/unblock a day.
   - Technicians without `calendar.all` see only their own.
   - Each address gets an "Open in Maps" link; the day view gets a "Route" link through all of the day's stops in order (Google Maps dir URL).
2. **Appointment editor** (Sheet):
   - Job: search leads, or create a contact + job inline via ensureContact/newJob from lib/project.
   - Fields: title, type, date, start (slot-sized steps), duration, assignee, notes for the assignee, "Notify customer" (queues/sends confirm).
   - Recurrence: repeat every N weeks × count, creating the series with a shared seriesId; edit/cancel "this one" or "whole series".
   - Statuses: check-in (status checked_in + time), check-out (done + time), no-show, cancel (with notify customer → cancel template).
   - History log entries for every change, with personName.
   - Creating an install appointment moves the job to "booked" if earlier in the pipeline; a consult appointment moves a "new" job to "consult".
3. **AppointmentsCard** (job page): the job's appointments (upcoming first) with status, quick check-in/out, and edit. "New appointment" is prefilled for this job. "On my way" and "Vehicle ready" texts use the templates via sendSms.
4. **Public `/a/:id`:**
   - Branded page: what, when, where (clickable address), and an "Add to calendar" .ics (adapt downloadIcs or write a new helper in schedule.ts).
   - Self-cancel with confirmation. Local → status cancelled, history, notify("appointment"). Not local → text BUSINESS.phone.
   - Show the cancelled state. Always dark (don't set data-theme).
5. **Outbox** (lib/outbox.ts):
   - Compute the due messages, respecting settings toggles and contact prefs (`reach(lead)`):
     - Confirmation for new notifyCustomer appointments not yet confirmed.
     - 24h reminder (start within the next 24h, after "now − 1h").
     - 1h reminder (start within 90 min).
     - Cancellation notice.
     - Proposal follow-ups, if settings.proposals.followups: status sent and not viewed after 24h → proposalFollow24; viewed and not approved after 48h → proposalFollow48. The proposal link is `publicUrl("p", p.id, …)`; mirror the snapshot shape the proposals engineer uses, or just link `/p/:id` with no hash.
     - Review requests: per reviews.autoRequest, after installed or paid; none if already sent (sentFor kind "review"). Link = the first review site URL, else googleReviewUrl, else reviewsUrl().
     - Invoice past-due nudges.
   - "Sent" means `messages` has a matching kind+lead entry or appointment.remindersSent is stamped. "Skipped" ids are stored in localStorage key `axis.outbox.skipped`.
   - `useOutbox()` must re-render on store changes (use useSyncExternalStore with `subscribe` from store, and a cached snapshot).
6. **MessagesPage:**
   - Tabs: Outbox (due items with Send text / Send email / Mark sent / Skip; one-tap send opens the phone's Messages app via sendSms, which logs it), Sent (the messages log with search, channel, kind, job link), Compose (pick a contact/job and a template, edit, send).
   - The count of due items goes in the page header.
7. **NotificationBell:** bell icon with an unread count (`visibleTo(notifications, user.id)` and not readBy the user), a dropdown panel (fits a phone screen) with the list (icon per kind, text, relative time, click → navigate to href and mark read), "Mark all read", and a link to Settings → Notifications.
8. **CalendarSettings:**
   - Week start, day start/end hours, slot size, default duration, and customer arrival windows (settings.slots, used by the quote app).
   - Route days per region (regionDays; weekday toggles, same as the old settings UI in `git show HEAD:src/pages/Admin.tsx`) and blocked dates.
   - Reminder toggles (confirm/24h/1h/cancel).
9. **MessageSettings:** edit every template (TEMPLATE_LABELS), with clickable variable chips that insert at the cursor, a live preview filled with sample data, and reset-to-default per template (DEFAULT_SETTINGS.templates).
10. **Customer app hookup:**
    - In `src/pages/Quote.tsx`'s submit, after the lead is saved: call `ensureContact(lead)`. If `q.appointment` is set, create an Appointment: type install for vehicle jobs, consult for home/business; start from `to24(slot)`; duration from calendar.defaultDurationMin; notifyCustomer true; status scheduled; title like "Install · 2021 Accord". Then `notify("lead", "New quote from …", "/admin/jobs/<id>")`.
    - Make `upcomingDays()` in schedule.ts also treat non-cancelled `appointments` as taken slots (match date + start against to24(slot)), keeping its signature.

Verify: `npx tsc -b` clean for your files, and the token lint passes. Screenshot the calendar week and agenda views, the messages outbox and the public appointment page at desktop and 390px. Final message (≤300 words): what you built, the files, any shared-file edits, and known gaps.
```

## 9. Build CRM, dashboard, analytics, team (general-purpose)

_2026-10-28T03:08_

```text
You are one of five engineers building out "Axis", a React + TypeScript + Vite + Tailwind app for Axis Glass Tinting (a mobile window-tint shop in Arizona), at C:\Users\mare_\Documents\Code\axis. The goal is feature parity with Tint Wiz (a tint-shop SaaS), on the Axis brand design system. Your area: **DASHBOARD, CONTACTS (CRM), NOTES & TASKS, REVIEWS, ANALYTICS, STAFF/ROLES, BUSINESS/NOTIFICATION/DATA SETTINGS, and the demo SAMPLE DATA.**

## Shared context (read before coding)
- `docs/design-system.md`: token + component rules. **Mandatory.** Only semantic token classes (bg-surface, text-fg/50, border-fg/10, accent, success, warn, info, danger…). No raw palette classes and no hex. Build UI from `src/components/ui.tsx` (Button, IconButton, Card, CardHeader, PageHeader, Badge, Dot, Kpi (has delta), Progress, Table/Td, Tabs, Sheet, Drawer, Field, Input, Select, Textarea, MoneyInput, SearchInput, Toggle, Chip, Segmented, EmptyState, KeyValue, Avatar, Logo, Stars). Phone-first: everything must work at 390px wide.
- **Before building any chart, KPI row or the analytics page, load the `dataviz` skill (Skill tool) and follow it.** Chart colors must come from tokens: use `rgb(var(--c-accent))` etc. in SVG.
- Domain types: `src/lib/types.ts`, all of it. You generate sample data for every collection, so types must match exactly.
- Storage: `src/lib/store.ts`. Collections: `leads, contacts, staff, appointments, proposals, proposalTemplates, invoices, payments, notes, docTemplates, signedDocs, reviews, messages, notifications, filmTypes, rolls, filmLog, remnants`. Also `useSettings, patchSettings, saveSettings, getSettings, nextNumber, newId, resetAll`. `DEFAULT_SETTINGS` is in `src/data/config.ts`.
- Helpers:
  - `src/lib/project.ts`: STATUSES, statusMeta, OPEN_STATUSES, WON_STATUSES, jobPrice, jobTitle, jobKindLabel, ensureContact, jobsFor, newJob.
  - `src/lib/session.ts`: ROLES, PERMS, useSession, personName, OWNER_ID, setViewAs.
  - `src/lib/notify.ts`: notify, visibleTo.
  - `src/lib/messages.ts`: fill, template, sendSms, reach.
  - `src/lib/links.ts`: reviewsUrl.
  - `src/lib/format.ts`: money, relative, shortDate, dayDate, today, addDays, toCsv, downloadFile, digits.
  - `src/lib/film.ts`: inchesLeft, rollHealth, feet.
  - `src/lib/money.ts`: invoiceTotals, paidOnLead, paymentValue, balanceOnLead.
  - `src/lib/outbox.ts`: dueMessages, useOutbox. It's a stub now; another engineer is implementing it. Just import and use it.
- Tint Wiz research:
  - `docs/reference/tintwiz/core.md`: Leads, Contacts, Reviews, Tasks/Notes, Analytics, Users/Roles, Notifications, Settings, Multi-location.
  - `docs/reference/tintwiz/tips.md`: the **Analytics Segments Guide (~45 segments by exact name)**, contacts CSV export, tags with conversion %, review settings and embed widget, notifications matrix, lead form fields.
  - `docs/reference/tintwiz/videos.md`: the dashboard layout (4 KPI cards with This Week / Last Week / Month To Date; New Leads / Your Tasks / Pending Tasks / Unread Replies tabs), staff roles with "View As", contacts import/merge.
  - Screenshots are in `docs/reference/tintwiz/img/*`; view the key ones.
  - Also see `docs/tintwiz-parity.md`.
- Working in parallel: four other engineers edit other files at the same time.
  - **Only create or edit the files you own (listed below).** Do NOT edit shared files: ui.tsx, store.ts, types.ts, config.ts, other libs, AdminApp.tsx, nav.ts, SettingsPage.tsx, main.tsx.
  - If you truly need a new optional field on a type, you may make ONE small additive Edit to `src/lib/types.ts` and report it.
  - The job page renders your `<NotesCard lead />`.
- Commands: Bash needs `export PATH="/c/Program Files/nodejs:$PATH"` first.
  - Type-check with `npx tsc -b 2>&1 | grep -E "DashboardPage|contacts/|tasks/|reviews/|public/Reviews|analytics/|NotesCard|StaffSettings|NotificationSettings|BusinessSettings|DataSettings|samples"`. Others' in-progress files may error; ignore those.
  - Token lint: `node scripts/tokenize.cjs --check`.
  - Visual check: your own dev server `npx vite --port 5185 --strictPort` in the background, plus headless Chrome over CDP on remote-debugging-port 9345. See the example at `C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\shot.mjs`. Skip the PIN with `sessionStorage['axis.session']='owner'`.
  - Kill only processes you started. Don't commit to git.
- Code style: match the existing code (concise, sparse why-comments, small components). No new npm dependencies: hand-rolled SVG charts.

## Your files
- `src/admin/DashboardPage.tsx`
- `src/admin/contacts/ContactsPage.tsx`, `src/admin/contacts/ContactPage.tsx` (`/admin/contacts/:id`), plus anything under `src/admin/contacts/`
- `src/admin/tasks/TasksPage.tsx`, plus anything under `src/admin/tasks/`
- `src/components/project/NotesCard.tsx` (`export function NotesCard({ lead }: { lead: Lead })`)
- `src/admin/reviews/ReviewsPage.tsx`, `src/public/ReviewsPage.tsx` (`/reviews`, `?embed=1` for the compact widget)
- `src/admin/analytics/AnalyticsPage.tsx`, plus anything under `src/admin/analytics/`
- `src/admin/settings/StaffSettings.tsx`, `NotificationSettings.tsx`, `BusinessSettings.tsx`, `DataSettings.tsx` (named exports already stubbed)
- `src/lib/samples.ts`: rewrite. It's currently old and only makes leads; keep `sampleLeads` only if you still use it.

## Build
1. **DashboardPage:**
   - Greeting with the user's name and date.
   - Four KPI cards: Leads added, Consults scheduled, Installs scheduled, Amount scheduled. Each shows This week with a delta vs last week, and Month to date. Count from leads.createdAt and from appointments by date/type (amount = jobPrice of jobs with install appointments in range).
   - Widget tabs: New leads (status new; quick open), Your tasks, Pending tasks (unassigned, with "Take"), Unread replies.
   - Today's schedule: today's appointments, compact, linking to the jobs.
   - Outbox: "N messages to send", linking to /admin/messages, from useOutbox().
   - Low-stock rolls, linking to /admin/inventory.
   - Money glance: awaiting payment, collected this month.
   - "Add contact (lead)" and "New job" buttons.
   - Respect session.can() for money and inventory widgets. Technicians are redirected to the calendar by the router.
2. **Contacts:**
   - **One-time backfill:** on mount, ensureContact for every lead without contactId.
   - **List:** search by name/phone/email/address, filter by tag, sort (recent, name, value). Columns: name, phone, city, jobs count, lifetime value (sum of paid), tags, last activity.
   - **Tags manager** with conversion % per tag: won jobs / all jobs for contacts with that tag (WON_STATUSES).
   - **CSV import:**
     - Columns: Name, Company, Mobile, Work Phone, Email, Address, City, Tags (semicolon-separated), Notes, Vehicle Year, Vehicle Make, Vehicle Model.
     - Show a preview with validation, dedupe by phone, and optionally create a vehicle job when vehicle columns are present (via newJob, then set vehicle.ymm).
     - Provide a downloadable template.
   - **CSV export.**
   - **Merge duplicates:** detect them by phone/email; pick a primary; relink jobs (`leads.update contactId`) and appointments, combine tags; delete the other.
   - **ContactPage:**
     - Editable details (name, company, phones, email, address, city, source, tags, tax-exempt).
     - Communication prefs toggles (SMS, email, reminders, proposal follow-ups).
     - Jobs list (jobsFor) with status badges and values; "New job" (newJob → navigate to /admin/jobs/:id).
     - Notes (notes with contactId) and message history (messages whose leadId belongs to the contact's jobs).
     - Call/text buttons, delete contact (confirm; keeps the jobs).
3. **Notes & tasks:**
   - **TasksPage:** tabs Your tasks, Pending (unassigned pool, "Take" assigns it to you), All open, Done, All notes.
   - Create a note: body, optional link to a job, "Create as task" with assignee (staff + owner, or unassigned) and due date.
   - Close/reopen. Replies thread with read receipts (readBy; mark read when viewed).
   - Assigning someone sends `notify("task", …, href)`.
   - **NotesCard** (job page): the same for notes with this leadId, compact.
4. **Reviews:**
   - **ReviewsPage:**
     - Stats: requests sent (messages kind "review"), reviews logged, average rating.
     - Manual review entry (name, rating, text, source site, date, job link), with Publish (public profile) and Feature (shown on proposals) toggles; edit/delete.
     - Review sites config (settings.reviews.sites: name+url) and the auto-request trigger (installed / paid / off).
     - "Send review request" to a recent job's customer (sendSms with the review template, the link = first site url).
     - The embed snippet (`<iframe src=".../reviews?embed=1">`) with copy.
   - **Public `/reviews`:** profile page with the Logo, BUSINESS facts (rating, projects, years), average of published reviews, published reviews with featured first, and "Leave a review" buttons per site (settings.reviews.sites with url). Merge in the hard-coded REVIEWS from config as published if none are logged. Embed mode: compact, transparent background, no header. Always dark.
5. **Analytics:**
   - Presets: This week, Last week, This month, Last month, This quarter, This year, Custom (max 1 year). Compare with the previous period or the same period last year.
   - Project type filter (all / automotive / residential / commercial).
   - A segment picker (up to 12 shown at once; default ~8) from a catalog of ~35+ segments computable from our data. Mirror Tint Wiz names where they apply:
     - Leads, leads by source, leads by type
     - Consults scheduled, installs scheduled, installs completed
     - Proposals sent, proposals approved, approval rate, average proposal value
     - Revenue invoiced, revenue collected, deposits collected, average ticket, outstanding balance
     - Close rate, lead→install days
     - Jobs by vehicle body type, jobs by shade, jobs by film, jobs by region, jobs by city
     - Referral leads, review requests sent, reviews received, average rating
     - Film used (ft), film cost, film cost % of revenue
     - Jobs by assignee, appointments by type, no-shows, cancellations
     - New contacts, tag conversion
   - Each segment renders as a number + % change, a small time-series chart (bars by day/week/month depending on range), or a ranked list/bar for "by X" segments.
   - Persist the chosen segments in localStorage `axis.analytics.segments`.
   - Make the charts accessible (title/aria-label, readable labels).
6. **StaffSettings:**
   - Staff CRUD: name, email, phone, role (ROLES with descriptions), PIN (4–8 digits, unique across staff and ≠ owner PIN), color (pick from a small palette of token colors — store the CSS value `rgb(var(--c-info))` etc.), active toggle.
   - An "Invite" button that texts them the dashboard URL and their PIN.
   - Explain "View as" (owner user menu) and show the role permission matrix (PERMS) as a readable table.
7. **NotificationSettings:** a matrix of event kinds (lead, proposal, payment, document, task, stock, appointment, review) × roles (owner/admin/installer/technician) with toggles → settings.notify.
8. **BusinessSettings:**
   - Owner name, owner PIN (adminPin, 4–8 digits), business address, theme (dark/light Segmented → settings.theme, applies live).
   - Google review link (googleReviewUrl), automation webhook (leadWebhookUrl, with a Zapier/Make help line).
   - Referral credit is in Pricing; just link to it.
9. **DataSettings:**
   - Export a full JSON backup (all `axis.*` localStorage keys) and import/restore from JSON (with confirm).
   - Export leads CSV.
   - "Load demo data" (samples.ts), "Reset everything" (resetAll, typed confirm).
   - A note that data lives on this device until a server is connected (see the README).
10. **samples.ts:** `export function loadDemoData()`. It creates a coherent, realistic demo across ALL collections, clearly fake ("Sample" in names or 555 phones), relative to today, so every screen has something to show:
    - 2 staff: an installer "Sample Installer" (PIN 2222) and a technician (PIN 3333).
    - ~10 contacts with tags (referral, fleet, repeat).
    - ~14 jobs across every status, mixing vehicles (different bodies, shades, VINs) and 3 flat-glass jobs with rooms + measurements; some assigned.
    - Appointments over the last 2 weeks and next 2 weeks (consults + installs, one recurring fleet series, one checked-in, one cancelled).
    - Proposals: sent / viewed / approved with options; one template.
    - Invoices (draft, sent, partial, paid, one past due) with payments and deposits.
    - Notes + tasks (assigned, pending, done, with replies).
    - 2 doc templates + 1 signed doc. 6 reviews (some featured).
    - Message log, a few notifications.
    - Film types, 6 rolls with codes from 10001, costs and weights (one low, one lost), film log entries tied to jobs, 2 remnants.
    - Use the collections' saveMany. Make sure ids cross-reference correctly.

Verify: `npx tsc -b` clean for your files, the token lint passes, and loading demo data then visiting every page doesn't crash. Screenshot the dashboard, contacts and analytics at desktop and 390px. Final message (≤300 words): what you built, the files, any shared-file edits, and known gaps.
```

## 10. Build routing engine and demo data (fork)

_2026-10-28T15:46_

```text
You are the ROUTING ENGINE builder. Implement the contract in src/lib/routing/index.ts (written just now in this conversation) so every exported function works for real. A second builder is building the UI against the same signatures in parallel, in the same working tree — do NOT change exported names/signatures/types (adding optional fields or new exports is OK). Keep index.ts as the public API; you may split internals into src/lib/routing/*.ts and re-export. Remove the "CONTRACT STUB" line from the header when done.

Files you own: src/lib/routing/**, src/lib/samples.ts, src/data/azPlaces.ts, and small additive edits to src/lib/types.ts, src/data/config.ts, src/lib/store.ts, src/lib/links.ts, src/lib/messages.ts if needed. Do NOT touch: src/admin/**, src/components/**, src/public/**, src/main.tsx, src/styles.css, package.json, docs/README (the UI builder owns those).

What to build (decisions already made — follow them):
1. Locations: cityPoint uses AZ_PLACES (case-insensitive, strip ", AZ"/zip, tolerate "Dewey Humboldt"). locateAddress: geocodes cache (store `geocodes`, keyed by normalized address) → city center. geocodeAddress: settings.routing.geocoder "nominatim" (https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&q=…) or "photon" (https://photon.komoot.io/api/?limit=1&q=…, bias lat/lon to base), "off" → null; serialize requests ≥1.1 s apart; 8 s timeout; cache hits and misses (null) in `geocodes`; append ", AZ" when the address lacks a state. Census geocoder is out: no CORS. jobPoint as documented. geocodeJobs updates lead.geo (source "geocoded") only for leads whose point is missing/"city"; never overwrite "manual".
2. Crew: owner (OWNER_ID, ownerName, accent color) + active staff with role installer/technician (admins only if profile.field true); profile fallbacks from settings.routing (base, dayStart/dayEnd, days Mon–Fri). Base geo: profile.base.geo ?? locateAddress(profile.base.address) ?? settings.routing.base.geo ?? cityPoint("Prescott").
3. Stops: appointments for the date with status scheduled/checked_in/done (skip cancelled/no_show); misc appointments only if they have a lead/contact location. window from booked start: ±30 min around the booked start for jobs whose lead.appointment slot is set or notifyCustomer is true; locked when checked_in/done. region = lead.region.
4. Travel: travelMatrix with providers osrm (`${osrmUrl}/table/v1/driving/lng,lat;…?annotations=duration,distance`, ≤100 points, 8 s timeout), ors (POST https://api.openrouteservice.org/v2/matrix/driving-car with Authorization: orsKey), estimate (haversine × detourFactor at avgMph). Any failure → estimate + remember a warning the plan surfaces. Memoize by rounded coordinates. roadPath via OSRM /route (overview=full, geometries=geojson) or ORS directions geojson; cache; null on failure.
5. Solver (built-in, deterministic, ~300 ms budget): VRP with time windows — heterogeneous crew starts/ends (return to base if returnToBase), shifts, service = durationMin + bufferMin, region restrictions, locked stops pinned to their assignee/time, keepAssignees/keepTimes/memberIds options. Regret-2 insertion construction, then local search (intra-route 2-opt/or-opt, inter-route relocate and swap) minimizing drive seconds + heavy lateness/overtime/unassigned penalties. Port extra-mile's nearest-neighbor+2-opt idea (C:\Users\mare_\Documents\Code\extra-mile-apps\crm\lib\maps.mjs) as the single-route improver. Times: start = max(arrival, window start); round starts to 5 min.
6. VROOM option: optimizer "vroom" + orsKey → POST https://api.openrouteservice.org/optimization (VROOM JSON: vehicles with start/end [lng,lat], time_window seconds, skills for regions; jobs with location, service seconds, time_windows, skills); map back to DayPlan; on any failure fall back to built-in with a warning. Without a key, use built-in and add a warning only if the setting asked for vroom.
7. currentPlan/optimizeDay/applyDayPlan as documented; applyDayPlan writes assigneeId/start + history { text: "Route planner: moved to <name> at <time>" , by: session user } and notifies assignees whose day changed (notify "appointment", forUserIds).
8. Week: unscheduledJobs = leads with status approved or booked and no upcoming (date ≥ today) non-cancelled install appointment. planWeek: candidate days in [from, from+days) where weekday ∈ settings.regionDays[lead.region] (fallback: nearest region by geo), not in blockedDates, and the member works that day and covers the region; greedy by job age, pick (day, member) with least marginal drive given that day's existing stops + already-proposed ones, respecting maxJobsPerDay installs and shift end; durations like the samples (vehicle 150, +30 windshield; flat by sq ft from rooms; else calendar.defaultDurationMin). Then compute each touched day's plan with optimizeDay logic including proposals (keepAssignees for existing). reason strings like "Wed is a Quad Cities day · 9 min from Linda Park". applyWeekPlan creates install appointments (title like existing "Install · Name", notifyCustomer true, history), sets lead.status "booked" via setStatus from lib/project (check its signature), sets lead.appointment {date, slot}.
9. Sharing: routeSnap fills stops; routeLink = `${location.origin}${import.meta.env.BASE_URL}route/${memberId}-${date}#${encodeSnap(snap)}` (lib/links encodeSnap); directionsLegs ports googleDirectionsLegs from extra-mile crm/public/lib/places.js (≤3 waypoints + destination per leg, ≤2048 chars, chain legs). sendRoute: open SMS to the member's phone (lib/messages sendSms) with "Hi <first>, your Axis route for <Wed Oct 29>: <n> stops, first at <9:00 AM>. <link>", log a MessageLog kind "route" (check how messages.ts logs/markSent), no customer prefs involved.
10. Demo data (samples.ts): give every sample lead and contact a `geo` (source "sample") = city center + deterministic jitter within ~3 km seeded by id (a home/business job's address should look spread around town). settings.routing.crew via patchSettings: owner base "Prescott, AZ" (shop); Sample Installer base Prescott Valley; Sample Technician base Chino Valley; Sample Valley Installer base Tempe with regions ["phx"], days [2,4]; Quad crew regions ["quad","other"]. Add a showcase day = the next quad route day after today: about 7 installs/consults spread over Prescott/Prescott Valley/Chino Valley/Dewey-Humboldt assigned clearly inefficiently across owner/installer/tech (criss-crossing), so optimizeDay saves real drive time. Add 3–4 approved jobs with no install yet (quad + phx + one northern) so planWeek has work. Keep existing invariants that my QA checks: rolls never negative, paid invoices fully paid, AP-SMPA* appointments on their region's route days. Ids stay fixed (SMP pattern).

Verify before you finish: `npx tsc -b`, `node scripts/tokenize.cjs --check` (PATH needs `export PATH="/c/Program Files/nodejs:$PATH"`). The dev server is already running at http://localhost:5180 with HMR — don't stop it. Use a headless Chrome CDP script like the scratchpad's run-expr.mjs (C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\, use a new debugging port like 9361, kill only your own headless Chrome) to load demo data and call currentPlan/optimizeDay(showcase day)/planWeek/routeLink/directionsLegs via `import('/src/lib/routing/index.ts')`. Check: no overlapping stops per person, windows respected or flagged late, shifts respected, optimized driveMin < current on the showcase day, deterministic across runs, OSRM failure (bad osrmUrl) falls back to estimate with a warning, planWeek proposals land on region days. Don't commit or push.

Final report (concise): what you implemented (file list), the exact demo numbers (showcase day current vs optimized drive minutes, week proposals count), any contract additions, known limits.
```

## 11. Build route planner UI and map (fork)

_2026-10-28T15:46_

```text
You are the ROUTE PLANNER UI builder. Build the screens for route planning against the contract in src/lib/routing/index.ts (written just now in this conversation). A second builder is implementing that file's bodies in parallel in the same working tree; right now the functions are stubs returning empty data. Import only from src/lib/routing/index.ts and never edit it or other lib files. Build every screen so it works with empty results, loading states (functions are async and may take seconds on the network), and real data once it lands.

Files you own: src/admin/routes/** (new), src/components/RouteMap.tsx (new), src/public/RoutePage.tsx (new), src/admin/settings/RoutingSettings.tsx (new) + its entry in src/admin/settings/SettingsPage.tsx, src/admin/nav.ts, src/admin/AdminApp.tsx (route + lazy import), src/main.tsx (public route), a "Routes" link in the calendar header (src/admin/calendar/CalendarPage.tsx) and optionally the dashboard's Today's schedule card, src/styles.css (map tile styling), package.json/package-lock.json (add leaflet + @types/leaflet), README.md + docs/tintwiz-parity.md + new docs/ROUTING.md. Do NOT touch src/lib/** or src/data/** or samples.

What to build (decisions already made — follow them):
1. Map: `npm i leaflet@1.9.4` and `npm i -D @types/leaflet`. RouteMap component (lazy-loaded chunks only; never in the customer quote bundle): OSM tiles https://tile.openstreetmap.org/{z}/{x}/{y}.png with attribution (OpenStreetMap contributors, Leaflet), and CSS that darkens tiles via filter on the tile pane in the default dark theme only (not under :root[data-theme="light"]). Props roughly: routes [{ id, color, points: LatLng[] (stops in order), path?: LatLng[] (road shape), base }], unassigned points, selectedId, onSelect, fitKey. Numbered divIcon markers in each member's color (colors are CSS strings like rgb(var(--c-info))), base marker, approximate locations (GeoPoint.source "city") drawn with a dashed ring and flagged, straight dashed lines when no road path. Wheel-zoom only after focus (like extra-mile's StreetMap, C:\Users\mare_\Documents\Code\extra-mile-apps\crm\public\lib\map.js — read it for patterns). All colors through tokens; `node scripts/tokenize.cjs --check` must pass (it scans src only; Leaflet's own CSS in node_modules is fine).
2. /admin/routes (nav "Routes", lucide `Route` icon, perm "calendar"; not in the phone tab bar). Day tab: date picker (default today; `?d=` param), chips for which regions route that day (settings.regionDays + REGIONS labels). It loads currentPlan(date), with the map plus one card per crew member: their stops with arrive/start times, drive minutes/miles between stops, totals, late/overtime badges, approximate-location warnings, and per-route actions "Text route to <first name>" (sendRoute), "Google Maps" (directionsLegs; several legs = several buttons "Leg 1 · stops 1–4"), "Copy link" (routeLink). Below that: unassigned stops with reasons. "Optimize day" opens options (keep assignees / keep booked times), runs optimizeDay and shows before vs after ("Driving 3h 10m → 1h 55m · saves 1h 15m"), a per-person diff (stops moved), Apply (applyDayPlan, toast-like confirmation) / Discard. "Find exact addresses" runs geocodeJobs for that day's stops whose point is approximate, with progress and a one-line privacy note ("Addresses are looked up with OpenStreetMap's Nominatim"). Week tab: "Plan next 7 days" lists unscheduledJobs(), runs planWeek(from), shows days × crew with proposed jobs and reasons, unplaced jobs with reasons, Apply (applyWeekPlan) then jump to day view. Show the plan's warnings (e.g. estimate fallback) in a quiet banner. People without "calendar.all" see only their own route ("My route"): no optimize/apply/week/send, but navigation buttons. Phone layout first (map on top, cards below, ~390px wide with no horizontal scroll); desktop two columns.
3. Public /route/:id page (src/public/RoutePage.tsx, lazy in main.tsx, like ProposalPage/AppointmentPage use decodeSnap from lib/links): reads the RouteSnap from the hash; header with member name + date + totals; map; stop cards (time, customer, title, address, drive from previous, notes) with Navigate (Google Maps directions to that stop; Apple Maps link on iOS), Call/Text customer, and a local "Done" checkbox kept in localStorage per link (wrap storage in try/catch); "Start route in Google Maps" leg buttons at top. Graceful "Route link is incomplete" empty state.
4. Settings → "Routing" section (RoutingSettings.tsx, follow the other settings sections' patterns, perm settings): base address (+ "Find on map" using geocodeAddress, shows resolved label/coords and source), day start/end, buffer minutes, max installs per person per day, return to base toggle; travel times provider (OSRM / OpenRouteService / straight-line estimate) + OSRM URL + ORS key; optimizer (built-in / VROOM via OpenRouteService — disabled without key); geocoder (Nominatim / Photon / off) with a privacy note; crew table from crew() + staff list: field toggle, base address, workdays, hours, regions (REGIONS). Use patchSettings/useSettings from lib/store like the other sections.
5. Calendar: a "Routes" button in the calendar header that opens /admin/routes?d=<visible date>. Dashboard: optional small "Plan routes" link on Today's schedule.
6. Docs: docs/ROUTING.md for Axis (what it does, providers, privacy, fallbacks, credits: OSRM, VROOM, OpenRouteService, Nominatim/Photon, Leaflet, OpenStreetMap, Census places via extra-mile-apps), README sections/routes table rows, docs/tintwiz-parity.md row (route planning: Tint Wiz has a map panel; Axis now Ahead).

Use the design system: components from src/components/ui.tsx (Button, Card, Tabs, Badge, Kpi, Sheet, Drawer, EmptyState, Field, Input, Select, Toggle, Segmented, Avatar...), tokens only, existing page patterns (PageHeader etc.). Read docs/design-system.md first.

Verify before you finish: `npx tsc -b`, `node scripts/tokenize.cjs --check`, `npx vite build` (no warnings about chunk size beyond what exists; leaflet must not land in the main index chunk). The dev server already runs at http://localhost:5180 with HMR — don't stop it. Use a headless Chrome CDP script like the scratchpad's demo-qa.mjs (C:\Users\mare_\AppData\Local\Temp\claude\c--Users-mare--Documents-Code-axis\70baabc8-73bd-4b5a-8f71-d4782d036efd\scratchpad\, use a new debugging port like 9371, kill only your own headless Chrome) to load demo data, open /admin/routes (day + week), /admin/settings/routing, and a /route/ link at 1280 and 390 widths: no exceptions, no console errors, no horizontal overflow; take screenshots and look at them. If the engine builder has finished (src/lib/routing/index.ts no longer contains "CONTRACT STUB"), also exercise Optimize → Apply and Plan week → Apply on demo data. Don't commit or push.

Final report (concise): files added/changed, what each screen does, screenshot paths, anything you couldn't verify because the engine was still a stub.
```

