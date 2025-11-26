import { Fragment } from "react";

import Link from "next/link";

import type { LucideIcon } from "lucide-react";
import { Handshake, PackageCheck, RefreshCcw, Scale, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import { Separator } from "@/components/ui/separator";

interface HighlightCard {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface TermsSection {
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
    term: "Governing law",
    detail: "Dubai, United Arab Emirates",
  },
  {
    term: "Customer support",
    detail: "support@qordz.com",
  },
] as const;

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: "Transparent Warranty",
    description:
      "Every QORDZ accessory includes a 12-month limited warranty that covers verified manufacturing defects.",
    Icon: ShieldCheck,
  },
  {
    title: "Order Confidence",
    description:
      "Payments are processed securely and orders stay cancellable until they are dispatched from our warehouse.",
    Icon: PackageCheck,
  },
  {
    title: "Straightforward Returns",
    description: "In the rare event a product arrives damaged, we will repair, replace, or refund after an assessment.",
    Icon: RefreshCcw,
  },
] as const;

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    summary: "Placing an order with QORDZ means you understand and accept the conditions outlined on this page.",
    paragraphs: [
      "These Terms & Conditions govern your access to qordz.com, any sub-domains, and any related channels operated by QORDZ FZE. When you browse, purchase, or interact with our services you agree to comply with local regulations and with the policies described here.",
      "We may update these terms to reflect new regulations or product improvements. When updates occur we will post the latest version on this page and refresh the effective date, so please review the page periodically.",
    ],
  },
  {
    id: "orders-payments",
    title: "2. Orders & Payments",
    summary:
      "Orders are confirmed after successful payment authorization. You will receive an email summary with the products purchased, payment breakdown, and estimated dispatch timelines.",
    paragraphs: [
      "All prices displayed on the site are inclusive of VAT unless explicitly mentioned. We reserve the right to update pricing to reflect market conditions, currency fluctuations, or promotional campaigns.",
      "Payments are processed via trusted gateways with PCI-compliant encryption. Your card is charged immediately upon order confirmation, and invoices are accessible through your confirmation email or support request.",
    ],
    bullets: [
      {
        title: "Fraud checks",
        description:
          "We may hold an order temporarily if a gateway flags a transaction for manual review. Our team will contact you to validate the purchase.",
      },
      {
        title: "Cancellations",
        description:
          "Orders can be cancelled prior to dispatch. After dispatch, you may request a return according to our Returns Policy section below.",
      },
    ],
  },
  {
    id: "shipping",
    title: "3. Shipping & Delivery",
    summary:
      "We partner with reliable logistics providers to deliver within the UAE and approved international destinations.",
    paragraphs: [
      "Standard delivery timelines range between 2-5 business days inside the UAE. International timelines vary by destination and will be displayed at checkout.",
      "Delivery windows are estimates and can shift because of customs, weather, or courier disruptions. We will notify you via email if there are material delays and provide updated tracking information.",
    ],
    bullets: [
      {
        title: "Delivery responsibility",
        description:
          "Ownership of the products transfers once the courier marks the shipment as delivered at the address provided by you.",
      },
      {
        title: "Refused packages",
        description:
          "If a shipment is refused or undeliverable, we will refund the product cost minus shipping once the item returns to our warehouse in saleable condition.",
      },
    ],
  },
  {
    id: "warranty",
    title: "4. Warranty & Support",
    summary:
      "Our engineering team designs accessories that withstand everyday use. Still, we stand behind every unit we ship.",
    paragraphs: [
      "Accessories purchased from authorized QORDZ partners are covered by a 12-month limited warranty that guards against material or workmanship defects.",
      "To submit a claim, contact support within 30 days of discovering the issue and include your proof of purchase and a description of the defect. We may request photos or perform a pick-up inspection before approving the remedy.",
    ],
    bullets: [
      {
        title: "What is covered",
        description:
          "Manufacturing defects such as faulty batteries, irregular charging ports, or malfunctioning drivers uncovered during normal use.",
      },
      {
        title: "What is not covered",
        description:
          "Damage caused by misuse, unauthorized repairs, exposure to liquids beyond rated protection, or use with incompatible accessories.",
      },
    ],
  },
  {
    id: "returns",
    title: "5. Returns & Refunds",
    summary:
      "We accept returns within 7 days of delivery for unopened items and within 3 days for damaged-on-arrival products, provided all accessories are included.",
    paragraphs: [
      "Once we receive and inspect the returned product, refunds are issued to the original payment method within 7-10 business days. Replacement units follow the same shipping timelines as new orders.",
      "If a return is declined because of missing parts or signs of wear, we will ship the product back to you and share documentation of the assessment.",
    ],
  },
  {
    id: "liability",
    title: "6. Liability & Governing Law",
    summary:
      "We operate within the regulatory framework of the United Arab Emirates. These terms are designed to balance consumer rights with responsible product usage.",
    paragraphs: [
      "While we engineer our devices for daily reliability, QORDZ is not liable for indirect or consequential damages arising from product misuse, unauthorized modifications, or third-party services paired with our accessories.",
      "Any dispute or claim relating to your purchase or the interpretation of these terms shall be governed by the laws of Dubai, UAE. Parties consent to the exclusive jurisdiction of Dubai courts.",
    ],
  },
  {
    id: "updates",
    title: "7. Policy Updates",
    summary:
      "We continuously review our processes to stay aligned with regional regulations, logistics partners, and customer expectations.",
    paragraphs: [
      "When a change materially affects your rights, we will highlight the update at the top of this page or notify you via the email used during checkout. Your continued use of the site after changes become effective constitutes acceptance of the revised terms.",
    ],
  },
] as const;

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-20">
      <header className="container max-w-5xl px-4 py-12 sm:py-16">
        <Badge variant="ghost">Legal</Badge>
        <h1 className="mt-4 text-balance text-title-3 sm:text-title-2 lg:text-title-1">Terms & Conditions</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          The following terms outline how you can purchase, receive, and use QORDZ accessories. They exist to keep every
          customer experience transparent, predictable, and secure across all of our channels.
        </p>
        <DescriptionList className="mt-8 border-stone-200 border-y border-dashed py-4 text-base sm:text-lg">
          {META.map((item) => (
            <Fragment key={item.term}>
              <DescriptionTerm>{item.term}</DescriptionTerm>
              <DescriptionDetails>
                {item.term === "Customer support" ? (
                  <Link className="text-primary underline-offset-4 hover:underline" href="mailto:support@qordz.com">
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
          {TERMS_SECTIONS.map((section) => (
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
              <p className="font-semibold text-sm text-teal-600 uppercase tracking-wide">Need clarity?</p>
              <h2 className="mt-1 text-title-5">We're here to help</h2>
              <p className="mt-2 text-muted-foreground text-sm sm:max-w-xl">
                Our support specialists can walk you through warranty steps, provide invoices, or escalate an issue with
                a retail partner. Reach out and we will respond within one business day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Contact support</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="mailto:support@qordz.com">Email us</Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-stone-600 sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <Handshake aria-hidden className="mt-0.5 text-primary" />
              <p>Partner escalations handled directly with our retail channel team.</p>
            </div>
            <div className="flex items-start gap-2">
              <Scale aria-hidden className="mt-0.5 text-primary" />
              <p>Compliant with current UAE consumer protection guidelines.</p>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck aria-hidden className="mt-0.5 text-primary" />
              <p>All support tickets are tracked until you confirm resolution.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
