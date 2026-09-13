// ─────────────────────────────────────────────────────────────
//  PIXELFORGEX.DEV  ·  Site Data  (v0.3 — slug fix)
//  Edit this file to update content across the entire website.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "PIXELFORGEX.DEV",
  email: "pixelforgex.dev@gmail.com",
  location: "Surat, Gujarat — Remote worldwide",
  status: "Available for new projects",
  responseTime: "Within 24 hours. Usually much faster.",
  tagline: "We forge digital experiences that actually hit different.",
};

// ── SERVICES ──────────────────────────────────────────────────
export const SERVICES = [
  {
    num: "01",
    icon: "🖥️",
    accent: "#0A84FF",
    title: "WEB DEVELOPMENT",
    desc: "Custom websites that are fast, responsive, and built to convert. From portfolio sites to full web applications — pixel-perfect every time.",
    tags: ["React", "Next.js", "Vue", "Node.js"],
  },
  {
    num: "02",
    icon: "📱",
    accent: "#8B5CF6",
    title: "APP DEVELOPMENT",
    desc: "Native & cross-platform mobile apps that users actually love. iOS, Android, and everything in between — shipped fast, scaled smart.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    num: "03",
    icon: "🎨",
    accent: "#14B8A6",
    title: "UI/UX DESIGN",
    desc: "Interfaces that don't just look good — they feel good. We design with users in mind so every interaction makes sense.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    num: "04",
    icon: "🛒",
    accent: "#E8A33D",
    title: "E-COMMERCE",
    desc: "Online stores that sell while you sleep. Custom storefronts, smooth checkouts, and backend systems that scale with your growth.",
    tags: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    num: "05",
    icon: "⚡",
    accent: "#F2725A",
    title: "SAAS PRODUCTS",
    desc: "Got an idea for a software product? We build end-to-end SaaS platforms — auth, payments, dashboards, APIs. Full stack, fully yours.",
    tags: ["Stripe", "Auth.js", "REST / GraphQL"],
  },
  {
    num: "06",
    icon: "🔧",
    accent: "#0A84FF",
    title: "MAINTENANCE & SCALE",
    desc: "Already live but need love? We take over existing codebases, optimize performance, squash bugs, and help you scale to the next level.",
    tags: ["Audits", "Performance", "DevOps"],
  },
] as const;

