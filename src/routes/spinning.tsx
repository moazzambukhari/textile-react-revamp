import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import yarnCones from "@/assets/yarn-cones.jpg";
import { yarnFamilies } from "@/lib/site-data";

const title = "Spinning — Mélange and Fancy Yarns | Premium Textile Mills";
const description =
  "Mélange, injection, snow effect, marled and speckled yarns spun from imported and Pakistani cotton, with every bale tested on Uster HVI and AFIS systems.";

export const Route = createFileRoute("/spinning")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Spinning,
});

const origins = [
  "United States",
  "Brazil",
  "Mexico",
  "Turkey",
  "Tanzania",
  "Spain",
  "Argentina",
  "West Africa",
  "Pakistan",
];

function Spinning() {
  const first = yarnFamilies[0]!;
  const [active, setActive] = useState(first.slug);
  const current = yarnFamilies.find((f) => f.slug === active) ?? first;

  return (
    <>
      <PageHeader
        eyebrow="Spinning"
        title="Fancy and mélange yarns, spun to the count you need."
        intro="Product quality is decided long before spinning starts, which is why raw material selection and bale testing sit at the front of our process."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Raw material"
              title="Cotton from nine growing regions"
              intro="Imported cotton is blended with the best-selected growths of Pakistani cotton. Each incoming bale is tested on the latest Uster HVI and AFIS systems before it enters the blend."
            />
            <ul className="mt-10 flex flex-wrap gap-2">
              {origins.map((origin) => (
                <li
                  key={origin}
                  className="border border-border bg-card px-3.5 py-2 text-sm text-foreground/80"
                >
                  {origin}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={yarnCones}
            alt="Cones of grey, ecru and speckled yarn stacked in rows"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover panel-shadow"
          />
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading eyebrow="Portfolio" title="Yarn families" />
          <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[16rem_1fr]">
            <div className="flex flex-col bg-card">
              {yarnFamilies.map((family) => (
                <button
                  key={family.slug}
                  onClick={() => setActive(family.slug)}
                  className={`border-b border-border px-6 py-5 text-left font-display text-base font-semibold transition-colors last:border-b-0 ${
                    family.slug === active
                      ? "bg-primary text-primary-foreground"
                      : "text-primary hover:bg-muted"
                  }`}
                >
                  {family.name}
                </button>
              ))}
            </div>
            <div className="bg-card p-8 lg:p-12">
              <h3 className="text-2xl text-primary md:text-3xl">{current.name}</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {current.detail}
              </p>
              <p className="mt-8 text-sm text-foreground/70">{current.summary}</p>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Machinery"
            title="Industry 4.0 on the floor"
            intro="Our units run GE-powered Industry 4.0 machinery, including classic toe-linking side-by-side on the sock lines, so linked toe areas stay smooth against the foot."
          />
          <dl className="space-y-6 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <dt className="font-display text-base font-semibold text-primary">
                Counts
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                PC and CVC mélange from NE 10/1 to NE 40/1, plus heather grey and
                100% polyester heathers on a dedicated line.
              </dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold text-primary">
                Finish options
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Knit-and-wash or ecru delivery, so buyers can dye a portion
                themselves to reach the exact shade they want.
              </dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold text-primary">
                Testing
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Uster HVI and AFIS at intake, with in-line checks through spinning
                and winding.
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
            Send us a shade card or a target count.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Enquire about yarn
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
