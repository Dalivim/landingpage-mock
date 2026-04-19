# Dalivim Landing — Next.js

Full, build-ready Next.js 14 (App Router) project.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm start      # serve production build
```

## Stack

- **Next.js 14** App Router
- **React 18**
- **TypeScript** (loose config — `strict: false`, `noImplicitAny: false` — keeps the mechanical port clean. Tighten as you harden the code.)
- **`next/font`** for Inter + Space Grotesk
- **No CSS framework.** Tokens live in `styles/colors_and_type.css`; components use inline `style={{...}}` for portability.

## Structure

```
app/
  layout.tsx           root layout, loads Inter + Space Grotesk
  page.tsx             landing page composition
  globals.css          imports tokens + base resets
components/landing/
  Atoms.tsx            Button, Container
  Icons.tsx            inline SVG <Icon/> (replaces lucide)
  Header.tsx           pill-capsule navbar
  Hero.tsx             dark hero with orbits/starfield
  HowItWorks.tsx       receipt-style transaction simulator
  Sections.tsx         WhyChoose (fears & resolutions)
  Scenarios.tsx        use-case grid
  OrbitalFinale.tsx    Starfield, Orbits, FinalCta, Footer
  Ctas.tsx             CtaInlineBand, CtaBarDark, StickyCta
  Faq.tsx              conversion-focused FAQ
  CreateTxModal.tsx    modal form
public/assets/
  dalivim-mark.svg
  dalivim-wordmark.svg
  dalivim-logo.png
styles/
  colors_and_type.css  design tokens
```

## Notes

- Every component is `'use client'` — they all use hooks / event handlers. `app/page.tsx` is also a client component so it can own the modal state.
- Path alias `@/*` → project root. Set in `tsconfig.json`.
- Fonts load via `next/font/google` in `app/layout.tsx` and are referenced inline by family name in components (e.g. `"'Space Grotesk'"`). The CSS variables `--font-inter` and `--font-space-grotesk` are also exposed if you prefer.
- The Footer uses a raw `<img>` for `dalivim-logo.png`. Swap to `next/image` if you want automatic optimization.

## History / fixed bugs from the prototype

- The HowItWorks simulator originally used lucide's `createIcons()` which raced React commits and caused a full unmount at end of the animation cycle. It's been replaced with an inline `<Icon/>` component (see `components/landing/Icons.tsx`). **Don't reintroduce lucide.**

## TODO after first `npm run build`

- Tighten TypeScript: turn on `strict`, type the event handler params, narrow the `useRef` types.
- Replace `<img>` with `next/image` in the Footer.
- Extract inline styles to CSS modules / Tailwind if that matches your codebase conventions.
- Consider extracting shared motion curves (`cubic-bezier(0.2, 0.6, 0.2, 1)`) into a constants file.
