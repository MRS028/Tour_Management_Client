import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BarChart2,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-200 shadow-lg transform transition-transform duration-200 z-50`}
      >
        <div className="p-6 font-bold text-lg border-b border-slate-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="#" className="flex items-center gap-2 hover:text-teal-400">
            <LayoutDashboard size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-teal-400">
            <Users size={18} /> Users
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-teal-400">
            <ClipboardList size={18} /> Bookings
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-teal-400">
            <BarChart2 size={18} /> Reports
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-teal-600 text-white h-16 px-4 shadow-md fixed w-full md:ml-64 z-40">
          <div className="flex items-center gap-3">
            {/* Mobile Sidebar Toggle */}
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="font-bold text-lg">TourPro Admin</span>
          </div>

          <Button className="bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-2">
            <LogOut size={16} /> Logout
          </Button>
        </header>

        {/* Page Content */}
        <main className="flex-1 mt-16 p-6 md:ml-64">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Dashboard Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-700">Users</h2>
              <p className="text-3xl font-bold text-teal-600 mt-2">1,240</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-700">Bookings</h2>
              <p className="text-3xl font-bold text-teal-600 mt-2">320</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg font-semibold text-slate-700">Revenue</h2>
              <p className="text-3xl font-bold text-teal-600 mt-2">$15,200</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 text-slate-300 py-4 text-center text-sm md:ml-64">
          © {new Date().getFullYear()} TourPro Admin Panel. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
