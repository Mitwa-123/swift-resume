"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
import Text from "../Text";
import { Plus, X } from "lucide-react";

import { useForm, Controller, useFieldArray } from "react-hook-form";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";

export default function PersonalDetailsForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      jobTitle: "",
      phone: "",
      url: "",
      links: [
        { name: "", url: "" },
        { name: "", url: "" },
        { name: "", url: "" },
      ],
    },
  });
  const { control } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });
  return (
    <div className="space-y-6">
      <div>
        <Text variant="h6" weight="medium" className="mb-4">
          Your details
        </Text>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <Field className="relative flex h-30 w-30 flex-col items-center justify-center rounded-md border-2 border-dashed border-border bg-base-accent my-auto">
              <FieldLabel
                className="absolute inset-0 flex flex-col gap-1 justify-center  cursor-pointer"
                htmlFor="picture"
              >
                <ImageIcon className="size-8 text-muted-foreground" />
                <Text
                  variant="h4"
                  weight="medium"
                  className="text-center max-w-25"
                >
                  Add a profile image
                </Text>
              </FieldLabel>
              <Input className="hidden" id="picture" type="file" />
            </Field>

            <div className="mt-2 flex items-center gap-2">
              <Switch />
              <Text variant="h1" weight="medium">
                Show
              </Text>
            </div>
          </div>

          <FieldGroup className="gap-4!">
            <div className="grid grid-cols-2 gap-2.5">
              <Controller
                name="name"
                control={form.control}
                rules={{
                  required: "Name is required",
                }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">Name</FieldLabel>

                    <Input {...field} id="name" placeholder="Ben Caldwell" />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                rules={{
                  required: "Email is required",
                }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>

                    <Input
                      {...field}
                      id="email"
                      placeholder="bcaldwell@gmail.com"
                    />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="jobTitle"
              control={form.control}
              rules={{
                required: "Job title is required",
              }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="jobTitle">Desired job title</FieldLabel>

                  <Input
                    {...field}
                    id="jobTitle"
                    placeholder="Software, UI & Product Engineer"
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </div>
      </div>

      <hr />

      <div>
        <Text variant="h6" weight="medium" className="mb-4">
          Your role
        </Text>
        <div className="flex items-end gap-2.5">
          <Controller
            name="phone"
            control={form.control}
            rules={{
              required: "Phone is required",
            }}
            render={({ field, fieldState }) => (
              <Field className="flex-1" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>

                <Input {...field} id="phone" placeholder="(123) 456-7890" />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="url"
            control={form.control}
            rules={{
              required: "URL is required",
            }}
            render={({ field, fieldState }) => (
              <Field className="flex-1" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="url">URL</FieldLabel>

                <Input
                  {...field}
                  id="url"
                  placeholder="linkedin/in/bcaldwell"
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="mb-1 shrink-0"
          >
            <X className="h-4 w-4 text-slate-700" />
          </Button>
        </div>
      </div>

      <hr />

      <div>
        <Text variant="h6" weight="medium" className="mb-4">
          Links
        </Text>

        <div className="space-y-4">
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-end gap-2.5 mb-3">
              <Controller
                name={`links.${index}.name`}
                control={control}
                rules={{
                  required: "Name is required",
                }}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <FieldLabel>Name</FieldLabel>

                    <Input {...field} placeholder="Name" />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name={`links.${index}.url`}
                control={control}
                rules={{
                  required: "URL is required",
                }}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <FieldLabel>URL</FieldLabel>

                    <Input {...field} placeholder="URL" />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => remove(index)}
                className="mb-1 shrink-0"
              >
                <X className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="link"
            className="text-base-primary hover:text-base-primary/90 hover:no-underline px-0 h-5"
            onClick={() =>
              append({
                name: "",
                url: "",
              })
            }
          >
            <Plus className="h-4 w-4" />
            Add link
          </Button>
        </div>
      </div>
    </div>
  );
}