// ── PORTFOLIO ─────────────────────────────────────────────────
// ⚠️  id must match your MDX filename in content/work/
//     e.g. id: "nexus-analytics"  →  content/work/nexus-analytics.mdx
export const PROJECTS = [
  {
    id: "pixelforgex-developer",
    url: "https://pixelforgex-developer.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "WEB DEVELOPMENT / CORPORATE REAL ESTATE WEBSITE",
    name: "PIXELFORGEX DEVELOPER WEBSITE",
    desc: "A modern, responsive multi-page website built to showcase a premium eco-luxury real estate developer with a polished buyer journey.",
    color: "#00FFFF",
    bgFrom: "#0E1620",
    bgTo: "#0B0F14",
    techColors: ["#00FFFF", "#FFE600", "#00FF41"],
    tags: ["WEB"],
  },
  {
    id: "beauty-atelier",
    url: "https://beauty-products-pixel-forgex.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "FULL-STACK WEB DEVELOPMENT / E-COMMERCE",
    name: "BEAUTY ATELIER E-COMMERCE PLATFORM",
    desc: "A full-stack MERN e-commerce platform crafted to deliver a premium shopping experience for luxury beauty and skincare products.",
    color: "#FF9ECF",
    bgFrom: "#22141D",
    bgTo: "#130E14",
    techColors: ["#FF9ECF", "#FFE6F2", "#C86BFA"],
    tags: ["WEB", "E-COM"],
  },
  {
    id: "smartmed-fullstack",
    url: "https://smartmed-fullstack.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "FULL-STACK WEB DEVELOPMENT / HEALTHCARE TECH",
    name: "SMARTMED RECOMMENDATION SYSTEM",
    desc: "A full-stack healthcare application built around an intelligent symptom-driven medicine recommendation engine and a clean, responsive user experience.",
    color: "#7CFFB2",
    bgFrom: "#0C1B1A",
    bgTo: "#081211",
    techColors: ["#7CFFB2", "#00FFFF", "#B8FFF1"],
    tags: ["WEB", "SAAS"],
  },
  {
    id: "aura-coffee",
    url: "https://aura-coffee-theta.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "FRONTEND WEB DEVELOPMENT / E-COMMERCE CONCEPT",
    name: "AURA COFFEE WEB EXPERIENCE",
    desc: "An elegant concept website for a premium coffee boutique, combining immersive storytelling, product discovery, and a refined reservation flow.",
    color: "#D6A46C",
    bgFrom: "#1E140F",
    bgTo: "#100B08",
    techColors: ["#D6A46C", "#F5E6D3", "#8E5C35"],
    tags: ["WEB", "E-COM"],
  },
  {
    id: "ckpcet-event-registration",
    url: "https://college-events-app-blond.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "FULL-STACK WEB DEVELOPMENT / EVENT MANAGEMENT",
    name: "CAMPUS EVENT REGISTRATION SYSTEM",
    desc: "A centralized MERN stack platform for campus event discovery, student registration, and streamlined administrative tracking.",
    color: "#8FB8FF",
    bgFrom: "#0F1524",
    bgTo: "#0A0F1A",
    techColors: ["#8FB8FF", "#00FFFF", "#DCE8FF"],
    tags: ["WEB", "SAAS"],
  },
  {
    id: "expense-tracker-app",
    url: "https://drive.google.com/file/d/1jfyZIqly9d5ZI8BAGuW_Rg3jQWa_xOhq/view",
    status: "demo",
    linkLabel: "Watch demo",
    category: "MOBILE APP DEVELOPMENT / FINTECH",
    name: "EXPENSE TRACKER MOBILE APP",
    desc: "A cross-platform Flutter app for tracking income, expenses, budgets, and financial activity through a clean mobile-first experience.",
    color: "#F2C94C",
    bgFrom: "#1F1808",
    bgTo: "#110D05",
    techColors: ["#F2C94C", "#00FFFF", "#FFF0B3"],
    tags: ["APP"],
  },
  {
    id: "deeora",
    url: "https://deeora.in/",
    status: "live",
    linkLabel: "Visit site",
    category: "WEB DEVELOPMENT / BUSINESS WEBSITE",
    name: "DEEORA",
    desc: "A polished corporate web presence built for clarity and conversion, with a fast, modern front end tailored to the brand.",
    color: "#FF6B4A",
    bgFrom: "#241209",
    bgTo: "#140A05",
    techColors: ["#FF6B4A", "#FFD1C2", "#0A84FF"],
    tags: ["WEB"],
  },
  {
    id: "growth-mitra-global",
    url: "https://growthmitraglobal.com/",
    status: "live",
    linkLabel: "Visit site",
    category: "WEB DEVELOPMENT / CONSULTING & GROWTH SERVICES",
    name: "GROWTH MITRA GLOBAL",
    desc: "A structured, trust-building website for a growth consulting brand — built to turn visitors into qualified leads.",
    color: "#4ADE80",
    bgFrom: "#0E1F14",
    bgTo: "#08120C",
    techColors: ["#4ADE80", "#B8FFD9", "#0A84FF"],
    tags: ["WEB"],
  },
  {
    id: "bill-digest",
    url: "https://play.google.com/store/apps/details?id=com.yewtec.billdigest&hl=en_IN",
    status: "live",
    linkLabel: "View on Play Store",
    category: "MOBILE APP DEVELOPMENT / FINTECH",
    name: "BILL DIGEST",
    desc: "An Android app that scans, organizes, and digests bills automatically — turning receipt clutter into clean, trackable data.",
    color: "#60A5FA",
    bgFrom: "#0E1826",
    bgTo: "#080E16",
    techColors: ["#60A5FA", "#DCE8FF", "#8B5CF6"],
    tags: ["APP"],
  },
  {
    id: "knotpaid",
    url: "https://play.google.com/store/apps/details?id=com.knotpaid.atinfotech&hl=en-US",
    status: "live",
    linkLabel: "View on Play Store",
    category: "MOBILE APP DEVELOPMENT / FINTECH",
    name: "KNOTPAID",
    desc: "A payments-focused Android app built for reliable, everyday money movement with a clean, no-friction interface.",
    color: "#F472B6",
    bgFrom: "#22101B",
    bgTo: "#130910",
    techColors: ["#F472B6", "#FFD6EB", "#8B5CF6"],
    tags: ["APP"],
  },
  {
    id: "saferoute",
    url: "https://saferoute-womensafety.vercel.app/",
    status: "live",
    linkLabel: "Visit site",
    category: "FULL-STACK WEB DEVELOPMENT / SAFETY TECH",
    name: "SAFEROUTE",
    desc: "A women's safety web app focused on route awareness and quick access to help — built with a calm, clear, functional UI.",
    color: "#FBBF24",
    bgFrom: "#211906",
    bgTo: "#130E03",
    techColors: ["#FBBF24", "#FFE8AD", "#F2725A"],
    tags: ["WEB", "SAAS"],
  },
] as const;

