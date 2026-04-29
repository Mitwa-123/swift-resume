"use client";

import React from "react";
import { Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import DialogHeader from "./DialogHeader";

const historySchema = z.object({
  title: z.string().min(1, "This field is required"),
  subtitle: z.string().min(1, "This field is required"),
});

const HistoryStep = ({
  title,
  description,
  items,
  labels,
  placeholders,
  addButtonText,
  onBack,
  onNext,
}) => {
  const form = useForm({
    resolver: zodResolver(historySchema),
    defaultValues: {
      title: "",
      subtitle: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onNext();
  };

  return (
    <div className="relative p-6 rounded-xl w-full max-w-md mx-auto">
      <DialogHeader
        title={title}
        description={description}
        onBack={onBack}
        isJobHistory={true}
      />

      <div className="space-y-2 mt-4">
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex items-center justify-between py-3 px-2 group hover:bg-base-accent transition-all">
              <div>
                <h4 className="font-medium text-base leading-none text-secondary-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-base leading-none font-normal text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <Pencil size={16} />
              </Button>
            </div>
            <div className="border-b border-border mt-2"></div>
          </div>
        ))}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <FieldGroup className="flex flex-col gap-4">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>{labels.title}</FieldLabel>
                <Input
                  {...field}
                  placeholder={placeholders.title}
                  className={` focus-visible:ring-blue-500 ${
                    fieldState.invalid ? "border-destructive" : ""
                  }`}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="subtitle"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>{labels.subtitle}</FieldLabel>
                <Input {...field} placeholder={placeholders.subtitle} />
              </Field>
            )}
          />
        </FieldGroup>

        <div className="grid grid-cols-1 gap-1.5">
          <Label className="text-sm leading-none font-medium text-slate-600 ">
            Start & end date
          </Label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <Select>
              <SelectTrigger className="w-31.75">
                <SelectValue placeholder="January" />
              </SelectTrigger>
              <SelectContent>
                {["January", "February", "March"].map((m) => (
                  <SelectItem key={m} value={m.toLowerCase()}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-31.75">
                <SelectValue placeholder="2021" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => 2026 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 sm:ml-2">
              <Switch id="present" defaultChecked />
              <Label
                htmlFor="present"
                className="text-sm leading-none font-medium"
              >
                Present
              </Label>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground gap-1 text-sm font-medium leading-5"
        >
          <Plus size={16} />
          {addButtonText}
        </Button>

        <div className="flex justify-end items-center gap-2 w-full">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="px-4"
          >
            Back
          </Button>
          <Button type="submit" className="px-4">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HistoryStep;
