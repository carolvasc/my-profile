import Link from "next/link";
import type { Dictionary, Language } from "../../data/i18n";
import { content } from "../../data/content";
import { getByKey } from "../../lib/i18n";
import type { ThemeId } from "../types";

type ClassicHomeProps = {
  dictionary: Dictionary;
  locale: Language;
  theme: ThemeId;
};

export default function ClassicHome({
  dictionary,
  locale,
  theme,
}: ClassicHomeProps) {
  return (
    <section className="page-container py-20 md:py-24">
      <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {getByKey(dictionary, content.home.eyebrowKey)}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {getByKey(dictionary, content.home.titleKey)}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {getByKey(dictionary, content.home.summaryKey)}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/t/${theme}/projects`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[var(--surface)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {getByKey(dictionary, content.home.ctaProjectsKey)}
            </Link>
            <Link
              href={`/${locale}/t/${theme}/contact`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[var(--ink)] transition hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {getByKey(dictionary, content.home.ctaContactKey)}
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="aspect-[3/4] rounded-3xl border border-[var(--border)] bg-[var(--card-muted)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              {getByKey(dictionary, content.home.stackTitleKey)}
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {getByKey(dictionary, content.home.stackDescriptionKey)}
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] backdrop-blur">
            <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
              {content.home.stackKeys.map((key) => (
                <li
                  key={key}
                  className="rounded-full border border-[var(--border)] px-3 py-1"
                >
                  {getByKey(dictionary, key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
