import type { Route } from "next";

export const NAV_LINKS: NavLink[] = [
  {
    id: 1,
    title: "Power Banks",
    href: "/",
  },
  {
    id: 2,
    title: "Chargers",
    href: "/",
  },
  {
    id: 3,
    title: "TWS",
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

export interface NavLink {
  id: number;
  title: string;
  href: Route;
}
