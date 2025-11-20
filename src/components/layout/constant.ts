import type { JSX } from "react";

import type { Route } from "next";

import { IconSocialFacebook, IconSocialInstagram, IconSocialX } from "@/assets/icons";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    title: "Power Banks",
    href: "/",
  },
  {
    id: 2,
    title: "Charging Cables",
    href: "/",
  },
  {
    id: 3,
    title: "TWS Earbuds",
    href: "/",
  },
  {
    id: 4,
    title: "Adapters",
    href: "/",
  },
  {
    id: 5,
    title: "Mobile Accessories",
    href: "/",
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
        href: "/",
      },
      {
        id: 3,
        title: "Where to Buy",
        href: "/",
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
    label: "Products",
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

export interface Social {
  id: number;
  href: Route;
  Icon: (props: SVGProps) => JSX.Element;
}

export interface FooterLink {
  id: number;
  label: string;
  links: NavLink[];
}

export interface NavLink {
  id: number;
  title: string;
  href: Route;
}
