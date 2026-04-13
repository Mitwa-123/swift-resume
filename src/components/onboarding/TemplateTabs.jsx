"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemplateTabs() {
  const tabClass = "text-xs px-[10px] py-[10px] data-[active]:!text-black";

  return (
    <div className="w-full">
      <Tabs defaultValue="all">
        <TabsList variant="line" className="overflow-x-auto no-scrollbar gap-0">
          <TabsTrigger value="all" className={tabClass}>
            All
          </TabsTrigger>
          <TabsTrigger value="two-column" className={tabClass}>
            Two column
          </TabsTrigger>
          <TabsTrigger value="simple" className={tabClass}>
            Simple
          </TabsTrigger>
          <TabsTrigger value="modern" className={tabClass}>
            Modern
          </TabsTrigger>
          <TabsTrigger value="creative" className={tabClass}>
            Creative
          </TabsTrigger>
          <TabsTrigger value="fun" className={tabClass}>
            Fun
          </TabsTrigger>
          <TabsTrigger value="professional" className={tabClass}>
            Professional
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
