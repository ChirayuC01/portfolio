
import { Experience, Project, SkillGroup, Education } from './types';

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux", "ShadCN"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "DB / ORM",
    skills: ["PostgreSQL", "Prisma", "MongoDB"]
  },
  {
    category: "Auth",
    skills: ["JWT", "RBAC", "AES-256-GCM", "PBKDF2", "OTP Auth"]
  },
  {
    category: "Tooling",
    skills: ["Git", "GitHub", "VS Code", "Cursor"]
  },
  {
    category: "Deployment",
    skills: ["Vercel", "Expo", "EAS Build", "Google Play Console"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Jr. Software Developer",
    company: "BrandTouch & Analytics Private Limited",
    period: "Feb 2025 – Present",
    location: "Mumbai, India",
    highlights: [
      "Built and deployed the CYNQ field ops app (React Native + Expo + TypeScript) serving 100+ active promoters with OTP auth, live dashboards, and force-update logic.",
      "Implemented two-layer Role-Based Access Control (RBAC) across mobile and admin platforms, reducing permission issues by 90%.",
      "Published to Google Play Store via EAS Build and deployed iOS web version with 100% code reuse.",
      "Architected a reusable component library — dynamic tables, chart wrappers, filters — adopted across 9+ admin modules, cutting new-page dev time by 60%.",
      "Built a channel manager analytics dashboard with per-chart server-side filtering, ApexCharts, and batched Prisma queries."
    ],
    projects: [
      {
        name: "CYNQ — Field Ops App",
        description: "React Native + Expo app serving 100+ promoters with OTP login, real-time dashboards, and Play Store deployment."
      },
      {
        name: "CYNQ — Analytics Dashboard",
        description: "ShadCN + ApexCharts admin dashboard with per-chart server-side filtering and batched Prisma queries across 9+ modules."
      }
    ]
  },
  {
    role: "Full Stack Intern",
    company: "WiStride",
    period: "Aug 2024 – Jan 2025",
    location: "Mumbai, India",
    highlights: [
      "Contributed to a full company website redesign with Next.js and Tailwind CSS, improving mobile responsiveness by 30%.",
      "Reduced bounce rate by ~25% through targeted UI/UX optimizations.",
      "Integrated third-party APIs and built modular Ant Design components, cutting new-page development time by 40%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "OrgNest",
    description: "Multi-tenant SaaS platform with enterprise-grade access control. Organizations and their members operate in fully isolated data environments with real-time event streaming.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "SSE"],
    features: [
      "Two-token JWT auth (access + refresh) with secure rotation",
      "Two-layer RBAC — org-level roles and resource-level permissions",
      "Server-Sent Events for real-time updates without WebSockets",
      "10-model PostgreSQL schema with full audit logging"
    ],
    link: "https://org-nest.vercel.app/",
    githubLink: "https://github.com/ChirayuC01/OrgNest"
  },
  {
    title: "SavePass",
    description: "Zero-knowledge password manager where no plaintext ever reaches the server. All encryption and decryption happens client-side using cryptographic primitives in the browser.",
    tech: ["React", "TypeScript", "Express.js", "MongoDB", "Web Crypto API"],
    features: [
      "AES-256-GCM client-side encryption before any network call",
      "PBKDF2 key derivation — master password never transmitted",
      "Secure CRUD for credentials with per-entry IV generation",
      "Zero-knowledge architecture — server stores only ciphertext"
    ],
    link: "https://save-pass-gold.vercel.app/",
    githubLink: "https://github.com/ChirayuC01/save-pass"
  },
  {
    title: "CYNQ — Field Ops App",
    description: "Production React Native app deployed to Google Play Store, built for 100+ field promoters to log in securely, view live dashboards, and receive force-update prompts when new versions ship.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL", "EAS Build"],
    features: [
      "OTP-based authentication with session management",
      "Live promoter dashboards with real-time data sync",
      "Play Store deployment via EAS Build; iOS web version with 100% code reuse",
      "Force-update logic to ensure all field devices stay on latest build"
    ],
    link: "https://play.google.com/store/apps/details?id=com.brandtouchindia.cynqorg&hl=en_IN",
    githubLink: "#"
  },
  {
    title: "CYNQ — Analytics Dashboard",
    description: "Channel manager analytics platform powering internal reporting across 9+ admin modules. Features per-chart server-side filtering, a reusable component library, and batched database queries for snappy load times.",
    tech: ["Next.js", "ShadCN", "ApexCharts", "Prisma", "PostgreSQL", "TypeScript"],
    features: [
      "Per-chart server-side filtering — each chart fetches only its own slice of data",
      "Batched Prisma queries with composite indexes for fast aggregations",
      "Reusable table, chart, and filter components adopted across 9+ modules",
      "Dynamic visual analytics with ApexCharts (bar, line, donut, heatmap)"
    ],
    link: "https://cynq.in/",
    githubLink: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Atharva College of Engineering",
    score: "8.26 CGPI",
    period: "2020 – 2024"
  }
];
