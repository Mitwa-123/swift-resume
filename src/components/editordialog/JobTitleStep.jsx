"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import DialogHeader from "./DialogHeader";

const jobTitleSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
});

export default function JobTitleStep({ onBack, onNext }) {
  const form = useForm({
    resolver: zodResolver(jobTitleSchema),
    defaultValues: {
      jobTitle: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Job Title Submitted:", data);
    onNext();
  };

  return (
    <div className="relative p-3 sm:p-6 flex flex-col items-center text-center gap-4">
      <DialogHeader
        title="Desired job title?"
        description="Ensure the job title at the top of your resume matches your goals or target role."
        onBack={onBack}
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-left">
        <FieldGroup className="flex flex-col">
          <Controller
            name="jobTitle"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="jobTitle">Desired job title</FieldLabel>
                <Input
                  {...field}
                  id="jobTitle"
                  placeholder="e.g. Frontend Developer"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end items-center gap-2 mt-4">
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="px-4"
            >
              Skip
            </Button>
            <Button type="submit" className="px-4">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
