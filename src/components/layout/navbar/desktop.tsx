import { HTMLAttributes } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "./constant";

interface Props extends HTMLAttributes<HTMLLIElement> {}

export const DesktopNavbar = ({ className, ...props }: Props) => {
  return (
    <ul className="flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <li key={link.id} {...props} className={cn(className)}>
          <Link className="px-4 py-2 font-medium text-base" href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
