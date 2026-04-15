"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { GripVertical } from "lucide-react";

export default function SectionItem({
  value,
  title,
  desc,
  icon: Icon,
  content,
}) {
  return (
    <AccordionItem value={value} className="border rounded-xl px-3 bg-white">
      <AccordionTrigger className="hover:no-underline py-3">
        <div className="flex items-center gap-3">
          <GripVertical className="w-4 h-4 text-muted-foreground" />

          <div className="p-2 bg-muted rounded-md">
            <Icon className="w-4 h-4" />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-2 pb-4">{content}</AccordionContent>
    </AccordionItem>
  );
}
