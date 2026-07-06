"use client";
import { Timeline } from "@/components/ui/timeline";
import { ImgZoomHelper } from "@/components/ui/img-zoom-helper";
import { timeline } from "@/data";
import { t } from "@/lib/t";

export function AboutTimeline() {
  const data = timeline.map((phase) => ({
    title: t(phase.title),
    content: (
      <div>
        <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
          {t(phase.body)}
        </p>
        <div
          className={
            phase.id === "past"
              ? "grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4"
              : "grid grid-cols-2 gap-4"
          }
        >
          {phase.images.map((image, index) => (
            <ImgZoomHelper src={image.src} alt={image.alt} key={index} />
          ))}
        </div>
      </div>
    ),
  }));
  return (
    <div className="relative w-full h-screen overflow-auto">
      <Timeline data={data} />
    </div>
  );
}
