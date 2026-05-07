"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      {/* Tabs */}
      <div className="max-w-100 w-full">
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="boxed" className="w-full">
            <TabsTrigger value="tab1">Tabs Text</TabsTrigger>
            <TabsTrigger value="tab2">Tabs Text</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Your existing UI */}
      <img src="/images/swift-logo.svg" alt="Swift Resume" className="w-40" />

      <Badge>10</Badge>

      <Button type="submit">Sign in</Button>
       <Accordion type="single">
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
      
                      <AccordionContent >
                        Personal Info Content
                      </AccordionContent>
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
      
                      <AccordionContent >
                        Education Content
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
    </div>
    
  );
}
