# The prompts that built Axis, and versions for the Spark replacement

Below are the owner's actual prompts, in order, with typos kept. Each has a note on what it did and why it worked, then a template the student can adapt for the Spark replacement. There were only ten. The leverage came from clear outcomes, real material and pushing back.

---

### 1. Start from the real problem

> We are going to build an app for this company that is for keeping track of tint stock. just by implementing either the measurements of the job you did or the car you tinted so you know how much is left on your tint rolls

**What happened:** Claude built a working stock tracker. Each job deducts film from a roll: by measurements, or by vehicle type with preset cut sizes.
**Lesson:** describe the job to be done from the user's side ("so you know how much is left"), not a feature list.
**LAB version:** `We're building an app for The LAB that <does the core job> so that <who> can <outcome>. Start with just that.`

### 2. Look at it

> pull it up in browser for me

**What happened:** Claude started the dev server and gave a local URL.
**Lesson:** look at the app early and often. Claude can open and test it itself.
**LAB version:** same words.

### 3. Push back and raise the bar

> I can't help but feel like this is incredibly basic. Are there already apps out there that tint companies use that we can draw inspiration from? Anything in github

**What happened:** Claude surveyed the market and open-source projects and identified Tint Wiz as the leader.
**Lesson:** saying "this feels basic" is a skill. Ask what the best tools in the industry do.
**LAB version:** `This feels basic. Besides Spark, what do youth gyms use? Any open-source projects on GitHub we can learn from?`

### 4. Research the target in depth

> can you find screenshots, documentation and everything we would need to create parity with tint wiz?

**What happened:** four research agents read Tint Wiz's public help center (137 articles), feature pages and 59 tutorial videos. They wrote a feature-by-feature parity checklist with about 550 screenshots, kept in a gitignored folder. See `agent-briefs.md` #1–4 and `examples/docs/tintwiz-parity.md`.
**Lesson:** a written checklist turns "make it like X" into testable work. Use public sources only, and keep competitor images private.
**LAB version:** `Find screenshots, documentation and everything we'd need for parity with Spark Membership. Public sources only. Write a feature checklist and keep screenshots in a gitignored folder.`

### 5. Set the goal

> /goal build out our tint app with full parity for tint wiz and make sure we have an inventory management feature and the whole thing is using our brandkit for axis and uses a design system and tokens

**What happened:** this was the main build.
1. Claude wrote the foundation: two-layer brand tokens, a component library, a lint check against off-token colors, a domain model, storage, roles and the admin shell.
2. It launched five parallel builders: inventory with the cut optimizer; jobs/proposals/documents; invoices/payments; calendar/messaging; CRM/dashboard/analytics/team.
3. It integrated their work, then tested about 40 pages at desktop and phone width.

**Lesson:** one goal states the finish line and the non-negotiables (the brand, the design system, the centerpiece feature). The goal is read literally, so phrase it as what you'll accept. "Full parity" later flagged items that need a server.
**LAB version:** `/goal build out our Spark replacement with full parity for Spark Membership, make sure parent and child accounts and <centerpiece feature> are excellent, and the whole thing uses The LAB brand kit through a design system and tokens`

### 6. Share it

> Can we get this stood up on a GitHub page or vercel so I can share it

**What happened:** Claude found an existing GitHub Pages workflow, committed, pushed and verified the live site.
**Lesson:** shipping is part of the work. A push to the deploy branch is public, so it's a deliberate step.
**LAB version:** same words.

### 7. Make the demo real

> load this with dummy data for the areas that axis services and make sure it's visible in the github page

**What happened:**
- Claude checked the real service areas on the company website.
- It generated six months of realistic, clearly fake jobs across those towns: route days, rolls, invoices and reviews that all add up.
- It made the live demo seed itself on first visit and show the demo PINs.

**Lesson:** demos sell. Local, realistic sample data makes an app feel real. Make "visible on the live site" part of the ask.
**LAB version:** `Load this with dummy data that looks like The LAB (<classes/families/memberships>), clearly marked as sample, and make sure it shows up on the live site.`

### 8. Bring in existing code and open source

> C:\Users\mare_\Documents\Code\extra-mile-apps
> We have route planning tech in here, and I believe there are route planning tech on github that is open source. We need to get that integrated into this so the admin knows where to go and on what days or can use the tech to push routes to team members or have it help plan all jobs across all team members

**What happened:**
- Claude read the internal repo's planner and reused its stop ordering, Google Maps leg splitting and Arizona town data.
- It checked which free services work from a browser (OSRM, Nominatim and Photon did; the Census geocoder and the public VROOM server didn't).
- It wrote a shared contract, then ran two builders: the engine and the UI.

**Lesson:**
- Give a path to existing code.
- Describe outcomes for each user (the admin, the team members).
- Let Claude evaluate open-source options and say what it found.

**LAB version:** `<path> has <existing tech>. There's also open-source <thing> on GitHub. Integrate it so <user> can <outcome> and <other user> can <outcome>.`

### 9. Set the standard

> Yes, we want the most optimal and opensource and free version that just works.

**What happened:** no keys or sign-ups by default. It uses free services with offline fallbacks, plus an exact-best stop order for routes of up to 10 stops.
**Lesson:** a short constraint changes the design. Say what you value: free, open source, no setup, optimal.

### 10. Define "done" as tested on live

> push to live once it's done and then test it in browser on live, not localhost

**What happened:**
1. Claude pushed and waited for the deploy.
2. It drove the real flows on the live URL in a fresh browser: sign in, optimize, apply, plan the week, open a route link at phone size.
3. It checked network calls and took screenshots.

**Lesson:** say how you'll judge it. "On live, not localhost" catches deploy-only bugs such as base paths and blocked requests.
**LAB version:** same words.

### Bonus: housekeeping prompts

- "Do you have all the prompts we used in this entire agent / session?" Claude pulled them from the session transcript.
- "Can you throw those and everything else we would need to have in context in order to get a class going…" That produced this pack.
