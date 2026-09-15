import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const nav: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Spinning", to: "/spinning" },
  { label: "Socks", to: "/socks" },
  {
    label: "Sustainability",
    children: [
      { label: "Our approach", to: "/sustainability" },
      { label: "Initiatives", to: "/initiative" },
    ],
  },
  {
    label: "Investors",
    children: [
      { label: "Company information", to: "/company-information" },
      { label: "Reports", to: "/reports" },
    ],
  },
  { label: "e-Catalog", to: "/e-catalog" },
];

function Wordmark() {
  return (
    <Link to="/" className="group flex items-baseline gap-2">
      <span className="font-display text-lg font-semibold uppercase tracking-[0.16em] text-primary">
        Premium
      </span>
      <span className="hidden font-display text-lg font-light uppercase tracking-[0.16em] text-secondary sm:inline">
        Textile Mills
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 py-2 text-sm text-foreground/80 transition-colors hover:text-primary">
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 border border-border bg-card opacity-0 panel-shadow transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className="py-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden" aria-label="Open menu">
            <Menu className="size-6 text-primary" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[19rem] bg-background">
            <SheetHeader>
              <SheetTitle className="text-left font-display text-sm uppercase tracking-[0.2em] text-secondary">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-1 px-4 pb-8">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-t border-border py-3">
                    <p className="eyebrow mb-2">{item.label}</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base text-foreground/80"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="border-t border-border py-3 text-base text-foreground/90"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-primary px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Contact us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
