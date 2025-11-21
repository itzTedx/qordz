import { cva } from "class-variance-authority";

import { CommandItem } from "@/components/ui/command";

import { cn } from "@/lib/utils";

const commandMenuItemVariants = cva("items-center gap-3", {
  variants: {
    variant: {
      default:
        "h-11 rounded-md border border-transparent px-3 font-medium transition data-[selected=true]:border-input data-[selected=true]:bg-input/50",

      secondary:
        "justify-start gap-2 border bg-accent px-4 py-2 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:shadow-md md:aspect-4/3 md:flex-col md:justify-center md:gap-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function CommandMenuItem({
  children,
  variant,
  className,
  onHighlight,
  onFocus,
  onMouseEnter,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  variant?: "default" | "secondary";
  onHighlight?: () => void;
}) {
  return (
    <CommandItem
      className={cn(commandMenuItemVariants({ variant }), className)}
      onFocus={(event) => {
        onHighlight?.();
        onFocus?.(event);
      }}
      onMouseEnter={(event) => {
        onHighlight?.();
        onMouseEnter?.(event);
      }}
      {...props}
    >
      {children}
    </CommandItem>
  );
}
