"use client";

import SelectedPlan from "./billingForm/SelectedPlan";
import { currentPlan, otherPlans } from "./data/plansData";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <div className="space-y-10 p-6">
      <div>
        <h2 className="text-sm font-semibold mb-4">Your plan</h2>

        <div className="max-w-sm">
          <SelectedPlan {...currentPlan} />

          <div className="mt-3">
            <Button variant="outline" size="sm">
              Manage plan
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4">Switch your plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPlans.map((plan, index) => (
            <SelectedPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
