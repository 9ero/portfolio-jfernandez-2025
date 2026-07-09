import type { Skill, SoftSkill } from "./types";

export const proficientSkills: Skill[] = [
  {
    name: "AWS",
    designation: {
      en: "Production operations: EC2, RDS Aurora, S3, SES, SSM",
      es: "Operación en producción: EC2, RDS Aurora, S3, SES, SSM",
    },
    blurb: {
      en: "AWS sustains the infrastructure I operate daily: EC2 accessed through SSM Session Manager (no exposed SSH), a production MySQL database migrated to RDS Aurora, S3, CloudWatch, and SES configured with custom MAIL FROM, DMARC and SPF for an email architecture of ~100k messages per month.",
      es: "AWS sostiene la infraestructura que opero a diario: EC2 con acceso por SSM Session Manager (sin SSH expuesto), una base de datos de producción migrada a RDS Aurora, S3, CloudWatch y SES configurado con MAIL FROM personalizado, DMARC y SPF para una arquitectura de correo de ~100k mensajes al mes.",
    },
    image: "/aws-wpp.webp",
    keywords: ["AWS", "EC2", "RDS Aurora", "S3", "SES", "SSM", "CloudWatch", "IAM", "cloud", "DevOps"],
  },
  {
    name: "Docker",
    designation: {
      en: "Dev/prod environments and self-hosted operations",
      es: "Entornos dev/prod y operación self-hosted",
    },
    blurb: {
      en: "Docker is the foundation of the systems I operate in production: separate dev/prod Compose environments for a business-critical system, and a self-hosted tool stack (Plane, Outline, Twenty CRM, Airflow, N8n) running behind Nginx with Cloudflare origin certificates.",
      es: "Docker es la base de los sistemas que opero en producción: entornos Compose dev/prod separados para un sistema crítico de negocio, y un stack de herramientas self-hosted (Plane, Outline, Twenty CRM, Airflow, N8n) corriendo tras Nginx con certificados de origen de Cloudflare.",
    },
    image: "/docker-wpp.webp",
    keywords: ["Docker", "Docker Compose", "Nginx", "self-hosted", "containers", "CI/CD"],
  },
  {
    name: "Flask",
    designation: {
      en: "Production backends behind Gunicorn/Nginx",
      es: "Backends en producción tras Gunicorn/Nginx",
    },
    blurb: {
      en: "Flask is the core of the business-critical system I maintain and am restructuring: REST APIs, Jinja2 templates, and the stabilization work that moved it from a development server to Gunicorn/Nginx with frozen, reproducible dependencies.",
      es: "Flask es el núcleo del sistema crítico que mantengo y reestructuro: APIs REST, plantillas Jinja2 y el trabajo de estabilización que lo llevó de un servidor de desarrollo a Gunicorn/Nginx con dependencias congeladas y reproducibles.",
    },
    image: "/flask-wpp.webp",
    keywords: ["Flask", "Python", "REST API", "Gunicorn", "Jinja2", "legacy", "backend"],
  },
  {
    name: "AI Integration",
    designation: {
      en: "AI features built for production, not demos",
      es: "Funciones de IA para producción, no demos",
    },
    blurb: {
      en: "AI models used as application features: speech transcription (AssemblyAI, Whisper), vocal separation (Demucs), CPU forced alignment, and custom MCP servers in TypeScript. Local inference (Ollama) and cloud inference (RunPod, Replicate) evaluated with explicit cost and hardware-viability criteria.",
      es: "Modelos de IA usados como funciones de la aplicación: transcripción de voz (AssemblyAI, Whisper), separación vocal (Demucs), alineación forzada en CPU y servidores MCP propios en TypeScript. Inferencia local (Ollama) y en la nube (RunPod, Replicate) evaluada con criterios explícitos de costo y viabilidad de hardware.",
    },
    image: "/ai-wpp.webp",
    keywords: ["AI integration", "AssemblyAI", "Whisper", "Demucs", "forced alignment", "Ollama", "RunPod", "MCP", "inference costs"],
  },
  {
    name: "React",
    designation: {
      en: "Next.js, Vite, Astro, deployed on Vercel",
      es: "Next.js, Vite, Astro, desplegado en Vercel",
    },
    blurb: {
      en: "React has been key in building modern web interfaces. I’ve worked with frameworks like Next.js and Vite, and deployed apps using platforms like Vercel. This portfolio is built with Astro.",
      es: "React ha sido clave para construir interfaces web modernas. He trabajado con frameworks como Next.js y Vite, y desplegado apps en plataformas como Vercel. Este portafolio está hecho con Astro.",
    },
    image: "/react-wpp.webp",
    keywords: ["React", "Next.js", "Vite", "Astro", "Vercel", "frontend", "TypeScript"],
  },
  {
    name: "Django",
    designation: {
      en: "Production-ready REST APIs on AWS",
      es: "APIs REST en producción sobre AWS",
    },
    blurb: {
      en: "I maintain a Django project running in production on AWS, using Docker with Nginx, Gunicorn, and SSL. I’ve built RESTful APIs using Django REST Framework and integrated PostgreSQL and Redis for performance.",
      es: "Mantengo un proyecto Django corriendo en producción sobre AWS, usando Docker con Nginx, Gunicorn y SSL. He construido APIs REST con Django REST Framework e integrado PostgreSQL y Redis para mejorar el rendimiento.",
    },
    image: "/django-wpp.webp",
    keywords: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Nginx", "Gunicorn"],
  },
  {
    name: "Tailwind CSS",
    designation: {
      en: "Utility-first CSS with solid Bootstrap and CSS background",
      es: "CSS utility-first con base sólida en Bootstrap y CSS puro",
    },
    blurb: {
      en: "I have a solid foundation in pure CSS and daily experience with Bootstrap. This background made it easy for me to adopt Tailwind over a year ago. I now use it to build clean, responsive UIs with speed and precision.",
      es: "Tengo una base sólida en CSS puro y experiencia diaria con Bootstrap. Ese trasfondo me facilitó adoptar Tailwind hace más de un año. Hoy lo uso para construir interfaces limpias y responsivas con rapidez y precisión.",
    },
    image: "/tailwind-wpp.webp",
    keywords: ["Tailwind CSS", "CSS", "Bootstrap", "responsive design", "UI"],
  },
  {
    name: "Git",
    designation: {
      en: "GitHub, CI/CD, clean commit workflows",
      es: "GitHub, CI/CD y flujos de commits limpios",
    },
    blurb: {
      en: "Version control is essential in all my projects. I use Git daily for branching, collaborating via GitHub, and managing deployments through CI/CD pipelines.",
      es: "El control de versiones es esencial en todos mis proyectos. Uso Git a diario para branching, colaborar vía GitHub y gestionar despliegues con pipelines de CI/CD.",
    },
    image: "/git-wpp.webp",
    keywords: ["Git", "GitHub", "CI/CD", "GitFlow", "version control"],
  },
];

