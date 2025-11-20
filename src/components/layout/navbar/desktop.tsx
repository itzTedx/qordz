import Link from "next/link";

import { NAV_LINKS } from "./constant";

export const DesktopNavbar = () => {
  return (
    <ul className="flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <Link className="px-4 py-2" href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
