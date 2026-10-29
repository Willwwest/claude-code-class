# Claude Code basics for a first-time user

Teach these as they come up, not as a lecture. Each one has a moment in the lesson plan where it's needed.

## What it is

Claude Code is Claude working inside your project folder. It reads files, runs commands, edits code, tests in a browser and uses git. It works in the terminal, in the VS Code / JetBrains extensions, in the desktop app and on the web (claude.ai/code). You talk to it in plain English, like a capable teammate.

## First run

- Install it (see the official docs at docs.claude.com → Claude Code), open a terminal **in the project folder**, and run `claude`. In VS Code, use the Claude Code extension panel.
- Start with a short, concrete ask, and look at what it does.
- `/help` lists commands. `/init` writes a `CLAUDE.md` describing the project, and Claude reads that file at the start of every session.

## Permissions and safety

- Claude asks before running commands or editing files, depending on the permission mode. Beginners should keep the prompts on and read each one.
- Approving an action is a decision. Read what you're approving, especially deletes, `git push`, or anything that publishes or sends.
- Never paste secrets (passwords, API keys) into chat. Use environment files that aren't committed.

## Talking to it well

- **Say the outcome, not the steps.** "Build out our app with full parity with X, inventory as the centerpiece, on our brand kit with a design system and tokens" beat any step-by-step list.
- **Give it the material.** Point it at paths ("C:\…\extra-mile-apps has route planning code"), URLs and files.
- **State constraints.** "free and open source", "test on live, not localhost", "don't include X".
- **Push back when it feels thin.** "This feels incredibly basic. What do real tint shops use?" is what turned a toy into a product.
- **You can send messages while it works.** It picks them up mid-task.

## Goals: `/goal`

`/goal <what done looks like>` sets a target that Claude keeps working toward across many steps. It checks itself against the goal before stopping. Use it for big builds, write it as a finish line you can test, and expect it to hold Claude to the literal wording. (Our "full parity" goal kept flagging rows that need a server.)

## Plan first for big changes

Ask for a plan before code ("plan this first, don't edit yet"), or use plan mode. Review the plan, then say go.

## Helper agents

Claude can launch helper agents for research or parallel building. Good delegation looks like the briefs in `agent-briefs.md`:

- one area per agent;
- the files each agent owns, so agents don't collide;
- the decisions already made;
- how to verify;
- what to report back.

The lead session writes the shared foundation (types, tokens, interfaces) **first**, then the agents build on it. Agents cost more tokens, so use them when work is truly parallel.

## Memory

Claude Code keeps per-project memory and reads `CLAUDE.md`. Tell it durable preferences ("from now on, always test on the live site") and it remembers them.

## Git basics to teach

- **Repo:** the project folder with history.
- **Commit:** a saved checkpoint with a message.
- **Push:** uploads commits to GitHub. If GitHub Pages deploys from `main`, a push to `main` is a public release.
- Claude only commits or pushes when asked. Ask it to commit at the end of each working step.

## Seeing and testing the app

- "Pull it up in the browser for me" starts the dev server and gives you a local URL.
- Ask Claude to **test in a real browser**: desktop and phone widths, no console errors, no horizontal scroll, screenshots. The scripts in `examples/qa-scripts/` show how it does this with headless Chrome.
- After deploying, ask it to test **the live URL** too.

## Useful commands

- `/help`
- `/init`
- `/goal`
- `/clear` starts a fresh context.
- `/config`
- `/code-review` reviews the current changes for bugs.
- `/artifacts` lists pages Claude has published for you.

Long sessions get summarized automatically, and work continues.
