import { Fragment } from "react";

import type { Metadata } from "next";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";
import { BellRing, Database, Fingerprint, Globe2, MailCheck, ShieldCheck } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import { Separator } from "@/components/ui/separator";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Qordz collects, uses, and protects personal information on qordz.com, including cookies, analytics, data retention, international transfers, and your rights.",
  path: "/legal/privacy-policy",
});

interface HighlightCard {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface PolicySection {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  bullets?: {
    title: string;
    description: string;
  }[];
}

const META = [
  {
    term: "Effective date",
    detail: "26 November 2025",
  },
  {
    term: "Data controller",
    detail: "QORDZ FZE, Dubai Production City, UAE",
  },
  {
    term: "Privacy enquiries",
    detail: "privacy@qordz.com",
  },
] as const;

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: "Secure Checkout",
    description: "Payments are processed through PCI-compliant partners; card data never touches our servers.",
    Icon: ShieldCheck,
  },
  {
    title: "Minimal Tracking",
    description: "We only collect analytics needed to improve product launches and support response times.",
    Icon: Fingerprint,
  },
  {
    title: "Transparent Preferences",
    description: "You can manage marketing preferences or erase your profile by contacting support anytime.",
    Icon: MailCheck,
  },
] as const;

const POLICY_SECTIONS: PolicySection[] = [
  {
    id: "data-we-collect",
    title: "1. Data We Collect",
    summary: "We collect information needed to operate qordz.com, deliver accessories, and provide support.",
    paragraphs: [
      "When you browse our site we receive limited technical data such as IP address, device type, browser version, and pages viewed. This helps us keep infrastructure reliable and diagnose issues.",
      "If you create an order, submit a form, or join product notifications we collect your name, email, phone number, shipping address, and selected QORDZ products.",
      "Support tickets may include purchase receipts, device photos, or troubleshooting notes that you voluntarily provide so we can resolve cases faster.",
    ],
  },
  {
    id: "how-we-use-data",
    title: "2. How We Use Your Data",
    summary:
      "All processing aligns with legitimate business purposes—fulfilling orders, keeping systems secure, and sharing product updates you request.",
    paragraphs: [
      "Order data powers payment authorization, fraud checks, logistics hand-offs, warranty validation, and invoices. Without this data we cannot dispatch accessories or confirm ownership.",
      "Behavioral analytics help us identify popular categories and prioritize inventory. Reports are aggregated; we do not build individual advertising profiles.",
    ],
    bullets: [
      {
        title: "Operational communication",
        description:
          "We email confirmations, shipping alerts, and warranty reminders relating to purchases you make with QORDZ.",
      },
      {
        title: "Marketing preferences",
        description:
          "You receive launch or restock emails only if you opted in. Each message includes an unsubscribe link and instructions to update your preferences.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Processors",
    summary:
      "We work with vetted service providers that enable payments, warehousing, analytics, and customer support.",
    paragraphs: [
      "Third parties receive only the information required to deliver their service—payment gateways handle card verification, courier partners need shipment details, and CRM tools store your support history.",
      "These partners are contractually obligated to keep information confidential and to meet industry security standards. We never sell your personal data to advertisers.",
    ],
    bullets: [
      {
        title: "Service providers",
        description: "Logistics, payment, email, and analytics vendors that help operate qordz.com.",
      },
      {
        title: "Regulatory requests",
        description: "We may disclose data when required by UAE law or to defend QORDZ legal rights.",
      },
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Analytics",
    summary: "Cookies allow us to keep your cart intact, remember region settings, and understand feature performance.",
    paragraphs: [
      "Essential cookies keep sessions stable and let you move from product discovery to checkout without losing cart contents.",
      "Performance cookies provided by privacy-focused analytics help us measure site speed, search effectiveness, and where shoppers drop off. You can block non-essential cookies via your browser without affecting basic browsing.",
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    summary:
      "We retain data only for as long as necessary to provide products, meet legal obligations, or resolve disputes.",
    paragraphs: [
      "Order and warranty records are stored for a minimum of 24 months to comply with consumer protection and tax regulations in the UAE.",
      "Support correspondence and analytics logs are reviewed annually and deleted or anonymized when no longer required.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    summary: "You stay in control of your information and can exercise privacy rights at any time.",
    paragraphs: [
      "You may request access to a copy of your personal data, ask us to correct inaccurate details, or withdraw consent for marketing.",
      "If you need us to delete your profile or anonymize order history, contact privacy@qordz.com. We will verify your identity and confirm completion of the request.",
    ],
    bullets: [
      {
        title: "Access & portability",
        description: "Receive a record of the information we hold about you in a structured format.",
      },
      {
        title: "Restriction & objection",
        description: "Limit processing for specific purposes or object to direct marketing communications.",
      },
    ],
  },
  {
    id: "international",
    title: "7. International Transfers",
    summary: "Some service providers store data outside the UAE, primarily in EU or US regions with strong safeguards.",
    paragraphs: [
      "When data leaves the UAE we rely on contractual clauses or equivalent mechanisms that keep protection consistent with UAE regulations.",
      "Partners undergo annual security reviews and must notify us immediately if any incident impacts QORDZ customers.",
    ],
  },
  {
    id: "updates",
    title: "8. Updates to this Policy",
    summary: "We update this page when we launch new services, onboard new processors, or when regulations evolve.",
    paragraphs: [
      "If a change materially alters how we process your personal information, we will highlight the update at the top of this page and, where practical, notify you via email.",
      "The most current version is always available on qordz.com/legal/privacy-policy. Continued use of our services after updates constitutes acceptance of the revised policy.",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <header className="container max-w-5xl px-4 py-12 sm:py-16">
        <Badge variant="ghost">Legal</Badge>
        <h1 className="mt-4 text-balance text-title-3 sm:text-title-2 lg:text-title-1">Privacy Policy</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          QORDZ designs and distributes everyday tech accessories. This privacy policy explains the data we collect on
          qordz.com, why we process it, and the safeguards that keep your personal information protected.
        </p>
        <DescriptionList className="mt-8 border-stone-200 border-y border-dashed py-4 text-base sm:text-lg">
          {META.map((item) => (
            <Fragment key={item.term}>
              <DescriptionTerm>{item.term}</DescriptionTerm>
              <DescriptionDetails>
                {item.term === "Privacy enquiries" ? (
                  <Link className="text-primary underline-offset-4 hover:underline" href="mailto:privacy@qordz.com">
                    {item.detail}
                  </Link>
                ) : (
                  item.detail
                )}
              </DescriptionDetails>
            </Fragment>
          ))}
        </DescriptionList>
      </header>

      <section className="container max-w-5xl px-4 pb-12 sm:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map(({ title, description, Icon }) => (
            <article
              className="hover:-translate-y-0.5 h-full rounded-2xl border border-stone-200 bg-card p-5 shadow-sm transition focus-within:ring-2 focus-within:ring-primary/40 hover:shadow-md"
              key={title}
            >
              <Icon aria-hidden className="text-primary" />
              <h2 className="mt-3 text-title-6">{title}</h2>
              <p className="mt-2 text-muted-foreground text-sm">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <Separator className="mx-auto w-full max-w-5xl" />

      <section className="bg-muted/40">
        <div className="container max-w-5xl space-y-12 px-4 py-12 sm:space-y-14 sm:py-16">
          {POLICY_SECTIONS.map((section) => (
            <article
              aria-labelledby={section.id}
              className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-stone-100"
              id={section.id}
              key={section.id}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-sm text-teal-600 uppercase tracking-wide">{section.id}</p>
                  <h2 className="mt-1 text-title-5">{section.title}</h2>
                </div>
                <p className="text-muted-foreground text-sm sm:max-w-sm">{section.summary}</p>
              </div>
              <div className="mt-4 space-y-3 text-base text-stone-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3 rounded-2xl bg-muted/60 p-4 text-sm text-stone-700">
                  {section.bullets.map((item) => (
                    <li key={`${section.id}-${item.title}`}>
                      <p className="font-semibold text-stone-900">{item.title}</p>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="container max-w-5xl px-4 py-14">
        <div className="rounded-3xl border border-stone-200 bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-sm text-teal-600 uppercase tracking-wide">Need to talk?</p>
              <h2 className="mt-1 text-title-5">We respond within one business day</h2>
              <p className="mt-2 text-muted-foreground text-sm sm:max-w-xl">
                Whether you want to access your data, adjust marketing preferences, or report an incident, our privacy
                desk is ready to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Contact support</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="mailto:privacy@qordz.com">Email privacy team</Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-stone-600 sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <Database aria-hidden className="mt-0.5 text-primary" />
              <p>Data stored with ISO 27001 certified cloud providers.</p>
            </div>
            <div className="flex items-start gap-2">
              <BellRing aria-hidden className="mt-0.5 text-primary" />
              <p>Incident notifications shared proactively if risks arise.</p>
            </div>
            <div className="flex items-start gap-2">
              <Globe2 aria-hidden className="mt-0.5 text-primary" />
              <p>Requests honored globally, regardless of where you purchase.</p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal/privacy-policy" },
          { name: "Privacy Policy", url: "/legal/privacy-policy" },
        ])}
        id="ld-breadcrumb-privacy"
      />
    </main>
  );
}
