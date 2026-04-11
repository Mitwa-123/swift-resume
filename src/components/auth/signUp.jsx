"use client";
import AuthHeader from "@/components/auth/AuthHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";

const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[a-zA-Z]+$/, "Only letters are allowed"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[a-zA-Z]+$/, "Only letters are allowed"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Sign Up Data:", data);
  };
  return (
    <>
      <div className="w-full max-w-77.75 ">
        <AuthHeader
          title="Let’s get started"
          subtitle="Fill in your personal details"
        />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col gap-3.5">
            <div className="flex gap-2.5">
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="firstName">First name</FieldLabel>
                    <Input {...field} id="firstName" placeholder="Ben" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                    <Input {...field} id="lastName" placeholder="Caldwell" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

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
                    placeholder="Email address"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Button type="submit" variant="default" size="default" className="w-full mt-8.5">
            Sign up
          </Button>
        </form>
      </div>
    </>
  );
}
