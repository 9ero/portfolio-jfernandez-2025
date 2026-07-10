import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { proficientSkills } from "@/data";
import { t } from "@/lib/t";
import type { Locale } from "@/data/types";

export function ProficientSkills({ locale = "en" }: { locale?: Locale }) {
  const skills = proficientSkills.map((skill) => ({
    quote: t(skill.blurb, locale),
    name: skill.name,
    designation: t(skill.designation, locale),
    src: skill.image,
  }));
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
