import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { familiarSkills } from "@/data";
import { t } from "@/lib/t";
import type { Locale } from "@/data/types";

export function SecondarySkills({ locale = "en" }: { locale?: Locale }) {
  const skills = familiarSkills.map((skill) => ({
    quote: t(skill.blurb, locale),
    name: skill.name,
    designation: t(skill.designation, locale),
    src: skill.image,
  }));
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
