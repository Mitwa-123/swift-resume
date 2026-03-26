import { useNavigate } from "react-router-dom";
import swiftLogo from "@/assets/images/swift-logo.svg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <img src={swiftLogo} alt="Swift Resume" className="w-40" />
      <Button onClick={() => navigate("/signin")}>Login</Button>
    </div>
  );
}
