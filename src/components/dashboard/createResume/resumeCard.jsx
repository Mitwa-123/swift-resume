"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ResumePreviewCard from "./ResumePreviewCard";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeCard() {
  return (
    <div className="mt-10 w-full overflow-hidden">
      <div className="flex items-center justify-center gap-17.5">
        <ResumePreviewCard className="opacity-30 scale-90" />
        <ResumePreviewCard className="opacity-60 scale-95" />

        <div className="relative z-10">
          <Card
            className="
            w-66  shrink-0
            rounded-xl
            border-2 border-blue-500
            bg-linear-to-b from-accent-foreground via-accent to-card
            shadow-lg
            pt-7    px-3        
            flex flex-col justify-between"
          >
            <CardContent className="flex  justify-center ">
              <Image
                src="/images/create-resume.svg"
                alt="Create resume"
                width={204}
                height={245}
                className="object-contain opacity-90"
              />

              <div className="absolute bottom-14 left-7 right-7 flex justify-center z-20">
                <Link href="/resumes/create-resume">
                  <Button
                    size="sm"
                    className="gap-2 px-3 h-7 bg-base-primary hover:bg-blue-700"
                  >
                    <Plus />
                    Create resume
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <ResumePreviewCard className="opacity-60 scale-95" />
        <ResumePreviewCard className="opacity-30 scale-90" />
      </div>
    </div>
  );
}
