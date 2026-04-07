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
    <div className="flex items-center justify-between border-b">
      <Tabs value={activeTab}>
        <TabsList variant="line" className="gap-6">
          <Link href="/resumes">
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
          </Link>

          <Link href="/cover-letters">
            <TabsTrigger value="cover-letters">Cover letters</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <Button
        size="sm"
        className="bg-base-primary hover:bg-base-primary/90 px-2 sm:px-4"
      >
        <Plus />

        <span className="hidden sm:inline">Create resume</span>
      </Button>
    </div>
  );
}
