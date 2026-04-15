"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemplateTabs({ value, onChange }) {
  const tabClass = "text-xs px-2.5 py-2.5 data-[active]:!text-black";

  return (
    <div className="w-full">
      <Tabs value={value} onValueChange={onChange}>
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
