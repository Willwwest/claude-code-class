# Intake: The LAB and Spark (session 1, before any code)

Answer these with the student and save the answers as `SPARK-BRIEF.md` in their project folder (`lab-spark`). Every later prompt points at it. Leave a blank where you don't know an answer, rather than guessing.

## The business and the app

1. What does The LAB do, and who uses Spark there today (front desk, coaches, managers, parents)?
2. What problem should the first version solve? Describe it in one sentence, the way the Axis owner did: "keep track of tint stock from the jobs we do."
3. What code already exists? The LAB app (`lab-skill-unlocks`) has families, check-in and a Spark webhook. What works today, and what should the replacement reuse?
4. Who will use it on a phone, and who at a desk?
4b. Parent and child accounts (the owner's top priority): one parent account with each kid under it. Can a family have two parents? Is a membership per kid or per family? One bill and one waiver per family? What does a parent see when signed in?

## The bar to clear

5. Spark is the product to match, as Tint Wiz was for Axis. Which Spark screens does the staff open every week, and which never? Spark's public sources: sparkmembership.com, help.sparkmembership.com and its YouTube tutorials.
6. Which three features matter most? Which do they not care about?
7. What would make it clearly better than Spark? For Axis it was an instant quote, warranty certificates, referrals, low-stock alerts and a shortage forecast.

## Brand

8. Brand kit: logo files (SVG/PNG), colors (hex), fonts, website URL. If there's no kit, Claude can pull colors and the logo from the website.
9. Dark or light by default?

## Data and launch

10. Is there real data to import (CSV exports), or start with demo data?
11. Where will it be shared? GitHub Pages (free, public) or Vercel. Is a public repo OK?
12. Is a backend needed now? Real logins, shared data across phones, payments and automatic texts all need a server. Is anyone ready to create accounts (e.g. Supabase, Stripe)? Without them, the app runs in the browser, like Axis.
13. Anything sensitive that must never go into prompts, the repo or third-party services?

## Tools on the student's machine

14. Claude Code installed and signed in? (See `claude-code-basics.md`.)
15. Node.js 22+, Git and a GitHub account? A code editor (VS Code)?
