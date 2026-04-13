import AppHeader from "@/components/dashboard/AppHeader";

export default function OnboardingLayout({ children }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
