"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResendOTPSection } from "./ResendOTPSection";

export default function CheckEmailStep({ onBack, onComplete }) {
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  const handleResendAction = () => {
    setIsTimerFinished(false);
    console.log("Resending OTP...");
  };

  return (
    <div className="w-full lg:w-179.5 min-h-117 mx-auto flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="flex flex-col px-0 md:p-6 justify-normal md:justify-center  text-center items-center md:text-start md:items-start">
          <img
            src="/images/swift-logo.svg"
            alt="Swift Resume"
            className="hidden md:block h-6 w-fit mb-12"
          />

          <img
            src="/images/swiftresume-onlyicon.svg"
            alt="Swift Resume"
            className="block md:hidden w-fit mb-8"
          />

          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="size-6 sm:size-7 border-input shadow-xs cursor-pointer"
              >
                <ChevronLeft className="size-3 sm:size-4 text-muted-foreground" />
              </Button>
              <h2 className="text-2xl leading-8 font-semibold">
                Check your email
              </h2>
            </div>
            <p className="text-sm leading-5 font-normal text-muted-foreground">
              We've sent a 6-digit verification code to example@example.com
            </p>
          </div>

          <ResendOTPSection
            isTimerFinished={isTimerFinished}
            setIsTimerFinished={setIsTimerFinished}
            onResend={handleResendAction}
            onComplete={(otpValue) => {
              console.log("OTP Verified:", otpValue);
              onComplete?.();
            }}
          />
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-slate-50 rounded-[14px] p-4.75 ">
          <div className="relative w-full">
            <Image
              src="/images/verify-card.svg"
              alt="Preview"
              width={308.55}
              height={257.31}
              className="w-full"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-center">
            Your resume is ready to download!
          </p>
        </div>
      </div>
    </div>
  );
}
