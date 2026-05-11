"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Palette,
  FileType,
  FileText,
  ChevronDown,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TabEditor({ isScrolled }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`z-10 editor-header sticky top-2 py-4 flex items-center justify-between transition-all duration-300 rounded-lg border border-border lg:top-3 w-full 
          ${
            isScrolled
              ? " border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.02)] px-3"
              : "bg-transparent border-transparent"
          }`}
    >
      <div className="flex items-center gap-1 text-muted-foreground">
        <ChevronLeft className="w-4 h-4 cursor-pointer" />
        <ChevronRight className="w-4 h-4 cursor-pointer" />

        <div className="flex items-center gap-1 text-xs text-muted-foreground leading-4 font-medium">
          <Check className="w-4 h-4" />
          <span>Saved</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground leading-5 font-medium cursor-pointer">
          <Palette className="w-4 h-4" />
          <span>Templates</span>
        </div>

        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger
            render={
              <Button size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Button>
            }
          />

          <DropdownMenuContent align="end" className="w-41.25 rounded-xl ">
            <DropdownMenuItem className="cursor-pointer rounded-lg">
              <FileText className="w-4 h-4 text-red-500" />
              <span>Download as PDF</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer rounded-lg ">
              <FileType className="w-4 h-4 text-blue-500" />
              <span>Download as TXT</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
