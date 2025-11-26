"use client";

import { cn } from "@/lib/utils";

const DescriptionList = ({ className, ref, ...props }: React.ComponentProps<"dl">) => {
  return (
    <dl
      className={cn(
        "grid grid-cols-[.5fr_1fr] text-lg text-stone-600 sm:grid-cols-[min(50%,calc(var(--spacing)*80))_auto] sm:text-xl",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

const DescriptionTerm = ({ className, ref, ...props }: React.ComponentProps<"dt">) => {
  return (
    <dt
      className={cn(
        "col-start-1 border-t pt-3 font-display text-title-6 first:border-none sm:py-3 sm:text-title-5",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

const DescriptionDetails = ({ className, ...props }: React.ComponentProps<"dd">) => {
  return (
    <dd
      {...props}
      className={cn("pt-1 pb-3 text-stone-800 *:space-y-1.5 sm:border-t sm:nth-2:border-none sm:py-3", className)}
      data-slot="description-details"
    />
  );
};

export { DescriptionList, DescriptionTerm, DescriptionDetails };
