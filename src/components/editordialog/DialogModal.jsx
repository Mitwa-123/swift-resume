"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import GetStarted from "./GetStarted";
import LinkedinStep from "./LinkedinStep";
import UserInfoStep from "./UserInfoStep";
import JobHistoryStep from "./JobHistoryStep";
import JobTitleStep from "./JobTitleStep";
import EducationStep from "./EducationStep";
import SkillsStep from "./SkillsStep";
import ProfessionalHighlights from "./ProfessionalHighlights";
import CareerGoals from "./CareerGoals";

export default function DialogModal({ isOpen, setIsOpen }) {
  const [step, setStep] = useState("START");

  const handleNext = (nextStep) => setStep(nextStep);
  const handleBack = (prevStep) => setStep(prevStep);

  const renderStep = () => {
    console.log("Current Step:", step);
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
            onNext={() => handleNext("EDUCATION")}
          />
        );
      case "EDUCATION":
        return (
          <EducationStep
            onBack={() => handleBack("JOB_TITLE")}
            onNext={() => handleNext("SKILLS")}
          />
        );
      case "SKILLS":
        return (
          <SkillsStep
            onBack={() => handleBack("EDUCATION")}
            onNext={() => handleNext("HIGHLIGHTS")}
          />
        );
      case "HIGHLIGHTS":
        return (
          <ProfessionalHighlights
            onBack={() => handleBack("SKILLS")}
            onNext={() => handleNext("CAREER_GOALS")}
          />
        );

      case "CAREER_GOALS":
        return (
          <CareerGoals
            onBack={() => handleBack("HIGHLIGHTS")}
            onNext={(stepName) => {
              if (stepName === "FINISH") {
                setIsOpen(false);
              } else {
                handleNext(stepName);
              }
            }}
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
