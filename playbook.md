# The playbook: how Axis was built, step by step

Use this as the course spine. Each step lists what to do, why, and what "done" looks like.

## 1. Start small and real

- Build the one core job first (stock deducted per job). Open it in the browser the same day.
- **Done:** it works end to end for one user doing one thing.

## 2. Raise the bar with research

- Find the market leader and read its **public** help center, feature pages and tutorial videos.
- Have research agents split the sources (e.g. inventory docs / core product / tips / videos). Each writes notes, and screenshots go into a **gitignored** folder.
- Merge the notes into a parity checklist: area → competitor capability → our plan → status. See `examples/docs/tintwiz-parity.md`.
- **Done:** a checklist you can tick off, plus a short "where we can beat them" list.

## 3. Set one goal

- Use `/goal` with a finish line and the non-negotiables: parity, the centerpiece feature, the brand, the design system and tokens.
- **Done:** the goal reads like acceptance criteria.

## 4. Lay the foundation before parallel work

The lead session does this itself. Parallel agents need a shared base, or they invent conflicting ones.

- **Brand tokens in two layers** (`examples/tokens.css`):
  - brand primitives (`--axis-red: 230 0 0`);
  - semantic names the UI uses (`--c-bg`, `--c-surface`, `--c-fg`, `--c-accent`, `--c-success`…);
  - Tailwind maps each one with `rgb(var(--c-x) / <alpha-value>)`;
  - dark is the default, light is an override.
- **Component library**: one file with Button, Card, Field/Input, Tabs, Badge, Kpi, Sheet/Drawer, EmptyState and so on, plus a living style-guide page (`/admin/design`).
- **A lint that enforces the tokens** (`examples/tokenize.cjs --check`). It fails on raw palette classes or hex colors in UI code. This keeps five builders on-brand.
- **The domain model**: every type in one file.
- **Storage behind one adapter**: a generic `collection<T>()` over localStorage. Swapping in a server later is one change.
- **Shared libraries**: formatting, sessions/roles, notifications, messaging, links.
- **The app shell**: nav, routes, sign-in.
- **Done:** it builds, the lint passes, and every feature area has an empty page to fill.

## 5. Build in parallel with clear briefs

- Use one agent per area, with explicit **file ownership** and an interface written before they start (stubs with final signatures). See `agent-briefs.md` #5–11.
- Each brief says:
  - the goal;
  - the decisions already made (don't re-litigate);
  - the files it owns and the files it must not touch;
  - how to verify (type-check, lint, build, browser test at 1280px and 390px);
  - "don't commit";
  - what to report back.
- The lead integrates: it resolves seams, removes stubs, and runs a full browser sweep.
- **Done:** every route has no console errors, no blank pages and no horizontal overflow, on desktop and phone.

## 6. Test like a user, in a real browser

- Use headless Chrome scripts (`examples/qa-scripts/`):
  1. load demo data;
  2. visit every route at two widths;
  3. click through the key flows;
  4. collect exceptions and console errors;
  5. take screenshots, then look at them.
- Check the data adds up (e.g. rolls never go negative, paid invoices balance).
- **Done:** a clean report, plus screenshots reviewed.

## 7. Ship it

- **Deploy:** GitHub Pages via an Actions workflow (`examples/pages.yml`). The build uses the repo base path (`--base=/repo/`) and copies `index.html` to `404.html` so deep links work. Vercel is the alternative.
- **Demo mode:** a separate build mode seeds sample data on a browser's first visit and shows demo PINs. Regular builds stay clean.
- **Verify on the live URL, not just locally.**
- **Done:** a link you can send, which works on a phone, with data in it.

## 8. Integrate existing code and open source

- Point Claude at the internal repo and let it read and reuse what's good. Have it check open-source options **for real**: does the service allow browser calls (CORS)? Does it respond? What are its usage rules?
- Prefer free and no-key defaults with offline fallbacks. Keep paid or keyed options optional.
- Write a contract file first, then build the engine and the UI in parallel.
- **Done:** it works with zero setup, degrades gracefully, and is tested on live.

## 9. Be honest about limits

- Write down what needs a server or accounts: shared data across devices, customer replies, automatic texts, card payments, accounting sync.
- These need the owner's accounts and decisions, so Claude can't finish them alone.
- Track them in the parity checklist as "device-only", "partial" or "skip".

## Habits throughout

- Commit at each working checkpoint. Push only when you mean to release.
- Keep competitor material private, use clearly fake demo data, and keep secrets out of prompts.
- Keep the docs current: README, design-system rules, parity status.
