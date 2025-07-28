import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function ProficientSkills() {
  const skills = [
    {
      quote:
        "In recent years, I have worked closely with React, using frameworks such as Next.js, Vite, and more recently, Astro. This portfolio was built using the latter.",
      name: "React",
      designation: "Next.js, vite and Astro",
      src: "/react-wpp.webp",
    },
    {
      quote:
        "With over a year of experience working with Docker, I’ve built and customized containers to streamline development and make projects easier to maintain across teams.",
      name: "Docker",
      designation: `"docker compose up"`,
      src: "/docker-wpp.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Django",
      designation: "Complete backend solution using Nginx and Gunicorn",
      src: "/django-wpp.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={skills} />;
}
