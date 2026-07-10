import { HoverEffect } from "@/components/ui/card-hover-effect";
import { softSkills } from "@/data";
import { t } from "@/lib/t";
import type { Locale } from "@/data/types";

export function SoftSkills({ locale = "en" }: { locale?: Locale }) {
  const items = softSkills.map((skill) => ({
    title: t(skill.title, locale),
    description: t(skill.description, locale),
    link: null,
  }));
  return (
    <div className="w-full overflow-y-visible">
      <HoverEffect items={items} />
    </div>
  );
}
