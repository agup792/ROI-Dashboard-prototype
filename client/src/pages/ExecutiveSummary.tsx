import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, Calendar, UserCheck, DollarSign, Briefcase, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
import { LEVEL_STATS, DIVERSITY_STATS } from "@/lib/mockData";

export default function ExecutiveSummary() {
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

        {/* Metrics Grid */}
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
            value="$2.1M"
            change={8}
            icon={<Briefcase className="h-4 w-4" />}
            tooltip="Estimated savings based on 20% agency fee avoidance"
          />
          <MetricCard
            title="SeekOut Value Add"
            value="2.3%"
            change={0.5}
            icon={<TrendingUp className="h-4 w-4" />}
            tooltip="Percentage of total hires influenced by SeekOut"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4 shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Influenced Hires by Level</CardTitle>
              <CardDescription>Breakdown of hires across seniority levels</CardDescription>
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
                      tick={{ fill: '#64748b', fontSize: 12 }} 
                      width={100}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Diversity Breakdown</CardTitle>
              <CardDescription>Gender distribution of influenced hires</CardDescription>
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
      </div>
    </DashboardLayout>
  );
}
