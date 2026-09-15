import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import { headlineStats, timeline } from "@/lib/site-data";

const title = "About Premium Textile Mills — Spinning in Karachi Since 1986";
const description =
  "Founded by Kadir Adam in 1986, Premium Textile Mills has grown from a single spinning unit into yarn, socks, recycling and r-PET operations across Pakistan.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Quality at the bale",
    text: "Product quality is decided by raw material. Every incoming bale is tested before it reaches a machine.",
  },
  {
    title: "Sustainability as process",
    text: "Recycled fibre, solar generation, effluent treatment and heat recovery are part of how the mill runs, not add-ons.",
  },
  {
    title: "Long relationships",
    text: "Customers, suppliers and the community around our units are treated as commitments that outlast single orders.",
  },
  {
    title: "Room to grow",
    text: "A workplace where people can build a career, because continuity on the floor is what keeps quality steady.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="From one spinning unit to a group with four decades behind it."
        intro="Industrialist Kadir Adam founded Premium Textile Mills in 1986. What began as a spinner now spans yarn, socks, garment manufacturing, trading and auto parts, with sustainability built into the production line rather than bolted on."
      />

      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 lg:grid-cols-4 lg:px-8">
          {headlineStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {stat.value}
                <span className="ml-1 text-base font-normal text-secondary">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-3">Vision</p>
            <p className="text-lg leading-relaxed text-foreground/85">
              To be a global leader in sustainable textile production — recognised
              for innovative products, exceptional quality and genuine
              environmental stewardship.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Mission</p>
            <p className="text-lg leading-relaxed text-foreground/85">
              To make products that exceed what our customers expect, while
              minimising our environmental footprint, and to build a workplace
              where people grow with the business.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading eyebrow="Values" title="The values that define us" />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Timeline"
          title="A journey through the years"
          intro="Capacity, capability and sustainability, added in stages."
        />
        <ol className="mt-14 space-y-0">
          {timeline.map((entry) => (
            <li
              key={entry.period}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-[9rem_1fr] md:gap-10"
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                <span className="bg-accent px-2 py-1">{entry.period}</span>
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                {entry.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight md:text-4xl">
            Shipping to more than 50 countries across five continents.
          </h2>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Reach out to us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
