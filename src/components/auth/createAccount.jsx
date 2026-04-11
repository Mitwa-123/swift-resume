"use client";

import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function CreateAccount() {
  return (
    <>
      <div className="w-full max-w-84">
        <AuthHeader
          title="Create an account"
          subtitle="Use LinkedIn for fastest sign up"
        />

        <Button variant="outline" size="lg" className="w-full">
          <Image
            src="/images/facebook-logo.svg"
            height={16}
            width={16}
            alt="facebook logo"
          />
          Sign in with Facebook
        </Button>

        <Separator className="my-6.5">
          <span>Or use email</span>
        </Separator>

        <Button
          type="submit"
          variant="default"
          size="default"
          className="w-full"
        >
          <Image
            src="/images/mail.svg"
            height={16}
            width={16}
            alt="mail logo"
          />
          Continue with email
        </Button>
      </div>
    </>
  );
}
