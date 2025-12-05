import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_USAGE_DATA, UsageData } from "@/lib/mockData";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UsageDetail() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState<string>("all");

  const filteredUsers = MOCK_USAGE_DATA.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === "all" || user.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  // Extract unique departments for filter
  const departments = Array.from(new Set(MOCK_USAGE_DATA.map(u => u.department))).sort();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Usage Details</h1>
            <p className="text-slate-500">Individual user activity and platform engagement</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          {/* Filters */}
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by user or role..."
                className="pl-9 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <SelectValue placeholder="Filter by Dept" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                  <TableHead className="font-semibold text-slate-600">User</TableHead>
                  <TableHead className="font-semibold text-slate-600">Role</TableHead>
                  <TableHead className="font-semibold text-slate-600">Department</TableHead>
                  <TableHead className="font-semibold text-slate-600">Last Active</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-right">Searches (Mo)</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-right">Profiles Viewed</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-right">Projects</TableHead>
                  <TableHead className="font-semibold text-slate-600">Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                    <TableCell className="font-medium text-slate-900">{user.name}</TableCell>
                    <TableCell className="text-slate-600">{user.role}</TableCell>
                    <TableCell className="text-slate-600">
                      <Badge variant="secondary" className="font-normal bg-slate-100 text-slate-600">
                        {user.department}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-600 text-sm font-mono">{user.lastActive}</TableCell>
                    <TableCell className="text-slate-600 text-right font-mono">{user.searchesLastMonth}</TableCell>
                    <TableCell className="text-slate-600 text-right font-mono">{user.profilesViewedLastMonth}</TableCell>
                    <TableCell className="text-slate-600 text-right font-mono">{user.projectsCreated}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`font-normal ${
                          user.status === 'Active' 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                            : 'bg-slate-50 text-slate-500 border-slate-200'
                        }`}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="p-4 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center">
            <span>Showing {filteredUsers.length} results</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
