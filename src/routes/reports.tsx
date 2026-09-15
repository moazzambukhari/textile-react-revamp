import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useState } from "react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import { companyInfo, financialDocs, notices, reportYears } from "@/lib/site-data";

const title = "Reports — Annual and Quarterly Financials | Premium Textile Mills";
const description =
  "Annual, half-yearly and quarterly reports for Premium Textile Mills Limited from 2020 onward, alongside AGM notices, announcements and financial highlights.";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Reports,
});

function DocLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between gap-6 border-t border-border py-4 transition-colors hover:text-primary"
    >
      <span className="text-sm text-foreground/85">{label}</span>
      <Download className="size-4 shrink-0 text-secondary" />
    </a>
  );
}

function Reports() {
  const firstYear = reportYears[0]!;
  const [year, setYear] = useState(firstYear.year);
  const current = reportYears.find((y) => y.year === year) ?? firstYear;

  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title="Reports"
        intro="Transparent, detailed insight into our financial performance — filed on time and archived here in full."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {reportYears.map((entry) => (
            <button
              key={entry.year}
              onClick={() => setYear(entry.year)}
              className={`border px-5 py-2.5 font-display text-sm font-semibold transition-colors ${
                entry.year === year
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:bg-muted"
              }`}
            >
              {entry.year}
            </button>
          ))}
        </div>

        <div className="mt-10 border border-border bg-card p-8 lg:p-10">
          <h2 className="text-2xl leading-tight md:text-3xl">
            Financial year {current.year}
          </h2>
          <div className="mt-6">
            {current.reports.map((report) => (
              <DocLink key={report.href} label={report.label} href={report.href} />
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-muted">
        <Section>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Summaries" title="Financial highlights" />
              <div className="mt-8">
                {financialDocs.map((doc) => (
                  <DocLink key={doc.href} label={doc.label} href={doc.href} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Assurance" title="Auditor and registrar" />
              <dl className="mt-8 space-y-6">
                <div className="border-t border-border pt-5">
                  <dt className="eyebrow">Auditor</dt>
                  <dd className="mt-2 text-sm text-foreground/85">
                    {companyInfo.auditors}
                  </dd>
                </div>
                <div className="border-t border-border pt-5">
                  <dt className="eyebrow">Share registrar</dt>
                  <dd className="mt-2 text-sm text-foreground/85">
                    {companyInfo.shareRegistrar}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Notices"
          title="Notices and announcements"
          intro="AGM notices, proxies, ballots and statutory statements, most recent first."
        />
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {notices.map((notice) => (
            <DocLink key={notice.href} label={notice.label} href={notice.href} />
          ))}
        </div>
      </Section>
    </>
  );
}
