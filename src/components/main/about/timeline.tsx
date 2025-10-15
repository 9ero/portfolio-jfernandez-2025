"use client";
import { Timeline } from "@/components/ui/timeline";
import { ImgZoomHelper } from "@/components/ui/img-zoom-helper";

const images ={
  past: [
    {
      src: "about/past1.webp",
      alt: "the kid in the computer with his dogs"
    },
    {
      src: "about/past2.webp",
      alt: "the kid in the computer"
    },
  ],
  present: [
    {
      src: "about/present2.webp",
      alt: "the man in the computer"
    },
    {
      src: "about/present1.webp",
      alt: "the man dominating technologies"
    },
    {
      src: "about/present3.webp",
      alt: "two men testing a mobile app"
    }
  ],
  future: [
    {
      src: "about/future1.webp",
      alt: "the man thinking"
    },
    {
      src: "about/future2.webp",
      alt: "the main with de cyber girl"
    },
    {
      src: "about/future3.webp",
      alt: "the man presenting the stadistics"
    }
  ]
}

export function AboutTimeline() {
  const data = [
    {
      title: "Past",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Since the age of 13, amazed by the way elements were designed on the web, I taught myself to create web pages using pure HTML and CSS, and later built some simple applications with Visual Basic. From that moment on, and throughout my university years, I discovered my passion for creating useful and entertaining applications. On one hand, the possibility of creating functional applications for myself, and on the other, bringing my video game and mobile application projects to life.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4">
            {
              images.past.map((image, index) => (
                <ImgZoomHelper
                  src={image.src}
                  alt={image.alt}
                  key={index}
                />
              ))
            }
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            I’m a full stack developer with hands-on experience building dynamic web applications using React, Flask, Django, and Next.js. Throughout my career, I’ve designed and implemented complete end-to-end solutions, handling both backend logic and frontend interfaces. I’ve successfully deployed applications on AWS (ARM Graviton infrastructure) and Vercel, following best practices in continuous integration and deployment. My work also involves using technologies like Docker, Git, Tailwind, shadcn/ui, and Aceternity UI to streamline workflows and craft modern, responsive interfaces. I’m currently part of a development team at a real estate company, where I build, maintain, and enhance internal systems and custom web platforms. Additionally, I’ve developed e-commerce solutions and small video games, broadening my range as a developer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {
              images.present.map((image, index) => (
                <ImgZoomHelper
                  src={image.src}
                  alt={image.alt}
                  key={index}
                />
              ))
            }
          </div>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
          Looking ahead, I aspire to join a company that encourages growth and continuous learning, where I can collaborate on challenging projects and learn from experienced professionals. My goal is to keep expanding my knowledge as a software engineer, delving deeper into emerging areas such as data science and machine learning. I’m particularly interested in environments that value innovation, mentorship, and teamwork—places where I can both contribute my skills and evolve through new technologies and experiences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {
              images.future.map((image, index) => (
                <ImgZoomHelper
                  src={image.src}
                  alt={image.alt}
                  key={index}
                />
              ))
            }
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full h-screen overflow-auto">
      <Timeline data={data} />
    </div>
  );
}
