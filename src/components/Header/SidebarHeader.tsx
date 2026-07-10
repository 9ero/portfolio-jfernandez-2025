"use client";
import  { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {

  IconBrandTabler,
  IconGalaxy,
  IconUserCode,
  IconPhoneCheck,
  IconBrandGithub,
  IconLanguage
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { ModeToggle } from "@/components/Header/SwitchThemeToggle";
import { profile, type Locale } from "@/data";
import { ui, localePath, altLocale } from "@/lib/ui";


export function SidebarHeader({ locale = "en" }: { locale?: Locale }) {
  const links = [
    {
      label: ui.nav.welcome[locale],
      href: "#welcome",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: ui.nav.skills[locale],
      href: "#skills",
      icon: (
        <IconGalaxy className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: ui.nav.projects[locale],
      href: "#projects",
      icon: (
        <IconBrandGithub className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: ui.nav.about[locale],
      href: "#about",
      icon: (
        <IconUserCode className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: ui.nav.contact[locale],
      href: "#contact",
      icon: (
        <IconPhoneCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const other = altLocale(locale);
  const [open, setOpen] = useState(false);
  return (

      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 fixed z-60">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo locale={locale} />
            </>
            <div className="mt-8 flex flex-col gap-2 mb-10">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <SidebarLink
                link={{
                  label: other === "es" ? "Español" : "English",
                  href: localePath(other),
                  icon: (
                    <IconLanguage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                  ),
                }}
              />
            </div>
            <ModeToggle />
          </div>
          <div>
            <SidebarLink
              link={{
                label: profile.name,
                href: localePath(locale),
                icon: (
                  <img
                    src={profile.avatar}
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
export const Logo = ({ locale = "en" }: { locale?: Locale }) => {
  return (
    <a
      href={localePath(locale)}
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
