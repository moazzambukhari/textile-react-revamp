import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import { initiatives } from "@/lib/site-data";

const title = "Initiatives — ReGen Kapaas and LEED Certification | Premium Textile";
const description =
  "ReGen Kapaas regenerative cotton with WWF, USGBC LEED certified production, an in-house textile recycling plant and Pinnacle Fiber r-PET processing.";

export const Route = createFileRoute("/initiative")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Initiative,
});

function Initiative() {
  return (
    <>
      <PageHeader
        eyebrow="Initiatives"
        title="ReGen Kapaas — from soil to sustainability."
        intro="A programme with WWF taking regenerative agriculture and organic farming into Sindh. Certified to IC Level 2 for EU organic cotton, it works on soil and biodiversity as much as on fibre."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {initiatives.map((item) => (
            <article key={item.title} className="bg-card p-8 lg:p-10">
              <h2 className="font-display text-xl font-semibold text-primary">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading
            eyebrow="Why it matters"
            title="Certified fibre is a supply chain decision"
            intro="Organic and recycled fibre only holds value if it can be traced. Working directly with growers and certifiers means the claim on a delivery note is one we can evidence."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "WWF partnership",
              "IC Level 2 organic cotton",
              "CYCLO® recycled fibre",
              "USGBC LEED certified unit",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-border bg-card px-4 py-2 text-sm text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
            Sourcing certified organic or recycled yarn?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Talk to our team
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
