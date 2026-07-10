export type Locale = "en" | "es";

/** Every user-facing string carries both languages; the type enforces completeness. */
export type Localized = Record<Locale, string>;

export type Social = {
  platform: "github" | "linkedin" | "figma";
  label: string;
  url: string;
};

export type LanguageSkill = {
  name: Localized;
  level: Localized;
};

export type Profile = {
  name: string;
  shortName: string;
  headline: Localized;
  summary: Localized;
  location: Localized;
  email: string;
  phone: string;
  website: string;
  avatar: string;
  socials: Social[];
  /** Paths to the downloadable CV per language (populated by the job-hunter pipeline). */
  cv: Record<Locale, string>;
  languages: LanguageSkill[];
};

export type Skill = {
  name: string;
  designation: Localized;
  blurb: Localized;
  image: string;
  /** ATS/CV matching keywords — not rendered on the site. */
  keywords: string[];
};

export type SoftSkill = {
  title: Localized;
  description: Localized;
};

export type TechIconKey =
  | "javascript"
  | "typescript"
  | "react"
  | "react-native"
  | "nextjs"
  | "astro"
  | "vite"
  | "tailwind"
  | "sass"
  | "python"
  | "django"
  | "kotlin"
  | "android"
  | "aws"
  | "docker"
  | "vercel"
  | "database"
  | "cloud"
  | "mobile"
  | "barcode"
  | "cast"
  | "world"
  | "microphone"
  | "music"
  | "video"
  | "subtitles";

export type ProjectTech = {
  icon: TechIconKey;
  label: string;
};

export type ProjectStatus = {
  label: Localized;
  tone: "green" | "amber";
};

export type CaseStudy = {
  problem: Localized;
  decision: Localized;
  result: Localized;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: Localized;
  /** Icons shown next to the short description in the list row. */
  icons: TechIconKey[];
  status?: ProjectStatus;
  images: string[];
  links: {
    live?: string;
    code?: string;
  };
  isPrivate: boolean;
  year: number;
  tech: ProjectTech[];
  summary: Localized;
  features: Localized[];
  /** Problem → decision → result narrative (positioning.md §7.3); rendered in the expanded card. */
  caseStudy?: CaseStudy;
  /** CV-ready achievement bullets — not rendered on the site. */
  highlights: Localized[];
};

export type ExperienceEntry = {
  company: string;
  role: Localized;
  location: Localized;
  /** ISO year-month; end null = present. */
  start: string;
  end: string | null;
  achievements: Localized[];
};

export type Education = {
  degree: Localized;
  institution: string;
  /** Graduation year (degree issued). */
  graduated?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  /** ISO date of issuance. */
  date?: string;
  credentialId?: string;
};

export type TimelinePhaseImage = {
  src: string;
  alt: string;
};

export type TimelinePhase = {
  id: "past" | "present" | "future";
  title: Localized;
  body: Localized;
  images: TimelinePhaseImage[];
};
