import { content, type ProjectItem } from "./content";

export type Project = ProjectItem;

export const projects: ProjectItem[] = content.projects.items;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
