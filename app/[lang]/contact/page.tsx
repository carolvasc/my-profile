import type { Metadata } from "next";
import { getDictionary, type Language } from "../../../data/i18n";

type ContactPageProps = {
  params: Promise<{
    lang: Language;
  }>;
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  return {
    title: dictionary.meta.contactTitle,
    description: dictionary.meta.contactDescription,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <section className="page-container py-20 md:py-24">
      <div className="max-w-2xl space-y-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
          {dictionary.contact.eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-[var(--ink)] md:text-5xl">
          {dictionary.contact.title}
        </h1>
        <p className="text-lg text-[var(--muted)]">
          {dictionary.contact.intro}
        </p>
        <div className="rounded-3xl border border-[rgba(27,27,27,0.12)] bg-white/60 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {dictionary.footer.emailLabel}
          </p>
          <a
            href="mailto:carol.vasconcelos080@gmail.com"
            className="mt-4 block text-lg text-[var(--accent)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            carol.vasconcelos080@gmail.com
          </a>
          <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
