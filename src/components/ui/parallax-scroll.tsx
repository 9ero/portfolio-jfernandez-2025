"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Aceternity parallax-scroll, generalized: accepts arbitrary card nodes
 * instead of image URLs so the project cards keep their own markup/behavior.
 */
export const ParallaxScroll = ({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(items.length / 3);
  const columns = [
    { part: items.slice(0, third), y: translateFirst },
    { part: items.slice(third, 2 * third), y: translateSecond },
    { part: items.slice(2 * third), y: translateThird },
  ];

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-6 py-28 px-4 md:px-10">
        {columns.map(({ part, y }, col) => (
          <div className="grid gap-6 auto-rows-max" key={`grid-col-${col}`}>
            {part.map((el, idx) => (
              <motion.div style={{ y }} key={`grid-${col}-${idx}`}>
                {el}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
