import type { Profile } from "./types";

export const profile: Profile = {
  name: "Juan Miguel Fernández Araya",
  shortName: "Juan Miguel",
  headline: {
    en: "Full Stack Software Engineer",
    es: "Ingeniero de Software Full Stack",
  },
  summary: {
    en: "Full stack developer with 3+ years of experience designing, building and deploying scalable web applications.\nSpecialized in Python backends (Django, Flask), modern frontends (React, Next.js) and cloud-native deployments on AWS.",
    es: "Desarrollador full stack con más de 3 años de experiencia diseñando, construyendo y desplegando aplicaciones web escalables.\nEspecializado en backends con Python (Django, Flask), frontends modernos (React, Next.js) y despliegues cloud-native en AWS.",
  },
  location: {
    en: "Alajuela, Costa Rica",
    es: "Alajuela, Costa Rica",
  },
  // TODO(Juan): confirm canonical email — the CV uses this one, the old 3D
  // panel used juan.fernadez.araya@gmail.com.
  email: "fernandezarayajuanmiguel@gmail.com",
  phone: "+506 8655 3812",
  website: "https://www.jfernandezdev.com",
  avatar: "/about/JuanPhoto.webp",
  socials: [
    {
      platform: "github",
      label: "9ero",
      url: "https://github.com/9ero",
    },
    {
      platform: "linkedin",
      label: "juanmiguelfernandeza",
      url: "https://www.linkedin.com/in/juanmiguelfernandeza",
    },
    {
      platform: "figma",
      label: "@midjuan",
      url: "https://www.figma.com/@midjuan",
    },
  ],
  cv: {
    en: "/cv/JuanFernandez_CV_EN.pdf",
    es: "/cv/JuanFernandez_CV_ES.pdf",
  },
  languages: [
    {
      name: { en: "Spanish", es: "Español" },
      level: { en: "Native", es: "Nativo" },
    },
    {
      name: { en: "English", es: "Inglés" },
      level: { en: "Intermediate (B2)", es: "Intermedio (B2)" },
    },
  ],
};
