"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Circle } from "lucide-react";

export default function AppBreadcrumb({ type, pageTitle }) {
  const dashboardItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "/images/home-icon.svg",
    },
    {
      label: "Resumes",
      href: "/resumes",
    },
    {
      label: pageTitle || "Untitled resume",
    },
  ];

  const onboardingItems = [
    {
      label: "Choose a template",
      href: "/onboarding",
      active: true,
    },
    {
      label: "Enter your details",
      href: "/onboarding/details",
    },
    {
      label: "Download resume",
    },
  ];

  const items = type === "onboarding" ? onboardingItems : dashboardItems;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <BreadcrumbItem>
              {type === "onboarding" ? (
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-xs font-medium"
                >
                  {item.active ? (
                    <div className="w-3.5 h-3.5 rounded-full bg-base-primary/30 flex items-center justify-center">
                      <Circle className="w-2 h-2 fill-base-primary text-base-primary" />
                    </div>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                      <Circle className="w-2 h-2 fill-muted-foreground text-muted-foreground" />
                    </div>
                  )}

                  <span
                    className={
                      item.active ? "text-foreground" : "text-muted-foreground"
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-xs font-medium"
                >
                  {item.icon && (
                    <Image src={item.icon} alt="icon" width={14} height={14} />
                  )}
                  {item.label}
                </Link>
              ) : (
                <div className="text-xs font-medium leading-none">{item.label}</div>
              )}
            </BreadcrumbItem>

            {i !== items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
