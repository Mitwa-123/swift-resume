"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import PaymentDialog from "./PaymentDialog";
import VerifyAccountStep from "./VerifyAccount";
import CheckEmailStep from "./CheckEmailStep";
import DownloadResumeStep from "./DownloadResumeStep";

export default function PaymentFlow({ isOpen, setIsOpen }) {
  const [step, setStep] = useState("PAYMENT");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const renderStep = () => {
    switch (step) {
      case "PAYMENT":
        return (
          <PaymentDialog
            onNext={() => setStep("VERIFY")}
            isDesktop={isDesktop}
          />
        );

      case "VERIFY":
        return (
          <VerifyAccountStep
            onBack={() => setStep("PAYMENT")}
            onComplete={() => {
              setStep("CHECK_EMAIL");
            }}
          />
        );
      case "CHECK_EMAIL":
        return (
          <CheckEmailStep
            onBack={() => setStep("VERIFY")}
            onComplete={() => setStep("DOWNLOAD")}
          />
        );
      case "DOWNLOAD": 
        return (
          <DownloadResumeStep
            onBack={() => setStep("CHECK_EMAIL")}
            onComplete={() => {
              console.log("Process Completed");
              setIsOpen(false);
            }}
          />
        );

      default:
        return null;
    }
  };

  const Content = <>{renderStep()}</>;

  return isDesktop ? (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" w-fit p-4 gap-0 overflow-hidden rounded-[24px]">
        <DialogTitle className="hidden">Payment Flow</DialogTitle>

        {Content}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-[95vh]">
        <DrawerTitle className="hidden">Payment Flow</DrawerTitle>

        <div className="overflow-y-auto h-full p-4">{Content}</div>
      </DrawerContent>
    </Drawer>
  );
}
