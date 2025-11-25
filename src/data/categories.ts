import { IconAccessories, IconAdapter, IconCable, IconEarbuds, IconPowerBank } from "@/assets/icons";
import { Accessories, Adapters, Cables, Earbuds, PowerBank } from "@/assets/icons/categories";

export const CATEGORIES = [
  {
    id: 1,
    label: "Earbuds",
    value: "earbuds",
    Image: Earbuds,
    Icon: IconEarbuds,
  },
  {
    id: 2,
    label: "Power Bank",
    value: "power-bank",
    Image: PowerBank,
    Icon: IconPowerBank,
  },
  {
    id: 3,
    label: "Charging Cables",
    value: "charging-cables",
    Image: Cables,
    Icon: IconCable,
  },
  {
    id: 4,
    label: "Adapters",
    value: "adapters",
    Image: Adapters,
    Icon: IconAdapter,
  },
  {
    id: 5,
    label: "Mobile Accessories",
    value: "mobile-accessories",
    Image: Accessories,
    Icon: IconAccessories,
  },
];
