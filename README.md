# Claude Code class pack: building Spark the way we built Axis

This is the context a teaching agent needs to run a hands-on Claude Code class. The student is new to Claude Code. Over the course they build an app for their company's product, **Spark**, using the method that built the Axis Glass Tinting shop app in about two days.

## Charlie's guide site

`site/` is a one-page guide for Charlie: setup, parent and child accounts (the core of the app), nine steps (including building the brand kit from the website) with copyable prompts, tooltips that explain every technical word, a map of what Spark does, and the cut-over checklist. It's plain HTML with no build step, on The LAB brand. `.github/workflows/pages.yml` publishes it to GitHub Pages on every push to `main` that touches `site/`. Live at https://willwwest.github.io/claude-code-class/ once Pages is turned on.

## How to start the class

1. Open a terminal in this folder and run `claude`. Claude Code reads `CLAUDE.md` automatically, and that file sets it up as the instructor.
2. Say: "Start the class. Begin with the intake."
3. The student does the building in their **own** session, in their own Spark project folder. The instructor session coaches.

## What's here

| File | What it is |
|---|---|
| `CLAUDE.md` | Instructor role and teaching rules (loaded automatically) |
| `spark-intake.md` | Questions to answer about Spark before building |
| `lesson-plan.md` | Six sessions with goals, exercises and checkpoints |
| `claude-code-basics.md` | The tool itself: install, permissions, goals, agents, memory, git, browser testing |
| `playbook.md` | The method, step by step, with the reasoning behind each step |
| `prompts.md` | Every prompt from the Axis build, what it did, and a Spark version of each |
| `axis-reference.md` | What Axis became: stack, structure, decisions, pitfalls |
| `agent-briefs.md` | The 11 exact briefs given to helper agents (research, five feature builders, routing) |
| `examples/tokens.css` | Two-layer brand design tokens |
| `examples/tokenize.cjs` | Lint that fails if any UI color is off the tokens |
| `examples/docs/` | Design-system rules, the competitor parity checklist, the routing doc |
| `examples/qa-scripts/` | Headless-Chrome scripts that test the app in a real browser, local or live |
| `examples/pages.yml` | GitHub Actions workflow that deploys to GitHub Pages on every push |

## The Axis story in one paragraph

The owner asked for a tint-roll stock tracker. When it felt too basic, we researched the market leader (Tint Wiz) from its public help center and videos, and wrote a feature-by-feature parity checklist. A single `/goal` then set the target: full parity, inventory as the centerpiece, everything on the Axis brand through a token design system. The lead session wrote the shared foundation: tokens, components, data model and storage. It then ran five helper agents in parallel, one per feature area, and tested everything in a real browser at desktop and phone sizes. After that we deployed to GitHub Pages, added demo data for Axis's service areas, and integrated route planning from an existing internal repo plus free open-source services (OSRM, OpenStreetMap), testing on the live site.
