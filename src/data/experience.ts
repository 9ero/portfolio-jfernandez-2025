import type {
  Certification,
  Education,
  ExperienceEntry,
  TimelinePhase,
} from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Grupo Ecoquintas",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    location: {
      en: "Costa Rica (Hybrid)",
      es: "Costa Rica (Híbrido)",
    },
    start: "2024-03",
    end: null,
    achievements: [
      {
        en: "Develop and maintain business-critical systems using Flask, Django, React and Next.js",
        es: "Desarrollo y mantenimiento de sistemas empresariales críticos utilizando Flask, Django, React y Next.js",
      },
      {
        en: "Resolved 200+ critical bugs, improving system stability and reliability",
        es: "Resolución de más de 200 errores críticos, mejorando la estabilidad y confiabilidad de los sistemas",
      },
      {
        en: "Designed and implemented Apache Airflow DAGs to sync data between internal systems and HubSpot CRM",
        es: "Diseño e implementación de DAGs en Apache Airflow para sincronización de datos entre sistemas internos y HubSpot CRM",
      },
      {
        en: "Led the development of a client-facing platform for account statements and financial projections",
        es: "Lideré el desarrollo de una plataforma orientada al cliente para visualización de estados de cuenta y proyecciones",
      },
      {
        en: "Deployed production applications on AWS using Docker and ARM (Graviton) architectures",
        es: "Despliegue de aplicaciones en producción sobre AWS utilizando Docker y arquitecturas ARM (Graviton)",
      },
      {
        en: "Provided technical mentorship and supported architecture decisions within the team",
        es: "Mentoría técnica y apoyo en decisiones de arquitectura dentro del equipo",
      },
    ],
  },
  {
    company: "Freelance",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    location: {
      en: "Costa Rica (Remote)",
      es: "Costa Rica (Remoto)",
    },
    start: "2023-01",
    end: "2024-03",
    achievements: [
      {
        en: "Developed and delivered 4 complete web applications end to end",
        es: "Desarrollo y entrega de 4 aplicaciones web completas de principio a fin",
      },
      {
        en: "Implemented serverless email solutions to improve scalability and communication",
        es: "Implementación de soluciones de correo serverless para mejorar la escalabilidad y comunicación",
      },
      {
        en: "Built robust backend services for request management and SEO analysis",
        es: "Construcción de servicios backend robustos para gestión de solicitudes y análisis SEO",
      },
      {
        en: "Highlight: MabaAgroExport, a commercial platform built with Vite.js, React and Tailwind CSS",
        es: "Proyecto destacado: MabaAgroExport, plataforma comercial desarrollada con Vite.js, React y Tailwind CSS",
      },
    ],
  },
  {
    company: "Cia Web Sites",
    role: {
      en: "Software Engineer Trainee (Internship)",
      es: "Ingeniero de Software Trainee (Pasantía)",
    },
    location: {
      en: "Brazil (Remote)",
      es: "Brasil (Remoto)",
    },
    start: "2022-02",
    end: "2022-12",
    achievements: [
      {
        en: "Worked under Agile/Scrum methodology to meet sprint goals",
        es: "Trabajo bajo metodología Ágil/Scrum para cumplimiento de objetivos por sprint",
      },
      {
        en: "Designed, implemented and tested 20+ new features on the platform",
        es: "Diseño, implementación y pruebas de más de 20 funcionalidades nuevas en la plataforma",
      },
      {
        en: "Collaborated with senior developers to write clean, maintainable and efficient code",
        es: "Colaboración con desarrolladores senior para escribir código limpio, mantenible y eficiente",
      },
    ],
  },
];

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor's Degree in Informatics and Multimedia Technology",
      es: "Bachillerato en Informática y Tecnología Multimedia",
    },
    institution: "Universidad de Costa Rica (UCR)",
  },
];

export const certifications: Certification[] = [
  {
    name: "Linux Essentials",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Leadership Development Experience",
    issuer: "AIESEC",
  },
];

