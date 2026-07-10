"use client";

import { Tabs } from "@/components/ui/tabs";
import { ProficientSkills } from "@/components/main/skills/proficient";
import { SecondarySkills } from "@/components/main/skills/explored";
import { VisualSkills } from "@/components/main/skills/visual";
import { SoftSkills } from "@/components/main/skills/soft";
import { ui } from "@/lib/ui";
import type { Locale } from "@/data/types";

export default function skills({ locale = "en" }: { locale?: Locale }) {
  const tabs = [
    {
      title: ui.skills.proficient[locale],
      value: "proficient",
      content: (
        <Tab title={ui.skills.proficient[locale]}>
          <ProficientSkills locale={locale} />
        </Tab>
      ),
    },
    {
      title: ui.skills.familiarTab[locale],
      value: "familiar",
      content: (
        <Tab title={ui.skills.familiarTitle[locale]}>
          <SecondarySkills locale={locale} />
        </Tab>
      ),
    },
    {
      title: ui.skills.design[locale],
      value: "design",
      content: (
        <Tab title={ui.skills.design[locale]}>
          <VisualSkills locale={locale} />
        </Tab>
      ),
    },
    {
      title: ui.skills.soft[locale],
      value: "soft",
      content: (
        <Tab title={ui.skills.soft[locale]}>
          <SoftSkills locale={locale} />
        </Tab>
      ),
    },
  ];

  return (
    <div className="h-full xl:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-15 md:pt-5 pb-10 md:pb-5 md px-2">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Tab = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full  overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-br border-3 dark:border-2 border-sky-300 bg-background">
      <p>{title}</p>
      {children}
    </div>
  );
};
