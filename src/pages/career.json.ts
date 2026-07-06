import type { APIRoute } from "astro";
import { careerData } from "@/data";

/**
 * Public data contract for external tooling: the private job-hunter repo
 * builds tailored CVs from this JSON.
 */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(careerData, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