export const familiarSkills: Skill[] = [
  {
    name: "React Native",
    designation: {
      en: "Mobile apps with React and the Expo ecosystem",
      es: "Apps móviles con React y el ecosistema Expo",
    },
    blurb: {
      en: "I’ve used React Native with the Expo ecosystem to build mobile apps, including an offline-first point of sale currently in beta at a real store.",
      es: "He usado React Native con el ecosistema Expo para construir apps móviles, incluyendo un punto de venta offline-first actualmente en beta en una tienda real.",
    },
    image: "/react-native-wpp.webp",
    keywords: ["React Native", "Expo", "mobile", "SQLite", "offline-first"],
  },
  {
    name: "Android Studio",
    designation: {
      en: "Java & Kotlin for native Android apps",
      es: "Java y Kotlin para apps Android nativas",
    },
    blurb: {
      en: "Built Android apps using Java and Kotlin, from UI layouts and basic logic to a Fire TV casting receiver with WebRTC and an embedded server.",
      es: "He creado apps Android con Java y Kotlin, desde layouts de UI y lógica básica hasta un receptor de casting para Fire TV con WebRTC y servidor embebido.",
    },
    image: "/android-wpp.webp",
    keywords: ["Android", "Kotlin", "Java", "WebRTC", "Fire TV"],
  },
  {
    name: "Laravel",
    designation: {
      en: "Backend web development with Blade and Eloquent",
      es: "Desarrollo web backend con Blade y Eloquent",
    },
    blurb: {
      en: "Laravel was my first backend framework experience. I used Blade templates and Eloquent ORM to build web applications quickly.",
      es: "Laravel fue mi primera experiencia con un framework backend. Usé plantillas Blade y el ORM Eloquent para construir aplicaciones web rápidamente.",
    },
    image: "/laravel-wpp.webp",
    keywords: ["Laravel", "PHP", "Blade", "Eloquent"],
  },
  {
    name: "WordPress",
    designation: {
      en: "Theme development and plugin integration",
      es: "Desarrollo de temas e integración de plugins",
    },
    blurb: {
      en: "WordPress gave me early experience with CMS-driven websites. I’ve worked on theme customization and plugin integrations.",
      es: "WordPress me dio experiencia temprana con sitios basados en CMS. He trabajado en personalización de temas e integración de plugins.",
    },
    image: "/wordpress-wpp.webp",
    keywords: ["WordPress", "CMS", "PHP", "themes"],
  },
  {
    name: "Unity",
    designation: {
      en: "2D/3D game development with C#",
      es: "Desarrollo de juegos 2D/3D con C#",
    },
    blurb: {
      en: "Unity introduced me to game development with C#. I built several prototypes, learning about physics, scenes, and UI components.",
      es: "Unity me introdujo al desarrollo de videojuegos con C#. Construí varios prototipos, aprendiendo sobre físicas, escenas y componentes de UI.",
    },
    image: "/unity-wpp.webp",
    keywords: ["Unity", "C#", "game development"],
  },
  {
    name: "Godot Engine",
    designation: {
      en: "Lightweight game prototyping with GDScript",
      es: "Prototipado ligero de juegos con GDScript",
    },
    blurb: {
      en: "Godot's simplicity and GDScript syntax made it easy to build small 2D game projects and experiment with new ideas.",
      es: "La simplicidad de Godot y la sintaxis de GDScript me facilitaron construir pequeños juegos 2D y experimentar con nuevas ideas.",
    },
    image: "/godot-wpp.webp",
    keywords: ["Godot", "GDScript", "game development"],
  },
];

