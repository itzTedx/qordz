import { Route } from "next";
import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { CONTACT_OPTIONS, FAQ_SECTIONS } from "./constants";

export default function FaqsPage() {
  return (
    <main>
      <header className="relative overflow-hidden rounded-2xl bg-muted pt-16">
        <div className="container relative z-10 max-w-7xl py-12 md:py-16">
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

      <section className="container max-w-7xl py-12 md:py-16">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_372px]">
          <div className="space-y-3">
            {FAQ_SECTIONS.map((section) => (
              <article className="rounded-2xl border border-border bg-card/50 p-6 pb-3" key={section.title}>
                <div>
                  <Badge variant="secondary">{section.title}</Badge>
                  <h2 className="mt-2 text-title-5">{section.description}</h2>
                </div>
                <Accordion collapsible type="single">
                  {section.faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                      <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            ))}
          </div>

          <aside className="sticky top-20 h-fit space-y-4 rounded-3xl border bg-card/60 p-6">
            <div>
              <Badge variant="outline">Need more help?</Badge>
              <h2 className="mt-2 text-title-5">Real humans, ready daily</h2>
              <p className="text-muted-foreground text-sm">
                Our support team is online from 9AM - 9PM GST with average responses under one hour.
              </p>
            </div>
            <div className="space-y-3">
              {CONTACT_OPTIONS.map((option) => (
                <Card className="p-1" key={option.title}>
                  <CardContent>
                    <CardHeader className="p-3">
                      <CardTitle>{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <div className="p-3">
                      <Button asChild className="bg-transparent" size="sm" variant="outline">
                        <Link
                          href={option.href as Route}
                          rel={option.external ? "noreferrer" : undefined}
                          target={option.external ? "_blank" : undefined}
                        >
                          {option.action}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
