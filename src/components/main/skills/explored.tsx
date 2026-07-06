import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { familiarSkills } from "@/data";
import { t } from "@/lib/t";

export function SecondarySkills() {
  const skills = familiarSkills.map((skill) => ({
    quote: t(skill.blurb),
    name: skill.name,
    designation: t(skill.designation),
    src: skill.image,
  }));
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
