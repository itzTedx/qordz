import ImageCarousel from "@/components/ui/carousel-with-thumbnail";

interface Props {
  images: { src: string; alt: string }[];
}

export const ImagesCarousel = ({ images }: Props) => {
  return (
    <div className="h-fit lg:sticky lg:top-28 lg:col-span-2">
      <ImageCarousel aspectRatio="wide" images={images} showThumbs thumbPosition="bottom" />
    </div>
  );
};
