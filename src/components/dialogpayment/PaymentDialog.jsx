"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";

import { Badge } from "../ui/badge";
import { Check, FileText, Sparkles, BadgeCheck } from "lucide-react";
import { Separator } from "@base-ui/react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";


const plans = [
  {
    id: "weekly",
    title: "7-days",
    badge: "Popular",
    price: "$2.95",
    subtitle: "",
  },
  {
    id: "yearly",
    title: "Yearly",
    price: "$69.99",
    subtitle: "/mo",
  },
];

const paymentSchema = z.object({
  email: z.string().optional(),
  cardNumber: z.string().min(1, "Card number is required"),
  expiry: z.string().min(1, "Expiry is required"),
  cvc: z.string().min(1, "CVC is required"),
  country: z.string().optional(),
});

export default function PaymentDialog({ open = true, onOpenChange }) {
  const [selectedPlan, setSelectedPlan] = useState("weekly");
	const [isDesktop, setIsDesktop] = React.useState(false);
	React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      country: "",
    },
  });
	const onSubmit = (data) => {
    console.log(data);
  };
	const features = [
    {
      icon: FileText,
      text: "Download unlimited resumes",
    },
    {
      icon: BadgeCheck,
      text: "Access 300+ proven templates",
    },
    {
      icon: Sparkles,
      text: "Infinite AI resume variations",
    },
  ];
	const Content = (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-0 sm:p-6">
        <div>
          <div className="flex items-center gap-2 mb-6 sm:mb-12">
            <img
              src="/images/swift-logo.svg"
              alt="Swift Resume"
              className="w-32.5"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold leading-9 ">
                Get your dream job
              </h1>
              <p className=" text-xs leading-4 text-muted-foreground font-medium">
                Create, edit, and download unlimited resumes effortlessly with
                our intuitive, user-friendly resume-building platform.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 ">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan.id;

                return (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={cn(
                      "relative rounded-lg border p-2.5 text-left ",
                      isSelected
                        ? "border-blue-600 ring-2 ring-blue-100 bg-blue-50/40"
                        : "border-slate-200 hover:border-slate-300 bg-base-white",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-5.5 w-5.5 items-center justify-center rounded-full border transition-all",
                        isSelected
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300 bg-base-white",
                      )}
                    >
                      {isSelected && (
                        <Check className="h-4.5 w-4.5 text-base-white" />
                      )}
                    </div>

                    <div className="mt-2">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-sm leading-4 font-medium text-slate-700">
                          {plan.title}
                        </h3>

                        {plan.badge && (
                          <Badge className="rounded-full bg-secondary text-xs font-medium leading-4 text-secondary-foreground">
                            {plan.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-base leading-6 font-semibold">
                          {plan.price}
                        </span>
                        <span className="text-xs leading-4 font-medium text-slate-500">
                          {plan.subtitle}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:space-y-6 lg:block ">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-600" />

                    <p className="text-base leading-none font-medium">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className=" text-center  text-xs leading-4 font-regular text-slate-400">
              Refundable for 7 days after the first payment. The yearly plan
              renews at the same rate. The 7-day plan renews at $19.95/month.
              Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      <hr className="block sm:hidden" />
      {/* RIGHT SIDE */}
      <div className="rounded-[14px] bg-none sm:bg-slate-100 border-none sm:border px-0 sm:px-8 py-0 sm:py-10 w-full">
        <div className="grid grid-cols-2 gap-4">
          <Button className="w-40.5 h-12.5 border-none ring-0 shadow-none focus-visible:ring-0 focus-visible:outline-none bg-black">
            <img src="/images/applepay.svg" alt="pay logo" />
          </Button>

          <Button className="w-40.5 h-12.5 border-none ring-0 shadow-none focus-visible:ring-0 focus-visible:outline-none bg-black">
            <img src="/images/googlepay.svg" alt="pay logo" />
          </Button>
        </div>
        <div className="relative flex items-center justify-center py-5.25">
          <Separator className="absolute w-full h-px bg-border" />
          <div className="relative z-10 bg-base-white  px-2 py-1 rounded-md border text-sm leading-none  font-medium">
            OR
          </div>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-3!">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1.5">
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

            <Controller
              name="cardNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1.5">
                  <FieldLabel>Card number</FieldLabel>

                  <Input
                    {...field}
                    placeholder="1234 1234 1234 1234"
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

            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="expiry"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1.5">
                    <FieldLabel>Expiry</FieldLabel>

                    <Input
                      {...field}
                      placeholder="MM/YY"
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
                name="cvc"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1.5">
                    <FieldLabel>CVC</FieldLabel>

                    <Input
                      {...field}
                      placeholder="CVC"
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
            </div>

            <Controller
              name="country"
              control={form.control}
              render={({ field }) => (
                <Field className="gap-1.5">
                  <FieldLabel>Country</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>

          <Button
            type="submit"
            className="w-full text-base leading-6  font-medium mt-6"
          >
            Start now
          </Button>
        </form>
      </div>
    </div>
  );
return isDesktop ? (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-212.5 w-full p-4 gap-0 overflow-hidden rounded-[24px]">
      <DialogTitle className="hidden">Payment Dialog</DialogTitle>

      {Content}
    </DialogContent>
  </Dialog>
) : (
  <Drawer open={open} onOpenChange={onOpenChange}>
    <DrawerContent className="h-[95vh]">
      <DrawerTitle className="hidden">Payment Drawer</DrawerTitle>

      <div className="overflow-y-auto p-4 h-full">{Content}</div>
    </DrawerContent>
  </Drawer>
);
}
