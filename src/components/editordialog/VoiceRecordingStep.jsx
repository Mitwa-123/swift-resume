"use client";

import React, { useState } from "react";
import { Mic, AlignLeft, Pause, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import DialogHeader from "./DialogHeader";
import Image from "next/image";

export default function VoiceRecordingStep({
  title,
  description,
  onBack,
  onNext,
  nextStepName,
  skipStepName,
}) {
  const [activeTab, setActiveTab] = useState("voice");

  return (
    <div className="relative p-6 flex flex-col items-center text-center rounded-3xl gap-4">
      <DialogHeader
        title={title}
        description={description} 
        onBack={onBack}
      />

      <Tabs
        defaultValue="voice"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full">
          <TabsTrigger value="voice" className="w-full">
            <Mic className="h-4 w-4 mr-2" /> Voice
          </TabsTrigger>
          <TabsTrigger value="text" className="w-full">
            <AlignLeft className="h-4 w-4 mr-2" /> Text
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="w-full bg-base-accent/50 rounded-lg p-6 border border-border relative flex flex-col items-center">
        <Image
          src="/images/voice-blur.svg"
          alt="Voice Animation"
          width={96}
          height={96}
          className="h-24 mb-8"
          priority 
        />

        <div className="flex gap-3 mb-3">
          <Button variant="outline" size="sm" className="rounded-full">
            <Pause className="h-4 w-4 mr-1" /> Pause
          </Button>
          <Button size="sm" className="rounded-full bg-blue-600">
            <Flag className="h-4 w-4 mr-1" /> Finish
          </Button>
        </div>

        <div className="w-full flex items-center gap-2.5">
          <span className="text-sm font-medium">0:42</span>
          <Progress value={40} className="w-full" />
          <span className="text-sm font-medium">5:00</span>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 w-full ">
        <Button
          type="button"
          variant="outline"
          onClick={() => onNext(skipStepName)} 
          className="px-4"
        >
          Skip
        </Button>
        <Button
          type="button"
          className="bg-blue-600"
          onClick={() => onNext(nextStepName)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
