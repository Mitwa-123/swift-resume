"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CreateAccount() {
  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-84">
          <AuthHeader
            title="Create an account"
            subtitle="Use LinkedIn for fastest sign up"
          />

          <Button variant="outline" size="lg">
            <img src="/images/facebook-logo.svg" alt="facebook logo" />
            Sign in with Facebook
          </Button>

          <Separator className="my-6.5">
            <span>Or use email</span>
          </Separator>

          <Button type="submit" className="w-full" size="lg">
            <img src="/images/mail.svg" alt="mail logo" />
            Continue with email
          </Button>
        </div>
      </AuthLayout>
    </>
  );
}
