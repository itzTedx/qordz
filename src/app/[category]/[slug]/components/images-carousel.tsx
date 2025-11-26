import NextImage from "next/image";

import { Image, ImageZoom } from "@/components/ui/image-zoom";

export const ImagesCarousel = () => {
  return (
    <div className="h-fit lg:sticky lg:top-28 lg:col-span-2">
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-card sm:aspect-5/3 lg:aspect-6/4">
        <ImageZoom zoomOnHover={false} zoomScale={2}>
          <Image
            alt="Qordz AirTune Lite in charging case"
            as={NextImage}
            height={1080}
            objectFit="contain"
            priority
            sizes="(min-width: 1024px) 75vw, (min-width: 640px) 80vw, 100vw"
            src="/images/qordz-airtune.webp"
            width={1350}
          />
        </ImageZoom>
      </div>
    </div>
  );
};
