"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, RefreshCcw } from "lucide-react";

export default function SelectedPlan({
  title,
  price,
  features = [],
  active = false,
  buttonText = "Switch",
}) {
  return (
    <Card
      className={`rounded-xl border p-4 ${
        active ? "border-blue-600 ring-2 ring-blue-500" : ""
      }`}
    >
      <CardContent className="p-0 space-y-4">
        <div className="flex justify-between items-center">
          {active ? (
            <div className="bg-blue-600 text-white p-1 rounded-full">
              <Check size={14} />
            </div>
          ) : (
            <RefreshCcw className="w-4 h-4 text-gray-400" />
          )}

          <p className="ml-auto font-semibold">{price}</p>
        </div>

        <h3 className="font-semibold text-base">{title}</h3>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {!active && (
          <Button variant="outline" size="sm">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
