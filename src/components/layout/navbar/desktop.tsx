import { HTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../constant";

const linkBaseClasses = "px-4 py-2 text-sm font-medium relative group ";

interface Props extends HTMLAttributes<HTMLUListElement> {
  itemClassName?: string;
}

export const DesktopNavbar = ({ className, itemClassName, ...props }: Props) => {
  return (
    <ul className={cn("hidden items-center gap-1 uppercase md:flex", className)} role="list" {...props}>
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <Link className={cn(linkBaseClasses, itemClassName)} href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
