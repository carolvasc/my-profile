import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";

type MinimalistAboutProps = {
  dictionary: Dictionary;
};

export default function MinimalistAbout({ dictionary }: MinimalistAboutProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.biographyTitleKey)}
        </header>
        {content.about.introKeys.map((key) => (
          <p key={key} className="mt-4 text-sm text-[var(--muted)]">
            {getByKey(dictionary, key)}
          </p>
        ))}
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.educationTitleKey)}
        </header>
        <div className="mt-4 space-y-4">
          {content.minimalist.educationItems.map((item) => (
            <div
              key={item.schoolKey}
              className="rounded-[10px] border-l-2 border-[var(--accent)] bg-[var(--card-muted)] p-4"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                <span>{getByKey(dictionary, item.schoolKey)}</span>
                <span>{getByKey(dictionary, item.periodKey)}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {getByKey(dictionary, item.degreeKey)}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {getByKey(dictionary, item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.experienceTitleKey)}
        </header>
        <div className="mt-4 space-y-4">
          {content.minimalist.experienceItems.map((item) => (
            <div
              key={item.companyKey}
              className="rounded-[10px] border-l-2 border-[var(--accent)] bg-[var(--card-muted)] p-4"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                <span>{getByKey(dictionary, item.companyKey)}</span>
                <span>{getByKey(dictionary, item.periodKey)}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {getByKey(dictionary, item.roleKey)}
              </h3>
              <div
                className="mt-2 space-y-3 text-sm text-[var(--muted)] [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2"
                dangerouslySetInnerHTML={{
                  __html: getByKey(dictionary, item.descriptionKey),
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.professionalityTitleKey)}
        </header>
        <ul className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--ink)]">
          {content.minimalist.professionalityKeys.map((key) => (
            <li
              key={key}
              className="rounded-[20px] border border-[var(--border)] bg-[var(--card-muted)] px-4 py-2"
            >
              {getByKey(dictionary, key)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
