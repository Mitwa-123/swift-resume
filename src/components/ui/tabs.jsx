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
        "group/tabs flex ",
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
        default: "bg-muted p-[4px]",
        line: "gap-6 bg-transparent  border-border w-full justify-start",
        boxed: "bg-secondary p-1 rounded-lg ",
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
        " relative inline-flex items-center justify-center gap-1.5 py-[20.5px] px-1  text-sm font-medium leading-none whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:text-muted-foreground group-data-[variant=line]/tabs-list:data-active:text-base-primary",
        "group-data-[color=black]/tabs-list:data-[state=active]:text-black cursor-pointer",

        "after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-base-primary after:opacity-0 after:transition-opacity",
        "group-data-[variant=line]/tabs-list:data-active:after:opacity-100",

        "group-data-[variant=default]/tabs-list:px-3 group-data-[variant=default]/tabs-list:py-1.5 group-data-[variant=default]/tabs-list:rounded-md group-data-[variant=default]/tabs-list:data-active:bg-background group-data-[variant=default]/tabs-list:data-active:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm",

       "group-data-[variant=boxed]/tabs-list:flex-1 group-data-[variant=boxed]/tabs-list:text-center group-data-[variant=boxed]/tabs-list:px-[12px] group-data-[variant=boxed]/tabs-list:py-1.5 group-data-[variant=boxed]/tabs-list:rounded-sm group-data-[variant=boxed]/tabs-list:text-muted-foreground group-data-[variant=boxed]/tabs-list:data-active:bg-white group-data-[variant=boxed]/tabs-list:data-active:text-black group-data-[variant=boxed]/tabs-list:data-active:shadow-sm leading-5 font-medium",

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
