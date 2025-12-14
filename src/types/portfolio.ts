export interface NavItem {
  label?: string;
  href: string;
  external?: boolean;
  noUnderline?: boolean;
  iconClass?: string;
}

export interface Navigation {
  logo: string;
  logoAccent: string;
  links: NavItem[];
}

export interface Achievement {
  label: string;
  href?: string;
  suffix?: string;
}

export interface IntroLink {
  label: string;
  href: string;
}

export interface Intro {
  text: string;
  link?: IntroLink;
}

export interface Hero {
  intro: Intro;
  subtitle: string;
  achievements: Achievement[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  implementation?: string[];
  techStack?: string[];
  url: string;
  backgroundImage: string;
  backgroundColor: string;
  featured?: boolean;
  extraClasses?: string[];
}

export interface About {
  title: string;
  paragraphs: string[];
}

export interface TechCategory {
  label: string;
  items: string;
}

export interface Tech {
  title: string;
  categories: TechCategory[];
}

export interface EducationItem {
  label: string;
  detail: string;
  description?: string;
  stars?: number;
  suffix?: string;
}

export interface Education {
  title: string;
  items: EducationItem[];
}

export interface PortfolioData {
  navigation: Navigation;
  hero: Hero;
  projects: Project[];
  about: About;
  tech: Tech;
  education: Education;
}
