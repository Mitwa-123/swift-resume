"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const otpSchema = z.object({
  otp: z.string().length(6, "Please enter 6 digit verification code"),
});

export function ResendOTPSection({
  onComplete,
  isTimerFinished,
  setIsTimerFinished,
  onResend,
}) {
  const [timeLeft, setTimeLeft] = useState(28);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  useEffect(() => {
    if (isTimerFinished) return;

    if (timeLeft <= 0) {
      setIsTimerFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isTimerFinished, setIsTimerFinished]);

  const handleResend = () => {
    setTimeLeft(28);
    setIsTimerFinished(false);
    onResend?.();
  };

  const onSubmit = (data) => {
    onComplete(data.otp);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Field className="w-full" >
        <FieldLabel htmlFor="otp">Code</FieldLabel>

        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <InputOTP
              {...field}
              id="otp"
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />

        {errors.otp && (
          <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>
        )}
      </Field>

      <div className="h-6 mb-8">
        {!isTimerFinished ? (
          <p className="text-sm leading-5 font-normal text-gray-500 mt-1.5">
            Didn’t get the code? Resend in {timeLeft} seconds
          </p>
        ) : (
          <Button
            type="button"
            onClick={handleResend}
            variant="link"
            className="px-0"
          >
            Resend code
          </Button>
        )}
      </div>

      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  );
}
