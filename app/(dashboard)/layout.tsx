import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5 min-h-screen bg-background text-foreground">
      {/* First Column: Sidebar - Visible only on large screens */}
      <div className="hidden lg:block lg:col-span-1 h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Remaining Columns: Navbar and Main Page Content */}
      <div className="lg:col-span-4 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 py-12 px-4 sm:px-8 lg:px-16 max-w-7xl w-full mx-auto">
          {children}
        </div>
      </div>
    </main>
  );
}