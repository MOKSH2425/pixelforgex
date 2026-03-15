// ─────────────────────────────────────────────────────────────
//  PIXELFORGEX.DEV  ·  Site Data  (v0.3 — slug fix)
//  Edit this file to update content across the entire website.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name:         "PIXELFORGEX.DEV",
  email:        "hello@pixelforgex.dev",
  location:     "Surat, Gujarat — Remote worldwide",
  status:       "Available for new projects",
  responseTime: "Within 24 hours. Usually much faster.",
  tagline:      "We forge digital experiences that actually hit different.",
};

// ── SERVICES ──────────────────────────────────────────────────
export const SERVICES = [
  {
    num: "01", icon: "🖥️", accent: "#00FFFF",
    title: "WEB DEVELOPMENT",
    desc:  "Custom websites that are fast, responsive, and built to convert. From portfolio sites to full web applications — pixel-perfect every time.",
    tags:  ["React", "Next.js", "Vue", "Node.js"],
  },
  {
    num: "02", icon: "📱", accent: "#FF00FF",
    title: "APP DEVELOPMENT",
    desc:  "Native & cross-platform mobile apps that users actually love. iOS, Android, and everything in between — shipped fast, scaled smart.",
    tags:  ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    num: "03", icon: "🎨", accent: "#00FF41",
    title: "UI/UX DESIGN",
    desc:  "Interfaces that don't just look good — they feel good. We design with users in mind so every interaction makes sense.",
    tags:  ["Figma", "Prototyping", "User Research"],
  },
  {
    num: "04", icon: "🛒", accent: "#FFE600",
    title: "E-COMMERCE",
    desc:  "Online stores that sell while you sleep. Custom storefronts, smooth checkouts, and backend systems that scale with your growth.",
    tags:  ["Shopify", "WooCommerce", "Custom"],
  },
  {
    num: "05", icon: "⚡", accent: "#FF6B00",
    title: "SAAS PRODUCTS",
    desc:  "Got an idea for a software product? We build end-to-end SaaS platforms — auth, payments, dashboards, APIs. Full stack, fully yours.",
    tags:  ["Stripe", "Auth.js", "REST / GraphQL"],
  },
  {
    num: "06", icon: "🔧", accent: "#00FFFF",
    title: "MAINTENANCE & SCALE",
    desc:  "Already live but need love? We take over existing codebases, optimize performance, squash bugs, and help you scale to the next level.",
    tags:  ["Audits", "Performance", "DevOps"],
  },
] as const;

