import AuthLayout from "@/components/auth/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import { Button } from "@/components/ui/button";
import facebookLogo from "@/assets/images/facebook-logo.svg";
import { Separator } from "@/components/ui/separator";
import mailLogo from "@/assets/images/mail.svg";

export default function ForgotPassword() {
  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-md">
          <AuthHeader
            title="Create an account"
            subtitle="Use LinkedIn for fastest sign up"
          />

          <Button variant="outline" size="lg">
            <img src={facebookLogo} alt="facebook logo" />
            Sign in with Facebook
          </Button>

          <Separator className="my-6.5">
            <span>Or use email</span>
          </Separator>
        </div>

        <Button type="submit" className="w-full" size="lg">
          <img src={mailLogo} alt="mail logo" />
          Continue with email
        </Button>
      </AuthLayout>
    </>
  );
}
