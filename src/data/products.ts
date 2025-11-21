import { IconAccessories, IconAdapter, IconCable, IconEarbuds, IconPowerBank } from "@/assets/icons";

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Qordz Charging Cables",
    description: "Ultra-strong, fast-charging cables for every device.",
    image: "/images/featured/charging-cables.webp",
    isFeatured: false,
    Icon: IconCable,
  },
  {
    id: 2,
    name: "TWS Earbuds",
    description: "Crystal-clear audio with enhanced comfort.",
    image: "/images/featured/tws-earbuds.webp",
    isFeatured: false,
    Icon: IconEarbuds,
  },
  {
    id: 3,
    name: "Mobile Accessories",
    description: "Practical add-ons for better connectivity and convenience.",
    image: "/images/featured/mobile-accessories.webp",
    isFeatured: false,
    Icon: IconAccessories,
  },
  {
    id: 4,
    name: "Qordz Power Banks",
    description: "Compact power solutions for longer days on the go.",
    image: "/images/featured/power-bank.webp",
    isFeatured: true,
    Icon: IconPowerBank,
  },
  {
    id: 5,
    name: "Adaptors",
    description: "Smart, efficient chargers for all environments.",
    image: "/images/featured/adaptor.webp",
    isFeatured: false,
    Icon: IconAdapter,
  },
];
