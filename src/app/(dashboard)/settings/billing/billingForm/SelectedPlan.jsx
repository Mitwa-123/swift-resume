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
      <CardContent className="p-0 space-y-2.5">
        <div className="flex justify-between items-center ">
          {active ? (
            <div className="bg-blue-600 text-white p-1 rounded-full">
              <Check size={20} />
            </div>
          ) : (
            <RefreshCcw className="w-6 h-6 text-gray-400" />
          )}

          <p className="ml-auto font-semibold text-base leading-6 text-slate-700">
            {price}
          </p>
        </div>

        <h3 className="font-semibold text-base leading-6">{title}</h3>

        <ul className="list-disc pl-5 text-xs text-primary leading-4 font-medium space-y-2">
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {!active && (
          <Button
            variant="outline"
            size="sm"
            className="w-full max-w-17.5 mx-auto"
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
