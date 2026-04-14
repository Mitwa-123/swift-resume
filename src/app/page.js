"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    </div>
  );
}
