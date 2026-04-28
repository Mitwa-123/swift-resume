"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import StepLayout from "./StepLayout";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

const jobTitleSchema = z.object({
  jobTitle: z.string().min(1, "Desired job title is required"),
});

export default function JobTitleStep({ onNext, onSkip, onBack }) {
  const form = useForm({
    resolver: zodResolver(jobTitleSchema),
    defaultValues: {
      jobTitle: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Job Title Data:", data);
    onNext();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <StepLayout
        title="Desired job title?"
        description="Ensure the job title at the top of your resume matches your goals or target role."
        onBack={onBack}
        buttons={
          <>
            <Button type="button" variant="outline" onClick={onSkip}>
              Skip
            </Button>
            <Button type="submit">Continue</Button>
          </>
        }
      >
        <div className="text-left">
          <Controller
            name="jobTitle"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Desired job title</FieldLabel>
                <Input
                  {...field}
                  placeholder="e.g. Frontend Developer"
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
        </div>
      </StepLayout>
    </form>
  );
}
