"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

function Tabs({ className, orientation = "horizontal", ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg text-muted-foreground group-data-[orientation=horizontal]/tabs:h-auto group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted p-[3px]",
        line: "gap-[24px] bg-transparent border-b border-[#E2E8F0] w-full justify-start",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({ className, variant = "default", ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Base Classes
        "relative inline-flex items-center justify-center gap-1.5 pb-[20.5px] pt-[20.5px] px-1  text-sm font-medium whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50",

        // Line Variant Specific Styles (Figma Match)
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:text-[#64748B] group-data-[variant=line]/tabs-list:data-[active]:text-[#2563EB]",

        // The Blue Line (After element)
        "after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-[#2563EB] after:opacity-0 after:transition-opacity",
        "group-data-[variant=line]/tabs-list:data-[active]:after:opacity-100",

        // Default Variant Styles (Keeping them safe)
        "group-data-[variant=default]/tabs-list:px-3 group-data-[variant=default]/tabs-list:py-1.5 group-data-[variant=default]/tabs-list:rounded-md group-data-[variant=default]/tabs-list:data-[active]:bg-background group-data-[variant=default]/tabs-list:data-[active]:text-foreground group-data-[variant=default]/tabs-list:data-[active]:shadow-sm",

        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
