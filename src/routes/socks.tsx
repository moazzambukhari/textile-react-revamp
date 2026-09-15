import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import socksHero from "@/assets/socks-hero.jpg";
import { sockCapabilities, sockRanges } from "@/lib/site-data";

const title = "Socks — Engineered Technical Sock Manufacturing | Premium Textile";
const description =
  "Technical socks for sport, active recreation and specialty markets: casual, football, skiing, wool, anti-skid, diabetic, work boot and dress constructions.";

export const Route = createFileRoute("/socks")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Socks,
});

function Socks() {
  return (
    <>
      <PageHeader
        eyebrow="Socks"
        title="Technical socks, tested in line rather than at the end."
        intro="Sport, active recreation and specialty markets, knitted for all seasons. Stitch length, fit and yarn quality are checked as production runs, not after it."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <img
            src={socksHero}
            alt="Technical crew socks in black, white and amber laid flat"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover panel-shadow"
          />
          <div className="space-y-8">
            {sockCapabilities.map((cap) => (
              <div key={cap.title} className="border-t border-border pt-6">
                <h2 className="font-display text-xl font-semibold text-primary">
                  {cap.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading
            eyebrow="The range"
            title="Eleven constructions"
            intro="Each construction is a starting point — cuff height, cushioning, fibre content and packaging are set against your specification."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {sockRanges.map((range) => (
              <article key={range.name} className="bg-card p-7">
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.1em] text-primary">
                  {range.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {range.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-10 border border-border bg-card p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow mb-3">Manufacturing</p>
            <h2 className="text-2xl leading-tight md:text-3xl">
              Classic toe linking, side by side
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our Industry 4.0 knitting machinery links the toe area seamlessly, so
              the join disappears against the foot. Dyeing, finishing and packing
              all sit under the same roof as spinning, which shortens the loop
              between a sample and a shipment.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a sample
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
