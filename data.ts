
import { Experience, Project, SkillGroup, Education } from './types';

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Redux", "ShadCN"]
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "Express.js", "Prisma", "MongoDB"]
  },
  {
    category: "Cloud & Deployment",
    skills: ["Vercel", "Expo", "EAS Hosting", "Google Play Console"]
  },
  {
    category: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Hyper", "Cursor"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Jr. Software Developer",
    company: "BrandTouch & Analytics Private Limited",
    period: "02/2025 – Present",
    location: "Mumbai, India",
    highlights: [
      "Developed and deployed CYNQ mobile app using React Native & Expo with OTP-based login and real-time dashboards.",
      "Implemented Role-Based Access Control (RBAC) across platforms, reducing permission issues by 90%.",
      "Published to Play Store and deployed iOS web version via EAS Hosting with 100% code reuse.",
      "Created reusable dynamic table and dashboard components, improving dev efficiency by 60%."
    ],
    projects: [
      {
        name: "CYNQ Mobile App",
        description: "Enabling 1000+ promoters to securely log in, with real-time updates and force-update logic."
      },
      {
        name: "Admin Dashboard",
        description: "Built with ShadCN and ApexCharts, providing dynamic visual analytics used across 9+ internal tools."
      }
    ]
  },
  {
    role: "Full Stack Intern",
    company: "WiStride",
    period: "08/2024 – 01/2025",
    location: "Mumbai, India",
    highlights: [
      "Contributed to company website redesign using Tailwind CSS and Next.js, improving mobile responsiveness by 30%.",
      "Reduced bounce rate by ~25% through UI optimizations.",
      "Integrated APIs and built modular Ant Design components, reducing new page development time by 40%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SavePass",
    description: "A secure, full-stack password management solution with end-to-end focus on user data privacy and accessibility.",
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    features: [
      "Secure credential storage",
      "Responsive CRUD functionality",
      "Optimized user flow for password records"
    ],
    link: "#"
  },
  {
    title: "DoIt",
    description: "High-performance task management application designed for scale, handling hundreds of concurrent tasks with ease.",
    tech: ["React", "Redux", "Tailwind CSS"],
    features: [
      "Smart categorization (Today, Important, Planned)",
      "Dark/light theme toggle",
      "Dynamic grid and list views",
      "State management for 200+ tasks"
    ],
    link: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor Of Engineering in IT",
    institution: "Atharva College of Engineering",
    score: "8.26 CGPI",
    period: "2020 – 2024"
  }
];
