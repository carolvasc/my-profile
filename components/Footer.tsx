const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(27,27,27,0.08)]">
      <div className="page-container flex flex-col gap-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-base text-[var(--ink)]">
            Vamos conversar?
          </p>
          <a
            href="mailto:carol.vasconcelos080@gmail.com"
            className="text-[var(--accent)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            carol.vasconcelos080@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
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