// ── PORTFOLIO ─────────────────────────────────────────────────
// ⚠️  id must match your MDX filename in content/work/
//     e.g. id: "nexus-analytics"  →  content/work/nexus-analytics.mdx
export const PROJECTS = [
  {
    id: "nexus-analytics",          // ← matches nexus-analytics.mdx
    category: "SAAS / WEB APP",
    name: "NEXUS ANALYTICS",
    desc: "Real-time data dashboard for a fintech startup. Custom charts, live feeds, and an admin panel their whole team actually uses.",
    color: "#00FFFF", bgFrom: "#0D0D1A", bgTo: "#0A1A1A",
    techColors: ["#00FFFF", "#FF00FF", "#00FF41"],
    tags: ["WEB", "SAAS"],
  },
  {
    id: "velvet-threads",           // ← matches velvet-threads.mdx
    category: "E-COMMERCE",
    name: "VELVET THREADS",
    desc: "Premium fashion store with custom Shopify theme, advanced filtering, and a wishlist feature that boosted retention by 40%.",
    color: "#FF00FF", bgFrom: "#1A0D1A", bgTo: "#120012",
    techColors: ["#FF00FF", "#FFE600"],
    tags: ["WEB", "E-COM"],
  },
  {
    id: "taskpilot-app",            // ← matches taskpilot-app.mdx
    category: "MOBILE APP",
    name: "TASKPILOT APP",
    desc: "Cross-platform productivity app with offline sync, push notifications, and team collaboration — 10k downloads in first month.",
    color: "#00FF41", bgFrom: "#0A1A0A", bgTo: "#001200",
    techColors: ["#00FF41", "#00FFFF"],
    tags: ["APP"],
  },
  {
    id: "aurum-capital",            // ← create content/work/aurum-capital.mdx when ready
    category: "CORPORATE / WEB",
    name: "AURUM CAPITAL",
    desc: "Investment firm site with CMS, client portal, and multilingual support. Built for trust, built to convert high-value leads.",
    color: "#FFE600", bgFrom: "#1A1400", bgTo: "#120E00",
    techColors: ["#FFE600", "#FF00FF"],
    tags: ["WEB"],
  },
  {
    id: "bookify-pro",              // ← create content/work/bookify-pro.mdx when ready
    category: "SAAS / PLATFORM",
    name: "BOOKIFY PRO",
    desc: "Appointment booking SaaS for SMBs. Stripe subscriptions, calendar sync, automated reminders, and a white-label option.",
    color: "#FF6B00", bgFrom: "#150A00", bgTo: "#1A0800",
    techColors: ["#FF6B00", "#00FFFF", "#00FF41"],
    tags: ["WEB", "SAAS"],
  },
  {
    id: "orbit-studio",             // ← create content/work/orbit-studio.mdx when ready
    category: "BRANDING / WEB",
    name: "ORBIT STUDIO",
    desc: "Full brand identity + website for a creative agency. Custom animations, interactive portfolio, Webflow CMS they can manage solo.",
    color: "#8888FF", bgFrom: "#0D0D1A", bgTo: "#080D1A",
    techColors: ["#8888FF", "#FF00FF"],
    tags: ["WEB"],
  },
] as const;

// ── PROCESS ───────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { num: "01", title: "DISCOVERY", desc: "We dig into your goals, users, and competition. Deep brief. Clear scope. No guesswork." },
  { num: "02", title: "DESIGN",    desc: "Wireframes to high-fidelity designs. Every screen signed off before we write a line of code." },
  { num: "03", title: "BUILD",     desc: "Sprints. Weekly demos. Real code, real feedback. You're in the loop the whole way." },
  { num: "04", title: "TEST",      desc: "Cross-device QA. Performance audits. We don't ship bugs — we ship confidence." },
  { num: "05", title: "LAUNCH",    desc: "Zero-downtime deployment. Monitoring live. 30-day post-launch support included." },
] as const;

// ── TEAM ──────────────────────────────────────────────────────
export const TEAM = [
  {
    name: "DHRUVIN PARMAR",
    role: "FOUNDER / FULL-STACK",
    bio:  "8 years deep in web dev. Shipped products for startups in 12 countries. Obsessed with performance and clean code.",
    avatarPalette: ["#00FFFF", "#0088AA", "#004455", "#001122"],
    links: [{ label: "GH", href: "#" }, { label: "LI", href: "#" }, { label: "TW", href: "#" }],
  },
  {
    name: "MOKSH SHAH",
    role: "LEAD UI/UX DESIGNER",
    bio:  "Figma wizard. Design system expert. Makes interfaces so smooth users don't even know they're being guided.",
    avatarPalette: ["#FF00FF", "#AA0088", "#550044", "#220011"],
    links: [{ label: "BE", href: "#" }, { label: "DR", href: "#" }, { label: "LI", href: "#" }],
  },
  {
    name: "VIRAL KHAMBHATI",
    role: "MOBILE / FLUTTER DEV",
    bio:  "Cross-platform mobile maestro. If it runs on a phone, he's built it. Six apps in the App Store, four on Play Store.",
    avatarPalette: ["#00FF41", "#008822", "#004411", "#001100"],
    links: [{ label: "GH", href: "#" }, { label: "PH", href: "#" }, { label: "LI", href: "#" }],
  },
  {
    name: "GEMINI MASI",
    role: "BACKEND / DEVOPS",
    bio:  "Systems thinker. Builds APIs that don't fall over. Keeps infra lean, fast, and sleeping through 3am traffic spikes.",
    avatarPalette: ["#FFE600", "#AA9900", "#554400", "#221100"],
    links: [{ label: "GH", href: "#" }, { label: "LI", href: "#" }, { label: "TW", href: "#" }],
  },
] as const;

