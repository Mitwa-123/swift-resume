import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <img
          src="/images/swift-logo.svg"
          alt="Swift Resume"
          className="w-40 "
        />

        <div className="mb-17">
          <Badge variant="default">10</Badge>
        </div>
        <Button type="submit" varient="default" size="default">
          Sign in
        </Button>
      </div>
    </>
  );
}
