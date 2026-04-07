"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();
  const activeTab = pathname.includes("billing") ? "billing" : "account";

  return (
    <div className="max-w-full lg:max-w-325 mx-auto px-4 sm:px-5 lg:px-10.5 font-open-sans">
      <div className="flex items-center gap-2 sm:gap-1 mb-1 sm:mb-2.5 pt-4 sm:pt-5.5">
        <Image
          src="/images/setting-logo.svg"
          alt="Settings"
          width={24}
          height={24}
          priority
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <h1 className="text-lg sm:text-20 leading-6 sm:leading-7 font-semibold text-foreground">
          Settings
        </h1>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList
          variant="line"
          className="flex w-full overflow-x-auto no-scrollbar"
        >
          <Link
            href="/settings/account"
            className="text-sm leading-none font-medium whitespace-nowrap"
          >
            <TabsTrigger value="account">Account</TabsTrigger>
          </Link>

          <Link
            href="/settings/billing"
            className="text-sm leading-none font-medium whitespace-nowrap"
          >
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <div className="mt-6 sm:mt-9">{children}</div>
    </div>
  );
}
