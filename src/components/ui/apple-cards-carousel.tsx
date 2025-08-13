"use client";
import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

interface ImageProps {
  height?: number;
  width?: number;
  src: string;
  className?: string;
  alt?: string;
  fill?: boolean;
  [key: string]: any;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ 
  items, 
  initialScroll = 0, 
  autoScroll = true, 
  autoScrollSpeed = 33 
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRightRef = useRef(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Only auto-scroll if there's content to scroll
        if (maxScroll <= 0) return;

        if (isScrollingRightRef.current) {
          // Moving right
          if (scrollLeft >= maxScroll - 2) {
            // Reached the end, start moving left
            isScrollingRightRef.current = false;
          } else {
            carouselRef.current.scrollBy({ left: 1, behavior: "auto" });
          }
        } else {
          // Moving left
          if (scrollLeft <= 2) {
            // Reached the beginning, start moving right
            isScrollingRightRef.current = true;
          } else {
            carouselRef.current.scrollBy({ left: -1, behavior: "auto" });
          }
        }
      }, autoScrollSpeed);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScroll, autoScrollSpeed]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (autoScroll) {
      resumeAutoScroll();
    }
  };

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  // Helper function to resume auto-scroll
  const resumeAutoScroll = () => {
    if (autoScroll && !autoScrollRef.current) {
      autoScrollRef.current = setInterval(() => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Only auto-scroll if there's content to scroll
        if (maxScroll <= 0) return;

        if (isScrollingRightRef.current) {
          if (scrollLeft >= maxScroll - 2) {
            isScrollingRightRef.current = false;
          } else {
            carouselRef.current.scrollBy({ left: 1, behavior: "auto" });
          }
        } else {
          if (scrollLeft <= 2) {
            isScrollingRightRef.current = true;
          } else {
            carouselRef.current.scrollBy({ left: -1, behavior: "auto" });
          }
        }
      }, autoScrollSpeed);
    }
  };

  // Helper function to resume auto-scroll in a specific direction
  const resumeAutoScrollInDirection = (direction: 'left' | 'right') => {
    if (autoScroll && !autoScrollRef.current) {
      // Set the direction based on the button clicked
      isScrollingRightRef.current = direction === 'right';
      
      autoScrollRef.current = setInterval(() => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Only auto-scroll if there's content to scroll
        if (maxScroll <= 0) return;

        if (isScrollingRightRef.current) {
          if (scrollLeft >= maxScroll - 2) {
            isScrollingRightRef.current = false;
          } else {
            carouselRef.current.scrollBy({ left: 1, behavior: "auto" });
          }
        } else {
          if (scrollLeft <= 2) {
            isScrollingRightRef.current = true;
          } else {
            carouselRef.current.scrollBy({ left: -1, behavior: "auto" });
          }
        }
      }, autoScrollSpeed);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Pause auto-scroll when using manual controls
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
      
      // Resume auto-scroll in the left direction after a delay
      setTimeout(() => resumeAutoScrollInDirection('left'), 250);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      // Pause auto-scroll when using manual controls
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
      
      // Resume auto-scroll in the right direction after a delay
      setTimeout(() => resumeAutoScrollInDirection('right'), 3000);
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] "
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>
          <div
                className={cn(
                  "flex flex-row justify-start gap-4 pl-4",
                  "max-w-7xl ml-[30vw]"
                )}
              >
                {items.map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2 * index,
                        ease: "easeOut",
                      },
                    }}
                    key={"card" + index}
                    className={cn(
                      "rounded-3xl hover:scale-105 transition-transform duration-300 border-2 border-sky-500 hover:drop-shadow-xl hover:drop-shadow-sky-500",
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "filter grayscale"
                        : ""
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background dark:border-none bg-foreground  disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-background" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background dark:border-none bg-foreground  disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-background" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] h-screen  overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[110] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-[60vh] w-[70vw] flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[57vh] md:w-[50vw] md:max-w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
