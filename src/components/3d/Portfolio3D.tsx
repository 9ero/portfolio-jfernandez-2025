"use client";
import { useState, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { motion, AnimatePresence } from "motion/react";
import { IconLayoutGrid } from "@tabler/icons-react";
import { setMode } from "@/lib/portfolioMode";
import { SceneWithCamera } from "./scene/PortfolioScene";
import { ProgressSidebar } from "./ui/ProgressSidebar";

const TOTAL_PAGES = 6; // overview + 5 sections

export function Portfolio3D() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollElRef = useRef<HTMLElement | null>(null);

  const handleSectionChange = useCallback((i: number) => {
    setActiveSection(i);
  }, []);

  const handleScrollEl = useCallback((el: HTMLElement) => {
    scrollElRef.current = el;
  }, []);

  const handleDotClick = (index: number) => {
    const el = scrollElRef.current;
    if (!el) return;
    const fraction = index / (TOTAL_PAGES - 1);
    el.scrollTop = fraction * (el.scrollHeight - el.clientHeight);
  };

  return (
    // visibility:visible overrides any inherited visibility:hidden from ancestor elements
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a1a]"
      style={{ visibility: "visible" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Canvas fills the full container */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 9, 28], fov: 55, near: 0.1, far: 100 }}
          shadows
          gl={{ antialias: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollControls pages={TOTAL_PAGES} damping={0.25}>
            <SceneWithCamera
              onSectionChange={handleSectionChange}
              onScrollEl={handleScrollEl}
            />
          </ScrollControls>
        </Canvas>
      </div>

      {/* Progress sidebar */}
      <ProgressSidebar activeIndex={activeSection} onDotClick={handleDotClick} />

      {/* Classic mode button — always visible, not animated so it stays accessible */}
      <button
        onClick={() => setMode("classic")}
        className="fixed top-4 right-4 z-[200] flex items-center gap-2 bg-zinc-900/95 backdrop-blur border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-xl hover:border-sky-400 hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
        style={{ visibility: "visible" }}
      >
        <IconLayoutGrid size={16} />
        <span>Classic mode</span>
      </button>

      {/* Scroll hint — shown only on overview */}
      <AnimatePresence>
        {activeSection === 0 && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] text-neutral-400 text-sm flex flex-col items-center gap-2 pointer-events-none"
            style={{ visibility: "visible" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1.0 }}
          >
            <ScrollIcon />
            <span>Scroll to explore</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ScrollIcon() {
  return (
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
      <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
      <motion.rect
        x="8.5" y="6" width="3" height="7" rx="1.5"
        fill="currentColor"
        animate={{ y: [6, 14, 6] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
