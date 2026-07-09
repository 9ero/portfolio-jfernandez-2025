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
      en: "Technical Lead",
      es: "Líder Técnico",
    },
    location: {
      en: "Costa Rica (Hybrid)",
      es: "Costa Rica (Híbrido)",
    },
    start: "2024-03",
    end: null,
    achievements: [
      {
        en: "Promoted to Technical Lead (June 2026): most of the company's infrastructure decisions have been proposed and implemented by him; the other developers regularly request his guidance for orientation and planning",
        es: "Ascenso a Líder Técnico (junio 2026): la mayoría de las decisiones de infraestructura de la empresa han sido propuestas e implementadas por él; los otros desarrolladores solicitan su orientación y planificación con frecuencia",
      },
      {
        en: "Sole owner of infrastructure, DevOps and data operations in a small development team at a non-software company",
        es: "Único responsable de infraestructura, DevOps y operación de datos en un equipo pequeño de desarrollo, dentro de una empresa que no es de software",
      },
      {
        en: "Stabilized the company's business-critical legacy system: replaced the development server with Gunicorn/Nginx, split a single Docker Compose into separate dev/prod environments (removing a recurring cause of production downtime) and froze unpinned dependencies",
        es: "Estabilización del sistema legacy crítico de la empresa: reemplazo del servidor de desarrollo por Gunicorn/Nginx, separación de un único Docker Compose en entornos dev/prod (eliminando una causa recurrente de caídas en producción) y congelamiento de dependencias sin fijar",
      },
      {
        en: "Migrated the production MySQL 8 database to AWS RDS Aurora, resolving character-encoding issues (utf8mb4) during the process",
        es: "Migración de la base de datos de producción MySQL 8 a AWS RDS Aurora, resolviendo problemas de codificación de caracteres (utf8mb4) en el proceso",
      },
      {
        en: "Designed the company's email-marketing architecture (~100k emails/month) with HubSpot, Amazon SES (custom MAIL FROM, DMARC, SPF) and N8n/Airflow automation",
        es: "Diseño de la arquitectura de email marketing de la empresa (~100k correos/mes) con HubSpot, Amazon SES (MAIL FROM personalizado, DMARC, SPF) y automatización con N8n/Airflow",
      },
      {
        en: "Deployed and operates the company's self-hosted tool stack (Plane, Outline, Twenty CRM, Airflow, N8n) with Docker, Nginx, Cloudflare origin certificates and Microsoft Entra ID single sign-on (multi-tenant OAuth)",
        es: "Despliegue y operación del stack de herramientas self-hosted de la empresa (Plane, Outline, Twenty CRM, Airflow, N8n) con Docker, Nginx, certificados de origen de Cloudflare y single sign-on con Microsoft Entra ID (OAuth multi-tenant)",
      },
      {
        en: "Investigated and remediated a real security incident (malicious GitHub Actions workflow injected through a compromised access token), then hardened access: broad-scope tokens revoked and EC2 access moved from exposed SSH to AWS SSM Session Manager",
        es: "Investigación y remediación de un incidente de seguridad real (workflow malicioso de GitHub Actions inyectado mediante un token comprometido) y endurecimiento posterior: revocación de tokens de alcance amplio y acceso a EC2 por AWS SSM Session Manager en lugar de SSH expuesto",
      },
      {
        en: "Led the development of a client-facing platform for account statements and financial projections, authoring 100% of the Python backend",
        es: "Liderazgo del desarrollo de una plataforma para clientes con estados de cuenta y proyecciones financieras, con autoría del 100% del backend en Python",
      },
      {
        en: "Resolved 200+ critical bugs and built Apache Airflow DAGs that keep internal systems in sync with HubSpot CRM",
        es: "Resolución de más de 200 errores críticos y construcción de DAGs de Apache Airflow que mantienen los sistemas internos sincronizados con HubSpot CRM",
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
    graduated: "2024",
  },
];

export const certifications: Certification[] = [
  {
    name: "Linux Essentials",
    issuer: "NDG / Cisco Networking Academy",
    date: "2022-07-14",
  },
  {
    name: "Leadership Development Experience",
    issuer: "AIESEC Global Talent (Curitiba)",
    date: "2022-12-05",
    credentialId: "6367504",
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
      en: "Today my work is broader than writing code: I am the primary technical owner of a company's systems — infrastructure, DevOps and data operations — promoted to Technical Lead in June 2026. I have migrated a production database to AWS RDS Aurora, stabilized a business-critical legacy system (from a development server to Gunicorn/Nginx with separate dev/prod environments), designed an email architecture that sends ~100k messages per month, operated a self-hosted tool stack with single sign-on, and responded to a real security incident. In parallel, I build systems where AI is a production feature — a karaoke generator with word-level sync, custom MCP servers in TypeScript — with explicit cost and reliability criteria. What a company gets from my work is not just an app: it is a complete solution that runs, stays up and protects its data.",
      es: "Hoy mi trabajo es más amplio que escribir código: soy el principal responsable técnico de los sistemas de una empresa — infraestructura, DevOps y operación de datos — con ascenso a Líder Técnico en junio de 2026. He migrado una base de datos de producción a AWS RDS Aurora, estabilizado un sistema legacy crítico (de un servidor de desarrollo a Gunicorn/Nginx con entornos dev/prod separados), diseñado una arquitectura de correo que envía ~100k mensajes al mes, operado un stack de herramientas self-hosted con single sign-on y respondido a un incidente de seguridad real. En paralelo construyo sistemas donde la IA es una función de producción — un generador de karaoke con sincronización por palabra, servidores MCP propios en TypeScript — con criterios explícitos de costo y confiabilidad. Lo que una empresa obtiene de mi trabajo no es solo una app: es una solución completa que funciona, se mantiene en pie y protege sus datos.",
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
      en: "The direction is clear: to go deeper in platform engineering on AWS and production AI integration as my main vertical, and to keep being honest about the stage I am at — about two years of formal experience, with identified gaps (testing culture, peer code review) that I am closing through a documented plan. I am building complete solutions for companies in my region while remaining open to remote teams with senior engineers and a code-review culture, where every project makes me measurably better. The goal is not to accumulate technologies: it is to deliver systems that keep working when nobody is watching.",
      es: "El rumbo es claro: profundizar en platform engineering sobre AWS e integración de IA en producción como vertical principal, y mantener la honestidad sobre la etapa en que estoy — alrededor de dos años de experiencia formal, con brechas identificadas (cultura de testing, revisión de código entre pares) que cierro con un plan documentado. Construyo soluciones completas para empresas de mi región, abierto también a equipos remotos con ingenieros senior y cultura de code review, donde cada proyecto me haga mediblemente mejor. La meta no es acumular tecnologías: es entregar sistemas que sigan funcionando cuando nadie los está viendo.",
    },
    images: [
      { src: "about/future1.webp", alt: "the man thinking" },
      { src: "about/future2.webp", alt: "the man with the cyber girl" },
      { src: "about/future3.webp", alt: "the man presenting the statistics" },
    ],
  },
];
