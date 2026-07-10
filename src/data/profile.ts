import type { Profile } from "./types";

export const profile: Profile = {
  name: "Juan Miguel Fernández Araya",
  shortName: "Juan Miguel",
  headline: {
    en: "Infrastructure & Full Stack Engineer · AI Integration",
    es: "Ingeniero de Infraestructura y Full Stack · Integración de IA",
  },
  summary: {
    en: "Complete solutions that run, stay up and protect your data.\nSystems and infrastructure generalist with full stack development and production AI integration: AWS, Docker, Python and TypeScript/React.\nTechnical Lead — over two years as the primary technical owner of a company's systems.",
    es: "Soluciones completas que funcionan, se mantienen en pie y protegen tus datos.\nGeneralista de sistemas e infraestructura con desarrollo full stack e integración de IA en producción: AWS, Docker, Python y TypeScript/React.\nLíder Técnico — más de dos años como principal responsable técnico de los sistemas de una empresa.",
  },
  location: {
    en: "Alajuela, Costa Rica",
    es: "Alajuela, Costa Rica",
  },
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