// ── PROCESS ───────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    num: "01",
    title: "REQUIREMENTS",
    desc: "We dig into your goals, users, and competition. Deep brief. Clear scope. No guesswork.",
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Wireframes to high-fidelity designs. Every screen signed off before we write a line of code.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Sprints. Weekly demos. Real code, real feedback. You're in the loop the whole way.",
  },
  {
    num: "04",
    title: "TEST",
    desc: "Cross-device QA. Performance audits. We don't ship bugs — we ship confidence.",
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "Zero-downtime deployment. Monitoring live. 30-day post-launch support included.",
  },
] as const;

// ── WHY US ────────────────────────────────────────────────────
export const WHY_ITEMS = [
  {
    icon: "⚡",
    title: "FAST TURNAROUND",
    desc: "MVPs in 2–4 weeks. Full products in 6–12 weeks. We move fast without cutting corners.",
  },
  {
    icon: "🎯",
    title: "NO TEMPLATE BS",
    desc: "Every project is custom-built. You get a product tailored to your exact needs.",
  },
  {
    icon: "🔄",
    title: "TRANSPARENT PROCESS",
    desc: "Weekly updates. Shared Notion. You always know exactly where your money is going.",
  },
  {
    icon: "🛡️",
    title: "POST-LAUNCH SUPPORT",
    desc: "30 days of free post-launch support on every project. We don't disappear after we ship.",
  },
  {
    icon: "📐",
    title: "PIXEL PERFECT",
    desc: "We sweat the details. Every margin, every animation, every interaction — dialled in.",
  },
  {
    icon: "🔐",
    title: "SECURITY MINDED",
    desc: "Security isn’t optional.Best practices baked in to keep your product and users safe.",
  },
  {
    icon: "🎯",
    title: "CONVERSION DRIVEN",
    desc: "Design that actually converts.Every section, CTA, and flow is crafted to turn visitors into users.",
  },
  {
    icon: "🧩",
    title: "MODULAR ARCHITECTURE",
    desc: "Flexible, reusable, future-ready.We build systems that are easy to scale, update, and expand anytime.",
  },
] as const;

