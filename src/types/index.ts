export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  challenges: string;
  solution: string;
  impact: string;
  github: string;
  live: string;
  image: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
  description?: string;
}

export interface Activity {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}
