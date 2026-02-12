import type { Dictionary } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";

type MinimalistAboutProps = {
  dictionary: Dictionary;
};

export default function MinimalistAbout({ dictionary }: MinimalistAboutProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-[10px] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.biographyTitleKey)}
        </header>
        {content.about.introKeys.map((key) => (
          <p key={key} className="mt-4 text-[18px] text-[var(--muted)]">
            {getByKey(dictionary, key)}
          </p>
        ))}
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.experienceTitleKey)}
        </header>
        <div className="fn_cs_boxed_list mt-4">
          <ul>
            {content.minimalist.experienceItems.map((item) => (
              <li key={item.companyKey}>
                <div className="item">
                  <div className="item_top">
                    <h5>{getByKey(dictionary, item.companyKey)}</h5>
                    <span>({getByKey(dictionary, item.periodKey)})</span>
                  </div>
                  <h3>{getByKey(dictionary, item.roleKey)}</h3>
                  <div
                    className="experience-content text-[var(--muted)] [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-1"
                    dangerouslySetInnerHTML={{
                      __html: getByKey(dictionary, item.descriptionKey),
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.educationTitleKey)}
        </header>
        <div className="fn_cs_boxed_list mt-4">
          <ul>
            {content.minimalist.educationItems.map((item) => (
              <li key={item.schoolKey}>
                <div className="item">
                  <div className="item_top">
                    <h5>{getByKey(dictionary, item.schoolKey)}</h5>
                    <span>({getByKey(dictionary, item.periodKey)})</span>
                  </div>
                  <h3>{getByKey(dictionary, item.degreeKey)}</h3>
                  <div className="experience-content text-[var(--muted)]">
                    <p>{getByKey(dictionary, item.descriptionKey)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[10px] bg-[var(--card)] p-6 shadow-[var(--shadow)]">
        <header className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-0.5 w-8 bg-[var(--accent)]" />
          {getByKey(dictionary, content.minimalist.professionalityTitleKey)}
        </header>
        <ul className="mt-4 flex flex-wrap gap-3 text-base text-[var(--ink)]">
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
