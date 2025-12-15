import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MONTHLY_ACTIVE_USERS, FEATURE_UTILIZATION, MOCK_USAGE_DATA, UsageData } from "@/lib/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Gauge, TrendingUp, Users, Search, Filter, Download, MoreHorizontal } from "lucide-react";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function UserAdoptionUsage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState<string>("all");

  const filteredUsers = MOCK_USAGE_DATA.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === "all" || user.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const departments = Array.from(new Set(MOCK_USAGE_DATA.map(u => u.department))).sort();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Adoption & Usage</h1>
            <p className="text-slate-500">Platform engagement and individual user activity</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="adoption" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="adoption">Adoption Metrics</TabsTrigger>
            <TabsTrigger value="usage">Usage Details</TabsTrigger>
          </TabsList>

          {/* Adoption Metrics Tab */}
          <TabsContent value="adoption" className="space-y-8 mt-6">
            {/* Top Stats Row */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">License Utilization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Simple SVG Gauge Visualization */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                          strokeDasharray="88, 100"
                        />
                      </svg>
                      <Gauge className="absolute w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900">88%</div>
                      <p className="text-sm text-slate-500">22 of 25 licenses used</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Login Frequency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900">4.2x</span>
                    <span className="text-sm text-slate-500">per week</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                      Top 10%
                    </span>
                    <span className="text-xs text-slate-400">vs industry benchmark</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                 <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500">Active Power Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900">12</span>
                    <span className="text-sm text-slate-500">users</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Users with &gt;10 searches per week
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Monthly Active Users</CardTitle>
                  <CardDescription>Active users over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={MONTHLY_ACTIVE_USERS} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 12 }} 
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 12 }} 
                        />
                        <Tooltip 
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="users" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={3}
                          dot={{ r: 4, fill: "white", strokeWidth: 2 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Feature Utilization</CardTitle>
                  <CardDescription>Percentage of team using key features</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={FEATURE_UTILIZATION} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="feature" 
                          type="category" 
                          tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} 
                          width={120}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip 
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          formatter={(value) => [`${value}%`, 'Usage']}
                        />
                        <Bar dataKey="usage" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} barSize={24} background={{ fill: '#f8fafc' }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Usage Details Tab */}
          <TabsContent value="usage" className="mt-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

