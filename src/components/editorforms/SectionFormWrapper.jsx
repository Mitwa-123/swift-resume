import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Controller } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GripVertical,
  ChevronDown,
  Trash2,
  Sparkles,
  ScanText,
} from "lucide-react";
import Text from "../Text";
import { Textarea } from "@/components/ui/textarea";

export default function SectionFormWrapper({
  form,
  onDelete,
  sectionLabel,
  primaryLabel,
  primaryPlaceholder,
  secondaryLabel,
  secondaryPlaceholder,
  switchLabel,
  descriptionLabel,
}) {
  const { control } = form;
  const [isOpen, setIsOpen] = React.useState(true);

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
          onClick={() => setIsOpen(!isOpen)}
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
              onClick={() => setIsOpen(!isOpen)}
            />
            <Trash2
              className="w-4 h-4 text-muted-foreground cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
        {isOpen && (
          <div>
            <Text variant="h6" weight="medium" className="mb-4">
              {sectionLabel}
            </Text>

            <div className="grid gap-4">
              <Controller
                name="primaryField"
                control={control}
                rules={{ required: `${primaryLabel} is required` }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="primaryField">
                      {primaryLabel}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="primaryField"
                      placeholder={primaryPlaceholder}
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="secondaryField"
                control={control}
                rules={{ required: `${secondaryLabel} is required` }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="secondaryField">
                      {secondaryLabel}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="secondaryField"
                      placeholder={secondaryPlaceholder}
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className="flex items-center gap-2">
                <Switch id="toggle-switch" defaultChecked />
                <Label
                  htmlFor="toggle-switch"
                  className="font-medium text-sm leading-none"
                >
                  {switchLabel}
                </Label>
              </div>
            </div>

            <hr className="my-6" />

            <div>
              <Text variant="h6" weight="medium" className="mb-4">
                Dates
              </Text>
              <div className="space-y-1.5 mb-5">
                <Label className="text-slate-600 text-sm leading-none font-normal">
                  Start date
                </Label>
                <div className="flex gap-3">
                  <Select defaultValue="january">
                    <SelectTrigger className="w-42 rounded-lg">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="2021">
                    <SelectTrigger className="w-42 rounded-lg">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-600 text-sm leading-none font-normal">
                  End date
                </Label>
                <div className="flex items-center">
                  <div className="flex gap-2.5">
                    <Select defaultValue="january">
                      <SelectTrigger className="w-28 rounded-lg">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">January</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="2021">
                      <SelectTrigger className="w-28 rounded-lg">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2">
                      <Switch id="present" defaultChecked />
                      <Label
                        htmlFor="present"
                        className="text-sm leading-none font-medium"
                      >
                        Present
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-6" />

            <div className="space-y-2">
              <Text variant="h6" weight="medium" className="mb-4">
                {descriptionLabel}
              </Text>
              <div className="relative">
                <Textarea placeholder="Placeholder" variant="focus" />
                <div className="absolute bottom-3 left-3 right-3 border-t pt-2 flex items-center gap-2 ">
                  <Button type="button" variant="secondary" size="sm">
                    <Sparkles className="size-4 text-yellow-500" />
                    Write with AI
                  </Button>

                  <Button type="button" variant="secondary" size="sm">
                    <ScanText className="size-4 text-muted-foreground" />
                    Rewrite with AI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