// ── WHY US ────────────────────────────────────────────────────
export const WHY_ITEMS = [
  { icon: "⚡", title: "FAST TURNAROUND",     desc: "MVPs in 2–4 weeks. Full products in 6–12 weeks. We move fast without cutting corners." },
  { icon: "🎯", title: "NO TEMPLATE BS",      desc: "Every project is custom-built. You get a product tailored to your exact needs." },
  { icon: "🔄", title: "TRANSPARENT PROCESS", desc: "Weekly updates. Shared Notion. You always know exactly where your money is going." },
  { icon: "🛡️", title: "POST-LAUNCH SUPPORT", desc: "30 days of free post-launch support on every project. We don't disappear after we ship." },
  { icon: "📐", title: "PIXEL PERFECT",        desc: "We sweat the details. Every margin, every animation, every interaction — dialled in." },
  { icon: "🌐", title: "GLOBAL CLIENTS",       desc: "Clients across India, UAE, UK, and the US. Different timezones, same high standards." },
] as const;

// ── TESTIMONIALS ──────────────────────────────────────────────
export const TESTIMONIALS = [
  { quote: "Literally the best dev team I've worked with. They delivered ahead of schedule and the product looked even better than the designs.", name: "ADITYA KAPOOR",  company: "CEO, Nexus Fintech",     initials: "AK" },
  { quote: "PIXELFORGEX took our ugly old site and turned it into something we're genuinely proud to show investors. Revenue is up 30% since launch.", name: "SARAH LEWIS",   company: "Founder, Velvet Threads", initials: "SL" },
  { quote: "Clear communication, great code quality, and zero drama. That's rare. We've hired them for three projects and will keep coming back.", name: "RAHUL MISHRA",  company: "CTO, Bookify Pro",        initials: "RM" },
  { quote: "They built our entire app in 6 weeks. The code is clean, documented, and our in-house team could pick it up immediately. 10/10.",       name: "MIKE JOHNSON",  company: "Product Lead, TaskPilot", initials: "MJ" },
  { quote: "The UI they designed feels premium without being pretentious. Our clients compliment the website more than they compliment our actual product.", name: "NEHA PATEL", company: "Director, Orbit Studio",  initials: "NP" },
] as const;

// ── TICKER ────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  "WEB DESIGN","APP DEVELOPMENT","UI/UX DESIGN","E-COMMERCE",
  "SAAS PRODUCTS","API INTEGRATION","MOBILE APPS","BRANDING",
] as const;

// ── NAV LINKS ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services",     href: "#services"  },
  { label: "Work",         href: "#portfolio" },
  { label: "About",        href: "#about"     },
  { label: "Team",         href: "#team"      },
  { label: "Contact",      href: "#contact"   },
  { label: "Case Studies", href: "/work"      },
] as const;

// ── FOOTER COLUMNS ────────────────────────────────────────────
export const FOOTER_COLUMNS = [
  {
    title: "SERVICES",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "App Development", href: "#services" },
      { label: "UI/UX Design",    href: "#services" },
      { label: "E-Commerce",      href: "#services" },
      { label: "SaaS Products",   href: "#services" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us",    href: "#about"     },
      { label: "Team",        href: "#team"       },
      { label: "Portfolio",   href: "#portfolio"  },
      { label: "How We Work", href: "#process"    },
      { label: "Contact",     href: "#contact"    },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy",    href: "#" },
    ],
  },
] as const;
