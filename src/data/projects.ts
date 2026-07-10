import type { Project } from "./types";

/** Ordered by value (positioning §7.2): legacy rescue → infra/full stack → AI → rest. */
export const projects: Project[] = [
  {
    slug: "verde-legacy-rescue",
    title: "Verde — Legacy Rescue",
    shortDescription: {
      en: "Rescue of a business-critical legacy system",
      es: "Rescate de un sistema legacy crítico",
    },
    icons: ["python"],
    status: {
      label: { en: "In progress", es: "En ejecución" },
      tone: "amber",
    },
    images: ["/verde/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "python", label: "Flask" },
      { icon: "database", label: "MySQL / RDS Aurora" },
      { icon: "docker", label: "Docker" },
      { icon: "cloud", label: "Nginx + Gunicorn" },
      { icon: "typescript", label: "GitHub Actions" },
    ],
    summary: {
      en: "Rescue of a company's main system, whose database dates back to 2001. Instead of a risky rewrite, the approach is to stabilize first — production-grade server, separate dev/prod environments, frozen dependencies, managed database — followed by a documented restructuring plan (CI/CD, tests, password-hash migration).",
      es: "Rescate del sistema principal de una empresa, cuya base de datos se origina en 2001. En lugar de una reescritura riesgosa, el enfoque es estabilizar primero — servidor apto para producción, entornos dev/prod separados, dependencias congeladas, base de datos gestionada — seguido de un plan de reestructuración documentado (CI/CD, tests, migración de hashes de contraseña).",
    },
    features: [
      {
        en: "Development server replaced with Gunicorn/Nginx in production",
        es: "Servidor de desarrollo reemplazado por Gunicorn/Nginx en producción",
      },
      {
        en: "Single docker-compose split into separate dev/prod environments — zero incidents of that type since the change",
        es: "Un único docker-compose separado en entornos dev/prod — cero incidentes de ese tipo desde el cambio",
      },
      {
        en: "Unpinned dependencies frozen into a reproducible requirements.txt",
        es: "Dependencias sin fijar congeladas en un requirements.txt reproducible",
      },
      {
        en: "Self-managed database migrated to AWS RDS",
        es: "Base de datos autogestionada migrada a AWS RDS",
      },
      {
        en: "JavaScript embedded in templates extracted to static files, removing duplicated global variables that degraded performance",
        es: "JavaScript incrustado en plantillas extraído a archivos estáticos, eliminando variables globales duplicadas que degradaban el rendimiento",
      },
      {
        en: "Documented restructuring plan in execution: CI/CD, GitFlow, MD5 → Argon2, referential integrity",
        es: "Plan de reestructuración documentado y en ejecución: CI/CD, GitFlow, MD5 → Argon2, integridad referencial",
      },
    ],
    highlights: [
      {
        en: "Stabilized a business-critical legacy system (database from 2001): production WSGI server, separate dev/prod Docker environments, frozen dependencies and a managed RDS database",
        es: "Estabilización de un sistema legacy crítico (base de datos de 2001): servidor WSGI de producción, entornos Docker dev/prod separados, dependencias congeladas y base de datos gestionada en RDS",
      },
      {
        en: "Authored and is executing a documented restructuring plan: CI/CD, GitFlow, MD5 → Argon2 migration and consolidation of business logic",
        es: "Autoría y ejecución de un plan de reestructuración documentado: CI/CD, GitFlow, migración MD5 → Argon2 y consolidación de la lógica de negocio",
      },
    ],
  },
  {
    slug: "ecoquintas-hub",
    title: "Ecoquintas Hub",
    shortDescription: {
      en: "Enterprise portal — Next.js & Python",
      es: "Portal empresarial — Next.js y Python",
    },
    icons: ["javascript", "python"],
    images: ["/hub/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "nextjs", label: "Next.js 15" },
      { icon: "react", label: "React 19" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "aws", label: "AWS Cognito" },
      { icon: "python", label: "Python API" },
    ],
    summary: {
      en: "Client portal for Grupo Ecoquintas where clients and partners consult account statements, financial projections and income. I built the whole system: the Next.js frontend and 100% of the Python backend.",
      es: "Portal de clientes de Grupo Ecoquintas donde clientes y socios consultan estados de cuenta, proyecciones financieras e ingresos. Construí el sistema completo: el frontend en Next.js y el 100% del backend en Python.",
    },
    features: [
      {
        en: "Secure Auth: AWS Cognito + NextAuth with automatic JWT refresh",
        es: "Autenticación segura: AWS Cognito + NextAuth con refresh automático de JWT",
      },
      {
        en: "Financial Dashboards: advanced AG Grid tables and Recharts visualizations",
        es: "Dashboards financieros: tablas avanzadas con AG Grid y visualizaciones con Recharts",
      },
      {
        en: "PDF Generation: downloadable statements built with jsPDF / pdf-lib",
        es: "Generación de PDFs: estados de cuenta descargables con jsPDF / pdf-lib",
      },
      {
        en: "Modern UI: shadcn/ui components, dark/light theme, fully responsive",
        es: "UI moderna: componentes shadcn/ui, tema claro/oscuro, totalmente responsiva",
      },
      {
        en: "Part of my wider role at the company: 2nd contributor to the core system (222 commits) and to the Airflow payment-automation pipeline (86 commits)",
        es: "Parte de mi rol amplio en la empresa: 2.º contribuidor del sistema core (222 commits) y del pipeline de automatización de pagos en Airflow (86 commits)",
      },
    ],
    highlights: [
      {
        en: "Led the end-to-end development of a client-facing financial portal (Next.js 15 + Python), authoring 100% of the backend",
        es: "Liderazgo del desarrollo de punta a punta de un portal financiero para clientes (Next.js 15 + Python), con autoría del 100% del backend",
      },
      {
        en: "2nd contributor to the company's core ERP (222 commits) and to Airflow payment-automation DAGs syncing internal systems with HubSpot",
        es: "2.º contribuidor del ERP core de la empresa (222 commits) y de los DAGs de Airflow que sincronizan sistemas internos con HubSpot",
      },
    ],
  },
  {
    slug: "karahero-ai",
    title: "KaraHero AI",
    shortDescription: {
      en: "AI karaoke generator",
      es: "Generador de karaoke con IA",
    },
    icons: ["python"],
    status: {
      label: { en: "In development · 60%", es: "En desarrollo · 60%" },
      tone: "amber",
    },
    images: ["/karahero/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "python", label: "Python" },
      { icon: "microphone", label: "AI Transcription" },
      { icon: "react", label: "React Editor" },
      { icon: "music", label: "Demucs" },
      { icon: "video", label: "ffmpeg" },
      { icon: "subtitles", label: ".lrc / .srt" },
    ],
    summary: {
      en: "KaraHero AI generates word-by-word synced karaoke from any audio or video file using AI transcription and forced alignment, with an interactive web editor to refine the result.",
      es: "KaraHero AI genera karaoke sincronizado palabra por palabra a partir de cualquier audio o video usando transcripción por IA y alineación forzada, con un editor web interactivo para refinar el resultado.",
    },
    features: [
      {
        en: "Word-level Sync: AssemblyAI or local Whisper transcription with per-word timestamps",
        es: "Sincronización por palabra: transcripción con AssemblyAI o Whisper local con timestamps por palabra",
      },
      {
        en: "Vocal Separation: optional Demucs stem splitting for clean instrumentals",
        es: "Separación vocal: separación opcional de stems con Demucs para instrumentales limpios",
      },
      {
        en: "Forced Alignment: paste the real lyrics and realign them with CTC alignment",
        es: "Alineación forzada: pega la letra real y realinéala con alineación CTC",
      },
      {
        en: "Web Editor: FastAPI + React + wavesurfer.js for manual fine-tuning",
        es: "Editor web: FastAPI + React + wavesurfer.js para ajuste fino manual",
      },
      {
        en: "Video Render: MP4 output with colors, gradients and audio visualizer via ffmpeg",
        es: "Render de video: salida MP4 con colores, gradientes y visualizador de audio vía ffmpeg",
      },
    ],
    highlights: [
      {
        en: "Built an AI pipeline (Whisper/AssemblyAI, Demucs, CTC forced alignment) that turns any song into word-synced karaoke with a FastAPI + React editor",
        es: "Construcción de un pipeline de IA (Whisper/AssemblyAI, Demucs, alineación forzada CTC) que convierte cualquier canción en karaoke sincronizado por palabra, con editor FastAPI + React",
      },
    ],
  },
  {
    slug: "mcp-servers",
    title: "Custom MCP Servers",
    shortDescription: {
      en: "Tools for AI agents, in TypeScript",
      es: "Herramientas para agentes de IA, en TypeScript",
    },
    icons: ["typescript"],
    images: ["/mcp/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "typescript", label: "TypeScript" },
      { icon: "world", label: "Model Context Protocol" },
    ],
    summary: {
      en: "Model Context Protocol (MCP) servers built in TypeScript so AI agents can use purpose-built tools: a job-search server with fit analysis and CV export, and an image-vectorization server for Gravit Designer.",
      es: "Servidores del Model Context Protocol (MCP) construidos en TypeScript para que agentes de IA usen herramientas hechas a medida: un servidor de búsqueda de empleo con análisis de fit y exportación de CV, y uno de vectorización de imágenes para Gravit Designer.",
    },
    features: [
      {
        en: "Job search: opportunity analysis against a real profile, fit scoring and CV export",
        es: "Búsqueda de empleo: análisis de oportunidades contra un perfil real, puntuación de fit y exportación de CV",
      },
      {
        en: "Image vectorization integrated with Gravit Designer",
        es: "Vectorización de imágenes integrada con Gravit Designer",
      },
    ],
    highlights: [
      {
        en: "Built custom MCP servers in TypeScript: job search with fit analysis and CV export, and image vectorization for Gravit Designer",
        es: "Construcción de servidores MCP propios en TypeScript: búsqueda de empleo con análisis de fit y exportación de CV, y vectorización de imágenes para Gravit Designer",
      },
    ],
  },
  {
    slug: "antuan-pos",
    title: "Antuan POS",
    shortDescription: {
      en: "React Native offline-first POS",
      es: "POS offline-first en React Native",
    },
    icons: ["react-native"],
    status: {
      label: { en: "Beta", es: "Beta" },
      tone: "green",
    },
    images: ["/antuan/placeholder-1.webp"],
    links: {
      code: "https://github.com/9ero/Antuan-POS",
    },
    isPrivate: false,
    year: 2026,
    tech: [
      { icon: "react-native", label: "React Native" },
      { icon: "mobile", label: "Expo" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "database", label: "SQLite" },
      { icon: "cloud", label: "Turso" },
      { icon: "barcode", label: "Barcode" },
    ],
    summary: {
      en: "Antuan POS is an offline-first mobile point of sale for small stores: it runs 100% without a connection on a phone at the counter and uses the cloud only as backup. Now in beta at a real store, with the official launch days away.",
      es: "Antuan POS es un punto de venta móvil offline-first para tiendas pequeñas: funciona 100% sin conexión en un teléfono en el mostrador y usa la nube solo como respaldo. Actualmente en beta en una tienda real, con el lanzamiento oficial a días de distancia.",
    },
    features: [
      {
        en: "Barcode Scanning: camera-based scanner as the primary selling flow",
        es: "Escáner de códigos de barras con la cámara como flujo principal de venta",
      },
      {
        en: "Smart Cart: quantity control, stock validation and overselling prevention",
        es: "Carrito inteligente: control de cantidades, validación de stock y prevención de sobreventa",
      },
      {
        en: "PIN Checkout: every sale is attributed to a user via reusable PINs",
        es: "Checkout con PIN: cada venta se atribuye a un usuario mediante PINs reutilizables",
      },
      {
        en: "Inventory: receptions, shortages and full stock-movement history",
        es: "Inventario: recepciones, faltantes e historial completo de movimientos de stock",
      },
      {
        en: "Cash Closing: period reports, rankings and Excel (.xlsx) export",
        es: "Cierre de caja: reportes por período, rankings y exportación a Excel (.xlsx)",
      },
      {
        en: "Cloud Backup: real-time event push to Turso (SQLite in the cloud)",
        es: "Respaldo en la nube: push de eventos en tiempo real a Turso (SQLite en la nube)",
      },
    ],
    highlights: [
      {
        en: "Designed and built an offline-first Android POS (React Native + Expo + SQLite) used daily by a real store",
        es: "Diseño y construcción de un POS Android offline-first (React Native + Expo + SQLite) usado a diario por una tienda real",
      },
      {
        en: "Implemented real-time cloud backup over a custom Turso (libSQL) HTTP client with event-driven sync",
        es: "Implementación de respaldo en la nube en tiempo real sobre un cliente HTTP propio de Turso (libSQL) con sincronización por eventos",
      },
    ],
  },
  {
    slug: "eq-tickets",
    title: "EQ Tickets",
    shortDescription: {
      en: "Next.js & Django",
      es: "Next.js y Django",
    },
    icons: ["javascript", "python"],
    images: [
      "/eqtickets/et-mac-1.webp",
      "/eqtickets/et-mac-2.webp",
      "/eqtickets/et-mobile-1.webp",
      "/eqtickets/et-mac-3.webp",
      "/eqtickets/et-mac-4.webp",
      "/eqtickets/et-mobile-2.webp",
      "/eqtickets/et-mac-5.webp",
    ],
    links: {
      live: "https://eqtickets.net",
    },
    isPrivate: true,
    year: 2025,
    tech: [
      { icon: "nextjs", label: "Next.js" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "django", label: "Django" },
      { icon: "python", label: "Django REST Framework" },
      { icon: "docker", label: "Docker" },
      { icon: "aws", label: "AWS" },
    ],
    summary: {
      en: "EQ Tickets is a comprehensive application consisting of two main components: a Django backend with Django REST Framework and a Next.js frontend with Tailwind CSS, Shadcn, and Aceternity UI components.",
      es: "EQ Tickets es una aplicación integral compuesta por dos componentes principales: un backend Django con Django REST Framework y un frontend Next.js con Tailwind CSS, Shadcn y componentes de Aceternity UI.",
    },
    features: [
      {
        en: "Employee Request Management: Organized handling of employee requests and applications from affiliated companies",
        es: "Gestión de solicitudes de empleados: manejo organizado de solicitudes de las empresas afiliadas",
      },
      {
        en: "Procurement Lists: Complete control and management of purchasing lists",
        es: "Listas de compras: control y gestión completa de las listas de adquisiciones",
      },
      {
        en: "Multi-Entity Management: Companies, departments, users, tickets, and shopping lists",
        es: "Gestión multi-entidad: empresas, departamentos, usuarios, tickets y listas de compras",
      },
      {
        en: "Dark/Light Theme: Full compatibility with both dark and light modes",
        es: "Tema claro/oscuro: compatibilidad total con ambos modos",
      },
      {
        en: "Responsive Design: Fully adaptable to all devices and screen sizes",
        es: "Diseño responsivo: totalmente adaptable a todos los dispositivos y tamaños de pantalla",
      },
      {
        en: "Modern UI: Clean interface built with Shadcn and Aceternity UI components",
        es: "UI moderna: interfaz limpia construida con componentes Shadcn y Aceternity UI",
      },
    ],
    highlights: [
      {
        en: "Designed, developed and deployed a full ticketing platform (Django REST + Next.js, Docker on AWS) used by affiliated companies in production",
        es: "Diseño, desarrollo y despliegue de una plataforma completa de tickets (Django REST + Next.js, Docker en AWS) usada en producción por empresas afiliadas",
      },
    ],
  },
  {
    slug: "firelink",
    title: "FireLink",
    shortDescription: {
      en: "Cast to Fire TV — Kotlin & WebRTC",
      es: "Cast a Fire TV — Kotlin y WebRTC",
    },
    icons: ["kotlin"],
    status: {
      label: { en: "In development", es: "En desarrollo" },
      tone: "amber",
    },
    images: ["/firelink/placeholder-1.webp"],
    links: {
      code: "https://github.com/9ero/FireLink",
    },
    isPrivate: false,
    year: 2026,
    tech: [
      { icon: "kotlin", label: "Kotlin" },
      { icon: "android", label: "Fire TV / Android TV" },
      { icon: "cast", label: "WebRTC" },
    ],
    summary: {
      en: "FireLink turns a Fire TV or Android TV into a wireless screen receiver: any desktop browser can cast a tab or the whole screen over WebRTC — no extension, no Chromecast required.",
      es: "FireLink convierte un Fire TV o Android TV en un receptor de pantalla inalámbrico: cualquier navegador de escritorio puede transmitir una pestaña o la pantalla completa por WebRTC — sin extensiones y sin Chromecast.",
    },
    features: [
      {
        en: "Embedded Server: the TV serves its own control page over HTTPS/WSS",
        es: "Servidor embebido: el TV sirve su propia página de control por HTTPS/WSS",
      },
      {
        en: "Browser Casting: getDisplayMedia capture from Chrome, Brave or Edge",
        es: "Casting desde el navegador: captura con getDisplayMedia en Chrome, Brave o Edge",
      },
      {
        en: "Network Discovery: announces itself via mDNS, SSDP and DIAL",
        es: "Descubrimiento en red: se anuncia vía mDNS, SSDP y DIAL",
      },
      {
        en: "Zero Install on Desktop: everything runs from the browser",
        es: "Cero instalación en el escritorio: todo corre desde el navegador",
      },
      {
        en: "Distributed as an APK, installable via ADB",
        es: "Distribuido como APK, instalable vía ADB",
      },
    ],
    highlights: [
      {
        en: "Built a Fire TV WebRTC casting receiver in Kotlin with an embedded HTTPS/WSS signaling server and mDNS/SSDP/DIAL discovery",
        es: "Construcción de un receptor de casting WebRTC para Fire TV en Kotlin con servidor de señalización HTTPS/WSS embebido y descubrimiento mDNS/SSDP/DIAL",
      },
    ],
  },
  {
    slug: "wheretogocr",
    title: "WhereToGoCR",
    shortDescription: {
      en: "Travel booking platform",
      es: "Plataforma de reservas de viajes",
    },
    icons: ["typescript"],
    status: {
      label: { en: "In development · 90%", es: "En desarrollo · 90%" },
      tone: "amber",
    },
    images: ["/wheretogo/placeholder-1.webp"],
    links: {
      live: "https://wheretogocr.com",
    },
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "nextjs", label: "Next.js 16" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "database", label: "Turso + Drizzle" },
      { icon: "world", label: "i18n ES/EN" },
      { icon: "vercel", label: "Vercel" },
    ],
    summary: {
      en: "Tourism experiences platform built for Pura Vida Bros: travelers explore tours, lodging and services in Costa Rica, build an itinerary with a multi-item cart and send personalized trip requests through a guided wizard.",
      es: "Plataforma de experiencias turísticas construida para Pura Vida Bros: los viajeros exploran tours, hospedajes y servicios en Costa Rica, arman su itinerario con un carrito multi-ítem y envían solicitudes de viaje personalizadas mediante un wizard guiado.",
    },
    features: [
      {
        en: "Trip Wizard: guided multi-step flow that turns a cart into a custom trip request",
        es: "Wizard de viaje: flujo guiado de varios pasos que convierte el carrito en una solicitud personalizada",
      },
      {
        en: "Multilingual: native locale routing with full Spanish/English support",
        es: "Multiidioma: routing nativo por locale con soporte completo español/inglés",
      },
      {
        en: "Modern Data Layer: Turso (libSQL) with Drizzle ORM",
        es: "Capa de datos moderna: Turso (libSQL) con Drizzle ORM",
      },
      {
        en: "Admin Panel: JWT-authenticated management of tours and requests",
        es: "Panel de administración: gestión de tours y solicitudes con autenticación JWT",
      },
      {
        en: "Robust Forms: React Hook Form + Zod validation, transactional email via Resend",
        es: "Formularios robustos: React Hook Form + validación Zod, email transaccional vía Resend",
      },
    ],
    highlights: [
      {
        en: "Built a bilingual tourism booking platform (Next.js 16, Turso, Drizzle) with a multi-item cart and guided trip-request wizard for a real client",
        es: "Construcción de una plataforma bilingüe de reservas turísticas (Next.js 16, Turso, Drizzle) con carrito multi-ítem y wizard de solicitudes para un cliente real",
      },
    ],
  },
  {
    slug: "mabaagroexport",
    title: "Mabaagroexport",
    shortDescription: {
      en: "A responsive and bilingual website",
      es: "Sitio web responsivo y bilingüe",
    },
    icons: ["javascript"],
    images: [
      "/maba/mb-mac-1.webp",
      "/maba/mb-mobile-1.webp",
      "/maba/mb-mac-2.webp",
      "/maba/mb-mac-3.webp",
    ],
    links: {
      live: "https://mabaagroexport.vercel.app/",
      code: "https://github.com/9ero/maba-app",
    },
    isPrivate: false,
    year: 2023,
    tech: [
      { icon: "react", label: "React" },
      { icon: "vite", label: "ViteJS" },
      { icon: "sass", label: "SASS" },
    ],
    summary: {
      en: "Official corporate website for MABA Agroexport showcasing agricultural export products and commercial contact management.",
      es: "Sitio web corporativo oficial de MABA Agroexport que exhibe productos agrícolas de exportación y gestiona el contacto comercial.",
    },
    features: [
      {
        en: "Multilingual Support: Spanish/English language switching",
        es: "Soporte multiidioma: cambio de idioma español/inglés",
      },
      {
        en: "Interactive Product Gallery: Dynamic showcase of agricultural products",
        es: "Galería interactiva de productos: exhibición dinámica de productos agrícolas",
      },
      {
        en: "Responsive Design: Fully adaptable to all devices and screen sizes",
        es: "Diseño responsivo: totalmente adaptable a todos los dispositivos",
      },
      {
        en: "SEO Optimized: Integrated meta tags and search engine optimization",
        es: "Optimizado para SEO: meta tags integrados y optimización para buscadores",
      },
      {
        en: "Modern UI: Clean and professional corporate design",
        es: "UI moderna: diseño corporativo limpio y profesional",
      },
      {
        en: "Contact Management: Streamlined commercial contact system",
        es: "Gestión de contacto: sistema de contacto comercial simplificado",
      },
    ],
    highlights: [
      {
        en: "Delivered a bilingual corporate site (React + Vite) that helped increase sales by 50% in the first months after launch",
        es: "Entrega de un sitio corporativo bilingüe (React + Vite) que ayudó a incrementar las ventas un 50% en los primeros meses tras el lanzamiento",
      },
    ],
  },
  {
    slug: "old-portfolio",
    title: "My old portfolio",
    shortDescription: {
      en: "Made with Next.js",
      es: "Hecho con Next.js",
    },
    icons: ["javascript"],
    images: [
      "/old/op-mac-1.webp",
      "/old/op-mobile-1.webp",
      "/old/op-mac-2.webp",
      "/old/op-mobile-2.webp",
      "/old/op-mac-3.webp",
    ],
    links: {
      live: "https://juan-fernandez-portfolio.vercel.app/",
      code: "https://github.com/9ero/juan-portfolio",
    },
    isPrivate: false,
    year: 2023,
    tech: [
      { icon: "nextjs", label: "Next.js" },
      { icon: "react", label: "React" },
      { icon: "tailwind", label: "Tailwind CSS" },
    ],
    summary: {
      en: "This was my first portfolio where I presented my projects. Built with Next.js and deployed on Vercel.",
      es: "Este fue mi primer portafolio donde presentaba mis proyectos. Construido con Next.js y desplegado en Vercel.",
    },
    features: [
      {
        en: "Modern Design: Clean and professional interface showcasing my work",
        es: "Diseño moderno: interfaz limpia y profesional para mostrar mi trabajo",
      },
      {
        en: "Responsive: Fully adaptable to all devices and screen sizes",
        es: "Responsivo: totalmente adaptable a todos los dispositivos",
      },
      {
        en: "Project Showcase: Organized presentation of my development projects",
        es: "Vitrina de proyectos: presentación organizada de mis proyectos de desarrollo",
      },
      {
        en: "Next.js Framework: Built with React and Next.js for optimal performance",
        es: "Framework Next.js: construido con React y Next.js para un rendimiento óptimo",
      },
      {
        en: "Vercel Deployment: Hosted on Vercel for fast and reliable access",
        es: "Despliegue en Vercel: alojado en Vercel para un acceso rápido y confiable",
      },
      {
        en: "Professional Layout: Structured design highlighting my skills and experience",
        es: "Layout profesional: diseño estructurado que resalta mis habilidades y experiencia",
      },
    ],
    highlights: [],
  },
];
