# Build Task: gdpr-cookie-compliance-scanner

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: gdpr-cookie-compliance-scanner
HEADLINE: Scan websites for GDPR cookie violations
WHAT: Crawls websites to find non-compliant cookies, missing consent banners, tracks changes over time, generates compliance reports
WHY: GDPR fines are increasing, many sites unknowingly violate cookie laws, compliance audits are expensive
WHO PAYS: Web agencies, compliance consultants, small business owners
NICHE: legal-compliance
PRICE: $$17/mo

ARCHITECTURE SPEC:
A Next.js web application that crawls websites to detect GDPR cookie compliance issues using Puppeteer for browser automation. Features a dashboard for managing scans, viewing compliance reports, and tracking violations over time with automated scheduling.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/scan/[id]/page.tsx
- app/api/scan/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- lib/scanner.ts
- lib/gdpr-rules.ts
- lib/database.ts
- components/ScanResults.tsx
- components/ComplianceReport.tsx
- components/PricingTable.tsx

DEPENDENCIES: next, tailwindcss, puppeteer, prisma, @prisma/client, postgresql, @lemonsqueezy/lemonsqueezy.js, recharts, next-auth, zod, lucide-react

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/gdpr-cookie-compliance-scanner
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019dea8b-4769-7eb1-98e1-a48804dcf2e6
--------
user
# Build Task: gdpr-cookie-compliance-scanner

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: gdpr-cookie-compliance-scanne
Please fix the above errors and regenerate.