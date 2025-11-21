import { AnimatedGroup } from "@/components/ui/animated-group";

import { IconInfo, IconPhone, IconShield } from "@/assets/icons";

const COMMUNITY_ITEMS = [
  {
    icon: IconShield,
    title: "Reliable Warranty",
    description: "Every Qordz product comes with a worry-free warranty and guaranteed support.",
  },
  {
    icon: IconInfo,
    title: "Help & Support",
    description: "Access instant answers, product guides, and dedicated customer care whenever you need it.",
  },
  {
    icon: IconPhone,
    title: "Contact Us",
    description: "Have questions? Our team is here to assist. Email us anytime at support@qordz.com",
  },
];

export const Community = () => {
  return (
    <section className="container max-w-6xl py-12 text-center">
      <div className="mx-auto max-w-xl">
        <h3 className="text-teal-600 text-title-4">Stay Connected With Qordz Support</h3>
        <p className="text-lead text-stone-600">
          Access essential help resources, warranty information, and direct contact options - all in one place.
        </p>
      </div>
      <AnimatedGroup
        as="ul"
        asChild="li"
        className="grid grid-cols-2 gap-3 py-10 md:grid-cols-3 md:gap-6"
        itemClassName="last:col-span-2 md:last:col-span-1"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
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
        {COMMUNITY_ITEMS.map(({ icon: Icon, title, description }) => (
          <div
            className="card flex flex-col items-center justify-center rounded-3xl bg-card px-6 py-6 shadow-md transition-all hover:shadow-lg md:py-10"
            key={title}
          >
            <Icon className="size-9 text-stone-400 sm:size-12 md:size-16" />
            <h4 className="mt-4 text-teal-900 text-title-6 md:mt-6">{title}</h4>
            <p className="mt-1 font-light text-stone-500 text-xs md:text-sm">{description}</p>
          </div>
        ))}
      </AnimatedGroup>
      <p className="text-lg text-stone-500">
        Our team provides clear guidance, fast assistance, and reliable warranty service for all your Qordz devices.
      </p>
    </section>
  );
};
