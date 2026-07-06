import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { designSkills } from "@/data";
import { t } from "@/lib/t";

export function VisualSkills() {
  const skills = designSkills.map((skill) => ({
    quote: t(skill.blurb),
    name: skill.name,
    designation: t(skill.designation),
    src: skill.image,
  }));
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
