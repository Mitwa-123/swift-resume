import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
