import projectsToShowOff from "../../projectsToShowOff.json";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  category: "website" | "app" | "ecommerce" | "other";
};

const CATEGORIES: Project["category"][] = [
  "website",
  "app",
  "ecommerce",
  "other",
];

/**
 * Projects are loaded from `projectsToShowOff.json` at the repository root.
 * Edit that file to add, remove, or update the projects shown on the site —
 * no code changes needed. Each entry becomes a card on the Projects page.
 *
 * Optional fields:
 *  - `imageUrl`: path to a screenshot in /public (e.g. "/projects/site.png").
 *    Leave empty ("") to show a styled placeholder instead.
 *  - `liveUrl`: link to the live site. Leave empty ("") to hide the button.
 */
export const projects: Project[] = (
  projectsToShowOff as Array<Omit<Project, "category"> & { category: string }>
).map((project) => ({
  ...project,
  // Fall back to "other" if the category isn't one we recognize.
  category: CATEGORIES.includes(project.category as Project["category"])
    ? (project.category as Project["category"])
    : "other",
  // Treat empty strings as "not set" so placeholders/links behave correctly.
  imageUrl: project.imageUrl || undefined,
  liveUrl: project.liveUrl || undefined,
}));
