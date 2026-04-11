"use client";

import SelectedPlan from "./billingForm/SelectedPlan";
import { currentPlan, otherPlans } from "./data/plansData";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <div className="space-y-15.5">
      <div>
        <h2 className="text-sm font-semibold mb-5">Your plan</h2>

        <div className="max-w-103.75">
          <SelectedPlan {...currentPlan} />
        </div>
        <div className="mt-3 max-w-27.25">
            <Button variant="outline" size="sm">
              Manage plan
            </Button>
          </div>
      </div>

      <div className="max-w-214">
        <h2 className="text-sm font-semibold mb-5">Switch your plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPlans.map((plan, index) => (
            <SelectedPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
