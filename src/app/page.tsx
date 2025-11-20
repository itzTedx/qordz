import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";

import { IconChevronRight, IconPlay, IconRocket, IconShield, IconSparkle, IconWorld } from "@/assets/icons";
import { Wordmark } from "@/assets/logo";

export default function Home() {
  return (
    <main>
      <header className="relative overflow-hidden bg-teal-500 pt-18">
        <div className="relative mx-auto max-w-7xl px-4 text-teal-950">
          <div className="relative z-10 pt-24">
            <p className="font-display text-lead">Introducing Airtune Lite</p>
            <h1 className="max-w-2xl text-title-1">Power that moves with you.</h1>

            <div className="mt-4 flex items-center gap-3">
              <Button className="group bg-teal-50 text-teal-700 hover:bg-card" size="lg">
                Explore Products{" "}
                <IconChevronRight className="size-2.5 transition-transform delay-100 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
              </Button>
              <Button className="backdrop-blur-md" size="lg" variant="ghost">
                Where to Buy
              </Button>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-end justify-end gap-6 py-9">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4">
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
              <div className="card group relative flex aspect-video h-40 items-center justify-center rounded-xl bg-teal-950 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-full bg-card/10 p-1 backdrop-blur-lg transition-transform delay-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125">
                  <div className="flex size-7 items-center justify-center rounded-full bg-card/20 shadow-lg backdrop-blur-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <IconPlay className="size-5 text-card" />
                  </div>
                </div>

                <Wordmark className="h-auto w-[80%] text-teal-400" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="card flex h-1 w-32 cursor-pointer items-center rounded-full bg-stone-500/15 p-px backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50">
                <div className="h-full w-1/2 rounded-full bg-card" />
              </div>
              <div className="card h-1 w-32 cursor-pointer rounded-full bg-stone-500/15 backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50" />
              <div className="card h-1 w-32 cursor-pointer rounded-full bg-stone-500/15 backdrop-blur-md transition-all duration-300 hover:bg-stone-300/50" />
            </div>
          </div>

          {/* Logo watermark */}
          <Wordmark className="-bottom-20 -translate-x-1/2 pointer-events-none absolute left-1/2 z-0 h-auto w-full text-teal-50/50" />
        </div>

        <Image
          alt="Airtune Lite"
          className="pointer-events-none absolute top-0 right-0"
          height={876}
          src="/images/qordz-airtune.webp"
          width={1080}
        />
      </header>
    </main>
  );
}
