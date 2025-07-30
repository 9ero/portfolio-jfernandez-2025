import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function ProficientSkills() {
  const skills = [
    {
      quote:
        "Flask is the core technology I work with daily in a professional environment. I build APIs and server-side applications, often integrating them with jQuery via AJAX to create dynamic user interfaces.",
      name: "Flask",
      designation: "Backend APIs and web apps with jQuery and AJAX",
      src: "/flask-wpp.webp",
    },
    {
      quote:
        "AWS is part of my daily workflow. I manage and deploy systems using EC2, S3 and CloudWatch. From configuring SSL certificates to managing Dockerized backends, AWS supports most of our infrastructure.",
      name: "AWS",
      designation: "Infrastructure management with EC2, S3 and Docker",
      src: "/aws-wpp.webp",
    },
    {
      quote:
        "React has been key in building modern web interfaces. I’ve worked with frameworks like Next.js and Vite, and deployed apps using platforms like Vercel. This portfolio is built with Astro.",
      name: "React",
      designation: "Next.js, Vite, Astro, deployed on Vercel",
      src: "/react-wpp.webp",
    },
    {
      quote:
        "I maintain a Django project running in production on AWS, using Docker with Nginx, Gunicorn, and SSL. I’ve built RESTful APIs using Django REST Framework and integrated PostgreSQL and Redis for performance.",
      name: "Django",
      designation: "Production-ready REST APIs on AWS",
      src: "/django-wpp.webp",
    },
    {
      quote:
        "Docker has become an essential part of my workflow. I use it to containerize applications, ensuring consistent environments for development, testing, and deployment across teams.",
      name: "Docker",
      designation: "Multi-service apps with Docker Compose",
      src: "/docker-wpp.webp",
    },
    {
      quote:
        "I have a solid foundation in pure CSS and daily experience with Bootstrap. This background made it easy for me to adopt Tailwind over a year ago. I now use it to build clean, responsive UIs with speed and precision.",
      name: "Tailwind CSS",
      designation: "Utility-first CSS with solid Bootstrap and CSS background",
      src: "/tailwind-wpp.webp",
    },
    {
      quote:
        "Version control is essential in all my projects. I use Git daily for branching, collaborating via GitHub, and managing deployments through CI/CD pipelines.",
      name: "Git",
      designation: "GitHub, CI/CD, clean commit workflows",
      src: "/git-wpp.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
