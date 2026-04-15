"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBreadcrumb from "./AppBreadcrumb";
import HeaderActions from "./HeaderActions";
import Container from "../container/container";

export default function AppHeader() {
  const pathname = usePathname();

  const isOnboarding = pathname.startsWith("/onboarding");

  const routeMap = {
    "/settings/account": "Account",
    "/settings/billing": "Billing",
  };

  const pageTitle = routeMap[pathname] || "Untitled resume";

  return (
    <div className="w-full border-b border-slate-200">
      <Container>
        <header
          className={`flex items-center justify-between  ${
            isOnboarding ? "py-[13.5px]" : "py-2"
          }`}
        >
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Image
                src="/images/swift-logo.svg"
                alt="Swift Logo"
                width={107}
                height={19}
                className="h-4.75 w-full"
              />
            </Link>

            <div className="hidden md:block h-4 w-px bg-slate-200" />

            <nav className="hidden md:flex items-center ">
              <AppBreadcrumb
                type={isOnboarding ? "onboarding" : "dashboard"}
                pageTitle={pageTitle}
              />
            </nav>
          </div>

          {!isOnboarding && (
            <div className="flex items-center gap-2">
              <HeaderActions />
            </div>
          )}
        </header>
      </Container>
    </div>
  );
}
