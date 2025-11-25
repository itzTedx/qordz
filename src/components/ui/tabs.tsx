"use client";

import * as React from "react";

import { AnimatePresence, type HTMLMotionProps, motion, type Transition } from "motion/react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { AutoHeight, type AutoHeightProps } from "@/components/ui/auto-height";

import { useControlledState } from "@/hooks/use-controlled-state";
import { getStrictContext } from "@/lib/get-strict-context";
import { cn } from "@/lib/utils";

import { Highlight, HighlightItem, type HighlightItemProps, type HighlightProps } from "./highlight";

type TabsContextType = {
  value: string | undefined;
  setValue: TabsProps["onValueChange"];
};

const [TabsProvider, useTabs] = getStrictContext<TabsContextType>("TabsContext");

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

function Tabs({ className, ...props }: TabsProps) {
  const [value, setValue] = useControlledState({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onValueChange,
  });

  return (
    <TabsProvider value={{ value, setValue }}>
      <TabsPrimitive.Root
        className={cn("flex flex-col gap-2", className)}
        data-slot="tabs"
        {...props}
        onValueChange={setValue}
      />
    </TabsProvider>
  );
}

type TabsHighlightProps = Omit<HighlightProps, "controlledItems" | "value">;

function TabsHighlight({ transition = { type: "spring", stiffness: 200, damping: 25 }, ...props }: TabsHighlightProps) {
  const { value } = useTabs();

  return (
    <Highlight
      click={false}
      controlledItems
      data-slot="tabs-highlight"
      transition={transition}
      value={value}
      {...props}
    />
  );
}

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsHighlight className="absolute inset-0 z-0 rounded-full border border-transparent bg-card shadow-sm dark:border-input dark:bg-input/30">
      <TabsPrimitive.List
        className={cn(
          "inline-flex h-[calc(100%-1px)] w-full flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border bg-muted px-2 py-1 font-medium text-muted-foreground text-sm transition-colors duration-500 ease-in-out focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="tabs-list"
        {...props}
      />
    </TabsHighlight>
  );
}

type TabsHighlightItemProps = HighlightItemProps & {
  value: string;
};

function TabsHighlightItem(props: TabsHighlightItemProps) {
  return <HighlightItem data-slot="tabs-highlight-item" {...props} />;
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  return (
    <TabsHighlightItem value={value}>
      <TabsPrimitive.Trigger
        className={cn(
          "inline-flex h-[calc(100%-1px)] w-full flex-1 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1.5 font-medium text-muted-foreground text-sm transition-colors duration-500 ease-in-out focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="tabs-trigger"
        value={value}
        {...props}
      />
    </TabsHighlightItem>
  );
}

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content> & HTMLMotionProps<"div">;

function TabsContent({
  value,
  forceMount,
  transition = { duration: 0.5, ease: "easeInOut" },
  ...props
}: TabsContentProps) {
  return (
    <AnimatePresence mode="wait">
      <TabsPrimitive.Content asChild forceMount={forceMount} value={value}>
        <motion.div
          animate={{ opacity: 1, filter: "blur(0px)" }}
          data-slot="tabs-content"
          exit={{ opacity: 0, filter: "blur(4px)" }}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          layout
          layoutDependency={value}
          transition={transition}
          {...props}
        />
      </TabsPrimitive.Content>
    </AnimatePresence>
  );
}

type TabsContentsAutoProps = AutoHeightProps & {
  mode?: "auto-height";
  children: React.ReactNode;
  transition?: Transition;
};

type TabsContentsLayoutProps = Omit<HTMLMotionProps<"div">, "transition"> & {
  mode: "layout";
  children: React.ReactNode;
  transition?: Transition;
};

type TabsContentsProps = TabsContentsAutoProps | TabsContentsLayoutProps;

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
};

function isAutoMode(props: TabsContentsProps): props is TabsContentsAutoProps {
  return !("mode" in props) || props.mode === "auto-height";
}

function TabsContents(props: TabsContentsProps) {
  const { value } = useTabs();

  if (isAutoMode(props)) {
    const { transition = defaultTransition, ...autoProps } = props;

    return <AutoHeight data-slot="tabs-contents" deps={[value]} transition={transition} {...autoProps} />;
  }

  const { transition = defaultTransition, style, ...layoutProps } = props;

  return (
    <motion.div
      data-slot="tabs-contents"
      layout="size"
      layoutDependency={value}
      style={{ overflow: "hidden", ...style }}
      transition={{ layout: transition }}
      {...layoutProps}
    />
  );
}

export {
  Tabs,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
  type TabsProps,
  type TabsHighlightProps,
  type TabsHighlightItemProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
  type TabsContentsProps,
};
