"use client";

import React, { useState, useEffect } from "react";
import { SquarePen, Eye, PanelRightClose } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import SectionItem from "./SectionItem";
import { useMediaQuery } from "./use-media-query";
import { RESUME_SECTIONS } from "./editor-data";

export default function EditorSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const renderContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4.5 py-3.5 border-b">
        <Button variant="outline" size="icon-lg">
          <PanelRightClose />
        </Button>
        <Tabs defaultValue="tab1" className="max-w-44.25 w-full">
          <TabsList variant="boxed" className="w-full">
            <TabsTrigger value="tab1">Editor</TabsTrigger>
            <TabsTrigger value="tab2">Design</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
        <h3 className="text-xs font-medium text-muted-foreground">
          Resume sections
        </h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Eye className="mr-2 w-4 h-4" />
          Visibility
        </Button>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-1.25">
          <h2 className="text-base font-semibold text-foreground">
            Nursing Resume
          </h2>
          <SquarePen className="w-4 h-4 text-muted-foreground cursor-pointer" />
        </div>
        <Button variant="outline">
          <Image
            src="/images/linkedin.svg"
            alt="linkedin"
            width={16}
            height={16}
          />
          <span className="text-sm font-medium ml-2">
            Prefill with Linkedin
          </span>
        </Button>
      </div>

      <div className="px-4 pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <Accordion type="single">
          {RESUME_SECTIONS.map((sec) => (
            <SectionItem key={sec.value} {...sec} />
          ))}
        </Accordion>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <aside className="lg:shrink-0 lg:mr-3 my-3 lg:border lg:rounded-xl lg:bg-background lg:max-w-130 lg:w-full overflow-hidden">
        {renderContent}
      </aside>
    );
  }

  return (
    <Drawer
      snapPoints={[0.5, 1]}
      activeSnapPoint={0.5}
      dismissible={false}
      open
    >
      <DrawerContent className="h-[85vh] fixed bottom-0 left-0 right-0 focus:outline-none">
        <DrawerTitle className="sr-only">Resume Sections</DrawerTitle>
        {renderContent}
      </DrawerContent>
    </Drawer>
  );
}
