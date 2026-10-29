# Spark intake (session 1, before any code)

Answer these with the student and save the answers as `SPARK-BRIEF.md` in their Spark project. Every later prompt points at it. Leave a blank where you don't know an answer, rather than guessing.

## The business and the app

1. What does the company do, and who uses Spark (staff, customers, both)?
2. What problem should the first version solve? Describe it in one sentence, the way the Axis owner did: "keep track of tint stock from the jobs we do."
3. Is Spark new, or does code already exist? If it exists: where is it, what's it built with, and what works today?
4. Who will use it on a phone, and who at a desk?

## The bar to clear

5. Which product do they currently use, or wish they had? This is the "Tint Wiz" for Spark. Do they have a public help center, feature pages or YouTube tutorials? (Public sources only.)
6. Which three features matter most? Which do they not care about?
7. What would make it clearly better than that product? For Axis it was an instant quote, warranty certificates, referrals, low-stock alerts and a shortage forecast.

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