export const designSkills: Skill[] = [
  {
    name: "Adobe Creative Cloud",
    designation: {
      en: "Photoshop, Illustrator, Premiere Pro & Audition",
      es: "Photoshop, Illustrator, Premiere Pro y Audition",
    },
    blurb: {
      en: "With several years of experience in Adobe Creative Cloud, I’ve worked extensively with Photoshop for editing, Illustrator for logo design, Premiere Pro for video editing, and Audition for audio refinement.",
      es: "Con varios años de experiencia en Adobe Creative Cloud, he trabajado extensamente con Photoshop para edición, Illustrator para diseño de logos, Premiere Pro para edición de video y Audition para refinar audio.",
    },
    image: "/adobe.webp",
    keywords: ["Photoshop", "Illustrator", "Premiere Pro", "Audition", "design"],
  },
  {
    name: "Figma",
    designation: {
      en: "Web and mobile app UI design & prototyping",
      es: "Diseño y prototipado de UI web y móvil",
    },
    blurb: {
      en: "Used Figma to create responsive web and mobile app prototypes, focusing on UX/UI clarity and developer handoff for implementation.",
      es: "He usado Figma para crear prototipos responsivos de apps web y móviles, enfocándome en la claridad UX/UI y el handoff a desarrollo.",
    },
    image: "/figma.webp",
    keywords: ["Figma", "UX", "UI", "prototyping"],
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: { en: "Communication", es: "Comunicación" },
    description: {
      en: "I adapt my technical explanations to the audience's level of understanding, whether they're developers or business stakeholders. I've successfully presented full projects I've built solo and enjoy sharing progress clearly and confidently.",
      es: "Adapto mis explicaciones técnicas al nivel de la audiencia, sean desarrolladores o perfiles de negocio. He presentado con éxito proyectos completos construidos por mí y disfruto comunicar avances con claridad y confianza.",
    },
  },
  {
    title: { en: "Problem Solving", es: "Resolución de problemas" },
    description: {
      en: "I approach complex problems with structured thinking and practical implementation. For example, I designed a custom queuing system using Flask, daemons, and Airflow to sync internal data with HubSpot, ensuring reliability and traceability.",
      es: "Abordo problemas complejos con pensamiento estructurado e implementación práctica. Por ejemplo, diseñé un sistema de colas a medida con Flask, demonios y Airflow para sincronizar datos internos con HubSpot, garantizando confiabilidad y trazabilidad.",
    },
  },
  {
    title: { en: "Autonomy", es: "Autonomía" },
    description: {
      en: "I'm comfortable making independent decisions, especially when they improve efficiency or remove blockers—while always prioritizing data safety and clarity of purpose.",
      es: "Me siento cómodo tomando decisiones independientes, sobre todo cuando mejoran la eficiencia o eliminan bloqueos, siempre priorizando la seguridad de los datos y la claridad del objetivo.",
    },
  },
  {
    title: { en: "Adaptability", es: "Adaptabilidad" },
    description: {
      en: "I stay positive in the face of changing requirements, and proactively learn new tools or libraries when the situation demands it.",
      es: "Mantengo una actitud positiva ante requisitos cambiantes y aprendo proactivamente nuevas herramientas o librerías cuando la situación lo exige.",
    },
  },
  {
    title: { en: "Team Collaboration", es: "Trabajo en equipo" },
    description: {
      en: "I've worked closely with designers and QA professionals, and I value adapting to each teammate's working style to optimize collaboration. Though I'm fullstack, I especially enjoy frontend development.",
      es: "He trabajado de cerca con diseñadores y profesionales de QA, y valoro adaptarme al estilo de trabajo de cada compañero para optimizar la colaboración. Aunque soy fullstack, disfruto especialmente el frontend.",
    },
  },
  {
    title: { en: "Initiative & Innovation", es: "Iniciativa e innovación" },
    description: {
      en: "I regularly identify and automate repetitive or manual tasks, like improving container workflows or standardizing Git repositories across the company. I balance innovation with practicality: I reuse existing tools when possible, and create new ones when needed.",
      es: "Identifico y automatizo con regularidad tareas repetitivas o manuales, como mejorar flujos de contenedores o estandarizar los repositorios Git de la empresa. Equilibrio innovación con practicidad: reutilizo herramientas existentes cuando es posible y creo nuevas cuando hace falta.",
    },
  },
];