// ── TESTIMONIALS ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Literally the best dev team I've worked with. They delivered ahead of schedule and the product looked even better than the designs.",
    name: "DEV MAHIDA",
    company: "STU, CKP",
    initials: "DV",
  },
  {
    quote:
      "PIXELFORGEX took our ugly old site and turned it into something we're genuinely proud to show investors. Revenue is up 30% since launch.",
    name: "PRATHAM SHAH",
    company: "Founder, PSEDITS",
    initials: "PS",
  },
  {
    quote:
      "Clear communication, great code quality, and zero drama. That's rare. We've hired them for three projects and will keep coming back.",
    name: "MITHILA PAREKH",
    company: "FACULTY, CKP COLLEGE",
    initials: "MP",
  },
  {
    quote:
      "They built our entire app in 6 weeks. The code is clean, documented, and our in-house team could pick it up immediately. 10/10.",
    name: "DARSH MOHILE",
    company: "STU, CKP",
    initials: "DM",
  },
  {
    quote:
      "The UI they designed feels premium without being pretentious. Our clients compliment the website more than they compliment our actual product.",
    name: "KRSHI PATEL",
    company: "TEAM LEAD, SMARTMED",
    initials: "KP",
  },
] as const;

// ── TICKER ────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  "WEB DESIGN",
  "APP DEVELOPMENT",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "SAAS PRODUCTS",
  "API INTEGRATION",
  "MOBILE APPS",
  "BRANDING",
] as const;

// ── NAV LINKS ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Web & App", href: "/web-app" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Work", href: "/web-app#portfolio" },
  { label: "Contact", href: "/#contact" },
] as const;

