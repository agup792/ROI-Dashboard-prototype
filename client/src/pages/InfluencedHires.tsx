import React, { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_HIRES, Hire } from "@/lib/mockData";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function InfluencedHires() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filteredHires = MOCK_HIRES.filter((hire) => {
    const matchesSearch = 
      hire.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hire.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || hire.level === levelFilter;
    const matchesSource =
      sourceFilter === "all" || hire.primarySource === sourceFilter;
    return matchesSearch && matchesLevel && matchesSource;
  });

  const sources = Array.from(new Set(MOCK_HIRES.map((h) => h.primarySource))).sort();

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Senior Leadership": return "bg-purple-100 text-purple-700 hover:bg-purple-100";
      case "Manager": return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "Lead IC": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
      default: return "bg-slate-100 text-slate-700 hover:bg-slate-100";
    }
  };

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case "GitHub":
        return "bg-violet-100 text-violet-700 hover:bg-violet-100";
      case "Expert":
        return "bg-amber-100 text-amber-700 hover:bg-amber-100";
      case "Healthcare":
        return "bg-cyan-100 text-cyan-700 hover:bg-cyan-100";
      case "ATS":
        return "bg-indigo-100 text-indigo-700 hover:bg-indigo-100";
      case "Internal":
        return "bg-teal-100 text-teal-700 hover:bg-teal-100";
      case "Rediscovery":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100";
      case "Other":
        return "bg-rose-100 text-rose-700 hover:bg-rose-100";
      case "Public":
        return "bg-slate-100 text-slate-700 hover:bg-slate-100";
      default:
        return "bg-slate-100 text-slate-600 hover:bg-slate-100";
    }
  };

  // Chart data - computed from filtered hires
  const sourceChartData = useMemo(() => {
    return sources.map((source) => ({
      source,
      hires: filteredHires.filter((h) => h.primarySource === source).length,
    })).filter((item) => item.hires > 0);
  }, [filteredHires, sources]);

  const regionChartData = useMemo(() => {
    const regions = Array.from(new Set(filteredHires.map((h) => h.region).filter(Boolean))) as string[];
    return regions.map((region) => ({
      region,
      hires: filteredHires.filter((h) => h.region === region).length,
    })).sort((a, b) => b.hires - a.hires);
  }, [filteredHires]);

  const sourceCompanyChartData = useMemo(() => {
    const companies = filteredHires.reduce((acc, hire) => {
      if (hire.sourceCompany) {
        acc[hire.sourceCompany] = (acc[hire.sourceCompany] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(companies)
      .map(([company, hires]) => ({ company, hires }))
      .sort((a, b) => b.hires - a.hires)
      .slice(0, 10);
  }, [filteredHires]);

  const educationChartData = useMemo(() => {
    const degrees = Array.from(new Set(filteredHires.map((h) => h.degreeLevel).filter(Boolean))) as string[];
    const degreeOrder = ["High School", "Bachelor's", "Master's", "PhD", "Other"];
    return degreeOrder
      .filter((deg) => degrees.includes(deg))
      .map((degree) => ({
        degree,
        hires: filteredHires.filter((h) => h.degreeLevel === degree).length,
      }))
      .filter((item) => item.hires > 0);
  }, [filteredHires]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Influenced Hires</h1>
            <p className="text-slate-500">Detailed breakdown of candidates sourced via SeekOut</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        {/* Filters - Above tabs, affect both Visuals and Raw Data */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          <div className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by name or title..."
                className="pl-9 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <SelectValue placeholder="Filter by Level" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Senior Leadership">Senior Leadership</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Lead IC">Lead IC</SelectItem>
                  <SelectItem value="IC">Individual Contributor</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <SelectValue placeholder="Filter by Source" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="visuals">Visuals</TabsTrigger>
            <TabsTrigger value="data">Raw Data</TabsTrigger>
          </TabsList>

          {/* Visuals Tab */}
          <TabsContent value="visuals" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Data Source Chart */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Influenced Hires by Data Source</CardTitle>
                  <CardDescription>
                    Primary source attribution • <span className="font-mono">{filteredHires.length}</span> hires
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={sourceChartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                          dataKey="source"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          interval={0}
                          height={50}
                          angle={-45}
                          textAnchor="end"
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          allowDecimals={false}
                          width={28}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(value) => [value, "Hires"]}
                        />
                        <Bar
                          dataKey="hires"
                          fill="hsl(var(--primary))"
                          radius={[4, 4, 0, 0]}
                          barSize={32}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Region Chart */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Influenced Hires by Region</CardTitle>
                  <CardDescription>
                    Geographic distribution • <span className="font-mono">{filteredHires.length}</span> hires
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={regionChartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                          dataKey="region"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 12 }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          allowDecimals={false}
                          width={28}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(value) => [value, "Hires"]}
                        />
                        <Bar
                          dataKey="hires"
                          fill="hsl(var(--chart-2))"
                          radius={[4, 4, 0, 0]}
                          barSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Top Source Companies */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Top 10 Source Companies</CardTitle>
                  <CardDescription>
                    Previous employers of influenced hires
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sourceCompanyChartData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide />
                        <YAxis
                          dataKey="company"
                          type="category"
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          width={95}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(value) => [value, "Hires"]}
                        />
                        <Bar dataKey="hires" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Education Level Chart */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Influenced Hires by Education Level</CardTitle>
                  <CardDescription>
                    Degree level distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={educationChartData} margin={{ top: 5, right: 16, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                          dataKey="degree"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          interval={0}
                          height={40}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#64748b", fontSize: 12 }}
                          allowDecimals={false}
                          width={28}
                        />
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(value) => [value, "Hires"]}
                        />
                        <Bar
                          dataKey="hires"
                          fill="hsl(var(--chart-5))"
                          radius={[4, 4, 0, 0]}
                          barSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Raw Data Tab */}
          <TabsContent value="data" className="mt-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
              {/* Table */}
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                      <TableHead className="font-semibold text-slate-600">Name</TableHead>
                      <TableHead className="font-semibold text-slate-600">Title</TableHead>
                      <TableHead className="font-semibold text-slate-600">Level</TableHead>
                      <TableHead className="font-semibold text-slate-600">Data Source</TableHead>
                      <TableHead className="font-semibold text-slate-600">Location</TableHead>
                      <TableHead className="font-semibold text-slate-600">Hire Date</TableHead>
                      <TableHead className="font-semibold text-slate-600">SeekOut Actions</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredHires.map((hire) => (
                      <TableRow key={hire.id} className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                        <TableCell className="font-medium text-slate-900">
                          {hire.name}
                          {hire.diversity?.gender === "Female" && (
                            <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-pink-400" title="Diversity Candidate"></span>
                          )}
                        </TableCell>
                        <TableCell className="text-slate-600">{hire.title}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className={`rounded-full font-normal ${getLevelBadgeColor(hire.level)}`}>
                            {hire.level}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={`rounded-full font-normal ${getSourceBadgeColor(hire.primarySource)}`}
                          >
                            {hire.primarySource}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-600">{hire.location}</TableCell>
                        <TableCell className="text-slate-600 text-sm font-mono">{hire.hireDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-1 flex-wrap">
                            {hire.actions.map(action => (
                              <Badge key={action} variant="outline" className="text-[10px] px-1.5 py-0.5 h-5 border-slate-300 text-slate-600">
                                {action}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal className="w-4 h-4 text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View in SeekOut</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="p-4 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center">
                <span>Showing {filteredHires.length} results</span>
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
