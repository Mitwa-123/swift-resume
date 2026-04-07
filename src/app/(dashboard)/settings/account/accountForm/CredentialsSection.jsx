"use client";

import * as React from "react";
import { Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import Image from "next/image";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

export default function CredentialsSection({ form }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-30 mt-10">
      <div className="lg:min-w-62.5">
        <h2 className="text-sm font-semibold leading-5">Credentials</h2>
        <p className="text-sm text-muted-foreground font-medium leading-5">
          Update how you login to Swift Resume
        </p>
      </div>

      <div
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="flex flex-col w-full max-w-full lg:max-w-106.75"
      >
        <FieldGroup className="flex flex-col gap-5 sm:gap-6.5">
          <Controller
            name="email"
            control={form.control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>
                <Input {...field} type="email" placeholder="Enter your email" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="currentPassword"
            control={form.control}
            rules={{
              required: "Current password is required",
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Current password</FieldLabel>

                <Input
                  {...field}
                  type="password"
                  placeholder="Current password"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="newPassword"
            control={form.control}
            rules={{
              required: "New password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                message:
                  "Password must contain first letter uppercase,number, and special character (@)",
              },
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>New password</FieldLabel>

                <Input {...field} type="password" placeholder="New password" />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-start mt-8 sm:mt-10 mb-4 sm:mb-0" >
          <button
            type="submit"
            className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            <Image src="/images/save.svg" alt="save" width={16} height={16} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
