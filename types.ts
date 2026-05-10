
export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  projects?: {
    name: string;
    description: string;
  }[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  githubLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
}
