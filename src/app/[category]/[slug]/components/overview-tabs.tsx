import Image from "next/image";

import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";
import {
  ScrollSpy,
  ScrollSpyLink,
  ScrollSpyNav,
  ScrollSpySection,
  ScrollSpyViewport,
} from "@/components/ui/scroll-spy";

import { WaterMark } from "@/assets/logo";

import { TABS } from "../data/constants";

export const OverviewTabs = () => {
  return (
    <ScrollSpy className="mt-12" defaultValue="overview" offset={120} orientation="vertical">
      <ScrollSpyNav className="sticky top-4 z-50 mx-auto mb-4 w-fit rounded-full bg-muted p-1">
        {TABS.map((item) => (
          <ScrollSpyLink asChild key={item.href} value={item.href}>
            <button>{item.label}</button>
          </ScrollSpyLink>
        ))}
      </ScrollSpyNav>

      <ScrollSpyViewport>
        <ScrollSpySection value="overview">
          <h2 className="mb-4 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3">
            Product Overview
          </h2>

          <div className="grid grid-cols-10 gap-2 *:relative *:overflow-hidden *:rounded-lg">
            <div className="col-span-4">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-1.jpg"
              />
            </div>
            <div className="col-span-3 aspect-7/6">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-2.jpg"
              />
            </div>
            <div className="col-span-3 aspect-7/6">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-3.jpg"
              />
            </div>
            <div className="col-span-3 aspect-7/6">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-4.jpg"
              />
            </div>
            <div className="col-span-4">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-5.jpg"
              />
            </div>
            <div className="col-span-3 aspect-7/6">
              <Image
                alt="Qordz AirTune Lite"
                className="object-cover"
                fill
                src="/images/products/overview/overview-6.jpg"
              />
            </div>
          </div>

          <article className="mt-12 lg:mt-20">
            <h3 className="text-teal-800 text-title-1">
              <span className="text-stone-700 text-title-3">Everyday comfort,</span>
              <br />
              Everyday music.
            </h3>
            <p className="text-2xl">
              Experience pure wireless freedom with Qordz AirTune Lite, the perfect companion for music lovers,
              multitaskers, and everyday commuters. Designed for comfort and engineered for clarity, these earbuds blend
              premium sound performance with an ultra-lightweight build making them ideal for all-day wear.
              <br />
              Whether you're taking calls, listening to playlists, or navigating your day, AirTune Lite delivers
              consistent audio quality, quick touch controls, and long-lasting playtime.
            </p>
          </article>

          <ul className="container mt-12 grid max-w-6xl grid-cols-5 gap-4 *:flex *:aspect-square *:flex-col *:items-center *:justify-center *:gap-2 *:rounded-xl *:bg-card *:p-6 *:text-center *:font-medium *:text-lg *:text-stone-600 *:leading-snug lg:mt-20">
            <li className="">
              <Image alt="Smart Touch Controls" height={72} src="/icons/touch.svg" width={72} />
              <p>Smart Touch Controls</p>
            </li>
            <li>
              <Image alt="20-Hour Total Playtime" height={72} src="/icons/battery-charging.svg" width={72} />
              <p>20-Hour Total Playtime</p>
            </li>
            <li>
              <Image alt="IPX4 Water-Resistant" height={72} src="/icons/umbrella.svg" width={72} />
              <p>IPX4 Water-Resistant</p>
            </li>
            <li>
              <Image alt="Bluetooth 5.3 Connectivity" height={72} src="/icons/usb-connected.svg" width={72} />
              <p>USB-C Fast Charging</p>
            </li>
            <li>
              <Image alt="Bluetooth 5.3 Connectivity" height={72} src="/icons/bluetooth.svg" width={72} />
              <p>Bluetooth 5.3 Connectivity</p>
            </li>
          </ul>

          <div className="mt-12 grid grid-cols-2 items-center justify-center gap-12 lg:mt-20">
            <div className="relative aspect-square overflow-hidden">
              <Image
                alt="Qordz AirTune Lite"
                className="z-5 object-contain"
                fill
                src="/images/products/overview/buds-teardown.png"
              />
              <WaterMark className="-translate-1/2 absolute top-1/2 left-1/2 opacity-10" />
            </div>

            <div>
              <h3 className="text-teal-900 text-title-3">Sound You Can Feel</h3>
              <p className="text-3xl text-stone-600">
                Experience crisp highs, warm mids, and clean bass engineered for clarity across all music genres and
                everyday media.
              </p>
            </div>
          </div>
        </ScrollSpySection>

        <ScrollSpySection value="specifications">
          <h2 className="my-6 text-center text-teal-800 text-title-5 md:text-title-4 lg:text-title-3">
            Specifications
          </h2>
          <DescriptionList>
            <DescriptionTerm>Audio</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Driver Unit:</strong> 10 mm Dynamic Driver
                </li>

                <li>
                  <strong>Frequency Response Range:</strong> 20 Hz – 20 kHz
                </li>

                <li>
                  <strong>Audio Codec:</strong> SBC, AAC
                </li>

                <li>
                  <strong>Sound Profile:</strong> Balanced tuning with enhanced clarity
                </li>

                <li>
                  <strong>Call Technology:</strong> Noise-reduction microphone with voice enhancement
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>Connectivity</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Connection Mode:</strong> Bluetooth
                </li>
                <li>
                  <strong>Bluetooth Version:</strong> V5.3
                </li>
                <li>
                  <strong>Wireless Range:</strong> Up to 10 meters
                </li>
                <li>
                  <strong>Auto Reconnect:</strong> Yes
                </li>
                <li>
                  <strong>Low Latency Mode:</strong> ~65 ms for gaming & videos
                </li>
                <li>
                  <strong>Pairing:</strong> One-step pairing with instant reconnection
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>Battery</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Battery Capacity:</strong> 40 mAh (per earbud), 300 mAh (charging case)
                </li>
                <li>
                  <strong>Playback Time:</strong> Approx. 5 hours (at 50% volume)
                </li>
                <li>
                  <strong>Playback with Charging Case:</strong> Up to 20 hours
                </li>
                <li>
                  <strong>Charging Port:</strong> USB-C
                </li>
                <li>
                  <strong>Charging Time:</strong> ~1.5 hours (earbuds + case)
                </li>
                <li>
                  <strong>Standby Time:</strong> ~80 hours
                </li>
              </ul>
            </DescriptionDetails>

            <DescriptionTerm>General</DescriptionTerm>
            <DescriptionDetails>
              <ul>
                <li>
                  <strong>Water Resistance:</strong> IPX4 (sweat & splash resistant)
                </li>
                <li>
                  <strong>App Support:</strong> No (works plug-and-play)
                </li>
                <li>
                  <strong>Product Materials:</strong> ABS + PC
                </li>
                <li>
                  <strong>Ear Tip Material:</strong> Soft Silicone
                </li>
                <li>
                  <strong>Weight:</strong>
                  <ul className="ml-4 list-inside list-disc">
                    <li>Earbuds: 3.5 g each</li>
                    <li>Charging Case: 28 g</li>
                    <li>Total: Approx. 35 g</li>
                  </ul>
                </li>
                <li>
                  <strong>Colors:</strong> Black / White
                </li>
              </ul>
            </DescriptionDetails>
          </DescriptionList>
        </ScrollSpySection>
      </ScrollSpyViewport>
    </ScrollSpy>
  );
};
