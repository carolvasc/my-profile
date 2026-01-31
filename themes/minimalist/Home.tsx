import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import MinimalistAbout from "./About";
import MinimalistProjects from "./Projects";
import MinimalistContact from "./Contact";

type MinimalistHomeProps = {
  dictionary: Dictionary;
  locale: "pt" | "en";
  theme: "minimalist";
};

export default function MinimalistHome({
  dictionary,
  locale,
  theme,
}: MinimalistHomeProps) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48">
          <div className="absolute inset-0 rounded-full border-[6px] border-[var(--accent)]" />
          <div className="absolute inset-3 rounded-full bg-[var(--card-muted)]" />
          <span className="absolute -top-2 right-6 h-8 w-1 rounded-full bg-[var(--accent)] rotate-[18deg]" />
          <span className="absolute -top-1 right-2 h-6 w-1 rounded-full bg-[var(--accent)] rotate-[18deg]" />
          <span className="absolute -right-3 bottom-6 h-8 w-1 rounded-full bg-[var(--accent)] rotate-[18deg]" />
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {getByKey(dictionary, content.minimalist.heroGreetingKey)}
          </p>
          <div className="flex items-end gap-3">
            <h1 className="text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
              {getByKey(dictionary, content.minimalist.heroRoleKey)}
            </h1>
            <span className="h-10 w-px bg-[var(--accent)]" />
          </div>
        </div>
      </div>

      <MinimalistAbout dictionary={dictionary} />
      <MinimalistProjects dictionary={dictionary} locale={locale} theme={theme} />
      <MinimalistContact dictionary={dictionary} />
    </div>
  );
}
