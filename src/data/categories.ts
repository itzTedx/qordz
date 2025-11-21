import { IconAccessories, IconAdapter, IconCable, IconEarbuds, IconPowerBank } from "@/assets/icons";
import { Accessories, Adaptors, Cables, Earbuds, PowerBank } from "@/assets/icons/categories";

export const CATEGORIES = [
  {
    id: 1,
    label: "Earbuds",
    Image: Earbuds,
    Icon: IconEarbuds,
  },
  {
    id: 2,
    label: "Power Bank",
    Image: PowerBank,
    Icon: IconPowerBank,
  },
  {
    id: 3,
    label: "Charging Cables",
    Image: Cables,
    Icon: IconCable,
  },
  {
    id: 4,
    label: "Adaptors",
    Image: Adaptors,
    Icon: IconAdapter,
  },
  {
    id: 5,
    label: "Mobile Accessories",
    Image: Accessories,
    Icon: IconAccessories,
  },
];
