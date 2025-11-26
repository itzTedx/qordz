import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ_SECTIONS = [
  {
    title: "Product & Performance",
    description: "Details about QORDZ build quality, compatibility, and everyday care.",
    faqs: [
      {
        question: "What makes QORDZ different from other cables?",
        answer:
          "QORDZ are engineered with dual-braided Kevlar sleeves, strain-relief connectors, and 24K gold plating for consistent conductivity. The result is longer-lasting cables with premium signal stability even under heavy daily use.",
      },
      {
        question: "Are QORDZ cables MFi or USB-IF certified?",
        answer:
          "Yes. Our Lightning lineup is fully MFi certified by Apple and every USB-C cable carries USB-IF compliance, so you can safely fast-charge laptops, tablets, and phones without throttling.",
      },
      {
        question: "How do I clean and maintain my cables?",
        answer:
          "Wipe the outer sleeve with a microfiber cloth dampened with water, then dry completely. Avoid harsh chemicals or twisting the cable around sharp angles to keep the internal shielding intact.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    description: "Everything you need to know from checkout to delivery tracking.",
    faqs: [
      {
        question: "How long does shipping usually take?",
        answer:
          "UAE orders ship within 24 hours and arrive in 1–3 business days. International shipments take 5–10 business days depending on customs processing. Tracking links are emailed immediately after dispatch.",
      },
      {
        question: "Can I edit my order after placing it?",
        answer:
          "If your order has not reached the packing phase, you can update the shipping address or swap SKUs by contacting support with your order ID. Once fulfilled, we can help with a return or exchange instead.",
      },
      {
        question: "What payment methods do you support?",
        answer:
          "We accept all major credit cards, Apple Pay, Google Pay, and Tabby installments in supported regions. Payments are processed securely via PCI-DSS compliant gateways.",
      },
    ],
  },
  {
    title: "Warranty & Returns",
    description: "Coverage details and how to start a return or exchange.",
    faqs: [
      {
        question: "What is covered under the lifetime warranty?",
        answer:
          "Manufacturing defects, connector failures, or frayed sleeves under normal usage are covered for life. Cosmetic wear and accidental damage are not included, but we offer discounted replacements.",
      },
      {
        question: "How do I start a warranty claim?",
        answer:
          "Email support@qordz.com with your proof of purchase, a short description of the issue, and photos of the affected cable. Our team will review within two business days and send a prepaid return label if needed.",
      },
      {
        question: "Do you offer refunds on opened products?",
        answer:
          "Yes, within 30 days of delivery. Ensure all accessories are included and the cable shows minimal wear. Refunds are issued to the original payment method within five business days of inspection.",
      },
    ],
  },
];

const CONTACT_OPTIONS = [
  {
    title: "Need personalized setup help?",
    description: "Book a 15-minute call with a QORDZ specialist to troubleshoot complex workflows.",
    href: "https://support.qordz.com/live-session",
    action: "Schedule a session",
    external: true,
  },
  {
    title: "Prefer email?",
    description: "We respond within one business day—attach photos or videos for faster diagnosis.",
    href: "mailto:support@qordz.com",
    action: "Email support@qordz.com",
    external: true,
  },
];

export default function FaqsPage() {
  return (
    <main className="pt-20">
      <header className="relative m-2 overflow-hidden rounded-2xl bg-muted">
        <div className="container relative z-10 max-w-6xl px-4 py-12 md:py-16">
          <Badge>Support Center</Badge>
          <h1 className="mt-4 text-balance text-title-2 sm:text-title-1">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Browse the answers to our most-asked questions about QORDZ cables, delivery, and warranty coverage. Still
            need help? Reach our team 7 days a week.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/where-to-buy">Shop retailers</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/legal/refund-and-returns">Review refund policy</Link>
            </Button>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]"
        />
      </header>

      <section className="container max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-10">
            {FAQ_SECTIONS.map((section) => (
              <article className="space-y-4 rounded-2xl border border-border bg-card/50 p-6" key={section.title}>
                <div>
                  <p className="font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]">
                    {section.title}
                  </p>
                  <h2 className="mt-2 text-title-5">{section.description}</h2>
                </div>
                <Accordion collapsible type="single">
                  {section.faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                      <AccordionTrigger className="font-medium text-base">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            ))}
          </div>

          <aside className="space-y-4 rounded-2xl border border-border bg-card/60 p-6">
            <div>
              <p className="font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]">Need more help?</p>
              <h2 className="mt-2 text-title-5">Real humans, ready daily</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Our support team is online from 9am–9pm Gulf Standard Time with average responses under one hour.
              </p>
            </div>
            <div className="space-y-3">
              {CONTACT_OPTIONS.map((option) => (
                <Card className="bg-muted/70" key={option.title}>
                  <CardHeader className="px-4 py-3">
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild size="sm" variant="secondary">
                      <a
                        href={option.href}
                        rel={option.external ? "noreferrer" : undefined}
                        target={option.external ? "_blank" : undefined}
                      >
                        {option.action}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="rounded-xl bg-muted/80 p-4">
              <p className="font-semibold text-sm">Response time status</p>
              <p className="mt-1 text-muted-foreground text-sm">
                Live chat is currently responding in under 5 minutes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
