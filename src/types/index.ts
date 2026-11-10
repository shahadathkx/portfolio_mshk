export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "Full Stack" | "Frontend" | "Backend / API" | "Engineering";
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: "Proficient" | "Advanced" | "Intermediate";
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  location: string;
  type: "Education" | "Experience" | "Leadership & Hackathon";
  description: string;
  highlights: string[];
  badges: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    roles: string[];
    bio: string;
    aboutLong: string[];
    email: string;
    location: string;
    status: {
      available: boolean;
      text: string;
    };
    socials: {
      github: string;
      linkedin: string;
      twitter?: string;
      email: string;
    };
    resumeUrl: string;
    stats: {
      label: string;
      value: string;
      subtext: string;
    }[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
}
