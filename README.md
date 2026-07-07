# AIBT — Athena Institute of Business & Technology

Website for AIBT, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes (one folder per page, following the sitemap in the build brief)
- `src/components` — shared UI (Nav, Footer, programme cards/detail, forms)
- `src/data/programmes.ts` — the course catalog (Certificate Courses, MITA Academy, Executive Education, Corporate & Government Training, Emerging Professionals)

## Known placeholders

Several pieces of content are explicitly marked as placeholders pending confirmation before launch:

- Office address, official email/phone, and social handles (`src/app/contact/page.tsx`, `src/components/Footer.tsx`)
- Programme fees — shown as "Fee available on request" everywhere until real pricing is approved
- Brand colors are a first pass (`src/app/globals.css`) — swap in official hex codes if/when available

Application and enquiry forms currently submit locally (no backend wired up yet) — see `src/components/forms/DynamicForm.tsx`.

## Deploying

This is a standard Next.js app — deploys cleanly to [Vercel](https://vercel.com/new) or any Node hosting that supports Next.js.
