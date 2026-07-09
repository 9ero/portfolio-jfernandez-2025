export * from "./types";
export { profile } from "./profile";
export {
  proficientSkills,
  familiarSkills,
  designSkills,
  softSkills,
} from "./skills";
export { projects } from "./projects";
export { experience, education, certifications, timeline } from "./experience";

import { profile } from "./profile";
import {
  proficientSkills,
  familiarSkills,
  designSkills,
  softSkills,
} from "./skills";
import { projects } from "./projects";
import { experience, education, certifications, timeline } from "./experience";

/**
 * Aggregate consumed by /career.json — the data contract for external
 * tooling (the job-hunter repo builds CVs from this).
 */
export const careerData = {
  version: 1,
  profile,
  skills: {
    proficient: proficientSkills,
    familiar: familiarSkills,
    design: designSkills,
    soft: softSkills,
  },
  projects,
  experience,
  education,
  certifications,
  timeline,
};
