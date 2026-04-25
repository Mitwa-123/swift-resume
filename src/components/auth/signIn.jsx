"use client";
import React from "react";
import AuthHeader from "@/components/auth/AuthHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import Image from "next/image";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
  };
  return (
    
    <div className="w-full max-w-84">
      <AuthHeader
        title="Sign in to your account"
        subtitle={
          <span>
            Not a member?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign up
            </Link>
          </span>
        }
      />
      <div className="space-y-6.5">
        <Button variant="outline" size="lg" className="w-full">
          <Image
            src="/images/facebook-logo.svg"
            height={16}
            width={16}
            alt="facebook logo"
          />
          Sign in with Facebook
        </Button>
        <Separator>
          <span className="text-xs text-muted-foreground">Or use email</span>
        </Separator>
        <div />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="flex flex-col gap-3 lg:gap-4">
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
                  autoComplete="email"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Link
          href="/forgot-password"
          className="text-sm font-medium leading-5 text-right block text-muted-foreground hover:text-primary hover:underline cursor-pointer mb-8.5 mt-1.25"
        >
          Forgot password?
        </Link>

        <Button
          type="submit"
          className="w-full"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
