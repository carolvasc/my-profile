import type { Metadata } from "next";
import { getDictionary, type Language } from "../../../data/i18n";

type AboutPageProps = {
  params: Promise<{
    lang: Language;
  }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  return {
    title: dictionary.meta.aboutTitle,
    description: dictionary.meta.aboutDescription,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <section className="page-container py-20 md:py-24">
      <div className="space-y-12">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
            {dictionary.about.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            {dictionary.about.title}
          </h1>
          <p className="text-lg text-[var(--muted)]">
            {dictionary.about.intro1}
          </p>
          <p className="text-lg text-[var(--muted)]">
            {dictionary.about.intro2}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.5)]">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              {dictionary.about.expertiseTitle}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {dictionary.about.expertise.map((item) => (
                <li
                  key={item}
                  className="border-b border-dashed border-[rgba(27,27,27,0.12)] pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.about.waysTitle}
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                {dictionary.about.ways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {dictionary.about.onlineTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em]">
                <a
                  href="https://github.com/"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
