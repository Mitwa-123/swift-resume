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
    <div className="relative p-3 sm:p-6 flex flex-col items-center text-center gap-4">
      <DialogHeader
        title="Tell us about you"
        description="Let's keep it personal, share a little bit about you."
        onBack={onBack}
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-left">
        <FieldGroup className="flex flex-col gap-6!">
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
                  <FieldError errors={[fieldState.error]} />
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
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-end items-center gap-2  mt-4">
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
}
