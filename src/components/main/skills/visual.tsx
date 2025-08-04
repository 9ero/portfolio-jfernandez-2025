import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function VisualSkills() {
  const skills = [
    {
      quote:
      "With several years of experience in Adobe Creative Cloud, I’ve worked extensively with Photoshop for editing, Illustrator for logo design, Premiere Pro for video editing, and Audition for audio refinement.",
    name: "Adobe Creative Cloud",
    designation: "Photoshop, Illustrator, Premiere Pro & Audition",
    src: "/adobe.webp",
  },
  {
    quote:
      "Used Figma to create responsive web and mobile app prototypes, focusing on UX/UI clarity and developer handoff for implementation.",
    name: "Figma",
    designation: "Web and mobile app UI design & prototyping",
    src: "/figma.webp",
  },
  ];
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
