import AuthLayout from "@/components/auth/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <AuthLayout>
        <div className="w-full max-w-77.75">
          <AuthHeader
            title="Let’s get started"
            subtitle="Fill in your personal details"
          />

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2.5 mb-3.5">
              <div className="flex-1">
                <Label htmlFor="firstName" className="mb-1 block text-sm">
                  First name
                </Label>
                <Input id="firstName" type="text" placeholder="Ben" />
              </div>

              <div className="flex-1">
                <Label htmlFor="lastName" className="mb-1 block text-sm">
                  Last name
                </Label>
                <Input id="lastName" type="text" placeholder="Caldwell" />
              </div>
            </div>

            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="mb-8.5"
            />

            <Button type="submit" className="w-full mb-1.5" size="lg">
              Sign up
            </Button>
          </form>
        </div>
      </AuthLayout>
    </>
  );
}
