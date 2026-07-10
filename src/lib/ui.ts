import type { Locale, Localized } from "@/data/types";

/**
 * UI chrome strings (nav, headings, buttons, form). Content strings live in
 * src/data with the Localized type; this file covers everything that is not
 * career data. Same rule: every string carries both languages.
 */
export const ui = {
  nav: {
    welcome: { en: "Welcome", es: "Inicio" },
    skills: { en: "Skills", es: "Habilidades" },
    projects: { en: "Projects", es: "Proyectos" },
    about: { en: "About Me", es: "Sobre mí" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    hello: { en: "Hello", es: "Hola" },
    iAm: { en: "I'm", es: "soy" },
    contactMe: { en: "Contact me", es: "Contáctame" },
    downloadCV: { en: "Download CV", es: "Descargar CV" },
  },
  skills: {
    proficient: { en: "Proficient Tech Stack", es: "Stack principal" },
    familiarTab: { en: "Familiar with", es: "También he usado" },
    familiarTitle: { en: "Also worked with", es: "También he trabajado con" },
    design: { en: "Design & Media Tools", es: "Diseño y multimedia" },
    soft: { en: "Soft Skills", es: "Habilidades blandas" },
  },
  projects: {
    heading: { en: "Projects & Case Studies", es: "Proyectos y casos de estudio" },
    subtitle: {
      en: "Problem → decision → result. AI here means production systems — inference costs, failure handling, data privacy — not demos.",
      es: "Problema → decisión → resultado. Aquí la IA significa sistemas en producción — costos de inferencia, manejo de fallos, privacidad de datos — no demos.",
    },
    show: { en: "Show", es: "Ver" },
    live: { en: "Live", es: "En vivo" },
    code: { en: "Code", es: "Código" },
    features: { en: "Features:", es: "Características:" },
    problem: { en: "Problem", es: "Problema" },
    decision: { en: "Decision", es: "Decisión" },
    result: { en: "Result", es: "Resultado" },
    openSource: {
      en: "This site is open source — view it on GitHub",
      es: "Este sitio es open source — míralo en GitHub",
    },
  },
  contact: {
    title: { en: "Contact Me", es: "Contacto" },
    subtitle: { en: "Get in touch with me", es: "Escríbeme y hablamos" },
    firstName: { en: "First name", es: "Nombre" },
    lastName: { en: "Last name", es: "Apellido" },
    email: { en: "Email Address", es: "Correo electrónico" },
    message: { en: "Message", es: "Mensaje" },
    messagePlaceholder: { en: "Your message...", es: "Tu mensaje..." },
    send: { en: "Send", es: "Enviar" },
    sending: { en: "Sending...", es: "Enviando..." },
    success: {
      en: "✅ Message sent successfully! I'll respond soon.",
      es: "✅ ¡Mensaje enviado! Respondo pronto.",
    },
    error: {
      en: "❌ Error sending message. Please try again.",
      es: "❌ Error al enviar el mensaje. Intenta de nuevo.",
    },
    vMinChars: (n: number): Localized => ({
      en: `${n} characters minimum`,
      es: `Mínimo ${n} caracteres`,
    }),
    vMaxChars: (n: number): Localized => ({
      en: `${n} characters maximum`,
      es: `Máximo ${n} caracteres`,
    }),
    vEmail: { en: "Invalid email", es: "Correo inválido" },
  },
} as const;

/** Root path for a locale ("/" for the default, "/es/" for Spanish). */
export function localePath(locale: Locale): string {
  return locale === "en" ? "/" : "/es/";
}

/** The other locale, for the language switcher. */
export function altLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}
