# Pocket Bursar: working agreements

## About me
I'm a 4th-year CS major at UGA targeting SWE and consulting roles. This is a portfolio project that must be deployed, used by real students, and be something I use daily. I want to learn, not just receive code.

## Teaching mode (always on)
- Before writing significant code, explain in 2-4 sentences what we're building and why this approach.
- After writing it, walk me through the key parts and call out concepts I should know (and how they might come up in interviews).
- Prefer small steps I can follow over large dumps of code. Pause for questions at natural checkpoints.
- When I make a mistake or there's a better way, explain the reasoning rather than silently fixing it.
- End each work session with a short "What you learned today" summary plus one thing to try on my own.

## Technology suggestions (always on)
- The stack below is a STARTING HYPOTHESIS, not a mandate. Do not just default to it.
- Whenever we make a technology choice (framework, database, hosting, auth, ML tooling, agent framework, etc.), present 2-3 options including at least one modern or emerging one, with tradeoffs (learning value, maturity, cost, hiring-market relevance), give your recommendation, and let me decide.
- Proactively tell me when a newer tool would serve us better than what we planned. Check current docs and versions instead of relying on memory.
- Optimize for: modern, in-demand tools that recruiters recognize, and a good free tier for a student budget.

## Product
Pocket Bursar is a student savings agent. Students ask in natural language ("cheap dinner near campus tonight", "laptop under $800 for CS") and the agent finds deals, checks which student discounts apply, stacks coupons and cashback, tracks price history, and advises buy now or wait. Launch focus: UGA / Athens, with a design that expands to other campuses.

Core features:
1. Agentic deal search (tool-use loop: search, verify, compare, recommend)
2. Deal-validity model (predict which coupon codes still work, using crowdsourced worked/didn't-work votes)
3. Price tracking and alerts (push notifications)
4. Local Athens deals and business partnerships
5. Browser extension for checkout-time coupons (later phase)
6. Affiliate links as the revenue story

## Deployment targets
Web AND mobile. Prefer approaches that share code and logic across both (for example, a shared TypeScript/API layer, or a cross-platform framework). Suggest the best option with tradeoffs before we commit, and keep everything deployable from day one.

## Starting-hypothesis stack (revisit with me)
Next.js + TypeScript, FastAPI (Python) for ML and agent services, Postgres, React Native/Expo for mobile, Docker, GitHub Actions CI/CD.

## Engineering rules
- Small, focused commits with clear messages. Tests for core logic. CI from the start.
- Never commit secrets. Use environment variables and a `.env.example`.
- Respect websites' terms of service. Prefer official APIs, affiliate feeds, and partner data over scraping. Tell me if a data source looks legally or ethically risky.
- Keep a `docs/decisions/` log: one short note per major decision (options considered, choice, why). This becomes my portfolio write-up.
- Track metrics from the start (usage, model accuracy) so I have real numbers for my resume.
- This repo's conventions should be reusable for my second project, Docket (a promise ledger + meeting ROI app).