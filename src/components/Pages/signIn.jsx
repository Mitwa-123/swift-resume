import React from "react";
import AuthHeader from "../auth/AuthHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "../auth/AuthLayout";
import facebookLogo from "../../assets/images/facebook-logo.svg";

export default function SignIn() {
  return (
    <>
      <AuthLayout>
        <div className=" ">
          <div className="w-full max-w-md">
            <AuthHeader
              title="Sign in to your account"
              subtitle={
                <span>
                  Not a member?{" "}
                  <a
                    href="/signup"
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Sign up
                  </a>
                </span>
              }
            />

            <Button variant="outline" size="lg">
              <img src={facebookLogo} alt="facebook logo" />
              Sign in with LinkedIn
            </Button>

            <Separator className="my-6.5">
              <span>Or use email</span>
            </Separator>

            <Label className="mb-2">Email</Label>
            <Input type="email" placeholder="Email address" className="mb-4"/>

            <Label className="mb-2">Password</Label>
            <Input type="password" placeholder="Password" className="mb-1.25"/>

            <a
              href="/forgot-password"
              className="text-sm font-medium leading-5 text-right block text-muted-foreground hover:text-primary cursor-pointer mb-8.5"
            >
              Forgot password?
            </a>

            <Button className="w-full" size="lg">
              Sign in
            </Button>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
