# Muhammad Bilal Tahir — Portfolio

A portfolio for a full stack AI engineer, focused on selected work, platform engineering, and a direct path to collaboration.

Requires Node.js 20.9 or newer.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The source is the Next.js App Router in `app/`; the current CV is served from `public/BilalTahir_CV.pdf`. Run `npm run typecheck` for a separate type check.

## Production

```bash
npm ci
npm run build
npm start
```

The project is intended for Vercel's Next.js deployment. See [DESIGN-PLAN.md](DESIGN-PLAN.md) for content, design, and verification decisions.
