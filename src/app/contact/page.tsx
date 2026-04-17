import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Qordz \u2013 Customer Support in UAE",
  description:
    "Get in touch with the Qordz team for product support, warranty claims, bulk orders, and partnership enquiries. UAE customer support 7 days a week.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="container max-w-4xl px-4 pt-24 pb-16">
      <header className="space-y-3">
        <h1 className="text-balance text-title-3 sm:text-title-2 lg:text-title-1">Contact Qordz</h1>
        <p className="text-lg text-muted-foreground">
          Our UAE-based team responds within one business day. For product support, warranty claims, or partnership
          enquiries, reach us at{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:support@qordz.com">
            support@qordz.com
          </a>
          .
        </p>
      </header>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
        id="ld-breadcrumb-contact"
      />
    </main>
  );
}
