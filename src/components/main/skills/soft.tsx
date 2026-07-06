import { HoverEffect } from "@/components/ui/card-hover-effect";
import { softSkills } from "@/data";
import { t } from "@/lib/t";

export function SoftSkills() {
  const items = softSkills.map((skill) => ({
    title: t(skill.title),
    description: t(skill.description),
    link: null,
  }));
  return (
    <div className="w-full overflow-y-visible">
      <HoverEffect items={items} />
    </div>
  );
}
