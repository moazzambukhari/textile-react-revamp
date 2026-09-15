import { Link } from "@tanstack/react-router";

import { company } from "@/lib/site-data";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Initiatives", to: "/initiative" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Spinning", to: "/spinning" },
      { label: "Socks", to: "/socks" },
      { label: "e-Catalog", to: "/e-catalog" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Company information", to: "/company-information" },
      { label: "Reports", to: "/reports" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-base font-semibold uppercase tracking-[0.18em]">
              Premium Textile Mills
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              Commercial spinners and sock manufacturers in Karachi since 1986,
              selling yarn and fibre to both markets.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-accent">
              PSX: {company.psxSymbol}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-ink-foreground/15 pt-8 text-sm text-ink-foreground/70 md:grid-cols-3">
          <p>{company.headOffice}</p>
          <p>
            {company.phones[2]}
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-ink-foreground">
              {company.email}
            </a>
          </p>
          <p className="md:text-right">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-foreground"
            >
              LinkedIn
            </a>
            <br />
            <span className="text-ink-foreground/50">
              © {new Date().getFullYear()} {company.name}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
