import { cache } from "react";

import type { Metadata } from "next";

import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";

export const SITE_URL = "https://qordz.com";
export const SITE_NAME = "Qordz";
export const SITE_LEGAL_NAME = "QORDZ FZE";
export const SITE_LOCALE = "en_AE";
export const SITE_REGION = "AE";
export const SITE_CITY = "Dubai";
export const DEFAULT_OG_IMAGE = "/opengraph-image";
export const SUPPORT_EMAIL = "support@qordz.com";
export const SUPPORT_PHONE = "+971-4-000-0000";

export const DEFAULT_TITLE = "Qordz \u2013 Premium Mobile Accessories in UAE";
export const DEFAULT_DESCRIPTION =
  "Shop premium Qordz mobile accessories in the UAE \u2013 TWS earbuds, fast-charging cables, power banks, adapters, and more. Engineered in Dubai, delivered across the GCC.";

export const DEFAULT_KEYWORDS = [
  "mobile accessories UAE",
  "mobile accessories Dubai",
  "wireless earbuds UAE",
  "TWS earbuds Dubai",
  "power bank UAE",
  "fast charging cable UAE",
  "USB-C cable Dubai",
  "wall adapter UAE",
  "Qordz",
  "Qordz UAE",
  "Qordz Dubai",
  "phone accessories GCC",
];

const GEO_META = {
  "geo.region": SITE_REGION,
  "geo.placename": SITE_CITY,
  "geo.position": "25.2048;55.2708",
  ICBM: "25.2048, 55.2708",
} as const;

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  images,
  keywords,
  type = "website",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const canonical = path.startsWith("http") ? path : path;
  const ogImages =
    images && images.length > 0
      ? images.map((src) => (src.startsWith("http") ? src : src))
      : [DEFAULT_OG_IMAGE];

  return {
    title,
    description,
    keywords: keywords && keywords.length > 0 ? keywords : DEFAULT_KEYWORDS,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      title: title ?? DEFAULT_TITLE,
      description,
      locale: SITE_LOCALE,
      images: ogImages.map((url) => ({ url, width: 1200, height: 630, alt: title ?? DEFAULT_TITLE })),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? DEFAULT_TITLE,
      description,
      images: ogImages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: { ...GEO_META },
  };
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}

export function productUrl(name: string) {
  return absoluteUrl(`/products/${slugify(name)}`);
}

export function categoryUrl(value: string) {
  return absoluteUrl(`/${value}`);
}

type Product = (typeof PRODUCTS)[number];

export const findProductBySlug = cache((slug: string): Product | undefined => {
  return PRODUCTS.find((p) => slugify(p.name) === slug);
});

export const categoryBySlug = cache((slug: string) => {
  return CATEGORIES.find((c) => c.value === slug || slugify(c.label) === slug);
});

export const productsForCategory = cache((categorySlug: string): Product[] => {
  return PRODUCTS.filter((p) => slugify(p.category) === categorySlug);
});

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/opengraph-image"),
    email: SUPPORT_EMAIL,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: ["AE", "SA", "KW", "QA", "BH", "OM"],
    sameAs: [
      "https://www.instagram.com/qordz",
      "https://www.facebook.com/qordz",
      "https://twitter.com/qordz",
      "https://www.linkedin.com/company/qordz",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: SUPPORT_EMAIL,
        contactType: "customer support",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-AE",
    publisher: { "@id": `${SITE_URL}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

export function breadcrumbJsonLd(items: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
    })),
  } as const;
}

export function productJsonLd(product: Product) {
  const url = productUrl(product.name);
  const primaryImage = product.images?.[0] ? absoluteUrl(product.images[0]) : absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    image: (product.images ?? []).map((img) => absoluteUrl(img)),
    sku: product.id,
    mpn: product.id,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    url,
    offers: {
      "@type": "Offer",
      url,
      price: product.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      areaServed: "AE",
      seller: { "@id": `${SITE_URL}#organization` },
      priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
    },
    image_url: primaryImage,
  } as const;
}

export function itemListJsonLd(products: Product[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: productUrl(product.name),
      name: product.name,
    })),
  } as const;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } as const;
}
