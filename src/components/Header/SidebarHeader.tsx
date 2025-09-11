"use client";
import  { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  
  IconBrandTabler,
  IconSettings,
  IconGalaxy,
  IconUserCode,
  IconPhoneCheck,
  IconBrandGithub
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { ModeToggle } from "@/components/Header/SwitchThemeToggle";


export function SidebarHeader() {
  const links = [
    {
      label: "Welcome",
      href: "#welcome",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Skills",
      href: "#skills",
      icon: (
        <IconGalaxy className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Projects",
      href: "#projects",
      icon: (
        <IconBrandGithub className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "About Me",
      href: "#about",
      icon: (
        <IconUserCode className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <IconPhoneCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 fixed z-60">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2 mb-10">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <ModeToggle />
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Juan Miguel Fernández Araya",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
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
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
       <img src="/logo.svg" alt="Logo" className="h-5 w-6 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        jfernandez.dev
      </motion.span>
    </a>
  );
};