export const timeline: TimelinePhase[] = [
  {
    id: "past",
    title: { en: "Past", es: "Pasado" },
    body: {
      en: "Since the age of 13, amazed by the way elements were designed on the web, I taught myself to create web pages using pure HTML and CSS, and later built some simple applications with Visual Basic. From that moment on, and throughout my university years, I discovered my passion for creating useful and entertaining applications. On one hand, the possibility of creating functional applications for myself, and on the other, bringing my video game and mobile application projects to life.",
      es: "Desde los 13 años, asombrado por cómo se diseñaban los elementos en la web, aprendí por mi cuenta a crear páginas con HTML y CSS puros, y más tarde construí algunas aplicaciones simples con Visual Basic. Desde ese momento, y a lo largo de mis años universitarios, descubrí mi pasión por crear aplicaciones útiles y entretenidas: por un lado, la posibilidad de crear aplicaciones funcionales para mí mismo y, por otro, dar vida a mis proyectos de videojuegos y aplicaciones móviles.",
    },
    images: [
      { src: "about/past1.webp", alt: "the kid in the computer with his dogs" },
      { src: "about/past2.webp", alt: "the kid in the computer" },
    ],
  },
  {
    id: "present",
    title: { en: "Present", es: "Presente" },
    body: {
      en: "I’m a full stack developer with hands-on experience building dynamic web applications using React, Flask, Django, and Next.js. Throughout my career, I’ve designed and implemented complete end-to-end solutions, handling both backend logic and frontend interfaces. I’ve successfully deployed applications on AWS (ARM Graviton infrastructure) and Vercel, following best practices in continuous integration and deployment. My work also involves using technologies like Docker, Git, Tailwind, shadcn/ui, and Aceternity UI to streamline workflows and craft modern, responsive interfaces. I’m currently part of a development team at a real estate company, where I build, maintain, and enhance internal systems and custom web platforms. Additionally, I’ve developed e-commerce solutions and small video games, broadening my range as a developer.",
      es: "Soy un desarrollador full stack con experiencia práctica construyendo aplicaciones web dinámicas con React, Flask, Django y Next.js. A lo largo de mi carrera he diseñado e implementado soluciones completas de punta a punta, manejando tanto la lógica de backend como las interfaces de frontend. He desplegado aplicaciones en AWS (infraestructura ARM Graviton) y Vercel, siguiendo buenas prácticas de integración y despliegue continuos. Mi trabajo también involucra tecnologías como Docker, Git, Tailwind, shadcn/ui y Aceternity UI para agilizar flujos y crear interfaces modernas y responsivas. Actualmente formo parte del equipo de desarrollo de una empresa inmobiliaria, donde construyo, mantengo y mejoro sistemas internos y plataformas web a medida. Además, he desarrollado soluciones de e-commerce y pequeños videojuegos, ampliando mi rango como desarrollador.",
    },
    images: [
      { src: "about/present2.webp", alt: "the man in the computer" },
      { src: "about/present1.webp", alt: "the man dominating technologies" },
      { src: "about/present3.webp", alt: "two men testing a mobile app" },
    ],
  },
  {
    id: "future",
    title: { en: "Future", es: "Futuro" },
    body: {
      en: "Looking ahead, I aspire to join a company that encourages growth and continuous learning, where I can collaborate on challenging projects and learn from experienced professionals. My goal is to keep expanding my knowledge as a software engineer, delving deeper into emerging areas such as data science and machine learning. I’m particularly interested in environments that value innovation, mentorship, and teamwork—places where I can both contribute my skills and evolve through new technologies and experiences.",
      es: "Mirando hacia adelante, aspiro a unirme a una empresa que fomente el crecimiento y el aprendizaje continuo, donde pueda colaborar en proyectos desafiantes y aprender de profesionales con experiencia. Mi meta es seguir expandiendo mi conocimiento como ingeniero de software, profundizando en áreas emergentes como la ciencia de datos y el machine learning. Me interesan especialmente los entornos que valoran la innovación, la mentoría y el trabajo en equipo: lugares donde pueda aportar mis habilidades y evolucionar con nuevas tecnologías y experiencias.",
    },
    images: [
      { src: "about/future1.webp", alt: "the man thinking" },
      { src: "about/future2.webp", alt: "the man with the cyber girl" },
      { src: "about/future3.webp", alt: "the man presenting the statistics" },
    ],
  },
];
