import type { Dictionary } from "../data/i18n";
import { content } from "../data/content";

type FooterProps = {
  dictionary: Dictionary;
};

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="page-container flex flex-col gap-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-base text-[var(--ink)]">
            {dictionary.footer.title}
          </p>
          <a
            href={`mailto:${dictionary.identity.email}`}
            className="text-[var(--accent)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            {dictionary.identity.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { label: dictionary.labels.github, href: content.links.github },
            { label: dictionary.labels.linkedin, href: content.links.linkedin },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="uppercase tracking-[0.2em] transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
