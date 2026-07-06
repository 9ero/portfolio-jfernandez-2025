"use client";
import { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconGalaxy,
  IconUserCode,
  IconPhoneCheck,
  IconBrandGithub,
  IconBox,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { ModeToggle } from "@/components/Header/SwitchThemeToggle";
import { getMode, setMode, subscribeToMode, type PortfolioMode } from "@/lib/portfolioMode";

export function SidebarHeader() {
  const links = [
    {
      label: "Welcome",
      href: "#welcome",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Skills",
      href: "#skills",
      icon: <IconGalaxy className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: <IconBrandGithub className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "About Me",
      href: "#about",
      icon: <IconUserCode className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: <IconPhoneCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const [mode, setLocalMode] = useState<PortfolioMode | null>(null);

  useEffect(() => {
    setLocalMode(getMode());
    const unsub = subscribeToMode((m) => setLocalMode(m));
    return unsub;
  }, []);

  const handleModeToggle = () => {
    const next: PortfolioMode = mode === "3d" ? "classic" : "3d";
    setMode(next);
  };

  // Hide entirely in 3D mode (Portfolio3D has its own "Classic mode" button)
  if (mode === "3d") return null;

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between gap-10 fixed z-60">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          <Logo />
          <div className="mt-8 flex flex-col gap-2 mb-10">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
          <ModeToggle />

          {/* 3D mode toggle */}
          <button
            onClick={handleModeToggle}
            className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer w-full"
          >
            <IconBox className="h-5 w-5 shrink-0 text-lime-500" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="whitespace-pre text-lime-600 dark:text-lime-400"
            >
              3D mode
            </motion.span>
          </button>
        </div>

        <div>
          <SidebarLink
            link={{
              label: "Juan Miguel Fernández Araya",
              href: "/",
              icon: (
                <img
                  src="about/JuanPhoto.png"
                  className="h-7 w-7 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/logo.svg" alt="Logo" className="h-5 w-6 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        jfernandezdev.com
      </motion.span>
    </a>
  );
};
