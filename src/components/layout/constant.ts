import { Route } from "next";

import { MailIcon } from "lucide-react";

import { IconPhone, IconSocialFacebook, IconSocialInstagram, IconSocialX } from "@/assets/icons";

import { CATEGORIES } from "@/data/categories";
import { FEATURED_PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";

import { FooterLink, NavLink, SearchAction, SearchActionType, SearchSection, Social } from "./types";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    title: "Earbuds",
    href: "/earbuds" as Route,
  },
  {
    id: 2,
    title: "Power Bank",
    href: "/power-bank" as Route,
  },
  {
    id: 3,
    title: "Charging Cables",
    href: "/charging-cables" as Route,
  },
  {
    id: 4,
    title: "Adapters",
    href: "/adapters" as Route,
  },
  {
    id: 5,
    title: "Mobile Accessories",
    href: "/mobile-accessories" as Route,
  },
];

export const FOOTER_LINKS: FooterLink[] = [
  {
    id: 1,
    label: "Quick Links",
    links: [
      {
        id: 1,
        title: "Home",
        href: "/",
      },
      {
        id: 2,
        title: "Products",
        href: "/products" as Route,
      },
      {
        id: 3,
        title: "Where to Buy",
        href: "/where-to-buy",
      },
      {
        id: 4,
        title: "About us",
        href: "/",
      },
      {
        id: 5,
        title: "Testimonials",
        href: "/",
      },
      {
        id: 6,
        title: "FAQs",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    label: "Shop",
    links: NAV_LINKS,
  },
  {
    id: 3,
    label: "Legal",
    links: [
      {
        id: 1,
        title: "Terms & Conditions",
        href: "/",
      },
      {
        id: 2,
        title: "Privacy Policy",
        href: "/",
      },
      {
        id: 3,
        title: "Refund & Returns Policy",
        href: "/",
      },
      {
        id: 4,
        title: "Shipping Information",
        href: "/",
      },
    ],
  },
  {
    id: 4,
    label: "Customer Support",
    links: [
      {
        id: 1,
        title: "support@qordz.com",
        href: "mailto:support@qordz.com",
      },
      {
        id: 2,
        title: "+971-XXX-XXXXXX",
        href: "tel:+971-XXX-XXXXXX",
      },
    ],
  },
];

export const SOCIAL: Social[] = [
  {
    id: 1,
    href: "/",
    Icon: IconSocialInstagram,
  },
  {
    id: 2,
    href: "/",
    Icon: IconSocialFacebook,
  },
  {
    id: 3,
    href: "/",
    Icon: IconSocialX,
  },
];

export const ACTION_HINT: Record<SearchActionType, string> = {
  action: "Run quick action",
  category: "Open category",
  product: "View product details",
};

export const QUICK_ACTIONS: SearchAction[] = [
  {
    id: "support-email",
    label: "Contact support",
    description: "Send email to support@qordz.com",
    type: "action",
    externalHref: "mailto:support@qordz.com",
    Icon: MailIcon,
  },
  {
    id: "sales-call",
    label: "Call sales",
    description: "Call +971-XXX-XXXXXX",
    type: "action",
    externalHref: "tel:+971-XXX-XXXXXX",
    Icon: IconPhone,
  },
];

export const CATEGORY_ACTIONS: SearchAction[] = CATEGORIES.map(({ id, label, Icon }) => ({
  id: `category-${id}`,
  label,
  description: `${label} category`,
  type: "category",
  href: `/products/${slugify(label)}` as Route,
  keywords: [label.toLowerCase(), "category", "catalog"],
  Icon,
}));

export const PRODUCT_ACTIONS: SearchAction[] = FEATURED_PRODUCTS.map(({ Icon, ...product }) => ({
  id: `product-${product.id}`,
  label: product.name,
  description: product.description,
  type: "product",
  href: `/products/${slugify(product.name)}` as Route,
  keywords: [product.name.toLowerCase(), "featured", "product"],
  Icon,
}));

export const SEARCH_SECTIONS: SearchSection[] = [
  { id: "categories", heading: "Browse categories", items: CATEGORY_ACTIONS },
  { id: "featured-products", heading: "Featured devices", items: PRODUCT_ACTIONS },
  { id: "quick-actions", heading: "Quick actions", items: QUICK_ACTIONS },
].filter((section) => section.items.length > 0);
