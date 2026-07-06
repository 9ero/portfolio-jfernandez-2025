"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./SplashScreen";
import { getMode, setMode, subscribeToMode, type PortfolioMode } from "@/lib/portfolioMode";

const Portfolio3D = lazy(() =>
  import("@/components/3d/Portfolio3D").then((m) => ({ default: m.Portfolio3D }))
);

export function ModeController() {
  const [mode, setLocalMode] = useState<PortfolioMode | null>(null);
  const [showSplash, setShowSplash] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = getMode();
    if (saved) {
      setLocalMode(saved);
      applyModeToDOM(saved);
    } else {
      setShowSplash(true);
    }
    setReady(true);

    const unsub = subscribeToMode((m) => {
      setLocalMode(m);
    });
    return unsub;
  }, []);

  const handleSelect = (selected: PortfolioMode) => {
    setMode(selected);
    setLocalMode(selected);
    setShowSplash(false);
    applyModeToDOM(selected);
  };

  if (!ready) return null;

  return (
    <>
      <AnimatePresence>{showSplash && <SplashScreen onSelect={handleSelect} />}</AnimatePresence>

      {mode === "3d" && (
        <Suspense fallback={<LoadingScreen />}>
          <Portfolio3D />
        </Suspense>
      )}
    </>
  );
}

function applyModeToDOM(mode: PortfolioMode) {
  document.documentElement.setAttribute("data-mode", mode);
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center" style={{ visibility: "visible" }}>
      <div className="text-sky-400 text-lg font-semibold animate-pulse">Loading 3D experience...</div>
    </div>
  );
}
