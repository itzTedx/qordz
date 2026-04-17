import { Fragment } from "react";

import type { Metadata } from "next";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";
import { ClipboardList, HandCoins, PackageOpen, ShieldCheck, Truck } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import { Separator } from "@/components/ui/separator";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Return Policy",
  description:
    "Qordz refund and return policy for the UAE and international customers. Review eligibility, timelines, courier coordination, and warranty versus return rules.",
  path: "/legal/refund-and-returns",
});

interface HighlightCard {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface ReturnsSection {
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
    term: "Return window",
    detail: "7 days for sealed units, 3 days for damaged deliveries",
  },
  {
    term: "Support desk",
    detail: "support@qordz.com",
  },
] as const;

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: "Quality inspected",
    description: "Each accessory is inspected before shipping and again when it returns to our Dubai facility.",
    Icon: ShieldCheck,
  },
  {
    title: "Fast turnaround",
    description: "Approved refunds are processed within 7-10 business days through the original payment method.",
    Icon: HandCoins,
  },
  {
    title: "Courier coordination",
    description: "We help schedule pickups or provide drop-off instructions with our logistics partners.",
    Icon: Truck,
  },
] as const;

const RETURNS_SECTIONS: ReturnsSection[] = [
  {
    id: "eligibility",
    title: "1. Return Eligibility",
    summary:
      "We keep returns straightforward while protecting customers from counterfeit or used items re-entering stock.",
    paragraphs: [
      "Unopened products can be returned within seven (7) calendar days of delivery. Accessories that arrived damaged or incorrect must be reported within three (3) days so we can document the issue and arrange a replacement.",
      "Products purchased through authorized retail partners should be returned through that partner first. They follow the same policy and coordinate with QORDZ on your behalf.",
    ],
    bullets: [
      {
        title: "Required condition",
        description: "Packaging, charging cables, manuals, and protective foils must be included and free of wear.",
      },
      {
        title: "Proof of purchase",
        description:
          "Attach the order confirmation email or receipt so we can validate the serial number and payment channel.",
      },
    ],
  },
  {
    id: "process",
    title: "2. How to Start a Return",
    summary: "Most requests are resolved within one business day after we receive all details.",
    paragraphs: [
      "Email support@qordz.com with your order number, contact information, product photos, and whether you prefer a refund or replacement. Our team will confirm eligibility and share the nearest drop-off point or schedule a courier pickup.",
      "Place the device in its retail box, then inside a sturdy outer carton with adequate padding. Improper packaging that causes transit damage may void the return.",
    ],
    bullets: [
      {
        title: "Assessment timeline",
        description:
          "Inspections are completed within 48 hours of the item reaching our warehouse. We will email the outcome immediately.",
      },
      {
        title: "Tracking visibility",
        description: "You will receive tracking details for every movement so you can monitor the shipment back to us.",
      },
    ],
  },
  {
    id: "refunds",
    title: "3. Refunds & Replacements",
    summary: "We prioritize putting your funds back quickly once the product passes inspection.",
    paragraphs: [
      "Refunds are sent to the original payment method. Bank processing times vary, but most customers see the credit within seven to ten business days after approval.",
      "Replacement units follow the same dispatch timelines as new orders. If inventory is unavailable you may choose a refund or waitlist for the restock date that we provide.",
    ],
    bullets: [
      {
        title: "Partial deductions",
        description:
          "If accessories or retail packaging are missing, we may deduct the replacement cost before issuing a refund.",
      },
      {
        title: "Shipping fees",
        description:
          "Original shipping costs are refundable only when the error is on QORDZ (wrong item, damage, or manufacturing defect).",
      },
    ],
  },
  {
    id: "exclusions",
    title: "4. Non-Returnable Items",
    summary: "Some situations fall outside of our refund policy to keep inventory safe and compliant.",
    paragraphs: [
      "Used ear tips, opened hygiene-sensitive accessories, or products with signs of modification cannot be accepted.",
      "Gift cards, software codes, or digital bundles delivered instantly are considered final sale once sent to the recipient email.",
    ],
  },
  {
    id: "warranty",
    title: "5. Warranty vs. Return Policy",
    summary:
      "Returns cover change-of-mind or logistics issues, while warranty covers defects discovered during normal use.",
    paragraphs: [
      "Our 12-month limited warranty continues after the return window closes. If your accessory develops a manufacturing defect, contact us and we will guide you through the warranty troubleshooting steps.",
      "Warranty claims may require additional diagnostics, videos, or a pick-up inspection before we approve a repair or replacement.",
    ],
  },
  {
    id: "international",
    title: "6. International Orders",
    summary: "Customers outside the UAE follow the same process with a few logistics considerations.",
    paragraphs: [
      "Return shipping from international destinations is coordinated with the same courier that delivered your order whenever possible. Duties paid during import are not refundable, but we will provide documentation if you need to claim them locally.",
      "If your country lacks a supported pickup service, we will authorize a self-shipment. Keep your receipt and we will reimburse reasonable costs once the return is validated.",
    ],
  },
  {
    id: "updates",
    title: "7. Policy Updates",
    summary: "We refresh this page when we add new accessories, logistics partners, or regulatory requirements.",
    paragraphs: [
      "Whenever we make material changes we will update the effective date at the top of the page and highlight key differences in our marketing emails or order confirmations.",
    ],
  },
] as const;

export default function RefundAndReturnsPage() {
  return (
    <main className="pt-20">
      <header className="container max-w-5xl px-4 py-12 sm:py-16">
        <Badge variant="ghost">Legal</Badge>
        <h1 className="mt-4 text-balance text-title-3 sm:text-title-2 lg:text-title-1">Refund & Return Policy</h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          QORDZ accessories are engineered to last, yet we know plans can change. This policy explains how to request a
          return, what qualifies for replacements, and how quickly refunds move back to your payment method.
        </p>
        <DescriptionList className="mt-8 border-stone-200 border-y border-dashed py-4 text-base sm:text-lg">
          {META.map((item) => (
            <Fragment key={item.term}>
              <DescriptionTerm>{item.term}</DescriptionTerm>
              <DescriptionDetails>
                {item.term === "Support desk" ? (
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
              className="h-full rounded-2xl border border-stone-200 bg-card p-5 shadow-sm transition focus-within:ring-2 focus-within:ring-primary/40 hover:-translate-y-0.5 hover:shadow-md"
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
          {RETURNS_SECTIONS.map((section) => (
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
              <p className="font-semibold text-sm text-teal-600 uppercase tracking-wide">Need help?</p>
              <h2 className="mt-1 text-title-5">Returns desk replies within 1 business day</h2>
              <p className="mt-2 text-muted-foreground text-sm sm:max-w-xl">
                Share your order number, serial, and photos of the item. We will respond with the next steps, packing
                instructions, and timelines tailored to your location.
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
              <PackageOpen aria-hidden className="mt-0.5 text-primary" />
              <p>Returns are photographed and recorded for transparency.</p>
            </div>
            <div className="flex items-start gap-2">
              <ClipboardList aria-hidden className="mt-0.5 text-primary" />
              <p>Every request receives a case ID so you can follow progress.</p>
            </div>
            <div className="flex items-start gap-2">
              <HandCoins aria-hidden className="mt-0.5 text-primary" />
              <p>Refund approvals are sent instantly once assessments finish.</p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal/refund-and-returns" },
          { name: "Refund & Return Policy", url: "/legal/refund-and-returns" },
        ])}
        id="ld-breadcrumb-refund"
      />
    </main>
  );
}
