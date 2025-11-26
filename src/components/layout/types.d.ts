import type { Route } from "next";

export interface Social {
  id: number;
  href: Route;
  label: string;
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

export type SearchActionType = "action" | "category" | "product";

export interface SearchAction {
  id: string;
  label: string;
  type: SearchActionType;
  description?: string;
  href?: Route;
  externalHref?: string;
  keywords?: string[];
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SearchSection {
  id: string;
  heading: string;
  items: SearchAction[];
}
