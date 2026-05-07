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
    <div className="flex justify-between  h-13.75 w-full">
      <Tabs value={activeTab} className="h-full">
        <TabsList
          variant="line"
          className="gap-6 h-full p-0 items-end border-0 bg-transparent"
        >
          <Link href="/resumes">
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
          </Link>

          <Link href="/cover-letters">
            <TabsTrigger value="cover-letters">Cover letters</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <div className="flex items-center">
        <Link href="/resumes/create-resume">
          <Button size="sm" variant="default">
            <Plus className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Create resume</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}