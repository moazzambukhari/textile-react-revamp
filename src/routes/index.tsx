import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/PageHeader";
import heroMill from "@/assets/hero-mill.jpg";
import yarnCones from "@/assets/yarn-cones.jpg";
import socksHero from "@/assets/socks-hero.jpg";
import { certifications, headlineStats, savings, yarnFamilies } from "@/lib/site-data";

const title = "Premium Textile Mills — Yarn and Sock Manufacturing, Karachi";
const description =
  "Commercial spinners and sock manufacturers since 1986. Mélange and fancy yarns, technical socks, recycled fibre and LEED-certified production in Karachi, Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroMill}
          alt="Ring spinning frames lined with yarn bobbins inside the Premium Textile mill"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 lg:px-8 lg:py-40">
          <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Commercial spinners since 1986
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.03] text-ink-foreground md:text-5xl lg:text-[4rem]">
            Yarn and socks, engineered to specification.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            We spin fancy and mélange yarns and knit technical socks in Karachi.
            Because we sell both yarn and fibre, buyers get the flexibility that
            vertically integrated groups keep for themselves.
          </p>
          <div className="mt-10">
            <Link
              to="/spinning"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              See the yarn portfolio
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="A commercial spinner's advantage"
              title="Two markets, one mill"
              intro="Integrated groups spin for their own value-added lines. We spin for whoever needs the yarn — which means our fibre selection, counts and blends are driven by orders rather than by internal demand."
            />
            <dl className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="font-display text-base font-semibold text-primary">
                  Premium yarn manufacturing
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Imported cotton from the US, Brazil, Mexico, Turkey, Tanzania,
                  Spain, Argentina and West Africa, blended with the best Pakistani
                  growths. Every incoming bale is tested on Uster HVI and AFIS.
                </dd>
              </div>
              <div>
                <dt className="font-display text-base font-semibold text-primary">
                  Commercial spinning flexibility
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  We sell high-value yarn and fibre, so a buyer can take a blend at
                  whichever stage suits their own process.
                </dd>
              </div>
            </dl>
          </div>
          <img
            src={yarnCones}
            alt="Cones of mélange, marled and speckled cotton yarn"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover panel-shadow"
          />
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading eyebrow="Spinning" title="Five yarn families" />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {yarnFamilies.map((family) => (
              <div key={family.slug} className="bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-primary">
                  {family.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {family.summary}
                </p>
              </div>
            ))}
            <Link
              to="/spinning"
              className="flex items-center justify-between gap-4 bg-primary p-7 text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span className="font-display text-sm font-semibold uppercase tracking-[0.14em]">
                Counts, blends and machinery
              </span>
              <ArrowRight className="size-5 shrink-0 text-accent" />
            </Link>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <img
            src={socksHero}
            alt="Three technical crew socks laid flat on a navy surface"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover panel-shadow"
          />
          <div>
            <SectionHeading
              eyebrow="Socks"
              title="Engineered technical socks"
              intro="Sports, active recreation and specialty markets, knitted for all seasons. In-line testing controls stitch length, fit and yarn quality, and toe areas are linked side-by-side for a seamless finish."
            />
            <Link
              to="/socks"
              className="mt-9 inline-flex items-center gap-2 border border-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View the sock range
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Year in review
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight md:text-4xl">
            What recycled fibre saved us last year
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
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-foreground/15 pt-8 text-sm text-ink-foreground/70">
            {certifications.map((cert) => (
              <span key={cert}>{cert}</span>
            ))}
          </div>
          <Link
            to="/sustainability"
            className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:opacity-80"
          >
            How we do it
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl leading-tight md:text-4xl">
          Tell us the count, blend and volume — we will tell you what is possible.
        </h2>
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center gap-2 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a conversation
          <ArrowRight className="size-4" />
        </Link>
      </Section>
    </>
  );
}
