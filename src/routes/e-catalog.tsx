import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader, Section } from "@/components/site/PageHeader";
import { catalogs } from "@/lib/site-data";

const title = "e-Catalog — Yarn Portfolio and Sock Lookbook | Premium Textile Mills";
const description =
  "Browse the Premium Textile Mills catalogue: the ReGen Kapaas organic cotton programme, the technical sock lookbook and the full mélange and fancy yarn portfolio.";

export const Route = createFileRoute("/e-catalog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ECatalog,
});

function ECatalog() {
  return (
    <>
      <PageHeader
        eyebrow="e-Catalog"
        title="Everything we make, in three collections."
        intro="Programme documentation, sock constructions and yarn families — start wherever your enquiry sits."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {catalogs.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex flex-col justify-between gap-10 bg-card p-8 transition-colors hover:bg-muted lg:p-10"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-primary">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                {item.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <div className="grid gap-8 border border-border bg-card p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-12">
            <div>
              <p className="eyebrow mb-3">Printed catalogue</p>
              <h2 className="text-2xl leading-tight md:text-3xl">
                Need shade cards or a physical lookbook?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tell us the market you sell into and we will send the relevant
                sections rather than the whole book.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request the catalogue
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
