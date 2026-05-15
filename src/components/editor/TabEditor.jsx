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
import PaymentDialog from "../dialogpayment/PaymentDialog";
import PaymentFlow from "../dialogpayment/PaymentFlow";

export default function TabEditor({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger>
            <div className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md bg-base-primary shadow-sm ring-2 ring-inset ring-[#3B82F6]  text-primary-foreground text-sm font-medium cursor-pointer">
              <Download className="w-4 h-4" />
              Download
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-41.25 rounded-xl">
            <DropdownMenuItem
              className="cursor-pointer rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(false);

                setTimeout(() => {
                  setIsModalOpen(true);
                }, 0);
              }}
            >
              <FileText className="w-4 h-4 text-red-500" />
              <span>Download as PDF</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer rounded-lg">
              <FileType className="w-4 h-4 text-blue-500" />
              <span>Download as TXT</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <PaymentFlow isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
