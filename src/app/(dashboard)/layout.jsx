import DashboardHeader from "@/components/dashboard/AppBreadcrumb";
import AppHeader from "@/components/dashboard/AppHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
