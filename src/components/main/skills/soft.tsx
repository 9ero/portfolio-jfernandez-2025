import { HoverEffect } from "@/components/ui/card-hover-effect";

export function SoftSkills() {
  return (
    <div className="w-full overflow-y-visible">
      <HoverEffect items={soft} />
    </div>
  );
}
export const soft = [
    {
        title: "Communication",
        description:
          "I adapt my technical explanations to the audience's level of understanding, whether they're developers or business stakeholders. I've successfully presented full projects I've built solo and enjoy sharing progress clearly and confidently.",
        link: null
      },
      {
        title: "Problem Solving",
        description:
          "I approach complex problems with structured thinking and practical implementation. For example, I designed a custom queuing system using Flask, daemons, and Airflow to sync internal data with HubSpot, ensuring reliability and traceability.",
        link: null
      },
      {
        title: "Autonomy",
        description:
          "I'm comfortable making independent decisions, especially when they improve efficiency or remove blockers—while always prioritizing data safety and clarity of purpose.",
        link: null
      },
      {
        title: "Adaptability",
        description:
          "I stay positive in the face of changing requirements, and proactively learn new tools or libraries when the situation demands it.",
        link: null
      },
      {
        title: "Team Collaboration",
        description:
          "I've worked closely with designers and QA professionals, and I value adapting to each teammate's working style to optimize collaboration. Though I'm fullstack, I especially enjoy frontend development.",
        link: null
      },
      {
        title: "Initiative & Innovation",
        description:
          "I regularly identify and automate repetitive or manual tasks, like improving container workflows or standardizing Git repositories across the company. I balance innovation with practicality: I reuse existing tools when possible, and create new ones when needed.",
        link: null
      },
];
