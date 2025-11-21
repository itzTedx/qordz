import Link from "next/link";

import { Logo, Wordmark } from "@/assets/logo";

import { AnimatedGroup } from "../ui/animated-group";
import { FOOTER_LINKS } from "./constant";
import { SocialChips } from "./footer/social-chip";

export const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-y-20 overflow-hidden bg-foreground py-10 text-muted sm:gap-y-28 sm:py-12 md:gap-y-36 md:py-14 lg:gap-y-48 lg:py-16">
      <div className="container relative grid max-w-7xl gap-6 md:grid-cols-3 md:gap-4">
        <div className="flex justify-between md:flex-col">
          <Logo />
          <SocialChips />
        </div>
        <AnimatedGroup
          as="nav"
          className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4"
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
              <ul className="peer space-y-3 font-medium">
                {footer.links.map((link) => (
                  <li
                    className="text-sm text-stone-200 transition-colors duration-300 hover:text-teal-400"
                    key={link.id}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </AnimatedGroup>
      </div>
      <p className="text-center text-sm text-stone-400">© 2025 Qordz. All Rights Reserved.</p>
      <Wordmark className="-translate-x-1/2 -bottom-6 md:-bottom-12 mask-b-to-70% absolute left-1/2 h-auto w-full text-teal-400/10 md:w-auto" />
    </footer>
  );
};
