import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Become a Qordz Distributor \u2013 UAE & GCC Wholesale",
  description:
    "Partner with Qordz as a wholesale distributor across the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. Request pricing, catalogs, and retail support.",
  path: "/distributor",
  keywords: [
    "Qordz distributor",
    "mobile accessories wholesale UAE",
    "Dubai wholesale electronics",
    "GCC accessories supplier",
  ],
});

export default function DistributorPage() {
  return (
    <main className="container max-w-4xl px-4 pt-24 pb-16">
      <header className="space-y-3">
        <h1 className="text-balance text-title-3 sm:text-title-2 lg:text-title-1">
          Become a Qordz distributor in the UAE & GCC
        </h1>
        <p className="text-lg text-muted-foreground">
          Join our growing network of authorised retailers and distributors across the Gulf. Contact our partnerships
          team at{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:partnerships@qordz.com">
            partnerships@qordz.com
          </a>{" "}
          for wholesale pricing, catalogs, and marketing support.
        </p>
      </header>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Distributor", url: "/distributor" },
        ])}
        id="ld-breadcrumb-distributor"
      />
    </main>
  );
}
