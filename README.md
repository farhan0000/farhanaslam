# Farhan Aslam — Portfolio

A single-page, scroll-based portfolio for **Farhan Aslam — Senior Front-End & Mobile Engineer**, built with the latest Next.js (App Router), TypeScript, and Tailwind CSS v4. Light + dark theming, animated availability pulse, tech marquee, reveal-on-scroll, and device frames — all server-rendered with interactivity isolated to a few client leaves.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`), design tokens as CSS custom properties exposed via `@theme`
- Fonts: **Clash Display** + **General Sans** (Fontshare via `<link>`), **JetBrains Mono** (`next/font/google`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Theming

- Light is the default; first visit respects `prefers-color-scheme`, and the choice persists in `localStorage` (`farhan-theme`).
- A no-FOUC inline script in `app/layout.tsx` sets `data-theme` on `<html>` before paint.
- The nav theme toggle flips it. Accent is **Violet `#6d4dff`** (the documented default); to change it, edit `--accent` in `app/globals.css` — the derived `--accent-*` tokens follow via `color-mix`.

## Structure

```
app/
  layout.tsx      # fonts, metadata, no-FOUC theme script
  page.tsx        # composes the sections
  globals.css     # tokens (:root + [data-theme=dark]), @theme, all component styles
components/
  Nav.tsx         # "use client" — scroll-spy + shadow
  ThemeToggle.tsx # "use client"
  Reveal.tsx      # "use client" — IntersectionObserver, transform-only, staggered
  Marquee.tsx     # pure-CSS marquee
  BrowserFrame.tsx  PhoneFrame.tsx
  RichText.tsx    icons.tsx  Footer.tsx
  sections/       # Hero, About, Skills, Work, Experience, Extras, Contact
lib/
  content.ts      # all typed copy/data — never inlined in JSX
public/           # add headshot + project screenshots here (see public/README.md)
```

## Images

Project screenshots and the headshot are **placeholders** that render at the correct aspect ratio. See `public/README.md` for how to wire in real images via `next/image`.

## Accessibility & motion

Semantic landmarks, `focus-visible` rings, `alt` text on images, external links use `rel="noopener"`. `prefers-reduced-motion` is honored — reveals snap in, the marquee and availability pulse stop, and smooth-scroll is disabled.
