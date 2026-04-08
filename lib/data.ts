// ─────────────────────────────────────────────────────────────
//  PIXELFORGEX.DEV  ·  Site Data  (v0.3 — slug fix)
//  Edit this file to update content across the entire website.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name:         "PIXELFORGEX.DEV",
  email:        "pixelforgex.dev@gmail.com",
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
    id: "pixelforgex-developer",
    category: "WEB DEVELOPMENT / CORPORATE REAL ESTATE WEBSITE",
    name: "PIXELFORGEX DEVELOPER WEBSITE",
    desc: "A modern, responsive multi-page website built to showcase a premium eco-luxury real estate developer with a polished buyer journey.",
    color: "#00FFFF", bgFrom: "#0E1620", bgTo: "#0B0F14",
    techColors: ["#00FFFF", "#FFE600", "#00FF41"],
    tags: ["WEB"],
  },
  {
    id: "beauty-atelier",
    category: "FULL-STACK WEB DEVELOPMENT / E-COMMERCE",
    name: "BEAUTY ATELIER E-COMMERCE PLATFORM",
    desc: "A full-stack MERN e-commerce platform crafted to deliver a premium shopping experience for luxury beauty and skincare products.",
    color: "#FF9ECF", bgFrom: "#22141D", bgTo: "#130E14",
    techColors: ["#FF9ECF", "#FFE6F2", "#C86BFA"],
    tags: ["WEB", "E-COM"],
  },
] as const;

// ── PROCESS ───────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { num: "01", title: "REQUIREMENTS", desc: "We dig into your goals, users, and competition. Deep brief. Clear scope. No guesswork." },
  { num: "02", title: "DESIGN",    desc: "Wireframes to high-fidelity designs. Every screen signed off before we write a line of code." },
  { num: "03", title: "BUILD",     desc: "Sprints. Weekly demos. Real code, real feedback. You're in the loop the whole way." },
  { num: "04", title: "TEST",      desc: "Cross-device QA. Performance audits. We don't ship bugs — we ship confidence." },
  { num: "05", title: "LAUNCH",    desc: "Zero-downtime deployment. Monitoring live. 30-day post-launch support included." },
] as const;

// ── TEAM ──────────────────────────────────────────────────────
export const TEAM = [
  {
    name: "DHRUVIN PARMAR",
    role: "APP DEVLOPMENT LEAD",
    bio: "Early in the journey, but strong on fundamentals. Focused on building fast, scalable apps with clean architecture and real-world impact.",
    avatarPalette: ["#00FFFF", "#0088AA", "#004455", "#001122"],
    links: [{ label: "GH", href: "#" }, { label: "LI", href: "#" }, { label: "TW", href: "#" }],
  },
  {
    name: "MOKSH SHAH",
    role: "LEAD UI/UX DESIGNER",
    bio: "New to the field, but design runs deep. Obsessed with user behavior, clean interfaces, and crafting experiences that just feel right.",
    avatarPalette: ["#FF00FF", "#AA0088", "#550044", "#220011"],
    links: [{ label: "BE", href: "#" }, { label: "DR", href: "#" }, { label: "LI", href: "#" }],
  },
  {
    name: "VIRAL KHAMBHATI",
    role: "WEB DEVELOPMENT LEAD",
    bio: "Fresher by experience, sharp by skill. Builds responsive, reliable web solutions with a strong grip on modern development practices.",
    avatarPalette: ["#00FF41", "#008822", "#004411", "#001100"],
    links: [{ label: "GH", href: "#" }, { label: "PH", href: "#" }, { label: "LI", href: "#" }],
  },
] as const;

// ── WHY US ────────────────────────────────────────────────────
export const WHY_ITEMS = [
  { icon: "⚡", title: "FAST TURNAROUND",     desc: "MVPs in 2–4 weeks. Full products in 6–12 weeks. We move fast without cutting corners." },
  { icon: "🎯", title: "NO TEMPLATE BS",      desc: "Every project is custom-built. You get a product tailored to your exact needs." },
  { icon: "🔄", title: "TRANSPARENT PROCESS", desc: "Weekly updates. Shared Notion. You always know exactly where your money is going." },
  { icon: "🛡️", title: "POST-LAUNCH SUPPORT", desc: "30 days of free post-launch support on every project. We don't disappear after we ship." },
  { icon: "📐", title: "PIXEL PERFECT",        desc: "We sweat the details. Every margin, every animation, every interaction — dialled in." },
  { icon: "🔐", title: "SECURITY MINDED",       desc: "Security isn’t optional.Best practices baked in to keep your product and users safe." },
  { icon: "🎯", title: "CONVERSION DRIVEN",        desc: "Design that actually converts.Every section, CTA, and flow is crafted to turn visitors into users." },
  { icon: "🧩", title: "MODULAR ARCHITECTURE",       desc: "Flexible, reusable, future-ready.We build systems that are easy to scale, update, and expand anytime." },
] as const;

// ── TESTIMONIALS ──────────────────────────────────────────────
export const TESTIMONIALS = [
  { quote: "Literally the best dev team I've worked with. They delivered ahead of schedule and the product looked even better than the designs.", name: "DEV MAHIDA",  company: "STU, CKP",     initials: "DV" },
  { quote: "PIXELFORGEX took our ugly old site and turned it into something we're genuinely proud to show investors. Revenue is up 30% since launch.", name: "PRATHAM SHAH",   company: "Founder, PSEDITS", initials: "PS" },
  { quote: "Clear communication, great code quality, and zero drama. That's rare. We've hired them for three projects and will keep coming back.", name: "MITHILA PAREKH",  company: "FACULTY, CKP COLLEGE", initials: "MP" },
  { quote: "They built our entire app in 6 weeks. The code is clean, documented, and our in-house team could pick it up immediately. 10/10.", name: "DARSH MOHILE", company: "STU, CKP", initials: "DM" },
  { quote: "The UI they designed feels premium without being pretentious. Our clients compliment the website more than they compliment our actual product.", name: "KRSHI PATEL", company: "TEAM LEAD, SMARTMED",  initials: "KP" },
] as const;

// ── TICKER ────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  "WEB DESIGN","APP DEVELOPMENT","UI/UX DESIGN","E-COMMERCE",
  "SAAS PRODUCTS","API INTEGRATION","MOBILE APPS","BRANDING",
] as const;

// ── NAV LINKS ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services",     href: "#services"  },
  { label: "Projects",     href: "#portfolio" },
  { label: "About",        href: "#about"     },
  { label: "Team",         href: "#team"      },
  { label: "Contact",      href: "#contact"   },
  { label: "My Projects",  href: "/work"      },
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
      { label: "Projects",    href: "#portfolio"  },
      { label: "How We Work", href: "#process"    },
      { label: "Contact",     href: "#contact"    },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
] as const;
