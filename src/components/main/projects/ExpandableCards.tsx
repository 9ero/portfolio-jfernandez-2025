"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconBrandGithub, IconBrandJavascript, IconBrandTailwind, IconChevronLeft, IconChevronRight, IconExternalLink, IconBrandReact, IconBrandAws, IconBrandDjango, IconBrandNextjs, IconBrandVite, IconBrandDocker, IconBrandPython, IconBrandSass, IconBrandReactNative, IconBrandKotlin, IconBrandTypescript, IconBrandAndroid, IconCast, IconDatabase, IconDeviceMobile, IconWorld, IconBrandVercel, IconMicrophone, IconMusic, IconVideo, IconFileSpreadsheet, IconCloudUpload, IconBarcode} from "@tabler/icons-react";

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

export function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
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
                      <IconExternalLink size={20} /> Live
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
                      <IconBrandGithub size={20} /> Code
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
                    className="text-neutral-600 text-sm lg:text-base h-full max-h-md pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-300  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full gap-4 overflow-auto  max-h-full  md:p-10 lg:rounded-xl lg:border-2 lg:border-sky-300">
        {cards.map((card, index) => (
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
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-col md:flex-row ">
            <motion.div layoutId={`image-${card.title}-${id}`}>
            {Array.isArray(card.src) ? (
                <img
                width={100}
                height={100}
                src={card.src[0]} // Muestra la primera imagen en la lista
                alt={card.title}
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
            ) : (
                <img
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
            )}
            </motion.div>
              <div className="">
                <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <StatusBadge status={card.status} />
                </div>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 justify-center md:justify-start flex items-center gap-2"
                >
                  {card.Icon} {card.description} 
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-sky-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
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
type Card = {
  description: string;
  Icon: React.ReactNode;
  title: string;
  src: string[];
  status?: CardStatus;
  ctaText: string;
  ctaLink?: string;
  codeLink?: string;
  techStack: () => React.ReactNode;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "React Native offline-first POS",
    Icon: <IconBrandReactNative size={20} />,
    title: "Antuan POS",
    status: { label: "Beta", tone: "green" },
    src: ["antuan/placeholder-1.webp"],
    codeLink: "https://github.com/9ero/Antuan-POS",
    ctaText: "Show",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandReactNative size={20} /> React Native</li>
          <li className={styles}> <IconDeviceMobile size={20} /> Expo</li>
          <li className={styles}> <IconBrandTypescript size={20} /> TypeScript</li>
          <li className={styles}> <IconDatabase size={20} /> SQLite</li>
          <li className={styles}> <IconCloudUpload size={20} /> Turso</li>
          <li className={styles}> <IconBarcode size={20} /> Barcode</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          Antuan POS is an offline-first mobile point of sale for small stores: it runs 100% without a connection on a phone at the counter and uses the cloud only as backup. Now in beta at a real store, with the official launch days away.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Barcode Scanning: camera-based scanner as the primary selling flow</li>
        <li>Smart Cart: quantity control, stock validation and overselling prevention</li>
        <li>PIN Checkout: every sale is attributed to a user via reusable PINs</li>
        <li>Inventory: receptions, shortages and full stock-movement history</li>
        <li>Cash Closing: period reports, rankings and Excel (.xlsx) export</li>
        <li>Cloud Backup: real-time event push to Turso (SQLite in the cloud)</li>
        </ul>
        </>
      );
    },
  },
  {
    description: "Enterprise portal — Next.js & Python",
    Icon: <><IconBrandJavascript size={20} /><IconBrandPython size={20} /></>,
    title: "Ecoquintas Hub",
    src: ["hub/placeholder-1.webp"],
    ctaText: "Show",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandNextjs size={20} /> Next.js 15</li>
          <li className={styles}> <IconBrandReact size={20} /> React 19</li>
          <li className={styles}> <IconBrandTypescript size={20} /> TypeScript</li>
          <li className={styles}> <IconBrandTailwind size={20} /> Tailwind CSS</li>
          <li className={styles}> <IconBrandAws size={20} /> AWS Cognito</li>
          <li className={styles}> <IconBrandPython size={20} /> Python API</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          Client portal for Grupo Ecoquintas where clients and partners consult account statements, financial projections and income. I built the whole system: the Next.js frontend and 100% of the Python backend.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Secure Auth: AWS Cognito + NextAuth with automatic JWT refresh</li>
        <li>Financial Dashboards: advanced AG Grid tables and Recharts visualizations</li>
        <li>PDF Generation: downloadable statements built with jsPDF / pdf-lib</li>
        <li>Modern UI: shadcn/ui components, dark/light theme, fully responsive</li>
        <li>Part of my wider role at the company: 2nd contributor to the core system (222 commits) and to the Airflow payment-automation pipeline (86 commits)</li>
        </ul>
        </>
      );
    },
  },
  {
    description: "Cast to Fire TV — Kotlin & WebRTC",
    Icon: <IconBrandKotlin size={20} />,
    title: "FireLink",
    status: { label: "In development", tone: "amber" },
    src: ["firelink/placeholder-1.webp"],
    codeLink: "https://github.com/9ero/FireLink",
    ctaText: "Show",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandKotlin size={20} /> Kotlin</li>
          <li className={styles}> <IconBrandAndroid size={20} /> Fire TV / Android TV</li>
          <li className={styles}> <IconCast size={20} /> WebRTC</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          FireLink turns a Fire TV or Android TV into a wireless screen receiver: any desktop browser can cast a tab or the whole screen over WebRTC — no extension, no Chromecast required.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Embedded Server: the TV serves its own control page over HTTPS/WSS</li>
        <li>Browser Casting: getDisplayMedia capture from Chrome, Brave or Edge</li>
        <li>Network Discovery: announces itself via mDNS, SSDP and DIAL</li>
        <li>Zero Install on Desktop: everything runs from the browser</li>
        <li>Distributed as an APK, installable via ADB</li>
        </ul>
        </>
      );
    },
  },
  {
    description: "Travel booking platform",
    Icon: <IconBrandTypescript size={20} />,
    title: "WhereToGoCR",
    status: { label: "In development · 90%", tone: "amber" },
    src: ["wheretogo/placeholder-1.webp"],
    ctaText: "Show",
    ctaLink: "https://wheretogocr.com",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandNextjs size={20} /> Next.js 16</li>
          <li className={styles}> <IconBrandTypescript size={20} /> TypeScript</li>
          <li className={styles}> <IconBrandTailwind size={20} /> Tailwind CSS</li>
          <li className={styles}> <IconDatabase size={20} /> Turso + Drizzle</li>
          <li className={styles}> <IconWorld size={20} /> i18n ES/EN</li>
          <li className={styles}> <IconBrandVercel size={20} /> Vercel</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          Tourism experiences platform built for Pura Vida Bros: travelers explore tours, lodging and services in Costa Rica, build an itinerary with a multi-item cart and send personalized trip requests through a guided wizard.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Trip Wizard: guided multi-step flow that turns a cart into a custom trip request</li>
        <li>Multilingual: native locale routing with full Spanish/English support</li>
        <li>Modern Data Layer: Turso (libSQL) with Drizzle ORM</li>
        <li>Admin Panel: JWT-authenticated management of tours and requests</li>
        <li>Robust Forms: React Hook Form + Zod validation, transactional email via Resend</li>
        </ul>
        </>
      );
    },
  },
  {
    description: "AI karaoke generator",
    Icon: <IconBrandPython size={20} />,
    title: "KaraHero AI",
    status: { label: "In development · 60%", tone: "amber" },
    src: ["karahero/placeholder-1.webp"],
    ctaText: "Show",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandPython size={20} /> Python</li>
          <li className={styles}> <IconMicrophone size={20} /> AI Transcription</li>
          <li className={styles}> <IconBrandReact size={20} /> React Editor</li>
          <li className={styles}> <IconMusic size={20} /> Demucs</li>
          <li className={styles}> <IconVideo size={20} /> ffmpeg</li>
          <li className={styles}> <IconFileSpreadsheet size={20} /> .lrc / .srt</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          KaraHero AI generates word-by-word synced karaoke from any audio or video file using AI transcription and forced alignment, with an interactive web editor to refine the result.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Word-level Sync: AssemblyAI or local Whisper transcription with per-word timestamps</li>
        <li>Vocal Separation: optional Demucs stem splitting for clean instrumentals</li>
        <li>Forced Alignment: paste the real lyrics and realign them with CTC alignment</li>
        <li>Web Editor: FastAPI + React + wavesurfer.js for manual fine-tuning</li>
        <li>Video Render: MP4 output with colors, gradients and audio visualizer via ffmpeg</li>
        </ul>
        </>
      );
    },
  },
  {
    description:"Next.js & Django",
    Icon: <><IconBrandJavascript size={20} /><IconBrandPython size={20} /></>,
    title: "EQ Tickets",
    src: [
        "eqtickets/et-mac-1.webp",
        "eqtickets/et-mac-2.webp",
        "eqtickets/et-mobile-1.webp",
        "eqtickets/et-mac-3.webp",
        "eqtickets/et-mac-4.webp",
        "eqtickets/et-mobile-2.webp",
        "eqtickets/et-mac-5.webp"
      ],
    ctaText: "Show",
    ctaLink: "https://eqtickets.net",
    techStack: () => {
      return (
        <ul className="grid grid-cols-3 w-max gap-3">
          <li className={styles}> <IconBrandNextjs size={20} /> Next.js</li>
          <li className={styles}> <IconBrandTailwind size={20} /> Tailwind CSS</li>
          <li className={styles}> <IconBrandDjango size={20} /> Django</li>
          <li className={styles}> <IconBrandPython size={20} /> Django REST Framework</li>
          <li className={styles}> <IconBrandDocker size={20} /> Docker</li>
          <li className={styles}> <IconBrandAws size={20} /> AWS</li>
        </ul>
      );
    },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          EQ Tickets is a comprehensive application consisting of two main components: a Django backend with Django REST Framework and a Next.js frontend with Tailwind CSS, Shadcn, and Aceternity UI components.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
          <li>Employee Request Management: Organized handling of employee requests and applications from affiliated companies</li>
          <li>Procurement Lists: Complete control and management of purchasing lists</li>
          <li>Multi-Entity Management: Companies, departments, users, tickets, and shopping lists</li>
          <li>Dark/Light Theme: Full compatibility with both dark and light modes</li>
          <li>Responsive Design: Fully adaptable to all devices and screen sizes</li>
          <li>Modern UI: Clean interface built with Shadcn and Aceternity UI components</li>
        </ul>
        </>
      );
    },
  },
  {
    description:"A responsive and bilingual website",
    Icon: <IconBrandJavascript size={20} />,
    title: "Mabaagroexport",
    src: [
        "maba/mb-mac-1.webp",
        "maba/mb-mobile-1.webp",
        "maba/mb-mac-2.webp", 
        "maba/mb-mac-3.webp",
      ],
    codeLink: "https://github.com/9ero/maba-app",
    ctaText: "Show",
    ctaLink: "https://mabaagroexport.vercel.app/",
    techStack: () => {
        return (
          <ul className="grid grid-cols-3 gap-3">
            <li className={styles}> <IconBrandReact size={20} /> React</li>
            <li className={styles}> <IconBrandVite size={20} /> ViteJS</li>
            <li className={styles}> <IconBrandSass size={20} /> SASS</li>
          </ul>
        );
      },
    content: () => {
      return (
        <>
      <p className="text-md font-bold">
        Official corporate website for MABA Agroexport showcasing agricultural export products and commercial contact management.
      </p>
      <p>
      Features:
      </p>
      <ul className="list-decimal list-inside">
      <li>Multilingual Support: Spanish/English language switching</li>
      <li>Interactive Product Gallery: Dynamic showcase of agricultural products</li>
      <li>Responsive Design: Fully adaptable to all devices and screen sizes</li>
      <li>SEO Optimized: Integrated meta tags and search engine optimization</li>
      <li>Modern UI: Clean and professional corporate design</li>
      <li>Contact Management: Streamlined commercial contact system</li>
      </ul>
      </>
      );
    },
  },
  {
    description:"Made with Next.js",
    Icon: <IconBrandJavascript size={20} />,
    title: "My old portfolio",
    src: [
        "old/op-mac-1.webp",
        "old/op-mobile-1.webp",
        "old/op-mac-2.webp",
        "old/op-mobile-2.webp", 
        "old/op-mac-3.webp",
        
      ],
    codeLink: "https://github.com/9ero/juan-portfolio",
    ctaText: "Show",
    ctaLink: "https://juan-fernandez-portfolio.vercel.app/",
    techStack: () => {
        return (
          <ul className="grid grid-cols-3 gap-3">
            <li className={styles}> <IconBrandNextjs size={20} /> Next.js</li>
            <li className={styles}> <IconBrandReact size={20} /> React</li>
            <li className={styles}> <IconBrandTailwind size={20} /> Tailwind CSS</li>
          </ul>
        );
      },
    content: () => {
      return (
        <>
        <p className="text-md font-bold">
          This was my first portfolio where I presented my projects. Built with Next.js and deployed on Vercel.
        </p>
        <p>
        Features:
        </p>
        <ul className="list-decimal list-inside">
        <li>Modern Design: Clean and professional interface showcasing my work</li>
        <li>Responsive: Fully adaptable to all devices and screen sizes</li>
        <li>Project Showcase: Organized presentation of my development projects</li>
        <li>Next.js Framework: Built with React and Next.js for optimal performance</li>
        <li>Vercel Deployment: Hosted on Vercel for fast and reliable access</li>
        <li>Professional Layout: Structured design highlighting my skills and experience</li>
        </ul>
        
        </>
      );
    },
  },
];
