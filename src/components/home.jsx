"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <img src="/images/swift-logo.svg" alt="Swift Resume" className="w-40" />

      <Link href="/signin">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
