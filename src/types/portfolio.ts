export type ThemeType =
  | "obsidian-gold"
  | "emerald-rose"
  | "sapphire-ice"
  | "minimal-alabaster";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
  read?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  mediaType: "image" | "video";
  mediaUrl: string;
  rotation360Images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  list: string[];
}

export interface HeroData {
  name: string;
  badge: string;
  status: string;
  headline: string;
  subheadline: string;
  bio: string;
  avatarUrl: string;
  rotation360Images?: string[];
  resumeUrl?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
}

export interface PortfolioData {
  adminPasscode?: string;
  theme: ThemeType;
  navbar?: {
    brandMonogram?: string;
    brandTitle?: string;
    navOverview?: string;
    navProjects?: string;
    navSkills?: string;
    navContact?: string;
  };
  hero: HeroData;
  projectsCopy?: {
    badge?: string;
    heading?: string;
    subheading?: string;
  };
  projects: Project[];
  skillsCopy?: {
    badge?: string;
    heading?: string;
    subheading?: string;
  };
  skills: SkillCategory[];
  githubCopy?: {
    badge?: string;
    heading?: string;
    placeholder?: string;
    buttonText?: string;
  };
  githubUsername?: string;
  contactCopy?: {
    badge?: string;
    heading?: string;
    subheading?: string;
    formTitle?: string;
    formSubtitle?: string;
    buttonText?: string;
    successMessage?: string;
    footerCopyright?: string;
    footerStatus?: string;
  };
  contact: {
    email: string;
    phone: string;
    telegram: string;
    instagram: string;
  };
  aiCopy?: {
    title?: string;
    subtitle?: string;
    greeting?: string;
    inputPlaceholder?: string;
  };
  aiInstructions?: string;
  resumePdfName?: string;
  resumePdfText?: string;
  messages?: ContactMessage[];
}