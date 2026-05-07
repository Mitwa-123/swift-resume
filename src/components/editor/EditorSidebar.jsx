"use client";

import React, { useState, useEffect } from "react";
import { SquarePen, Eye, PanelRightClose } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

export default function EditorSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!isMounted) return null;

  const renderContent = (
    <div className="flex flex-col h-full">
      <Tabs defaultValue="tab1" className="flex flex-col h-full w-full">
        <div className="flex items-center justify-between px-4.5 py-3.5 border-b">
          <Button variant="outline" size="icon-lg">
            <PanelRightClose />
          </Button>

          <TabsList variant="boxed" className="max-w-44.25 w-full">
            <TabsTrigger value="tab1">Editor</TabsTrigger>
            <TabsTrigger value="tab2">Design</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="tab1"
          className="flex-1 flex flex-col overflow-y-auto m-0 custom-scrollbar will-change-transform"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
            <h3 className="text-xs font-medium text-muted-foreground">
              Resume sections
            </h3>

            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Eye className=" w-4 h-4" />
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

            <Button variant="outline" className="hidden md:flex items-center">
              <Image
                src="/images/linkedin.svg"
                alt="linkedin"
                width={16}
                height={16}
              />

              <span className="text-sm font-medium ">
                Prefill with Linkedin
              </span>
            </Button>
          </div>

          <div className="flex-1 ">
            <Accordion type="single" className="w-full px-4">
              <AccordionItem value="personal-info">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    {/* <GripVertical className="size-5 text-muted-foreground" /> */}

                    {/* <div className="p-1.5 bg-muted rounded-md">
                      <User className="size-5" />
                    </div> */}

                    <div className="text-left">
                      <p className="text-sm font-medium leading-5 mb-1">
                        Personal Information
                      </p>

                      <p className="text-xs font-medium text-muted-foreground">
                        Add your basic details
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>Personal Info Content</AccordionContent>
              </AccordionItem>

              <AccordionItem value="education">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    {/* <GripVertical className="size-5 text-muted-foreground" />

                    <div className="p-1.5 bg-muted rounded-md">
                      <GraduationCap className="size-5" />
                    </div> */}

                    <div className="text-left">
                      <p className="text-sm font-medium leading-5 mb-1">
                        Education
                      </p>

                      <p className="text-xs font-medium text-muted-foreground">
                        Add your education details
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>Education Content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>

        {/* design sidebar */}
        <TabsContent value="tab2" className="flex-1 p-6 m-0">
          <div className="flex items-center justify-center h-full border-2 border-dashed rounded-xl">
            <h2 className="text-lg font-medium text-muted-foreground">
              Create a design
            </h2>
          </div>
        </TabsContent>
      </Tabs>
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
      dismissible={true}
      open={isOpen}
      onOpenChange={setIsOpen}
      modal={false}
    >
      <DrawerContent>
        <DrawerTitle className="sr-only">Resume Sections</DrawerTitle>

        <div className="flex-1 overflow-y-auto mt-2">{renderContent}</div>
      </DrawerContent>
    </Drawer>
  );
}
