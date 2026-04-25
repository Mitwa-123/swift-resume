"use client";

import { Sparkles, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LinkedinStep({ onBack, onNext }) {
  return (
    <div className="relative p-6 flex flex-col items-center text-center gap-4">
      <div className="flex p-2.5 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
        <Sparkles className="size-4.5 text-blue-600" />
      </div>

      <div className="flex flex-col gap-1.5 items-center">
        <div className="flex items-center justify-center gap-2 w-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="size-7 border-border shadow-sm"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </Button>
          <h2 className="text-lg font-semibold leading-none">
            Want to use your LinkedIn profile?
          </h2>
        </div>
        <p className="text-base font-normal leading-6 text-muted-foreground max-w-94.25">
          Paste your LinkedIn profile URL below and our AI will use it to write
          your resume.
        </p>
      </div>

      <div className="w-full">
        <Input type="url" placeholder="Your LinkedIn profile URL" />
      </div>

      <div className="flex justify-end items-center gap-2 w-full">
        <Button variant="outline" onClick={onBack} className="px-4">
          Back
        </Button>
        <Button variant="outline" className="px-4">
          Add manually
        </Button>
        <Button onClick={onNext} className="px-4">
          Import profile
        </Button>
      </div>
    </div>
  );
}
