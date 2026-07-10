"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { IconBrandGithub, IconChevronLeft, IconChevronRight, IconExternalLink } from "@tabler/icons-react";
import { projects } from "@/data";
import { t } from "@/lib/t";
import { ui } from "@/lib/ui";
import type { Locale } from "@/data/types";
import { TechIcon } from "./techIcons";

type CardStatus = { label: string; tone: "green" | "amber" };

const statusTones: Record<CardStatus["tone"], string> = {
  green:
    "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
  amber:
    "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
};

const StatusBadge = ({ status }: { status?: CardStatus }) => {
  if (!status) return null;
  return (
    <span
      className={`inline-block text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full border ${statusTones[status.tone]}`}
    >
      {status.label}
    </span>
  );
};

export function ExpandableCards({ locale = "en" }: { locale?: Locale }) {
  const cards = buildCards(locale);
  const [active, setActive] = useState<Card | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  function ImageCarousel({ images, title, id }: { images: string[], title: string, id: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
  
    useEffect(() => {
      if (isPaused) return;
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }, [images.length, isPaused]);
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleMouseEnter = () => {
      if (isExpanded) return setIsPaused(true);
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
      if (isExpanded) return setIsPaused(true);
        setIsPaused(false);
    };

    const handleMouseClick = (e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>) => {
        e.preventDefault();
        if (isExpanded) {
            setIsPaused(false);
            setIsExpanded(false);
        } else {
            setIsPaused(true);
            setIsExpanded(true);
        }
        
    };
  
    return (
      <div className="relative w-full h-80 lg:h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className={`${isExpanded ? 'max-h-screen max-w-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] hover:cursor-zoom-out' : 'w-full lg:h-80 object-cover object-top hover:cursor-zoom-in hover:scale-105 transition-all duration-300'}`}
            initial={{ opacity: 0.3, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.3, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={e => handleMouseClick(e)}
            onClick={e => handleMouseClick(e)}
          />
        </AnimatePresence>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
  
        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <IconChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <IconChevronRight size={20} />
        </button>
      </div>
    );
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[300]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl  h-full  md:max-h-fit sm:border-2 sm:border-sky-300 flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto md:overflow-hidden"
            >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                    {Array.isArray(active.src) ? (
                        <ImageCarousel images={active.src} title={active.title} id={id} />
                    ) : (
                        <img
                        width={200}
                        height={200}
                        src={active.src}
                        alt={active.title}
                        className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top "
                        />
                    )}
                </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <div className="flex items-center gap-2 flex-wrap">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <StatusBadge status={active.status} />
                    </div>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex gap-2">
                  {active.ctaLink && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-sky-500 text-white flex gap-1"
                    >
                      <IconExternalLink size={20} /> {ui.projects.live[locale]}
                    </motion.a>
                  )}
                  {active.codeLink && (
                    <motion.a
                      layoutId={`button-code-${active.title}-${id}`}
                      href={active.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-sky-500 text-white flex gap-1"
                    >
                      <IconBrandGithub size={20} /> {ui.projects.code[locale]}
                    </motion.a>
                  )}
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm lg:text-base md:max-h-[45vh] pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-300  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.techStack && typeof active.techStack === "function"
                      ? active.techStack()
                      : active.techStack}
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
                
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ParallaxScroll
        items={cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(card);
              }
            }}
            className="flex flex-col rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-sky-400 dark:hover:border-sky-300 transition-colors cursor-pointer"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                width={400}
                height={128}
                src={Array.isArray(card.src) ? card.src[0] : card.src}
                alt={card.title}
                className="h-32 w-full object-cover object-top"
              />
            </motion.div>
            <div className="flex flex-col gap-1 p-3 grow">
              <div className="flex items-center gap-2 flex-wrap">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <StatusBadge status={card.status} />
              </div>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2 flex-wrap"
              >
                {card.Icon} {card.description}
              </motion.p>
            </div>
            <div className="flex items-center flex-wrap gap-2 p-3 pt-0">
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-1.5 text-sm rounded-full font-bold bg-gray-100 hover:bg-sky-500 hover:text-white text-black"
              >
                {card.ctaText}
              </motion.button>
              {card.codeLink && (
                <a
                  href={card.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${card.title} — GitHub`}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
                >
                  <IconBrandGithub size={16} /> GitHub
                </a>
              )}
              {card.ctaLink && (
                <a
                  href={card.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${card.title} — ${ui.projects.live[locale]}`}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
                >
                  <IconExternalLink size={16} /> {ui.projects.live[locale]}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      />
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
        zIndex: 400,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
const styles = "flex dark:text-neutral-200 items-center gap-1  drop-shadow-md drop-shadow-sky-600 dark:drop-shadow-sky-300"

const buildCards = (locale: Locale) =>
  projects.map((project) => ({
    title: project.title,
    description: t(project.shortDescription, locale),
    Icon: (
      <>
        {project.icons.map((key) => (
          <TechIcon key={key} name={key} />
        ))}
      </>
    ),
    status: project.status
      ? { label: t(project.status.label, locale), tone: project.status.tone }
      : undefined,
    src: project.images,
    ctaText: ui.projects.show[locale],
    ctaLink: project.links.live,
    codeLink: project.links.code,
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          {project.tech.map((tech) => (
            <li key={tech.label} className={styles}>
              {" "}
              <TechIcon name={tech.icon} /> {tech.label}
            </li>
          ))}
        </ul>
      );
    },
    content: () => {
      return (
        <>
          <p className="text-md font-bold">{t(project.summary, locale)}</p>
          {project.caseStudy && (
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold text-sky-600 dark:text-sky-300">
                  {ui.projects.problem[locale]}.
                </span>{" "}
                {t(project.caseStudy.problem, locale)}
              </p>
              <p>
                <span className="font-bold text-sky-600 dark:text-sky-300">
                  {ui.projects.decision[locale]}.
                </span>{" "}
                {t(project.caseStudy.decision, locale)}
              </p>
              <p>
                <span className="font-bold text-sky-600 dark:text-sky-300">
                  {ui.projects.result[locale]}.
                </span>{" "}
                {t(project.caseStudy.result, locale)}
              </p>
            </div>
          )}
          {project.features.length > 0 && (
            <>
              <p>{ui.projects.features[locale]}</p>
              <ul className="list-decimal list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{t(feature, locale)}</li>
                ))}
              </ul>
            </>
          )}
        </>
      );
    },
  }));

type Card = ReturnType<typeof buildCards>[number];
