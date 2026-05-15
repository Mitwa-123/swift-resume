"use client";

import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const verifySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export default function VerifyAccountStep({ onBack, onComplete }) {
  const form = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleVerify = () => {
    onComplete?.();
  };
  return (
    <div className=" w-full  lg:w-179.5  mx-auto flex flex-col">
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
        <div className="w-full lg:w-86.75 p-4 sm:p-6 text-left">
          <img
            src="/images/swift-logo.svg"
            alt="Swift Resume"
            className="h-6 mb-12"
          />

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl leading-8 font-semibold ">
                Save your resume online for easy editing later
              </h2>

              <p className="text-sm leading-5 text-muted-foreground font-normal">
                Be prepared for the next job change, verify your name and email
                so you can come back later.
              </p>
            </div>

            <form
              onSubmit={form.handleSubmit(handleVerify)}
              className="space-y-4"
            >
              <FieldGroup className="gap-4! mb-5!">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Name</FieldLabel>

                      <Input
                        {...field}
                        placeholder="Bill"
                        className={cn(
                          "h-8.75",
                          fieldState.invalid && "border-destructive",
                        )}
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
                      <FieldLabel>Email</FieldLabel>

                      <Input
                        {...field}
                        placeholder="bill@microsoft.com"
                        className={cn(
                          "h-8.75",
                          fieldState.invalid && "border-destructive",
                        )}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-slate-50 rounded-[14px] p-4.75">
          <Image
            src="/images/verify-card.svg"
            alt="Preview"
            width={308.55}
            height={257.31}
            className="w-full"
          />

          <p className="mt-3 leading-none text-sm font-medium text-center">
            You resume is ready to download!
          </p>
        </div>
      </div>
    </div>
  );
}
