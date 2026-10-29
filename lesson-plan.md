# Lesson plan: six sessions

Each session is about 60–90 minutes. The student types into their own Claude Code session in their project folder (`lab-spark`). Every session ends with something that runs, plus a commit.

## Session 1: Meet the tool, define the Spark replacement

- Install and sign in, then run `claude` in an empty `spark` folder. Tour it: ask a question, approve a command, read a diff.
- Complete `spark-intake.md` together and save it as `SPARK-BRIEF.md`.
- **Exercise:** prompt 1 from `prompts.md`, adapted. Build the core job only, then "pull it up in browser for me".
- **Teach:** permissions, reading what Claude did, `/init` and `CLAUDE.md`, the first commit, and a **private** GitHub repo made with the GitHub CLI (Charlie signs in with `gh auth login` themselves; Claude never handles the password).
- **Checkpoint:** a tiny working app, committed.

## Session 2: Raise the bar with research

- **Exercise:** "This feels basic, what do <industry> companies use?", then the parity research prompt (prompts 3–4).
- Read the resulting checklist together. Mark the must-haves, the nice-to-haves and where to beat the competitor.
- **Teach:** helper agents (what they are, when to use them, their cost), public sources only, gitignored reference folders.
- **Checkpoint:** `docs/<competitor>-parity.md`.

## Session 3: The brand and design system

- Gather the brand kit (logo, colors, fonts). If there is none, Claude builds it from the website: it reads colors and fonts from the page styles, downloads the logo files (SVG first) and cuts out their backgrounds into transparent navy, white and black versions. Check each logo on light and dark backgrounds.
- **Exercise:** "Set up a design system for our app: brand tokens in two layers (brand primitives → semantic names), a component library, a style-guide page, and a lint that fails if any UI color is off the tokens." Compare with `examples/tokens.css` and `examples/tokenize.cjs`.
- **Teach:** what tokens are and why semantic names matter (theme changes become one edit); dark/light themes.
- **Checkpoint:** the style-guide page renders on brand, and the lint passes.

## Session 4: The big build with `/goal`

- **Exercise:** write the `/goal` for the Spark replacement (template in prompts #5). Before coding, ask Claude for its plan: the foundation it will write first, and how it will split the work among agents. Review the plan.
- Let it run. Use the time to read `agent-briefs.md` and discuss what makes a good brief.
- **Teach:**
  - goals as acceptance criteria;
  - plan first;
  - parallel agents with file ownership;
  - sending messages mid-task;
  - reading final reports critically.
- **Checkpoint:** major areas built, the browser sweep is clean, committed.

## Session 5: Ship it

- **Exercise:** "Can we get this stood up on GitHub Pages or Vercel so I can share it", then the demo data prompt (#7).
- **Teach:**
  - the repo stays private; GitHub Pages can't publish from a private repo on a free plan, so use Cloudflare Pages;
  - push = release;
  - base paths and the 404 fallback for single-page apps;
  - a demo mode that keeps real builds clean;
  - "test it on live, not localhost".
- **Checkpoint:** a shareable URL that works on a phone, with demo data.

## Session 6: Integrate and level up

- **Exercise:** connect something that already exists, an internal repo or an open-source project, using prompt #8's pattern. Add a constraint like #9 ("free, open source, just works").
- **Teach:**
  - contracts before parallel work;
  - checking that third-party services really work from a browser;
  - privacy (what data leaves the device);
  - fallbacks.
- **Wrap-up:**
  - what needs a server next (accounts, shared data, payments);
  - `/code-review` before big pushes;
  - lock it down before real data: `/security-review`, the Trail of Bits `insecure-defaults` and `supply-chain-risk-auditor` plugins, a red-team prompt that tries to read another family's kids, two-factor on every account, and Supabase Row Level Security;
  - writing durable preferences into memory.
- **Checkpoint:** feature live and tested, docs updated.

## After the course

- The student reruns the playbook on the next feature without the instructor.
- Keep a running list of their best prompts and their own "lessons learned".
