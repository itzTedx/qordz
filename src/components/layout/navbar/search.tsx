"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/command";
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
import { CommandMenuFooter } from "./components/command-footer";
import { CommandMenuItem } from "./components/command-item";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeType, setActiveType] = React.useState<SearchActionType>("category");
  const [activeHint, setActiveHint] = React.useState<string>();

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
            className="border-transparent bg-transparent backdrop-blur-none hover:bg-muted"
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
                  <div
                    className={cn(
                      isCategories && "flex flex-wrap gap-2 sm:grid sm:grid-cols-3 sm:gap-1 md:grid-cols-5"
                    )}
                  >
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
      <ItemIcon className="size-7 shrink-0 md:size-9" />
      <span className="font-medium sm:text-center sm:text-xs">{item.label}</span>
    </>
  );
}
