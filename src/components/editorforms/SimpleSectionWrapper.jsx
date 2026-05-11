import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GripVertical, ChevronDown, Trash2 } from "lucide-react";
import Text from "../Text";
import { Textarea } from "@/components/ui/textarea";

export default function SimpleSectionWrapper({
  form,
  onDelete,
  isOpen,
  primaryLabel,
  onToggle,
  primaryPlaceholder,
  secondaryLabel,
  secondaryPlaceholder,
  descriptionLabel,
}) {
  const { control } = form;

  return (
    <div className="space-y-6">
      <div
        className={`border border-border rounded-lg bg-base-accent/70 transition-all ${
          isOpen ? "px-4 py-4.5" : "px-4 py-3"
        }`}
      >
        <div
          className={`flex items-center justify-between group cursor-pointer ${
            isOpen ? "mb-6" : "mb-0"
          }`}
          onClick={() => onToggle()}
        >
          <div className="flex items-center gap-1.5">
            <GripVertical className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-sm leading-5">
              Software Engineer, Tech Innovators
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground cursor-pointer transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              onClick={() => onToggle()}
            />
            <Trash2
              className="w-4 h-4 text-muted-foreground cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
        {isOpen && (
          <div className="space-y-6">
            <div className="grid gap-4">
              <Controller
                name="primaryField"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{primaryLabel}</FieldLabel>
                    <Input {...field} placeholder={primaryPlaceholder} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="secondaryField"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{secondaryLabel}</FieldLabel>
                    <Input {...field} placeholder={secondaryPlaceholder} />
                  </Field>
                )}
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <Text variant="h6" weight="medium">
                Date
              </Text>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex gap-3">
                  <Select defaultValue="january">
                    <SelectTrigger className="w-33.25 rounded-lg">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="2021">
                    <SelectTrigger className="w-33.25 rounded-lg">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="show-date" />
                  <Label
                    htmlFor="show-date"
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    Show date
                  </Label>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Text variant="h6" weight="medium">
                {descriptionLabel}
              </Text>
              <div>
                <Textarea placeholder="Describe your certification" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
