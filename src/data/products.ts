import { IconAccessories, IconAdapter, IconCable, IconEarbuds, IconPowerBank } from "@/assets/icons";

import { CATEGORIES } from "./categories";

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
    name: "Adapters",
    description: "Smart, efficient chargers for all environments.",
    image: "/images/featured/adaptor.webp",
    isFeatured: false,
    Icon: IconAdapter,
  },
];

export const PRODUCTS = [
  {
    id: "airtune-lite",
    name: "Qordz AirTune Lite",
    category: CATEGORIES[0].label,
    price: 79,
    shortTagline: "Everyday comfort, everyday music.",
    description:
      "Experience lightweight comfort and crisp audio with Qordz AirTune Lite. Designed for all-day listening with 20 hours of total playtime, intuitive touch controls, and a noise-reduction microphone for crystal-clear calls.",
    features: [
      {
        title: "Lightweight Ergonomic Fit",
        description: "Featherlight 3.5g design offers long-lasting comfort for daily use.",
      },
      {
        title: "20 Hours Total Playtime",
        description: "Enjoy up to 5 hours per charge, plus 15 extra hours with the charging case.",
      },
      {
        title: "Noise Reduction Mic",
        description: "Built-in noise reduction ensures clear voice calls anywhere.",
      },
      {
        title: "Bluetooth 5.3",
        description: "Stable connectivity with low latency and fast pairing.",
      },
    ],
    specs: [
      {
        group: "Audio",
        specs: [
          { label: "Driver Unit", value: "10mm Dynamic" },
          { label: "Frequency Response", value: "20 Hz – 20 kHz" },
          { label: "Audio Codec", value: "SBC, AAC" },
        ],
      },
      {
        group: "Connectivity",
        specs: [
          { label: "Bluetooth Version", value: "5.3" },
          { label: "Range", value: "10 meters" },
          { label: "Low Latency", value: "65 ms" },
        ],
      },
      {
        group: "Battery",
        specs: [
          { label: "Earbud Battery", value: "40 mAh" },
          { label: "Case Battery", value: "300 mAh" },
          { label: "Playback", value: "Up to 20 hours total" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Water Resistance", value: "IPX4" },
          { label: "Weight", value: "3.5g per earbud" },
          { label: "Charging Port", value: "USB-C" },
        ],
      },
    ],
    images: [
      "/images/qordz-airtune.webp",
      "/images/products/qordz-prime-powerbank.webp",
      "/images/featured/tws-earbuds.webp",
    ],
  },

  // ------------------------------
  // 2. Charging Cable
  // ------------------------------
  {
    id: "flexcharge-pro",
    name: "Qordz FlexCharge Pro",
    category: CATEGORIES[2].label,
    price: 29,
    shortTagline: "Fast, durable, and built to last.",
    description:
      "A reinforced fast-charging cable designed with premium braided materials, advanced chipset protection, and universal compatibility for all major devices.",
    features: [
      { title: "Fast-Charge Ready", description: "Supports 60W PD charging." },
      {
        title: "Reinforced Build",
        description: "Braided fiber + aluminum shell for superior durability.",
      },
      {
        title: "Universal Compatibility",
        description: "Works with iPhone, Android, tablets, and accessories.",
      },
      {
        title: "Smart Chip Safety",
        description: "Prevents overcurrent, overheating, and short circuits.",
      },
    ],
    specs: [
      {
        group: "Technical",
        specs: [
          { label: "Power Output", value: "60W PD" },
          { label: "Cable Length", value: "1m / 1.5m / 2m" },
          { label: "Material", value: "Braided Nylon + Aluminum Shell" },
        ],
      },
      {
        group: "Compatibility",
        specs: [
          { label: "Interfaces", value: "USB-C to USB-C / USB-C to Lightning" },
          { label: "Devices", value: "Phones, Tablets, Laptops" },
        ],
      },
    ],
    images: ["/images/products/qordz-prime-powerbank.webp"],
  },

  // ------------------------------
  // 3. Power Bank
  // ------------------------------
  {
    id: "powercore-mini",
    name: "Qordz PowerCore Mini 10000",
    category: CATEGORIES[1].label,
    price: 89,
    shortTagline: "Compact size, powerful performance.",
    description:
      "A sleek and portable 10,000mAh power bank with fast USB-C input/output, multi-layer protection, and high-speed charging for all your devices.",
    features: [
      { title: "10,000mAh Capacity", description: "Enough to fully recharge phones 1–2 times." },
      { title: "18W Fast Charging", description: "USB-C PD + QC3.0 support." },
      { title: "Pocket-Friendly", description: "Slim, lightweight, easy to carry anywhere." },
      {
        title: "Safety Protection",
        description: "Temperature control, surge protection, and more.",
      },
    ],
    specs: [
      {
        group: "Battery",
        specs: [
          { label: "Capacity", value: "10,000mAh" },
          { label: "Input", value: "USB-C (18W)" },
          { label: "Output", value: "USB-C + USB-A" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Material", value: "ABS + PC" },
          { label: "Weight", value: "180g" },
        ],
      },
    ],
    images: ["/images/featured/tws-earbuds.webp"],
  },

  // ------------------------------
  // 4. Wall Charger
  // ------------------------------
  {
    id: "speedcharge-30w",
    name: "Qordz SpeedCharge 30W",
    category: CATEGORIES[3].label,
    price: 49,

    shortTagline: "Fast charging made compact.",
    description:
      "A high-efficiency 30W PD fast charger designed for phones, tablets, and accessories. Compact, safe, and optimized for travel.",
    features: [
      { title: "30W Fast Charging", description: "Charge 3× faster with PD/QC support." },
      { title: "Universal Compatibility", description: "Works with Android & iPhone." },
      {
        title: "Travel-Ready Design",
        description: "Compact, lightweight, and safe for worldwide use.",
      },
      {
        title: "Built-In Smart Protection",
        description: "Prevents overheat, overvoltage, and short circuits.",
      },
    ],
    specs: [
      {
        group: "Power",
        specs: [
          { label: "Output", value: "30W (PD + QC3.0)" },
          { label: "Input", value: "100–240V AC" },
          { label: "Ports", value: "USB-C + USB-A" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Weight", value: "68g" },
          { label: "Material", value: "Fire-resistant PC" },
        ],
      },
    ],
    images: ["/images/featured/adaptor.webp"],
  },

  // ------------------------------
  // 5. Premium Earbuds
  // ------------------------------
  {
    id: "airtune-pro",
    name: "Qordz AirTune Pro",
    category: CATEGORIES[0].label,
    price: 129,
    shortTagline: "Premium audio, premium experience.",
    description:
      "Experience studio-quality sound with active noise cancellation, premium drivers, and extended battery life. Perfect for audiophiles and professionals who demand the best.",
    features: [
      {
        title: "Active Noise Cancellation",
        description: "Block out distractions with advanced ANC technology.",
      },
      {
        title: "30 Hours Total Playtime",
        description: "Up to 8 hours per charge, plus 22 hours with the charging case.",
      },
      {
        title: "Premium Sound Quality",
        description: "12mm dynamic drivers deliver rich, detailed audio.",
      },
      {
        title: "Wireless Charging",
        description: "Convenient Qi-compatible wireless charging case.",
      },
    ],
    specs: [
      {
        group: "Audio",
        specs: [
          { label: "Driver Unit", value: "12mm Dynamic" },
          { label: "Frequency Response", value: "20 Hz – 40 kHz" },
          { label: "Audio Codec", value: "SBC, AAC, aptX" },
          { label: "ANC", value: "Active Noise Cancellation" },
        ],
      },
      {
        group: "Connectivity",
        specs: [
          { label: "Bluetooth Version", value: "5.4" },
          { label: "Range", value: "15 meters" },
          { label: "Low Latency", value: "45 ms" },
        ],
      },
      {
        group: "Battery",
        specs: [
          { label: "Earbud Battery", value: "60 mAh" },
          { label: "Case Battery", value: "500 mAh" },
          { label: "Playback", value: "Up to 30 hours total" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Water Resistance", value: "IPX5" },
          { label: "Weight", value: "5.2g per earbud" },
          { label: "Charging", value: "USB-C + Wireless" },
        ],
      },
    ],
    images: ["/images/featured/charging-cables.webp"],
  },

  // ------------------------------
  // 6. Budget Earbuds
  // ------------------------------
  {
    id: "airtune-basic",
    name: "Qordz AirTune Basic",
    category: CATEGORIES[0].label,
    price: 49,
    shortTagline: "Quality sound at an affordable price.",
    description:
      "Essential wireless earbuds with reliable performance, comfortable fit, and long battery life. Perfect for everyday use without breaking the bank.",
    features: [
      {
        title: "15 Hours Total Playtime",
        description: "Up to 4 hours per charge, plus 11 hours with the charging case.",
      },
      {
        title: "Comfortable Fit",
        description: "Ergonomic design with multiple ear tip sizes included.",
      },
      {
        title: "Quick Pairing",
        description: "Instant Bluetooth 5.0 connection with auto-pairing.",
      },
      {
        title: "Clear Calls",
        description: "Built-in microphone for hands-free calls.",
      },
    ],
    specs: [
      {
        group: "Audio",
        specs: [
          { label: "Driver Unit", value: "8mm Dynamic" },
          { label: "Frequency Response", value: "20 Hz – 20 kHz" },
          { label: "Audio Codec", value: "SBC" },
        ],
      },
      {
        group: "Connectivity",
        specs: [
          { label: "Bluetooth Version", value: "5.0" },
          { label: "Range", value: "10 meters" },
        ],
      },
      {
        group: "Battery",
        specs: [
          { label: "Earbud Battery", value: "30 mAh" },
          { label: "Case Battery", value: "250 mAh" },
          { label: "Playback", value: "Up to 15 hours total" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Water Resistance", value: "IPX4" },
          { label: "Weight", value: "4g per earbud" },
          { label: "Charging Port", value: "Micro USB" },
        ],
      },
    ],
    images: ["/images/featured/mobile-accessories.webp"],
  },

  // ------------------------------
  // 7. High Capacity Power Bank
  // ------------------------------
  {
    id: "powercore-max-20000",
    name: "Qordz PowerCore Max 20000",
    category: CATEGORIES[1].label,
    price: 129,
    shortTagline: "Maximum power for maximum productivity.",
    description:
      "A high-capacity 20,000mAh power bank with dual USB-C ports, 45W fast charging, and advanced safety features. Perfect for laptops, tablets, and multiple devices.",
    features: [
      {
        title: "20,000mAh Capacity",
        description: "Enough power to charge multiple devices multiple times.",
      },
      {
        title: "45W Fast Charging",
        description: "USB-C PD 3.0 for rapid charging of laptops and tablets.",
      },
      {
        title: "Dual Output",
        description: "Charge two devices simultaneously at full speed.",
      },
      {
        title: "LCD Display",
        description: "Real-time battery level and charging status display.",
      },
    ],
    specs: [
      {
        group: "Battery",
        specs: [
          { label: "Capacity", value: "20,000mAh" },
          { label: "Input", value: "USB-C (45W)" },
          { label: "Output", value: "USB-C (45W) + USB-C (18W) + USB-A (18W)" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Material", value: "Aluminum + PC" },
          { label: "Weight", value: "380g" },
          { label: "Dimensions", value: "158 × 75 × 20mm" },
        ],
      },
    ],
    images: ["/images/featured/power-bank.webp"],
  },

  // ------------------------------
  // 8. Compact Power Bank
  // ------------------------------
  {
    id: "powercore-nano-5000",
    name: "Qordz PowerCore Nano 5000",
    category: CATEGORIES[1].label,
    price: 39,
    shortTagline: "Ultra-compact, always ready.",
    description:
      "A pocket-sized 5,000mAh power bank that fits anywhere. Perfect for quick top-ups on the go without adding bulk to your bag.",
    features: [
      {
        title: "5,000mAh Capacity",
        description: "Enough for one full phone charge or multiple top-ups.",
      },
      {
        title: "Ultra-Compact Design",
        description: "Smaller than a credit card, lighter than your keys.",
      },
      {
        title: "12W Fast Charging",
        description: "Quick charge support for compatible devices.",
      },
      {
        title: "LED Indicator",
        description: "Simple 4-LED battery level indicator.",
      },
    ],
    specs: [
      {
        group: "Battery",
        specs: [
          { label: "Capacity", value: "5,000mAh" },
          { label: "Input", value: "Micro USB (10W)" },
          { label: "Output", value: "USB-A (12W)" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Material", value: "PC" },
          { label: "Weight", value: "100g" },
          { label: "Dimensions", value: "90 × 60 × 15mm" },
        ],
      },
    ],
    images: ["/images/featured/tws-earbuds.webp"],
  },

  // ------------------------------
  // 9. USB-C to Lightning Cable
  // ------------------------------
  {
    id: "flexcharge-lightning",
    name: "Qordz FlexCharge Lightning",
    category: CATEGORIES[2].label,
    price: 34,
    shortTagline: "Fast charging for iPhone users.",
    description:
      "A premium USB-C to Lightning cable with MFi certification, fast charging support, and durable braided construction. Designed specifically for iPhone and iPad users.",
    features: [
      {
        title: "MFi Certified",
        description: "Apple-certified for guaranteed compatibility and safety.",
      },
      {
        title: "Fast Charging",
        description: "Supports up to 18W fast charging for iPhone 8 and later.",
      },
      {
        title: "Durable Build",
        description: "Reinforced connectors and braided nylon exterior.",
      },
      {
        title: "Data Transfer",
        description: "Sync and transfer data at USB 2.0 speeds.",
      },
    ],
    specs: [
      {
        group: "Technical",
        specs: [
          { label: "Power Output", value: "18W" },
          { label: "Cable Length", value: "1m / 2m" },
          { label: "Material", value: "Braided Nylon + Aluminum" },
        ],
      },
      {
        group: "Compatibility",
        specs: [
          { label: "Interface", value: "USB-C to Lightning" },
          { label: "Devices", value: "iPhone, iPad, AirPods" },
          { label: "Certification", value: "MFi Certified" },
        ],
      },
    ],
    images: ["/images/featured/charging-cables.webp"],
  },

  // ------------------------------
  // 10. USB-C to USB-C Cable (Long)
  // ------------------------------
  {
    id: "flexcharge-usbc-3m",
    name: "Qordz FlexCharge USB-C 3m",
    category: CATEGORIES[2].label,
    price: 39,
    shortTagline: "Extra length, extra convenience.",
    description:
      "A 3-meter USB-C to USB-C cable perfect for charging from a distance. Ideal for home, office, or car use where you need extra reach.",
    features: [
      {
        title: "3-Meter Length",
        description: "Extra-long cable for maximum flexibility and convenience.",
      },
      {
        title: "100W Power Delivery",
        description: "Supports high-wattage charging for laptops and tablets.",
      },
      {
        title: "Data Transfer",
        description: "USB 3.1 Gen 2 speeds up to 10Gbps.",
      },
      {
        title: "Reinforced Design",
        description: "Durable construction with strain relief at both ends.",
      },
    ],
    specs: [
      {
        group: "Technical",
        specs: [
          { label: "Power Output", value: "100W PD" },
          { label: "Cable Length", value: "3m" },
          { label: "Data Speed", value: "10Gbps (USB 3.1 Gen 2)" },
        ],
      },
      {
        group: "Compatibility",
        specs: [
          { label: "Interface", value: "USB-C to USB-C" },
          { label: "Devices", value: "Laptops, Tablets, Phones" },
        ],
      },
    ],
    images: ["/images/featured/mobile-accessories.webp"],
  },

  // ------------------------------
  // 11. 65W Wall Charger
  // ------------------------------
  {
    id: "speedcharge-65w",
    name: "Qordz SpeedCharge 65W",
    category: CATEGORIES[3].label,
    price: 79,
    shortTagline: "Power up everything, everywhere.",
    description:
      "A powerful 65W PD charger with dual ports, perfect for charging laptops, tablets, and phones simultaneously. Compact design with GaN technology for efficiency.",
    features: [
      {
        title: "65W Fast Charging",
        description: "Charge laptops, tablets, and phones at maximum speed.",
      },
      {
        title: "GaN Technology",
        description: "More efficient, cooler, and smaller than traditional chargers.",
      },
      {
        title: "Dual Port Design",
        description: "USB-C (65W) + USB-C (18W) for simultaneous charging.",
      },
      {
        title: "Foldable Plug",
        description: "Compact design with foldable prongs for easy travel.",
      },
    ],
    specs: [
      {
        group: "Power",
        specs: [
          { label: "Output", value: "USB-C: 65W (PD 3.0), USB-C: 18W (PD)" },
          { label: "Input", value: "100–240V AC" },
          { label: "Technology", value: "GaN (Gallium Nitride)" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Weight", value: "120g" },
          { label: "Material", value: "Fire-resistant PC" },
          { label: "Plug Type", value: "Foldable (US/EU/UK)" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-1.jpg"],
  },

  // ------------------------------
  // 12. Wireless Charger
  // ------------------------------
  {
    id: "speedcharge-wireless-15w",
    name: "Qordz SpeedCharge Wireless 15W",
    category: CATEGORIES[3].label,
    price: 59,
    shortTagline: "Charge without the cable clutter.",
    description:
      "A sleek wireless charger with 15W fast charging, LED indicator, and universal compatibility. Perfect for phones, earbuds, and other Qi-enabled devices.",
    features: [
      {
        title: "15W Fast Wireless Charging",
        description: "Rapid charging for compatible smartphones.",
      },
      {
        title: "Universal Compatibility",
        description: "Works with all Qi-enabled devices (iPhone, Samsung, etc.).",
      },
      {
        title: "LED Indicator",
        description: "Visual feedback for charging status and alignment.",
      },
      {
        title: "Non-Slip Surface",
        description: "Textured surface keeps devices in place while charging.",
      },
    ],
    specs: [
      {
        group: "Power",
        specs: [
          { label: "Output", value: "15W (Wireless)" },
          { label: "Input", value: "USB-C (18W)" },
          { label: "Charging Standard", value: "Qi" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Material", value: "Silicone + ABS" },
          { label: "Weight", value: "85g" },
          { label: "Cable Included", value: "USB-C Cable (1m)" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-2.jpg"],
  },

  // ------------------------------
  // 13. Car Charger
  // ------------------------------
  {
    id: "speedcharge-car-36w",
    name: "Qordz SpeedCharge Car 36W",
    category: CATEGORIES[3].label,
    price: 34,
    shortTagline: "Power on the road, fast and safe.",
    description:
      "A dual-port car charger with 36W total output, perfect for charging phones and tablets during your commute. Compact design with advanced safety protection.",
    features: [
      {
        title: "36W Dual Port",
        description: "USB-C (18W) + USB-A (18W) for simultaneous charging.",
      },
      {
        title: "Fast Charging",
        description: "PD and QC 3.0 support for compatible devices.",
      },
      {
        title: "Safety Protection",
        description: "Overcurrent, overvoltage, and temperature protection.",
      },
      {
        title: "LED Indicator",
        description: "Blue LED shows charging status at a glance.",
      },
    ],
    specs: [
      {
        group: "Power",
        specs: [
          { label: "Output", value: "USB-C: 18W (PD), USB-A: 18W (QC 3.0)" },
          { label: "Input", value: "12V/24V DC (Car Socket)" },
        ],
      },
      {
        group: "General",
        specs: [
          { label: "Material", value: "Aluminum + PC" },
          { label: "Dimensions", value: "65 × 30 × 30mm" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-3.jpg"],
  },

  // ------------------------------
  // 14. Phone Stand
  // ------------------------------
  {
    id: "stand-pro-adjustable",
    name: "Qordz Stand Pro Adjustable",
    category: CATEGORIES[4].label,
    price: 24,
    shortTagline: "Perfect viewing angle, every time.",
    description:
      "An adjustable phone stand with 360-degree rotation, multiple viewing angles, and universal compatibility. Perfect for video calls, streaming, and hands-free use.",
    features: [
      {
        title: "Adjustable Angle",
        description: "Multiple viewing angles from 15° to 75° for optimal comfort.",
      },
      {
        title: "360° Rotation",
        description: "Rotate your device to portrait or landscape mode easily.",
      },
      {
        title: "Universal Compatibility",
        description: 'Fits phones from 4.7" to 7" with or without cases.',
      },
      {
        title: "Stable Base",
        description: "Weighted base prevents tipping, even with larger devices.",
      },
    ],
    specs: [
      {
        group: "General",
        specs: [
          { label: "Material", value: "Aluminum + ABS" },
          { label: "Weight", value: "180g" },
          { label: "Phone Size", value: '4.7" - 7"' },
          { label: "Angle Range", value: "15° - 75°" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-4.jpg"],
  },

  // ------------------------------
  // 15. Car Mount
  // ------------------------------
  {
    id: "mount-car-magnetic",
    name: "Qordz Mount Car Magnetic",
    category: CATEGORIES[4].label,
    price: 29,
    shortTagline: "Secure, hands-free driving.",
    description:
      "A powerful magnetic car mount with strong grip, 360-degree rotation, and easy one-handed operation. Keeps your phone secure and accessible while driving.",
    features: [
      {
        title: "Strong Magnetic Grip",
        description: "Powerful neodymium magnets hold phones up to 200g securely.",
      },
      {
        title: "360° Rotation",
        description: "Adjust to any viewing angle for optimal visibility.",
      },
      {
        title: "Easy Installation",
        description: "Vent mount or dashboard mount options included.",
      },
      {
        title: "Universal Compatibility",
        description: "Works with all phones when using included metal plate.",
      },
    ],
    specs: [
      {
        group: "General",
        specs: [
          { label: "Material", value: "Aluminum + Neodymium Magnets" },
          { label: "Weight Capacity", value: "Up to 200g" },
          { label: "Mount Type", value: "Vent + Dashboard" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-5.jpg"],
  },

  // ------------------------------
  // 16. Cable Organizer
  // ------------------------------
  {
    id: "organizer-cable-clips",
    name: "Qordz Cable Organizer Clips",
    category: CATEGORIES[4].label,
    price: 12,
    shortTagline: "Tidy cables, tidy space.",
    description:
      "A set of adhesive cable clips to organize and manage cables on your desk, nightstand, or workspace. Keep cables neat and accessible with minimal effort.",
    features: [
      {
        title: "12-Pack Set",
        description: "Enough clips to organize multiple cables and devices.",
      },
      {
        title: "Strong Adhesive",
        description: "3M adhesive backing sticks securely to most surfaces.",
      },
      {
        title: "Easy to Use",
        description: "Simply stick, route cable, and snap closed.",
      },
      {
        title: "Removable",
        description: "Leaves no residue when removed properly.",
      },
    ],
    specs: [
      {
        group: "General",
        specs: [
          { label: "Quantity", value: "12 clips" },
          { label: "Material", value: "ABS + 3M Adhesive" },
          { label: "Cable Diameter", value: "Up to 8mm" },
        ],
      },
    ],
    images: ["/images/products/overview/overview-6.jpg"],
  },
];
