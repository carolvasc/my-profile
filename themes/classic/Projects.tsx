import ProjectCard from "../../components/ProjectCard";
import type { Dictionary, Language } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import type { ThemeId } from "../types";

type ClassicProjectsProps = {
  dictionary: Dictionary;
  locale: Language;
  theme: ThemeId;
};

export default function ClassicProjects({
  dictionary,
  locale,
  theme,
}: ClassicProjectsProps) {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {dictionary.projects.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {getByKey(dictionary, content.projects.sectionTitleKey)}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {getByKey(dictionary, content.projects.sectionIntroKey)}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {content.projects.items.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              theme={theme}
              dictionary={dictionary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
