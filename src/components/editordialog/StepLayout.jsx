"use client";

import { Button } from "@/components/ui/button";
import DialogHeader from "./DialogHeader";

export default function StepLayout({
  title,
  description,
  onBack,
  children,
  buttons, 
}) {
  return (
    <div className="relative p-2 sm:p-6 flex flex-col items-center text-center gap-4">
      <DialogHeader title={title} description={description} onBack={onBack} />

      <div className="w-full">{children}</div>
      <div className="flex justify-end items-center gap-2 w-full ">
        {onBack && (
          <Button
            variant="outline"
            onClick={onBack}
            className="hidden sm:inline-flex"
          >
            Back
          </Button>
        )}
        {buttons}
      </div>
    </div>
  );
}
