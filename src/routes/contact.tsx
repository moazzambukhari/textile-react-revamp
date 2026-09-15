import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { PageHeader, Section } from "@/components/site/PageHeader";
import { company } from "@/lib/site-data";

const title = "Contact Premium Textile Mills — Karachi and Lahore Offices";
const description =
  "Talk to Premium Textile Mills about yarn counts, sock programmes and sustainable fibre. Head office in New Challi, Karachi, with a Lahore office and direct lines.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with us."
        intro="Whether you have a question, need a specification checked or want to discuss a programme, our team would like to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-3">Head office</p>
              <p className="text-base leading-relaxed text-foreground/85">
                {company.headOffice}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Lahore office</p>
              <p className="text-base leading-relaxed text-foreground/85">
                {company.lahoreOffice}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <ul className="space-y-1.5">
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-base text-foreground/85 hover:text-primary"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">Fax {company.fax}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="block text-base text-foreground/85 hover:text-primary"
              >
                {company.email}
              </a>
              <a
                href={`mailto:${company.secondaryEmail}`}
                className="block text-base text-foreground/85 hover:text-primary"
              >
                {company.secondaryEmail}
              </a>
            </div>
          </div>

          <form
            className="border border-border bg-card p-8 lg:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              setSending(true);
              const form = event.currentTarget;
              window.setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Thank you — your message has been noted.", {
                  description: `You can also email us directly at ${company.email}.`,
                });
              }, 500);
            }}
          >
            <h2 className="text-2xl leading-tight md:text-3xl">Drop us a message</h2>
            <div className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                  />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow">Subject</span>
                <input
                  name="subject"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                />
              </label>
              <label className="block">
                <span className="eyebrow">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full resize-y border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-8 w-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Messages are not yet delivered to an inbox — email {company.email} for
              anything urgent.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
