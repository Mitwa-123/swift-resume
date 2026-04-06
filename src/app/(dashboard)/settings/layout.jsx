"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();
  const activeTab = pathname.includes("billing") ? "billing" : "account";

  return (
    <div className="max-w-325 mx-auto px-10.5 font-open-sans">
      <div className="flex items-center gap-1 mb-2.5 pt-5.5">
        <Image
          src="/images/setting-logo.svg"
          alt="Settings"
          width={24}
          height={24}
          priority
        />
        <h1 className="text-20 leading-7 font-semibold text-foreground">
          Settings
        </h1>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList variant="line">
          <Link
            href="/settings/account"
            className="text-sm leading-none font-medium"
          >
            <TabsTrigger value="account">Account</TabsTrigger>
          </Link>
          <Link
            href="/settings/billing"
            className="text-sm leading-none font-medium"
          >
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <div className="mt-9">{children}</div>
    </div>
  );
}
