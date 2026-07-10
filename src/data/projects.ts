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
    caseStudy: {
      problem: {
        en: "A company's main system depended on a database dating back to 2001, transitioned — not rewritten — to Flask, carrying its structural debt. It ran on a development server, with a single docker-compose for everything (a source of orphaned containers and production downtime) and unpinned dependencies: every deployment was a gamble.",
        es: "El sistema principal de una empresa dependía de una base de datos originada en 2001 y transicionada — no reescrita — a Flask, arrastrando su deuda estructural. Corría sobre un servidor de desarrollo, con un solo docker-compose para todo (causa de contenedores huérfanos y caídas de producción) y dependencias sin fijar: cada despliegue era una apuesta.",
      },
      decision: {
        en: "Stabilize before beautifying. Instead of proposing a rewrite (expensive, risky, uncertain value), the priority was making the system stop falling over: development server → Gunicorn/Nginx; one compose → separate dev/prod environments; unpinned dependencies → frozen requirements.txt; JavaScript embedded in templates → static files; self-managed database → AWS RDS.",
        es: "Estabilizar antes de embellecer. En lugar de proponer una reescritura (cara, riesgosa y de valor incierto), la prioridad fue que el sistema dejara de caerse: servidor de desarrollo → Gunicorn/Nginx; un solo compose → entornos dev/prod separados; dependencias sin fijar → requirements.txt congelado; JavaScript incrustado en plantillas → archivos estáticos; base de datos autogestionada → AWS RDS.",
      },
      result: {
        en: "Zero docker-compose-type incidents since the change, and a stable base for the documented restructuring plan still in execution: CI/CD, GitFlow, MD5 → Argon2 hash migration and referential integrity.",
        es: "Cero incidentes del tipo docker-compose desde el cambio y una base estable para el plan de reestructuración documentado que sigue en curso: CI/CD, GitFlow, migración de hashes MD5 → Argon2 e integridad referencial.",
      },
    },
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
    slug: "aws-infrastructure",
    title: "AWS & Self-hosted Infrastructure",
    shortDescription: {
      en: "A one-person platform team, as a case study",
      es: "Un equipo de plataforma de una persona, como caso de estudio",
    },
    icons: ["aws", "docker"],
    images: ["/aws-infra/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "aws", label: "RDS Aurora / SES / SSM" },
      { icon: "docker", label: "Docker Compose" },
      { icon: "cloud", label: "Nginx + Cloudflare" },
      { icon: "world", label: "Entra ID SSO" },
      { icon: "database", label: "MySQL 8" },
    ],
    summary: {
      en: "The infrastructure a non-software company runs on — production database, email at scale, internal tools, server access — designed, migrated and operated by one person, treated as a product.",
      es: "La infraestructura sobre la que corre una empresa que no es de software — base de datos de producción, correo a escala, herramientas internas, acceso a servidores — diseñada, migrada y operada por una persona, tratada como un producto.",
    },
    features: [
      {
        en: "Production MySQL 8 migrated to AWS RDS Aurora, resolving utf8mb4 encoding in the process",
        es: "MySQL 8 de producción migrado a AWS RDS Aurora, resolviendo la codificación utf8mb4 en el proceso",
      },
      {
        en: "Email architecture for ~100k messages/month: Amazon SES (custom MAIL FROM, DMARC, SPF) + HubSpot + N8n/Airflow",
        es: "Arquitectura de correo de ~100k mensajes/mes: Amazon SES (MAIL FROM propio, DMARC, SPF) + HubSpot + N8n/Airflow",
      },
      {
        en: "Server access through AWS SSM Session Manager — no exposed SSH",
        es: "Acceso a servidores por AWS SSM Session Manager — sin SSH expuesto",
      },
      {
        en: "Self-hosted tool stack (Plane, Outline, Twenty CRM, Airflow, N8n) behind Nginx with Cloudflare origin certificates",
        es: "Stack de herramientas self-hosted (Plane, Outline, Twenty CRM, Airflow, N8n) tras Nginx con certificados de origen de Cloudflare",
      },
      {
        en: "Single sign-on with Microsoft Entra ID (multi-tenant OAuth) across the internal ecosystem",
        es: "Single sign-on con Microsoft Entra ID (OAuth multi-tenant) en todo el ecosistema interno",
      },
    ],
    caseStudy: {
      problem: {
        en: "A non-software company needed what every company needs from its systems: they must run, be backed up, not go down and not leak data — without an infrastructure team. That role fell to one person.",
        es: "Una empresa que no es de software necesitaba lo que toda empresa necesita de sus sistemas: que funcionen, se respalden, no se caigan y no filtren datos — sin un equipo de infraestructura. Ese rol recayó en una sola persona.",
      },
      decision: {
        en: "Treat infrastructure as a product: production database migrated to RDS Aurora (solving utf8mb4 encoding along the way); server access through SSM Session Manager instead of exposed SSH; a ~100k emails/month architecture on Amazon SES orchestrated with HubSpot and N8n/Airflow; and a self-hosted tool stack unified under Microsoft Entra ID single sign-on.",
        es: "Tratar la infraestructura como producto: base de datos de producción migrada a RDS Aurora (resolviendo la codificación utf8mb4 en el proceso); acceso a servidores por SSM Session Manager en lugar de SSH expuesto; una arquitectura de ~100k correos/mes sobre Amazon SES orquestada con HubSpot y N8n/Airflow; y un stack de herramientas self-hosted unificado con single sign-on de Microsoft Entra ID.",
      },
      result: {
        en: "Backed-up, managed production systems, at-scale email with proper domain authentication, and an internal tool ecosystem behind one login — operated by one person.",
        es: "Sistemas de producción respaldados y gestionados, correo a escala con autenticación de dominio correcta y un ecosistema interno de herramientas con un solo inicio de sesión — operado por una persona.",
      },
    },
    highlights: [
      {
        en: "Designed and operates the AWS + self-hosted infrastructure of a non-software company as its sole technical owner",
        es: "Diseño y operación de la infraestructura AWS + self-hosted de una empresa no técnica como único responsable",
      },
    ],
  },
  {
    slug: "security-incident-response",
    title: "Security Incident Response",
    shortDescription: {
      en: "A real incident, contained and turned into hardening",
      es: "Un incidente real, contenido y convertido en endurecimiento",
    },
    icons: ["cloud"],
    images: ["/security/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "typescript", label: "GitHub Actions" },
      { icon: "aws", label: "AWS SSM" },
      { icon: "world", label: "Token scoping" },
    ],
    summary: {
      en: "Investigation and remediation of a real security incident — written up without sensitive company details, because how you respond matters more than pretending it never happens.",
      es: "Investigación y remediación de un incidente de seguridad real — documentado sin detalles sensibles de la empresa, porque cómo se responde importa más que fingir que nunca ocurre.",
    },
    features: [],
    caseStudy: {
      problem: {
        en: "A malicious GitHub Actions workflow was detected, injected into an organization's repositories. The vector: a compromised classic personal access token with broad-scope permissions.",
        es: "Se detectó un workflow malicioso de GitHub Actions inyectado en repositorios de una organización. El vector: un personal access token clásico comprometido, con permisos de alcance amplio.",
      },
      decision: {
        en: "Contain first, harden after. The workflow's origin was investigated, all broad-scope tokens were revoked, and access was permanently hardened — in the same effort, server access moved from exposed SSH to AWS SSM Session Manager. Cosmetic patches were not an option: discomfort with half-measures was part of the decision.",
        es: "Contener primero, endurecer después. Se investigó el origen del workflow, se revocaron todos los tokens de alcance amplio y se endureció el acceso de forma permanente — en la misma línea, el acceso a los servidores pasó de SSH expuesto a AWS SSM Session Manager. No se optó por parches cosméticos: la incomodidad con las soluciones a medias fue parte de la decisión.",
      },
      result: {
        en: "The incident was contained without major damage, and the attack surface was reduced structurally, not just patched.",
        es: "Incidente contenido sin daño mayor y una superficie de ataque reducida de forma estructural, no puntual.",
      },
    },
    highlights: [
      {
        en: "Investigated and remediated a real GitHub Actions security incident; revoked broad-scope tokens and hardened access permanently",
        es: "Investigación y remediación de un incidente de seguridad real en GitHub Actions; revocación de tokens de alcance amplio y endurecimiento permanente del acceso",
      },
    ],
  },
  {
    slug: "ecoquintas-hub",
    title: "Oficina Virtual",
    shortDescription: {
      en: "Grupo Ecoquintas' client portal — Next.js & Python",
      es: "Portal de clientes de Grupo Ecoquintas — Next.js y Python",
    },
    icons: ["javascript", "python"],
    images: ["/hub/placeholder-1.webp"],
    links: {
      live: "https://oficinavirtual.grupoecoquintas.com",
    },
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
      en: "Oficina Virtual is Grupo Ecoquintas' client portal, live at oficinavirtual.grupoecoquintas.com: clients and partners consult account statements, financial projections and income. I built the whole system: the Next.js frontend and 100% of the Python backend.",
      es: "Oficina Virtual es el portal de clientes de Grupo Ecoquintas, en producción en oficinavirtual.grupoecoquintas.com: clientes y socios consultan estados de cuenta, proyecciones financieras e ingresos. Construí el sistema completo: el frontend en Next.js y el 100% del backend en Python.",
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
      label: { en: "In development · 80%", es: "En desarrollo · 80%" },
      tone: "amber",
    },
    images: ["/karahero/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "python", label: "Python" },
      { icon: "microphone", label: "Whisper (local)" },
      { icon: "music", label: "BS-RoFormer" },
      { icon: "react", label: "React Editor" },
      { icon: "video", label: "ffmpeg" },
      { icon: "subtitles", label: ".lrc / .srt" },
    ],
    summary: {
      en: "KaraHero AI generates word-by-word synced karaoke from any audio or video file using local AI models — Whisper for transcription and BS-RoFormer for vocal separation — with an interactive web editor and MP4 rendering with custom typography and visual effects.",
      es: "KaraHero AI genera karaoke sincronizado palabra por palabra a partir de cualquier audio o video usando modelos de IA locales — Whisper para transcripción y BS-RoFormer para separación vocal — con un editor web interactivo y render MP4 con tipografía propia y efectos visuales.",
    },
    features: [
      {
        en: "Word-level Sync: local Whisper transcription (faster-whisper / mlx-whisper) with per-word timestamps; AssemblyAI kept as optional fallback",
        es: "Sincronización por palabra: transcripción con Whisper local (faster-whisper / mlx-whisper) con timestamps por palabra; AssemblyAI queda como fallback opcional",
      },
      {
        en: "Vocal Separation: BS-RoFormer stems — chosen over Demucs after A/B testing for cleaner output",
        es: "Separación vocal: stems con BS-RoFormer — elegido sobre Demucs tras pruebas A/B por un resultado más limpio",
      },
      {
        en: "Forced alignment now practically unnecessary: Whisper + clean stems produce near-final sync (the CTC option remains available)",
        es: "La alineación forzada quedó prácticamente innecesaria: Whisper + stems limpios producen una sincronización casi final (la opción CTC sigue disponible)",
      },
      {
        en: "Google Fonts integration: any typeface fetched and cached for the video render",
        es: "Integración con Google Fonts: cualquier tipografía se descarga y cachea para el render de video",
      },
      {
        en: "Video Render: MP4 with animated channel seal, audio visualizer and gradients via ffmpeg",
        es: "Render de video: MP4 con sello de canal animado, visualizador de audio y gradientes vía ffmpeg",
      },
      {
        en: "Web Editor: FastAPI + React + wavesurfer.js for manual fine-tuning; 98-test suite",
        es: "Editor web: FastAPI + React + wavesurfer.js para ajuste fino manual; suite de 98 tests",
      },
    ],
    caseStudy: {
      problem: {
        en: "Generating word-by-word synced karaoke from any song requires coordinating several AI models — transcription, vocal separation, alignment — and raw model output is never perfect: without correction there is no usable product.",
        es: "Generar karaoke sincronizado palabra por palabra desde cualquier canción exige coordinar varios modelos de IA — transcripción, separación de voces, alineación — y el resultado crudo de los modelos nunca es perfecto: sin corrección no hay producto usable.",
      },
      decision: {
        en: "Build a pipeline where AI is just another application feature, and keep re-evaluating models with A/B tests instead of marrying the first choice: local Whisper (faster-whisper / mlx-whisper) replaced AssemblyAI as the primary transcriber, and BS-RoFormer beat Demucs for vocal separation. A web editor (FastAPI + React + wavesurfer.js) covers the remaining correction. Local vs. cloud inference is decided with explicit cost and hardware-viability criteria.",
        es: "Construir un pipeline donde la IA es una función más de la aplicación, y seguir reevaluando modelos con pruebas A/B en lugar de casarse con la primera elección: Whisper local (faster-whisper / mlx-whisper) reemplazó a AssemblyAI como transcriptor principal y BS-RoFormer superó a Demucs en separación vocal. Un editor web (FastAPI + React + wavesurfer.js) cubre la corrección restante. Lo local vs. la nube se decide con criterios explícitos de costo y viabilidad de hardware.",
      },
      result: {
        en: "Output quality improved to the point that forced alignment became practically unnecessary; the pipeline renders MP4s with custom typography (Google Fonts) and visual effects, backed by a 98-test suite. Development at ~80%.",
        es: "La calidad de salida mejoró al punto de volver prácticamente innecesaria la alineación forzada; el pipeline renderiza MP4 con tipografía propia (Google Fonts) y efectos visuales, respaldado por una suite de 98 tests. Desarrollo al ~80%.",
      },
    },
    highlights: [
      {
        en: "Built an AI pipeline (local Whisper, BS-RoFormer, chosen via A/B testing) that turns any song into word-synced karaoke with a FastAPI + React editor and a 98-test suite",
        es: "Construcción de un pipeline de IA (Whisper local, BS-RoFormer, elegidos con pruebas A/B) que convierte cualquier canción en karaoke sincronizado por palabra, con editor FastAPI + React y suite de 98 tests",
      },
    ],
  },
  {
    slug: "habla-bien",
    title: "Habla Bien",
    shortDescription: {
      en: "Real-time speech-to-big-text for deaf & low-vision users",
      es: "Voz a texto grande en tiempo real para personas sordas y con baja visión",
    },
    icons: ["kotlin", "android"],
    status: {
      label: { en: "In development", es: "En desarrollo" },
      tone: "amber",
    },
    images: ["/habla-bien/placeholder-1.webp"],
    links: {},
    isPrivate: true,
    year: 2026,
    tech: [
      { icon: "kotlin", label: "Kotlin + Compose" },
      { icon: "android", label: "Android (sideload)" },
      { icon: "cloud", label: "Azure AI Speech" },
      { icon: "microphone", label: "Whisper local (sherpa-onnx)" },
      { icon: "world", label: "Atkinson Hyperlegible" },
    ],
    summary: {
      en: "A micro app to talk with people with severe hearing loss and low vision: someone speaks to the phone or tablet and the app transcribes the voice into large on-screen text in real time. Free and meant to be open source, installed by sideload — no Google Play required.",
      es: "Una micro app para hablar con personas con pérdida auditiva severa y baja visión: alguien le habla al teléfono o tablet y la app transcribe la voz a texto grande en pantalla, en tiempo real. Gratuita y pensada como código abierto, instalable por sideload — sin pasar por Google Play.",
    },
    features: [
      {
        en: "Dual transcription engine behind one interface: Azure AI Speech in the cloud (low-end phones/tablets) or 100% offline Whisper via sherpa-onnx (for NPU-capable devices)",
        es: "Motor de transcripción dual tras una sola interfaz: Azure AI Speech en la nube (teléfonos/tablets de gama baja) o Whisper 100% offline vía sherpa-onnx (para equipos con NPU)",
      },
      {
        en: "Offline models (tiny/base/small) downloaded on demand with per-file SHA-256 verification and Silero VAD silence segmentation",
        es: "Modelos offline (tiny/base/small) descargados bajo demanda con verificación SHA-256 por archivo y segmentación por silencio con VAD (Silero)",
      },
      {
        en: "Low-vision typography: adjustable large text and font picker with Atkinson Hyperlegible, plus Google Fonts on demand",
        es: "Tipografía para baja visión: texto grande ajustable y selector de fuentes con Atkinson Hyperlegible, más Google Fonts bajo demanda",
      },
      {
        en: "Tap-to-edit transcript with exact cursor placement, native-Android behavior",
        es: "Edición del texto al tocarlo con cursor exacto en el punto tocado, comportamiento nativo de Android",
      },
      {
        en: "Verified end-to-end on a real low-end phone (Blackview BV6200 Pro): real-time Spanish transcription, with worst-case metrics documented (~90 s model load on a chip without usable NPU)",
        es: "Verificada de punta a punta en un teléfono real de gama baja (Blackview BV6200 Pro): transcripción en español en tiempo real, con métricas de peor caso documentadas (~90 s de carga del modelo en un chip sin NPU aprovechable)",
      },
    ],
    caseStudy: {
      problem: {
        en: "Talking with a person who has severe hearing loss and low vision requires turning speech into large, readable text instantly — on the hardware families actually have: low-end phones and tablets, sometimes without reliable internet.",
        es: "Hablar con una persona con pérdida auditiva severa y baja visión exige convertir la voz en texto grande y legible al instante — en el hardware que las familias realmente tienen: teléfonos y tablets de gama baja, a veces sin internet confiable.",
      },
      decision: {
        en: "One common TranscriptionEngine interface with two interchangeable engines: Azure AI Speech in the cloud for low-end devices, and fully offline Whisper (sherpa-onnx, int8) for NPU-capable terminals. The worst case was measured on a real budget phone before trusting the local path, and the typography was chosen for low vision (Atkinson Hyperlegible).",
        es: "Una interfaz común TranscriptionEngine con dos motores intercambiables: Azure AI Speech en la nube para equipos de gama baja, y Whisper totalmente offline (sherpa-onnx, int8) para terminales con NPU. El peor caso se midió en un teléfono económico real antes de confiar en la vía local, y la tipografía se eligió para baja visión (Atkinson Hyperlegible).",
      },
      result: {
        en: "Real-time Spanish transcription working end-to-end on a real low-end phone, documented worst-case data guiding the hardware recommendation, and an engine architecture where cloud vs. local is a setting — not a rewrite.",
        es: "Transcripción en español en tiempo real funcionando de punta a punta en un teléfono real de gama baja, datos de peor caso documentados que guían la recomendación de hardware, y una arquitectura de motores donde nube vs. local es una configuración — no una reescritura.",
      },
    },
    highlights: [
      {
        en: "Built an Android accessibility app (Kotlin/Compose) with interchangeable speech engines: Azure AI Speech (cloud) and fully offline Whisper via sherpa-onnx, with worst-case metrics measured on real low-end hardware",
        es: "Construcción de una app Android de accesibilidad (Kotlin/Compose) con motores de voz intercambiables: Azure AI Speech (nube) y Whisper totalmente offline vía sherpa-onnx, con métricas de peor caso medidas en hardware real de gama baja",
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
      en: "EQ Tickets is Grupo Ecoquintas' official platform for tickets, requests and purchase-list administration for the procurement department — built entirely by me (Django REST backend + Next.js frontend). In production since 2025 with zero system failures; a second company joined the platform in 2026, and media storage on S3 lets it grow without intervention.",
      es: "EQ Tickets es la plataforma oficial de Grupo Ecoquintas para tickets, solicitudes y administración de listas de compras del departamento de proveeduría — creada enteramente por mí (backend Django REST + frontend Next.js). En producción desde 2025 sin fallos del sistema; en 2026 se sumó una segunda empresa a la plataforma, y el almacenamiento de archivos en S3 le permite crecer sin intervención.",
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
      {
        en: "Multi-company: a second company onboarded in 2026 with data integrity intact",
        es: "Multi-empresa: una segunda compañía se incorporó en 2026 con la integridad de datos intacta",
      },
      {
        en: "S3 media storage: file uploads scale without server intervention",
        es: "Archivos en S3: las cargas de archivos escalan sin intervención en el servidor",
      },
    ],
    highlights: [
      {
        en: "Designed, built and operates — solo — Grupo Ecoquintas' official ticketing and procurement platform (Django REST + Next.js, Docker on AWS): zero system failures in production, second company onboarded in 2026, S3 storage",
        es: "Diseño, construcción y operación — en solitario — de la plataforma oficial de tickets y proveeduría de Grupo Ecoquintas (Django REST + Next.js, Docker en AWS): cero fallos del sistema en producción, segunda empresa incorporada en 2026, almacenamiento en S3",
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
