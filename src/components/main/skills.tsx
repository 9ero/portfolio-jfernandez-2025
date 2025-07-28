"use client";

import { Tabs } from "@/components/ui/tabs";
import { ProficientSkills } from "@/components/main/skills/proficient";

export default function skills() {
  const tabs = [
    {
      title: "Proficient Tech Stack",
      value: "proficient",
      content: (
        <div className="w-full  overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-br border-3 bg-background scroll-y-auto">
          <p>Proficient Tech Stack</p>
          <ProficientSkills />
        </div>
      ),
    },
    {
      title: "Explored Technologies",
      value: "explored",
      content: (
        <div className="w-full  overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-br border-3 bg-background">
          <p>Explored Technologies</p>
        </div>
      ),
    },
    {
      title: "Design & Media Tools",
      value: "desing",
      content: (
        <div className="w-full  overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-br border-3 bg-background">
          <p>Design & Media Tools</p>
        </div>
      ),
    },
    {
      title: "Soft Skills",
      value: "soft",
      content: (
        <div className="w-full  overflow-auto lg:overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-gradient-to-br border-3 bg-background">
          <p>Soft Skills</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full xl:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pt-15 md:pt-5 pb-10 md:pb-5 md px-2">
      <Tabs tabs={tabs} />
    </div>
  );
}
