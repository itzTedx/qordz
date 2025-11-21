import Link from "next/link";

import { Button } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";
import { Magnetic } from "@/components/ui/magnetic";

import { IconChevronRight, IconPlay, IconRocket, IconShield, IconSparkle, IconWorld } from "@/assets/icons";
import { Wordmark } from "@/assets/logo";

import { ParallaxImage } from "./components/parallax-image";

export const HomeHero = () => {
  return (
    <header className="relative overflow-hidden bg-teal-500 pt-16">
      <div className="container relative flex min-h-[calc(100svh-4rem-1px)] max-w-7xl flex-col justify-between text-teal-950 md:min-h-auto">
        <div className="relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <p className="font-display text-lead-sm md:text-lead">Introducing Airtune Lite</p>
          <h1 className="max-w-2xl text-title-2 md:text-title-1">Power that moves with you.</h1>

          <div className="mt-4 flex items-center gap-3">
            {/* <Button className="group bg-teal-50 text-teal-700 hover:bg-card" size="lg"> */}
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">
                Explore Products{" "}
                <IconChevronRight className="size-2.5 transition-transform delay-100 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild className="backdrop-blur-md" size="lg" variant="ghost">
              <Link href="/where-to-buy">Where to Buy</Link>
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-end justify-end gap-6 py-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="hidden items-center gap-3 md:flex">
              <IconBox>
                <IconRocket className="size-6 text-teal-500" />
              </IconBox>
              <IconBox>
                <IconSparkle className="size-6 text-teal-500" />
              </IconBox>
              <IconBox>
                <IconWorld className="size-6 text-teal-500" />
              </IconBox>
              <IconBox>
                <IconShield className="size-6 text-teal-500" />
              </IconBox>
            </div>

            {/* Video Card */}
            <Magnetic>
              <div className="card group relative flex aspect-video h-28 items-center justify-center rounded-xl bg-teal-950 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] md:h-36">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full bg-card/10 p-1 backdrop-blur-lg transition-transform delay-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125">
                  <div className="flex size-7 items-center justify-center rounded-full bg-card/20 shadow-lg backdrop-blur-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <IconPlay className="size-5 text-card" />
                  </div>
                </div>

                <Wordmark className="h-auto w-[80%] text-teal-400" />
              </div>
            </Magnetic>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-4">
            <div className="card flex h-1 w-16 cursor-pointer items-center rounded-full bg-stone-500/15 p-px backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50 md:w-32">
              <div className="h-full w-1/2 rounded-full bg-card" />
            </div>
            <div className="card h-1 w-16 cursor-pointer rounded-full bg-stone-500/15 backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50 md:w-32" />
            <div className="card h-1 w-16 cursor-pointer rounded-full bg-stone-500/15 backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50 md:w-32" />
          </div>
        </div>

        {/* Logo watermark */}
        <Wordmark className="md:-bottom-20 -translate-x-1/2 -bottom-9 pointer-events-none absolute left-1/2 z-0 h-auto w-full text-teal-50/30" />
      </div>

      <ParallaxImage />
    </header>
  );
};
