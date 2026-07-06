"use client";
import { motion } from "motion/react";
import { IconBox, IconLayoutGrid } from "@tabler/icons-react";
import type { PortfolioMode } from "@/lib/portfolioMode";

interface Props {
  onSelect: (mode: PortfolioMode) => void;
}

export function SplashScreen({ onSelect }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center gap-12 px-4"
      style={{ visibility: "visible" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-3">
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-200 to-sky-500"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Juan Miguel Fernández
        </motion.h1>
        <motion.p
          className="text-neutral-400 text-lg"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Choose how you'd like to explore my portfolio
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ModeCard
          icon={<IconLayoutGrid size={36} className="text-sky-400" />}
          title="Classic"
          description="Traditional portfolio with smooth scroll and animated sections"
          badge="Current version"
          onClick={() => onSelect("classic")}
          color="sky"
        />
        <ModeCard
          icon={<IconBox size={36} className="text-lime-400" />}
          title="3D Experience"
          description="Immersive journey through a 3D tree — scroll down to explore"
          badge="New"
          onClick={() => onSelect("3d")}
          color="lime"
          featured
        />
      </motion.div>
    </motion.div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  onClick: () => void;
  color: "sky" | "lime";
  featured?: boolean;
}

function ModeCard({ icon, title, description, badge, onClick, color, featured }: CardProps) {
  const border = color === "lime" ? "border-lime-500/50 hover:border-lime-400" : "border-sky-500/50 hover:border-sky-400";
  const badgeBg = color === "lime" ? "bg-lime-500/20 text-lime-300" : "bg-sky-500/20 text-sky-300";
  const btnBg = color === "lime" ? "bg-lime-500 hover:bg-lime-400 text-zinc-900" : "bg-sky-500 hover:bg-sky-400 text-white";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`flex-1 rounded-2xl border-2 ${border} bg-zinc-900/80 backdrop-blur p-6 text-left flex flex-col gap-4 transition-colors duration-200 cursor-pointer ${featured ? "ring-1 ring-lime-500/20" : ""}`}
    >
      <div className="flex items-start justify-between">
        {icon}
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeBg}`}>{badge}</span>
      </div>
      <div>
        <h2 className="text-white text-xl font-bold mb-1">{title}</h2>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
      <span className={`self-start text-sm font-semibold px-4 py-2 rounded-full transition-colors ${btnBg}`}>
        Enter →
      </span>
    </motion.button>
  );
}
