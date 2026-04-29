"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DialogHeader from "./DialogHeader";

export default function LinkedinStep({ onBack, onNext }) {
  return (
    <>
      <div className="relative p-6 flex flex-col items-center text-center gap-4">
        <DialogHeader
          title="Want to use your Linkedin profile?"
          description="Paste your LinkedIn profile URL below and our AI will use it to write your resume."
          onBack={onBack}
        />

        <div className="w-full">
          <Input type="url" placeholder="Your LinkedIn profile URL" />
        </div>

        <div className="flex justify-end items-center gap-2 w-full">
          <Button variant="outline" onClick={onBack} className="px-4">
            Back
          </Button>
          <Button variant="outline" className="px-4 hidden sm:inline-flex">
            Add manually
          </Button>
          <Button onClick={onNext} className="px-4">
            Import profile
          </Button>
        </div>
      </div>
    </>
  );
}
