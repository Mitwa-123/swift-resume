"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResumeTabs() {
  const pathname = usePathname();

  const activeTab = pathname.includes("cover-letters")
    ? "cover-letters"
    : "resumes";

  return (
    <div className="flex justify-between h-13.75">
      <Tabs value={activeTab}>
        <TabsList
          variant="line"
          className="gap-6 h-full p-0 items-end border-0"
        >
          <Link href="/resumes">
            <TabsTrigger
              value="resumes"
              className="font-medium text-sm leading-none "
            >
              Resumes
            </TabsTrigger>
          </Link>

          <Link href="/cover-letters">
            <TabsTrigger
              value="cover-letters"
              className="font-medium text-sm leading-none"
            >
              Cover letters
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <div className="flex items-center">
        <Link href="/resumes/create-resume">
          <Button
            size="sm"
            className="bg-base-primary hover:bg-base-primary/90 px-2 sm:px-3"
          >
            <Plus />
            <span className="hidden sm:inline">Create resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
