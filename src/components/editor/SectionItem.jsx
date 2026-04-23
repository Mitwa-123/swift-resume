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
    <AccordionItem value={value} >
      <AccordionTrigger className="hover:no-underline p-2.5 sm:p-4.5">
        <div className="flex items-center gap-3 ">
          <GripVertical className="w-5 h-5 text-muted-foreground" />

          <div className="p-1.5 bg-muted rounded-md">
            <Icon className="w-5.5 h-5.5" />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium leading-5 mb-1">{title}</p>
            <p className="text-xs font-medium text-muted-foreground le\">
              {desc}
            </p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-2 pb-4">{content}</AccordionContent>
    </AccordionItem>
  );
}
