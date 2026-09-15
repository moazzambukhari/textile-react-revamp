import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";

import { PageHeader, Section, SectionHeading } from "@/components/site/PageHeader";
import { company, companyInfo } from "@/lib/site-data";

const title = "Company Information — Premium Textile Mills Limited (PSX: PRET)";
const description =
  "Statutory details for Premium Textile Mills Limited: registration, NTN, governance documents, bankers, auditors, credit rating, share registrar and associated companies.";

export const Route = createFileRoute("/company-information")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CompanyInformation,
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-border py-5 md:grid-cols-[16rem_1fr] md:gap-8">
      <dt className="eyebrow">{label}</dt>
      <dd className="text-base leading-relaxed text-foreground/85">{value}</dd>
    </div>
  );
}

function CompanyInformation() {
  return (
    <>
      <PageHeader
        eyebrow="Investors"
        title="Company information"
        intro={`Premium Textile Mills Limited is listed on the Pakistan Stock Exchange under the symbol ${company.psxSymbol}.`}
      />

      <Section>
        <dl>
          <Row label="Registration number" value={companyInfo.registration} />
          <Row label="National tax number" value={companyInfo.ntn} />
          <Row label="Status" value={companyInfo.status} />
          <Row label="Permissible activities" value={companyInfo.activities} />
          <Row label="Auditors" value={companyInfo.auditors} />
          <Row label="Legal advisor" value={companyInfo.legalAdvisor} />
          <Row label="Free-float shares" value={companyInfo.freeFloat} />
          <Row label="Credit rating" value={companyInfo.creditRating} />
          <Row label="Share registrar" value={companyInfo.shareRegistrar} />
        </dl>
      </Section>

      <div className="bg-muted">
        <Section>
          <SectionHeading eyebrow="Governance" title="Documents" />
          <ul className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {companyInfo.governanceDocs.map((doc) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full items-center justify-between gap-6 bg-card p-6 transition-colors hover:bg-background"
                >
                  <span className="text-sm text-foreground/85">{doc.label}</span>
                  <FileText className="size-5 shrink-0 text-secondary" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={companyInfo.psxLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              PSX profile: {company.psxSymbol}
              <ArrowRight className="size-4" />
            </a>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Financial reports
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Bankers</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {companyInfo.bankers.map((bank) => (
                <li key={bank}>{bank}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Associated companies</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {companyInfo.associates.map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Memberships</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {companyInfo.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="ink-panel">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Head office
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-foreground/80">
                {company.headOffice}
                <br />
                {company.phones[2]} · Fax {company.fax}
                <br />
                {company.secondaryEmail}
              </p>
            </div>
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Lahore office
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-foreground/80">
                {company.lahoreOffice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
