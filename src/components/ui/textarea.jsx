"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  variant = "default", // 👈 default variant
  ...props
}) {
  const variants = {
    default: "",

    focus:
      "focus-visible:border-input focus-visible:ring-3 focus-visible:rounded-lg focus-visible:ring-offset-2 focus-visible:ring-blue-500",
  };

  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-27.5 w-full rounded-md border border-input bg-background p-3 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 resize-none",
        variants[variant],

        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
