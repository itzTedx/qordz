"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import { cva } from "class-variance-authority";
import { CornerDownLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IconChevronRight, IconSearch } from "@/assets/icons";
import { AnimateIcon } from "@/assets/icons/icon";

import { cn } from "@/lib/utils";

import { ACTION_HINT, SEARCH_SECTIONS } from "../constant";
import { SearchAction, SearchActionType } from "../types";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeType, setActiveType] = React.useState<SearchActionType>("category");
  const [activeHint, setActiveHint] = React.useState<string>(ACTION_HINT.category);

  const handleSelect = React.useCallback(
    (item: SearchAction) => {
      setOpen(false);

      if (item.externalHref) {
        window.location.href = item.externalHref;
        return;
      }

      if (item.href) {
        router.push(item.href);
      }
    },
    [router]
  );

  const handleHighlight = React.useCallback((item: SearchAction) => {
    setActiveType(item.type);
    setActiveHint(item.description ?? ACTION_HINT[item.type]);
  }, []);

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        if (
          (event.target instanceof HTMLElement && event.target.isContentEditable) ||
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement
        ) {
          return;
        }

        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <AnimateIcon animateOnHover>
          <Button
            aria-label="Open search"
            className="border-transparent bg-transparent"
            onClick={() => setOpen(true)}
            size="icon-sm"
            variant="ghost"
          >
            <IconSearch aria-hidden="true" />
          </Button>
        </AnimateIcon>
      </DialogTrigger>
      <DialogContent
        className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 backdrop-blur-md"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search Qordz catalog...</DialogTitle>
          <DialogDescription>Find products, categories, and quick actions.</DialogDescription>
        </DialogHeader>
        <Command className="rounded-none bg-transparent **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:h-9! **:data-[slot=command-input]:h-9! **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border **:data-[slot=command-input-wrapper]:border-input **:data-[slot=command-input-wrapper]:bg-input/50 **:data-[slot=command-input]:py-0">
          <div className="relative">
            <CommandInput
              onValueChange={setQuery}
              placeholder="Search products, categories, or support..."
              value={query}
            />
          </div>
          <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
            <CommandEmpty className="py-12 text-center text-muted-foreground text-sm">
              {query ? `No matches for “${query}”.` : "No results found."}
            </CommandEmpty>
            {SEARCH_SECTIONS.map((section) => {
              const isCategories = section.id === "categories";
              return (
                <CommandGroup
                  className={cn(
                    "p-0!",
                    "**:[[cmdk-group-heading]]:p-3!",
                    "**:[[cmdk-group-heading]]:pb-1!",
                    "**:[[cmdk-group-heading]]:scroll-mt-16"
                  )}
                  heading={section.heading}
                  key={section.id}
                >
                  <div className={cn(isCategories && "grid grid-cols-5 gap-1")}>
                    {section.items.map((item) => {
                      return (
                        <CommandMenuItem
                          key={item.id}
                          keywords={item.keywords}
                          onHighlight={() => handleHighlight(item)}
                          onSelect={() => handleSelect(item)}
                          value={`${section.heading} ${item.label} ${item.keywords?.join(" ") ?? ""}`}
                          variant={isCategories ? "secondary" : "default"}
                        >
                          {isCategories ? (
                            <CommandMenuCategoryItemContent item={item} />
                          ) : (
                            <CommandMenuItemContent item={item} />
                          )}
                        </CommandMenuItem>
                      );
                    })}
                  </div>
                </CommandGroup>
              );
            })}
          </CommandList>
        </Command>
        <CommandMenuFooter hint={activeHint} type={activeType} />
      </DialogContent>
    </Dialog>
  );
}

function CommandMenuItemContent({ item }: { item: SearchAction }) {
  const ItemIcon = item.Icon ?? IconChevronRight;

  return (
    <>
      <ItemIcon className="size-4 shrink-0 text-muted-foreground" />
      <span className="font-medium">{item.label}</span>

      <IconChevronRight className="ml-auto size-3 text-muted-foreground" />
    </>
  );
}

function CommandMenuCategoryItemContent({ item }: { item: SearchAction }) {
  const ItemIcon = item.Icon ?? IconChevronRight;

  return (
    <>
      <ItemIcon className="size-9 shrink-0" />
      <span className="text-center font-medium text-xs">{item.label}</span>
    </>
  );
}

const commandMenuItemVariants = cva("items-center gap-3", {
  variants: {
    variant: {
      default:
        "h-11 rounded-md border border-transparent px-3 font-medium transition data-[selected=true]:border-input data-[selected=true]:bg-input/50",

      secondary:
        "aspect-4/3 flex-col justify-center gap-3 border bg-accent data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function CommandMenuItem({
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

function CommandMenuFooter({ hint, type }: { hint: string; type: SearchActionType }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-muted-foreground text-xs dark:border-t-neutral-700 dark:bg-neutral-800">
      <div className="flex items-center gap-2 font-medium">
        <CommandMenuKbd>
          <CornerDownLeftIcon />
        </CommandMenuKbd>
        {ACTION_HINT[type]}
      </div>
      <span className="ml-auto text-[0.625rem]">{hint}</span>
    </div>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 select-none items-center justify-center gap-1 rounded border bg-background px-1 font-medium font-sans text-[0.7rem] text-muted-foreground [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
