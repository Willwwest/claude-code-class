# Axis reference: what the finished app looks like

Use this as concrete examples for the student. The source is the `axis-quote` repo; it's public, and the live demo is at https://willwwest.github.io/axis-quote/ with demo PIN 1234.

## Stack

React 18 + TypeScript + Vite + Tailwind 3, with framer-motion, lucide-react icons, react-router 6, qrcode (roll labels) and Leaflet (maps). There's no backend: data lives in the browser behind one storage adapter.

## Two halves

- **Customer side:** an instant quote with a car/home preview, legality check and booking. It also has link pages for proposals (`/p/:id`), invoices (`/i/:id`), documents to sign (`/s/:id`), appointments (`/a/:id`), reviews and warranty certificates.
- **Crew dashboard (`/admin`):** dashboard, jobs pipeline, calendar, routes, contacts, proposals, invoices, inventory (rolls, QR labels, weigh-to-measure, remnants, shortage forecast, cut optimizer), notes and tasks, messages outbox, documents, reviews, analytics (46 reports), settings, and a design system page.

## Structure

- `src/styles/tokens.css`: brand primitives → semantic tokens.
- `src/components/ui.tsx`: the component library.
- `scripts/tokenize.cjs --check`: the off-token color lint.
- `src/lib/types.ts`: the domain model.
- `src/lib/store.ts`: every collection, plus the single storage adapter, which is the swap point for a server.
- `src/lib/*`: money, messaging and outbox, sessions and roles, notifications, links, film, the cut optimizer, `routing/`.
- `src/admin/<section>/`: one folder per dashboard section. `src/public/` holds the customer link pages.
- `src/lib/samples.ts`: demo data, generated relative to today with fixed IDs.

## Decisions worth teaching

- **Customer links work without a server:** each link carries a snapshot of its record in the URL hash.
- **Texts and emails use the phone's own apps:** they open them pre-filled and log what was sent. Nothing sends automatically without a server.
- **Roles and PINs:** owner, admin, installer and technician, with "View as" for the owner.
- **Demo mode:** the Pages build seeds sample data on first visit; normal builds don't.
- **Routing:**
  - **Road times:** the OSRM public server.
  - **Address lookup:** OpenStreetMap Nominatim or Photon.
  - **Optimizer:** built in, with the exact best stop order for routes of up to 10 stops.
  - **VROOM:** optional, through an OpenRouteService key.
  - **No connection:** town centers from Census data, plus a straight-line drive estimate.
  - **Crew route links:** they carry the route in the link, so they open on any phone.

## Known limits

These are the "Device-only" and "Partial" rows in `examples/docs/tintwiz-parity.md`:

- **Shared data and real logins:** need a server.
- **Customer replies on their own phones:** come back by text.
- **Automatic texts and emails:** need Twilio/SendGrid.
- **Exact card payments:** need Stripe with a server.
- **QuickBooks:** CSV export only, no live sync.
- **App stores:** it's a mobile web app, not a store app.

## Pitfalls we hit (and how they were solved)

- **Missing Node on Windows Git Bash:** Node wasn't on the PATH. Prefix commands with `export PATH="/c/Program Files/nodejs:$PATH"`.
- **Mangled base paths:** Git Bash turns `--base=/axis-quote/` into a Windows path. Set `MSYS_NO_PATHCONV=1`.
- **Stale styles:** a long-running dev server served old CSS, so buttons lost their color. Restarting it fixed this; the production build was fine.
- **GitHub API rate limit:** checking deploys through the anonymous API hit 60 requests an hour. Poll the live site for the new bundle name instead.
- **Third-party services in the browser:** test that each one allows browser requests (CORS) before designing around it. The Census geocoder doesn't.
- **Stray test browsers:** headless Chrome processes left over from earlier test runs can reuse the same debugging port and the old browser data. Give each test its own port and close only your own test browsers.
- **Literal goals:** `/goal` wording is taken literally. "Full parity" kept flagging items that need a server.
