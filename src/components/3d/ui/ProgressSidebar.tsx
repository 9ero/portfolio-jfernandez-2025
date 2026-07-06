"use client";
import { motion, AnimatePresence } from "motion/react";
import { SECTIONS } from "@/components/3d/scene/ProceduralTree";

const SECTION_COLORS = ["#38bdf8", "#a78bfa", "#34d399", "#fb923c", "#f472b6"];

// Mapping from waypoint index (0=overview, 1-5=sections) to section index
const DOTS = [
  { label: "Overview", color: "#94a3b8" },
  ...SECTIONS.map((s, i) => ({ label: s.label, color: SECTION_COLORS[i] })),
];

interface Props {
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export function ProgressSidebar({ activeIndex, onDotClick }: Props) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-0 select-none">
      {/* Vertical track */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

      {/* Progress fill */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px bg-sky-400/60 top-0 origin-top"
        animate={{ scaleY: activeIndex / (DOTS.length - 1) }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ height: "100%" }}
      />

      {DOTS.map((dot, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;

        return (
          <button
            key={dot.label}
            onClick={() => onDotClick(i)}
            className="relative z-10 flex items-center group"
            style={{ paddingBlock: "18px" }}
            title={dot.label}
          >
            {/* Dot */}
            <motion.div
              animate={{
                scale: isActive ? 1.4 : 1,
                backgroundColor: isActive || isPast ? dot.color : "rgba(255,255,255,0.15)",
                boxShadow: isActive ? `0 0 10px ${dot.color}80` : "none",
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full border border-white/20 cursor-pointer"
            />

            {/* Label — appears on hover or when active */}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-6 text-xs font-semibold whitespace-nowrap"
                  style={{ color: dot.color }}
                >
                  {dot.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Hover label (when not active) */}
            {!isActive && (
              <span
                className="absolute left-6 text-xs text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              >
                {dot.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
