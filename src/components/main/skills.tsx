"use client";

import { Tabs } from "@/components/ui/tabs";
import { ProficientSkills } from "@/components/main/skills/proficient";
import { SecondarySkills } from "@/components/main/skills/explored";
import { VisualSkills } from "@/components/main/skills/visual";
import { SoftSkills } from "@/components/main/skills/soft";

export default function skills() {
  const tabs = [
    {
      title: "Proficient Tech Stack",
      value: "proficient",
      content: (
        <Tab title={"Proficient Tech Stack"}>
          <ProficientSkills />
        </Tab>
      ),
    },
    {
      title: "Familiar with",
      value: "familiar",
      content: (
        <Tab title={"Also worked with"}>
          <SecondarySkills />
        </Tab>
      ),
    },
    {
      title: "Design & Media Tools",
      value: "desing",
      content: (
        <Tab title={"Design & Media Tools"}>
          <VisualSkills />
        </Tab>
      ),
    },
    {
      title: "Soft Skills",
      value: "soft",
      content: (
        <Tab title={"Soft Skills"}>
          <SoftSkills />
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