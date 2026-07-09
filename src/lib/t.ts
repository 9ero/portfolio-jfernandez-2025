import type { Locale, Localized } from "@/data/types";

/**
 * Resolve a localized string. Locale defaults to English until the
 * locale toggle lands (F3), which will thread the active locale through.
 */
export function t(text: Localized, locale: Locale = "en"): string {
  return text[locale];
}
