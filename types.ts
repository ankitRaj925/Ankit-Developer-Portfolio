export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SkillItem {
  name: string;
  iconUrl: string; // URL to simpleicons CDN
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface NavItem {
  label: string;
  href: string;
}