import { HTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../constant";

interface Props extends HTMLAttributes<HTMLUListElement> {
  itemClassName?: string;
}

export const DesktopNavbar = ({ className, itemClassName, ...props }: Props) => {
  return (
    <ul className={cn("hidden items-center gap-1 uppercase md:flex", className)} role="list" {...props}>
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <Link className={cn("group relative px-3 py-2 font-semibold text-sm", itemClassName)} href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
