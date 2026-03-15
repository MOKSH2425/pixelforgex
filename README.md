# PIXELFORGEX.DEV — Portfolio Website

A retro/glitch pixel-art aesthetic portfolio site built with the modern tech stack.

## Tech Stack

| Layer       | Tech                                      |
|-------------|-------------------------------------------|
| Framework   | Next.js 15 (App Router)                   |
| Language    | TypeScript                                |
| Styling     | Tailwind CSS v3                           |
| Animation   | Framer Motion + CSS keyframes             |
| Fonts       | Press Start 2P · Share Tech Mono (Google) |
| Package Mgr | npm                                       |

---

## Project Structure

```
pixelforgex/
├── app/
│   ├── globals.css          # Tailwind base + custom keyframes + utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed top nav with active link highlight
│   │   └── Footer.tsx       # Footer with column links + socials
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with glitch title + floating shapes + stats
│   │   ├── Ticker.tsx       # Infinite marquee ticker strip
│   │   ├── Services.tsx     # 6-card services grid
│   │   ├── Portfolio.tsx    # Filterable project grid (client component)
│   │   ├── Process.tsx      # 5-step process timeline
│   │   ├── About.tsx        # Stats + terminal window
│   │   ├── Team.tsx         # Team cards with pixel avatars
│   │   ├── WhyUs.tsx        # 6-item differentiator grid
│   │   ├── Testimonials.tsx # Auto-scrolling testimonial carousel
│   │   └── Contact.tsx      # Contact form with submit states
│   └── ui/
│       ├── GlitchBar.tsx    # RGB gradient bar used at top/bottom
│       ├── PixelButton.tsx  # Reusable skewed pixel button
│       ├── PixelAvatar.tsx  # Deterministic pixel-art avatar generator
│       └── SectionHeader.tsx # Reusable section label + title + sub
│
├── lib/
│   └── data.ts              # ⭐ ALL site content lives here — edit this!
│
├── public/                  # Drop images, favicon, OG image here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customising Content

**All site content is in one file:** `lib/data.ts`

| Export            | What it controls                  |
|-------------------|-----------------------------------|
| `SITE`            | Name, email, location, status     |
| `SERVICES`        | Service cards (icon, title, tags) |
| `PROJECTS`        | Portfolio projects + colors       |
| `PROCESS_STEPS`   | Process step titles + descriptions|
| `TEAM`            | Team members + avatar palettes    |
| `WHY_ITEMS`       | Why us differentiators            |
| `TESTIMONIALS`    | Client quotes                     |
| `TICKER_ITEMS`    | Scrolling marquee text            |
| `NAV_LINKS`       | Navigation links                  |
| `FOOTER_COLUMNS`  | Footer link columns               |

---

## Adding a Real Contact Form

The form currently uses a `setTimeout` mock. To wire it up to a real backend:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Create `app/api/contact/route.ts` and call `resend.emails.send(...)` from the form's `handleSubmit`.

**Option B — Formspree**
Replace the form's `action` attribute with your Formspree endpoint URL.

---

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import directly at [vercel.com](https://vercel.com).

---

## Adding Real Project Images

1. Drop your screenshot (e.g. `nexus.png`) into `/public/projects/`
2. In `Portfolio.tsx`, replace the `<div class="portfolio-thumb">` mock with:

```tsx
import Image from "next/image";

<Image
  src="/projects/nexus.png"
  alt="Nexus Analytics"
  fill
  className="object-cover"
/>
```

---

## VS Code Extensions (Recommended)

- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** — fast component scaffolding
- **Prettier** — code formatting
- **Auto Rename Tag** — sync JSX tag renames
- **Path Intellisense** — autocomplete imports

---

## License

MIT — use it, fork it, ship it. Just don't resell it as-is.
