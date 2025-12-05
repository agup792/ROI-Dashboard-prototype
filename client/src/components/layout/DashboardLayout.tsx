import React from "react";
import { useLocation, Link } from "wouter";
import { LayoutDashboard, Users, BarChart3, Settings, LogOut, Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Executive Summary", icon: LayoutDashboard },
    { href: "/influenced-hires", label: "Influenced Hires", icon: Users },
    { href: "/adoption-metrics", label: "Adoption Metrics", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1b29] text-white flex-shrink-0 flex flex-col border-r border-slate-800">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(107,70,193,0.5)]">
            S
          </div>
          <span className="text-xl font-bold tracking-tight">SeekOut</span>
        </div>

        <div className="px-4 py-2">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 px-2">
            Dashboards
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/20 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary-foreground" : ""}`} />
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
            <Avatar className="w-8 h-8 border border-slate-600">
              <AvatarFallback className="bg-slate-700 text-xs">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">Jane Doe</p>
              <p className="text-xs text-slate-400 truncate">Acme Corp</p>
            </div>
            <Settings className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search data..."
                className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-700">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="h-6 w-px bg-slate-200"></div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-slate-200 text-slate-700 font-medium">
                  Acme Corp <ChevronDown className="w-4 h-4 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Switch Customer</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Acme Corp</DropdownMenuItem>
                <DropdownMenuItem>Globex Inc</DropdownMenuItem>
                <DropdownMenuItem>Soylent Corp</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 animate-in fade-in duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}
