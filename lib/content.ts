/* ============================================================
   Typed content — all copy lives here, never inlined in JSX.
   Rich text uses RichText: a string, or an array of segments
   where { b: "..." } renders bold (accent/ink per context).
   ============================================================ */

export type RichSegment = string | { b: string };
export type RichText = RichSegment[];

export type IconName =
  | "frontend"
  | "mobile"
  | "styling"
  | "state"
  | "backend"
  | "tooling";

export interface SkillCard {
  icon: IconName;
  title: string;
  chips: string[];
}

export type ProjectVisual =
  | { kind: "browser"; domain: string; placeholder: string; src?: string }
  | { kind: "phones"; screens: { placeholder: string; src?: string }[] };

export interface Project {
  index: string;
  title: string;
  role: string;
  desc: RichText;
  stack: string[];
  href: string;
  linkLabel: string;
  visual: ProjectVisual;
  flip: boolean;
}

export interface ExperienceItem {
  when: string;
  where: string;
  role: string;
  company: string;
  bullets: string[];
  stack: string[];
}

export interface Fact {
  k: string;
  v: string;
}

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin";
}

/* ---- hero ---- */
export const hero = {
  status: "Available for remote & international roles",
  firstName: "Farhan",
  lastName: "Aslam",
  role: "Senior Front-End & Mobile Engineer",
  pitch: [
    "I build high-performance, scalable ",
    { b: "web & mobile products" },
    " — from real-time trading dashboards to cross-platform apps. React, Next.js, Vue & React Native.",
  ] as RichText,
  meta: [
    { n: "5+", l: "Years experience" },
    { n: "15+", l: "Products shipped" },
    { n: "4", l: "Engineers led" },
    { n: "Lahore, PK", l: "Remote-first · UTC+5" },
  ],
};

export const marqueeItems = [
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Material UI",
  "Redux Toolkit",
  "TanStack Query",
  "Firebase",
  "Node.js",
  "GraphQL",
  "Jest",
  "Figma",
];

/* ---- about ---- */
export const about = {
  lead: [
    "Senior Front-End Engineer with ",
    { b: "5+ years" },
    " building production-grade SaaS platforms, real-time trading dashboards, and cross-platform mobile apps.",
  ] as RichText,
  body:
    "Deep expertise in React, Next.js, Vue.js, and React Native with TypeScript. I care about component architecture, performance (lazy loading, code-splitting, render optimisation), and clean design-to-code translation. I've led small engineering teams, mentored juniors, and worked shoulder-to-shoulder with product and design to ship reliable interfaces on tight timelines.",
  photoPlaceholder: "Drop your photo",
  tag: "Open to work",
  facts: [
    { k: "Focus", v: "Web & Mobile front-end" },
    { k: "Core", v: "React · Next.js · React Native" },
    { k: "Also", v: "Vue · Nuxt · TypeScript" },
    { k: "Education", v: "BS Computer Science, GCU" },
  ] as Fact[],
};

/* ---- skills ---- */
export const skillsIntro = {
  eyebrow: "Skills",
  heading: "The tools I work with",
  lead: "Five years across product teams — front-end at the core, full-stack when it counts.",
};

export const skills: SkillCard[] = [
  {
    icon: "frontend",
    title: "Frontend",
    chips: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript ES2022+", "HTML5", "CSS3"],
  },
  {
    icon: "mobile",
    title: "Mobile",
    chips: ["React Native", "iOS & Android", "Firebase", "Push Notifications", "FCM"],
  },
  {
    icon: "styling",
    title: "Styling",
    chips: ["Tailwind CSS", "Material UI", "Vuetify", "SCSS / SASS", "Responsive Design"],
  },
  {
    icon: "state",
    title: "State Management",
    chips: ["Redux Toolkit", "Context API", "TanStack Query", "Pinia", "Zustand"],
  },
  {
    icon: "backend",
    title: "Backend & APIs",
    chips: ["Node.js", "Express", "Django", "REST", "WebSocket", "GraphQL", "Firebase"],
  },
  {
    icon: "tooling",
    title: "Tooling & Workflow",
    chips: ["Git", "GitHub Actions", "CI/CD", "Jest / TDD", "Figma", "Jira", "Agile / SCRUM"],
  },
];

/* ---- work ---- */
export const workIntro = {
  eyebrow: "Selected Work",
  heading: "Products I've built",
  lead: "A few of the platforms and apps I've shipped.",
};

