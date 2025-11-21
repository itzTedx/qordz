import { AnimatedGroup } from "@/components/ui/animated-group";

import { IconInfo, IconPhone, IconShield } from "@/assets/icons";

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
        className="grid grid-cols-3 gap-6 py-10"
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
        <div className="card flex flex-col items-center justify-center rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconShield className="size-16 text-stone-400" />
          <h4 className="mt-6 text-teal-900 text-title-6">Reliable Warranty</h4>
          <p className="mt-1 font-light text-sm text-stone-500">
            Every Qordz product comes with a worry-free warranty and guaranteed replacement support.
          </p>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconInfo className="size-16 text-stone-400" />
          <h4 className="mt-6 text-teal-900 text-title-6">Help & Support</h4>
          <p className="mt-1 font-light text-sm text-stone-500">
            Access instant answers, product guides, and dedicated customer care whenever you need it.
          </p>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-3xl bg-card px-6 py-10 shadow-md transition-all hover:shadow-lg">
          <IconPhone className="size-16 text-stone-400" />
          <h4 className="mt-6 text-teal-900 text-title-6">Contact Us</h4>
          <p className="mt-1 font-light text-sm text-stone-500">
            Have questions? Our team is here to assist. Email us anytime at support@qordz.com
          </p>
        </div>
      </AnimatedGroup>
      <p className="text-lg text-stone-500">
        Our team provides clear guidance, fast assistance, and reliable warranty service for all your Qordz devices.
      </p>
    </section>
  );
};
