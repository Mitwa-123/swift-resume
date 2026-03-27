import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import facebookLogo from "@/assets/images/facebook-logo.svg";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-84">
          <AuthHeader
            title="Sign in to your account"
            subtitle={
              <span>
                Not a member?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </span>
            }
          />

          <Button variant="outline" size="lg">
            <img src={facebookLogo} alt="facebook logo" />
            Sign in with Facebook
          </Button>

          <Separator className="my-6.5">
            <span>Or use email</span>
          </Separator>

          <form onSubmit={handleSubmit}>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="mb-4"
            />

            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="mb-1.25"
            />

            <Link
              to="/forgot-password"
              className="text-sm font-medium leading-5 text-right block text-muted-foreground hover:text-primary hover:underline cursor-pointer mb-8.5"
            >
              Forgot password?
            </Link>

            <Button type="submit" className="w-full" size="lg">
              Sign in
            </Button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
}
