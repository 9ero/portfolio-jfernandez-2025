"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
     const lines = words.split("\n").map((line) => line.trim());
    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => (
        <div key={`line-${lineIdx}`} className="block w-full  mx-auto text-center whitespace-normal">
          {line.split(" ").map((word, wordIdx) => (
            <motion.span
              key={`word-${lineIdx}-${wordIdx}`}
              className="opacity-0 inline-block"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-xl  md:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