// ── FOOTER COLUMNS ────────────────────────────────────────────
export const FOOTER_COLUMNS = [
  {
    title: "SERVICES",
    links: [
      { label: "Web Development", href: "/web-app" },
      { label: "App Development", href: "/web-app" },
      { label: "UI/UX Design", href: "/web-app" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "NFC Cards", href: "/digital-marketing#nfc-cards" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Projects", href: "/web-app#portfolio" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
] as const;

// ── DIGITAL MARKETING: SERVICES ─────────────────────────────────
export const DM_SERVICES = [
  {
    num: "01",
    icon: "📱",
    accent: "#E1306C",
    title: "PLATFORM MANAGEMENT",
    desc: "Complete, hands-on management of Instagram, Facebook, Google My Business (with SEO), and YouTube — one team owning your whole presence.",
    tags: ["Instagram", "Facebook", "GMB / SEO", "YouTube"],
  },
  {
    num: "02",
    icon: "🗓️",
    accent: "#8B5CF6",
    title: "CONTENT STRATEGY & CALENDAR",
    desc: "Monthly content strategy and calendar planning so every post has a reason to exist — not just filler to hit a quota.",
    tags: ["Strategy", "Calendar Planning", "Brand Consistency"],
  },
  {
    num: "03",
    icon: "🎨",
    accent: "#14B8A6",
    title: "CREATIVE PRODUCTION",
    desc: "Professional graphic design, reel editing, motion graphics, and caption writing — produced in-house, not templated.",
    tags: ["Graphic Design", "Reel Editing", "Motion Graphics", "Captions"],
  },
  {
    num: "04",
    icon: "🔍",
    accent: "#E8A33D",
    title: "GROWTH & OPTIMIZATION",
    desc: "Hashtag research, profile optimization, scheduling & publishing, audience engagement, and organic growth strategy.",
    tags: ["Hashtag Research", "Scheduling", "Engagement", "Organic Growth"],
  },
  {
    num: "05",
    icon: "📊",
    accent: "#0A84FF",
    title: "PERFORMANCE MARKETING",
    desc: "Complete Meta and Google Ads management — campaign planning, audience targeting, budget optimization, and monthly reporting.",
    tags: ["Meta Ads", "Google Ads", "Lead Gen", "Reporting"],
  },
  {
    num: "06",
    icon: "📈",
    accent: "#F2725A",
    title: "MONTHLY REPORTING",
    desc: "Clear, honest performance monitoring every month — no vanity metrics, just what actually moved and what we're doing next.",
    tags: ["Analytics", "Monthly Reports", "Transparency"],
  },
] as const;

// ── DIGITAL MARKETING: MONTHLY DELIVERABLES ─────────────────────
export const DM_DELIVERABLES = [
  {
    title: "Creative Social Posts",
    items: ["Offer & promotional creatives", "Festival & seasonal campaigns", "Customer engagement posts"],
  },
  {
    title: "Professional Reels",
    items: ["Personal brand reels", "Customer experience videos", "Behind-the-scenes content", "Trend-based reels", "Promotional videos"],
  },
  {
    title: "Video & Motion",
    items: ["Creative video editing", "High-quality motion graphics", "Brand awareness creatives", "Informative content"],
  },
] as const;

// ── DIGITAL MARKETING: PROCESS ───────────────────────────────────
export const DM_PROCESS_STEPS = [
  {
    num: "01",
    title: "AUDIT",
    desc: "We look at what's there — content, engagement, ad history — and figure out what's actually working.",
  },
  {
    num: "02",
    title: "STRATEGY",
    desc: "A content calendar and platform plan built around your goals, not a generic template.",
  },
  {
    num: "03",
    title: "PRODUCTION",
    desc: "Posts, reels, and creatives get made — designed, edited, captioned, ready to publish.",
  },
  {
    num: "04",
    title: "PUBLISH & ENGAGE",
    desc: "Scheduled, posted, and actively managed — replies, comments, and community, not just uploads.",
  },
  {
    num: "05",
    title: "REPORT & OPTIMIZE",
    desc: "Monthly performance review. What moved, what didn't, what we're changing next month.",
  },
] as const;

// ── DIGITAL MARKETING: CLIENT WORK ───────────────────────────────
// Real accounts we manage or have managed. No fabricated metrics —
// only what's publicly verifiable or explicitly confirmed. Add real
// numbers here as soon as they're available.
export const DM_CLIENTS = [
  {
    name: "Samarth Diam",
    handle: "@samarthdiam_official",
    url: "https://www.instagram.com/samarthdiam_official/",
    niche: "Fancy colored diamonds",
    scope: "Instagram content, brand consistency, and profile positioning for a premium diamond house.",
    color: "#8FB8FF",
  },
  {
    name: "WomaNews",
    handle: "@womanews.official",
    url: "https://www.instagram.com/womanews.official/",
    niche: "Women entrepreneur media brand",
    scope: "Content strategy and platform management for a media brand spotlighting women entrepreneurs.",
    color: "#F472B6",
  },
  {
    name: "Tusshar Agarwal",
    handle: "@tussharagarwal_",
    url: "https://www.instagram.com/tussharagarwal_/",
    niche: "Personal brand",
    scope: "Personal brand content strategy, reel editing, and consistent posting.",
    color: "#FBBF24",
  },
  {
    name: "Just a Path",
    handle: "@just.a.path",
    url: "https://www.instagram.com/just.a.path/",
    niche: "Brand content",
    scope: "Ongoing content production and profile management.",
    color: "#4ADE80",
  },
] as const;

export const DM_TICKER_ITEMS = [
  "INSTAGRAM MANAGEMENT",
  "CONTENT STRATEGY",
  "REEL EDITING",
  "GOOGLE MY BUSINESS",
  "META ADS",
  "GOOGLE ADS",
  "SEO",
  "NFC CARDS",
] as const;

// ── NFC CARDS ─────────────────────────────────────────────────
// Pricing and specs pending real data — kept honest, no invented numbers.
export const NFC_FEATURES = [
  {
    title: "TAP TO SHARE",
    desc: "One tap shares your contact card, social links, portfolio, or business page — no app required for the person receiving it.",
  },
  {
    title: "FULLY CUSTOM DESIGN",
    desc: "Your branding, your finish. Designed in-house to match how you actually present yourself.",
  },
  {
    title: "UPDATE ANYTIME",
    desc: "Change what the card links to without reprinting — your card, always current.",
  },
] as const;
