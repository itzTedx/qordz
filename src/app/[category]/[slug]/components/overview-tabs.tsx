import Link from "next/link";

import { TABS } from "../data/constants";

interface OverviewTabsProps {
  children: React.ReactNode;
}

export function OverviewTabs({ children }: OverviewTabsProps) {
  return (
    <div className="mt-12 space-y-6">
      <nav
        aria-label="Product detail sections"
        className="sticky top-4 z-50 mx-auto max-w-fit rounded-full bg-muted p-1 shadow-sm"
      >
        <ul className="flex flex-wrap items-center justify-center gap-1">
          {TABS.map((item) => (
            <li key={item.href}>
              <Link
                aria-label={`Jump to ${item.label} section`}
                className="block rounded-full bg-card px-4 py-2 font-medium text-sm text-stone-700 transition hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                href={`#${item.href}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </div>
  );
}
