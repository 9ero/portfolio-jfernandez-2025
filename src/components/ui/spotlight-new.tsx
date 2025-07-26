"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react"

type SpotlightProps = {
  gradientFirst?: string;
  darkGradientFirst?: string;
  gradientSecond?: string;
  darkGradientSecond?: string;
  gradientThird?: string;
  darkGradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 60%, 0.2) 0, hsla(210, 100%, 45%, 0.1) 50%, hsla(210, 100%, 35%, 0) 80%)",
  darkGradientFirst =  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, 0.08) 0, hsla(210, 100%, 55%, 0.02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 70%, 0.15) 0, hsla(210, 100%, 50%, 0.08) 80%, transparent 100%)",
  darkGradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.06) 0, hsla(210, 100%, 55%, 0.02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 70%, 0.12) 0, hsla(210, 100%, 45%, 0.06) 80%, transparent 100%)",
  darkGradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.04) 0, hsla(210, 100%, 45%, 0.02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"))

    checkDark()

    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const grad1 = isDark ? darkGradientFirst : gradientFirst
  const grad2 = isDark ? darkGradientSecond : gradientSecond
  const grad3 = isDark ? darkGradientThird : gradientThird

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
       <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: grad1,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: grad2,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: grad3,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};
