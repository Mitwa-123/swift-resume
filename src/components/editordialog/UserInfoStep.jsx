"use client";

import React from "react";
import { Sparkles, ChevronLeft } from "lucide-react";
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

const userInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export default function UserInfoStep({ onBack, onNext }) {
  const form = useForm({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("UserInfo Submitted:", data);
    onNext();
  };

  return (
    <div className="relative p-6 flex flex-col items-center text-center gap-4">
      <div className="flex p-2.5 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
        <Sparkles className="size-4.5 text-blue-600" />
      </div>

      <div className="flex flex-col gap-1.5 items-center">
        <div className="flex items-center justify-center gap-2 w-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            type="button"
            className="size-7 border-border shadow-sm"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </Button>
          <h2 className="text-lg font-semibold leading-none">
            Tell us about you
          </h2>
        </div>
        <p className="text-base font-normal leading-6 text-muted-foreground">
          Let's keep it personal, share a little bit about you.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-left">
        <FieldGroup className="flex flex-col">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder="Enter your name here"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error?.message]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Enter your email here"
                  autoComplete="email"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error?.message]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end items-center gap-2 w-full mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="px-4"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="px-4"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
