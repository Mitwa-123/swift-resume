"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Trash } from "lucide-react";
import * as React from "react";
import { Controller } from "react-hook-form";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

export default function ProfileImageUpload({ form }) {
  return (
    <div className="flex gap-[120px]">
      <div className="min-w-[250px]">
        <h2 className="text-sm font-semibold leading-5">Profile</h2>
        <p className="text-sm text-muted-foreground font-medium leading-5">
          Update your personal details
        </p>
      </div>

      <div className="flex flex-col  w-full max-w-106.75">
        <Label className="text-xs mb-2.5 text-slate-600">Profile Picture</Label>

        <div className="flex items-center gap-5">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/images/profile-avtar.svg" />
          </Avatar>

          <div className="flex gap-2">
            <Button variant="change" size="sm">
              <Upload className="w-4 h-4" />
              Change
            </Button>

            <Button variant="change" size="sm">
              <Trash className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <FieldGroup className="col-span-2 grid grid-cols-2 gap-4">
            <Controller
              name="firstName"
              control={form.control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>First name</FieldLabel>

                  <Input
                    {...field}
                    placeholder="Enter first name"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="lastName"
              control={form.control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Last name</FieldLabel>

                  <Input
                    {...field}
                    placeholder="Enter last name"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </div>
      </div>
    </div>
  );
}
