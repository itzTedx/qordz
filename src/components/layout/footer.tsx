import Link from "next/link";

import { Logo, Wordmark } from "@/assets/logo";

import { AnimatedGroup } from "../ui/animated-group";
import { FOOTER_LINKS } from "./constant";
import { SocialChips } from "./footer/social-chip";

export const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-y-12 overflow-hidden bg-foreground py-10 text-muted sm:gap-y-14 sm:py-12 md:gap-y-32 md:py-14 lg:py-16">
      <AnimatedGroup
        as="nav"
        className="container relative grid max-w-7xl grid-cols-2 gap-4 md:col-span-2 md:grid-cols-5"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.75,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
      >
        {FOOTER_LINKS.map((footer) => (
          <div className="space-y-5" key={footer.id}>
            <h4 className="text-label text-teal-700">{footer.label}</h4>
            <ul className="peer space-y-4 font-medium">
              {footer.links.map((link) => (
                <li key={link.id}>
                  <Link className="text-stone-200 transition-colors duration-300 hover:text-teal-400" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimatedGroup>
      <div className="container relative z-10 flex max-w-7xl items-center justify-between">
        <div>
          <Logo />
          <p className="text-center text-muted-foreground text-sm">© 2025 Qordz. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col items-end">
          <SocialChips />
          <p className="mt-1 text-stone-400">Everyday comfort, everywhere.</p>
        </div>
      </div>
      <Wordmark className="-translate-x-1/2 -bottom-6 md:-bottom-12 mask-b-to-70% absolute left-1/2 h-auto w-full text-teal-400/10 md:w-auto" />
    </footer>
  );
};