export const projects: Project[] = [
  {
    index: "01 / Prop Trading Platform",
    title: "Funded Futures",
    role: "Front-End Engineer · Dashboard Systems",
    desc: [
      "A proprietary prop-trading platform with ",
      { b: "6 specialised dashboards" },
      " — Crypto, Futures, Admin, Client, Risk & Live Trading. Real-time market feeds and P&L tracking via TanStack Query, role-based access control, and secure PayPal + custom-gateway funding flows.",
    ],
    stack: ["Next.js", "TypeScript", "Material UI", "TanStack Query", "WebSocket", "RBAC"],
    href: "https://www.fundedfuturesfamily.com/",
    linkLabel: "Visit fundedfuturesfamily.com",
    visual: { kind: "browser", domain: "fundedfuturesfamily.com", placeholder: "Funded Futures screenshot", src: "/FFF.png" },
    flip: false,
  },
  {
    index: "02 / Automotive Web & Mobile",
    title: "CAT Auto Tech",
    role: "Front-End Developer · Mobile & Web",
    desc: [
      "A cross-platform automotive solution — ",
      { b: "React Native mobile + Next.js web" },
      " — unifying vehicle management, service history, and maintenance scheduling. Appointment booking, review systems, real-time Firebase sync, and role-based access for owners, providers & admins.",
    ],
    stack: ["React Native", "Next.js", "Firebase", "TypeScript", "Responsive"],
    href: "https://catautotech.com",
    linkLabel: "Visit catautotech.com",
    visual: { kind: "phones", screens: [{ placeholder: "App screen 1", src: "/CAT/image1.png" }, { placeholder: "App screen 2", src: "/CAT/image2.png" }] },
    flip: true,
  },
  {
    index: "03 / QA & Testing Automation",
    title: "TestFiesta",
    role: "Full-Stack Developer",
    desc: [
      "A full-stack QA companion — ",
      { b: "Vue.js + Vuetify front-end, Django back-end" },
      " — for managing test cases, suites, and bug tracking with custom fields and priority workflows. Real-time collaboration, visual coverage dashboards, and Firebase Cloud Storage for test artefacts.",
    ],
    stack: ["Vue.js", "Vuetify", "Django", "Pinia", "Firebase"],
    href: "https://testfiesta.com",
    linkLabel: "Visit testfiesta.com",
    visual: { kind: "browser", domain: "testfiesta.com", placeholder: "TestFiesta screenshot", src: "/testFiesta.png" },
    flip: false,
  },
  {
    index: "04 / Social Networking App",
    title: "Kollapp",
    role: "Mobile Developer",
    desc: [
      "A cross-platform social networking app — ",
      { b: "React Native + Firebase" },
      " — with real-time messaging, live status updates, and instant content sync via Firestore. Secure email + social auth, FCM push notifications, and a consistent Material Design UI tuned for smooth scrolling on iOS & Android.",
    ],
    stack: ["React Native", "Firestore", "FCM", "Material Design", "Social Auth"],
    href: "https://kollapp.com",
    linkLabel: "Visit kollapp.com",
    visual: { kind: "phones", screens: [{ placeholder: "App screen 1", src: "/koll/image1.png" }, { placeholder: "App screen 2", src: "/koll/image2.png" }] },
    flip: true,
  },
];

/* ---- experience ---- */
export const experienceIntro = {
  eyebrow: "Experience",
  heading: "Where I've worked",
};

export const experience: ExperienceItem[] = [
  {
    when: "2025 — Present",
    where: "Remote",
    role: "Front-End Engineer",
    company: "Funded Futures Family",
    bullets: [
      "Lead front-end of a prop-trading platform with 6 specialised dashboards (Crypto, Futures, Admin, Client, Risk, Live Trading) in Next.js, TypeScript & Material UI.",
      "Built real-time market feeds and P&L tracking with TanStack Query; architected role-based access control for admins, clients & traders.",
      "Integrated secure payment processing (PayPal + custom gateway) and real-time alert systems for trade execution and risk monitoring.",
    ],
    stack: ["Next.js", "TypeScript", "Material UI", "TanStack Query"],
  },
  {
    when: "2023 — 2025",
    where: "Lahore, Pakistan",
    role: "Senior Frontend Developer",
    company: "SveaSoft",
    bullets: [
      "Built responsive web & cross-platform mobile apps with React, React Native & Next.js — reaching 95% user satisfaction.",
      "Architected scalable SPA structure with Redux Toolkit & Context API, cutting code redundancy 25%; reduced initial load 20% via lazy loading & code-splitting.",
      "Led a team of 4 front-end engineers — code reviews, mentoring & agile sprint planning that delivered 15% ahead of schedule.",
    ],
    stack: ["React", "React Native", "Redux Toolkit", "Firebase"],
  },
  {
    when: "2021 — 2023",
    where: "Lahore, Pakistan",
    role: "Frontend Web Developer",
    company: "LinkedMatrix",
    bullets: [
      "Built dynamic, responsive web apps in React, JavaScript & TypeScript with full cross-browser compatibility.",
      "Created reusable UI component libraries with Tailwind CSS & SCSS, reducing styling effort 30%.",
      "Implemented Redux state management and WebSocket integration for real-time features; streamlined CI/CD with Git & Jira.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "WebSocket"],
  },
];

/* ---- education / extras ---- */
export const education = {
  label: "Education",
  degree: "Bachelor of Computer Science",
  sub: "Government College University · Lahore, Pakistan",
  meta: "2017 — 2021",
  note: "Relevant coursework: Web Engineering, Data Structures & Algorithms, Mobile Application Development, Software Engineering.",
};

export const goodToKnow = {
  label: "Good to know",
  rows: [
    { k: "Languages", v: "English (Pro) · Urdu (Native)" },
    { k: "Availability", v: "Remote · Contract · Full-time" },
    { k: "Work auth", v: "Visa sponsorship for on-site" },
    { k: "Methods", v: "Agile · TDD · Design-to-Code" },
  ] as Fact[],
};

/* ---- contact ---- */
export const contact = {
  eyebrow: "Contact",
  heading: ["Let's build something", "worth shipping."],
  sub: "Open to remote, contract, and full-time international roles. I usually reply within a day.",
  email: "imfarhaan003@gmail.com",
  phone: "+92 303-815-0896",
  phoneHref: "tel:+923038150896",
  socials: [
    { label: "github.com/farhan0000", href: "https://github.com/farhan0000", icon: "github" },
    { label: "linkedin.com/in/farhan-aslam", href: "https://linkedin.com/in/farhan-aslam-732978202", icon: "linkedin" },
  ] as Social[],
};

export const footer = {
  left: "© 2026 Farhan Aslam",
  right: "Senior Front-End & Mobile Engineer · Lahore, PK",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
