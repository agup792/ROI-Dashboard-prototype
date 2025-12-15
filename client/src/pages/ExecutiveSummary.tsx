import React, { useMemo, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, Calendar, UserCheck, DollarSign, Briefcase, TrendingUp, Users, Target, Activity, Zap, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
import { LEVEL_STATS, DIVERSITY_STATS, ACTIVITY_REPORT_DATA, MOCK_HIRES, FUNNEL_STAGES, MOCK_FUNNEL_CANDIDATES } from "@/lib/mockData";
import { FunnelChart } from "@/components/FunnelChart";
import { FunnelDrillDown } from "@/components/FunnelDrillDown";
import { useLocation } from "wouter";

export default function ExecutiveSummary() {
  const [, setLocation] = useLocation();
  const [drillDownOpen, setDrillDownOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<string>("");

  // Compute data source distribution from mock hires
  const dataSourceStats = useMemo(() => {
    const sourceCounts = MOCK_HIRES.reduce((acc, hire) => {
      acc[hire.primarySource] = (acc[hire.primarySource] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(sourceCounts)
      .map(([source, count]) => ({ source, hires: count }))
      .sort((a, b) => b.hires - a.hires);
  }, []);

  const handleStageClick = (stageName: string) => {
    setSelectedStage(stageName);
    setDrillDownOpen(true);
  };

  const selectedCandidates = MOCK_FUNNEL_CANDIDATES.filter(
    (c) => c.currentStage === selectedStage
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h1>
            <p className="text-slate-500">ROI and impact analysis for Acme Corp</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="gap-2 bg-primary hover:bg-primary/90 shadow-sm">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* ROI Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Influenced Hires"
            value="35"
            change={12}
            icon={<UserCheck className="h-4 w-4" />}
            tooltip="Candidates hired where SeekOut was used in the sourcing process"
          />
          <MetricCard
            title="Cost Per Hire"
            value="$4,286"
            change={-5}
            icon={<DollarSign className="h-4 w-4" />}
            tooltip="Total ARR divided by number of influenced hires"
          />
          <MetricCard
            title="Agency Savings"
            value="$1.2M"
            change={8}
            icon={<Briefcase className="h-4 w-4" />}
            tooltip="Estimated savings based on 20% agency fee avoidance"
          />
          <MetricCard
            title="SeekOut Value Add"
            value="23.3%"
            change={0.5}
            icon={<TrendingUp className="h-4 w-4" />}
            tooltip="Percentage of total hires influenced by SeekOut"
          />
        </div>

        {/* Activity Snapshot Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Activity Snapshot</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-slate-200 shadow-sm bg-slate-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Total Profiles Actioned</CardTitle>
                  <Users className="h-4 w-4 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 font-mono">
                  {ACTIVITY_REPORT_DATA.profileTotals.total.toLocaleString()}
                </div>
                <p className="text-xs text-slate-500 mt-1">Last 12 months</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-slate-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Unique Diverse Profiles</CardTitle>
                  <Target className="h-4 w-4 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 font-mono">
                  {ACTIVITY_REPORT_DATA.profileTotals.uniqueDiverse.toLocaleString()}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {((ACTIVITY_REPORT_DATA.profileTotals.uniqueDiverse / ACTIVITY_REPORT_DATA.profileTotals.unique) * 100).toFixed(1)}% of unique profiles
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-slate-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Active Users</CardTitle>
                  <Activity className="h-4 w-4 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 font-mono">22</div>
                <p className="text-xs text-slate-500 mt-1">88% license utilization</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm bg-slate-50/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">Top Feature Usage</CardTitle>
                  <Zap className="h-4 w-4 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 font-mono">56%</div>
                <p className="text-xs text-slate-500 mt-1">Diversity Filters</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sourcing Funnel Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-sm border-slate-200 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>SeekOut Sourcing Funnel</CardTitle>
                  <CardDescription>Candidate progression from SeekOut to ATS outcomes</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 text-primary hover:text-primary/80"
                  onClick={() => setLocation("/activity-report")}
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <FunnelChart data={FUNNEL_STAGES} compact onStageClick={handleStageClick} />
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 bg-gradient-to-br from-slate-50 to-white">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
              <CardDescription>Sourcing funnel highlights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-mono font-semibold">34%</span> phone screen rate
                  </p>
                  <p className="text-xs text-slate-600">
                    420 of 1,250 SeekOut-sourced candidates reached phone screen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-mono font-semibold">88%</span> offer acceptance
                  </p>
                  <p className="text-xs text-slate-600">
                    35 hired, 5 rejected from 40 offers extended
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-600 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-mono font-semibold">34%</span> final interview rate
                  </p>
                  <p className="text-xs text-slate-600">
                    95 candidates reached final interview from 280
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row - 3 Charts */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Influenced Hires by Level</CardTitle>
              <CardDescription>Breakdown across seniority levels</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={LEVEL_STATS} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fill: '#64748b', fontSize: 11 }} 
                      width={95}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Influenced Hires by Data Source</CardTitle>
              <CardDescription>Primary source attribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataSourceStats} margin={{ top: 5, right: 16, left: 0, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="source" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      allowDecimals={false}
                      width={28}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value) => [value, 'Hires']}
                    />
                    <Bar dataKey="hires" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={28} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Diversity Breakdown</CardTitle>
              <CardDescription>Gender distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DIVERSITY_STATS}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {DIVERSITY_STATS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Drill-down Modal */}
        <FunnelDrillDown
          open={drillDownOpen}
          onOpenChange={setDrillDownOpen}
          stageName={selectedStage}
          candidates={selectedCandidates}
        />
      </div>
    </DashboardLayout>
  );
}
