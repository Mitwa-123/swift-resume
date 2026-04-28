"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import GetStarted from "./GetStarted";
import LinkedinStep from "./LinkedinStep";
import UserInfoStep from "./UserInfoStep";
import JobHistoryStep from "./JobHistoryStep";
import JobTitleStep from "./JobTitleStep";

export default function DialogModal({ isOpen, setIsOpen }) {
  const [step, setStep] = useState("START");

  const handleNext = (nextStep) => setStep(nextStep);
  const handleBack = (prevStep) => setStep(prevStep);

  const renderStep = () => {
    switch (step) {
      case "START":
        return <GetStarted onNext={handleNext} />;

      case "LINKEDIN":
        return (
          <LinkedinStep
            onBack={() => handleBack("START")}
            onNext={() => handleNext("INFO")}
          />
        );

      case "INFO":
        return (
          <UserInfoStep
            onBack={() => handleBack("LINKEDIN")}
            onNext={() => handleNext("JOB_HISTORY")}
          />
        );

      case "JOB_HISTORY":
        return (
          <JobHistoryStep
            onBack={() => handleBack("INFO")}
            onNext={() => handleNext("JOB_TITLE")}
          />
        );

      case "JOB_TITLE":
        return (
          <JobTitleStep
            onBack={() => handleBack("JOB_HISTORY")}
            onNext={() => setIsOpen(false)} 
          />
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 overflow-hidden border-none shadow-2xl">
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}
