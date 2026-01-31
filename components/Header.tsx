import Link from "next/link";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  return (
    <header className="border-b border-[rgba(27,27,27,0.08)] backdrop-blur">
      <div className="page-container flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-[var(--ink)]"
        >
          Carolina Vasconcelos
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
