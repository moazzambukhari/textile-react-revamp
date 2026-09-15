import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import recycling from "@/assets/recycling.jpg";
import {
  certifications,
  savings,
  sdgs,
  sustainabilityProcess,
} from "@/lib/site-data";

const title = "Sustainability — Recycled Fibre and Clean Production | Premium Textile";
const description =
  "How Premium Textile Mills turns pre- and post-consumer textile waste into spinnable fibre, with low-water dyeing, solar power, effluent treatment and heat recovery.";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="It starts with what everyone else throws away."
        intro="Our recycled fibre line begins at the waste stream: by-products from yarn and fabric manufacturers, and garments, upholstery and household textiles at the end of their first life."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <img
            src={recycling}
            alt="Shredded recycled textile fibre on a conveyor beside baled fabric waste"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover panel-shadow"
          />
          <ol className="space-y-8">
            {sustainabilityProcess.map((stage) => (
              <li key={stage.step} className="grid grid-cols-[3rem_1fr] gap-5">
                <span className="font-display text-2xl font-semibold text-accent">
                  {stage.step}
                </span>
                <div className="border-t border-border pt-1.5">
                  <h2 className="font-display text-lg font-semibold text-primary">
                    {stage.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stage.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Year in review
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight md:text-4xl">
            Estimated savings from recycled fibre
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {savings.map((item) => (
              <div key={item.label} className="border-t border-accent/60 pt-5">
                <p className="font-display text-2xl font-semibold md:text-[1.75rem]">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-foreground/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="On site"
          title="Plant and certification"
          intro="Sustainability at Premium is capital expenditure as much as policy."
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "3 MW solar", text: "On-site solar generation feeding production." },
            {
              title: "Effluent treatment",
              text: "A dedicated ETP handling dyeing discharge before release.",
            },
            {
              title: "Waste heat recovery",
              text: "Recovered process heat reduces primary fuel demand.",
            },
            {
              title: "12.2 MW power plant",
              text: "Captive generation that keeps units running through grid gaps.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card p-7">
              <h3 className="font-display text-base font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-sm text-foreground/70">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading
            eyebrow="SDGs"
            title="Goals our operations touch"
            intro="Our production, energy and recycling decisions map onto five UN Sustainable Development Goals."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="bg-card p-6">
                <p className="font-display text-3xl font-semibold text-accent">
                  {sdg.number}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {sdg.title}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/initiative"
            className="mt-12 inline-flex items-center gap-2 border border-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            See our initiatives
            <ArrowRight className="size-4" />
          </Link>
        </Section>
      </div>
    </>
  );
}
