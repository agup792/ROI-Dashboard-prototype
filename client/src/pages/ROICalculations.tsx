import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, DollarSign, Users, Percent, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ROICalculations() {
  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">ROI Methodology</h1>
          <p className="text-slate-500">Breakdown of formulas and assumptions used for value reporting</p>
        </div>

        <div className="grid gap-6">
          {/* Cost Per Hire */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/80"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Cost Per Hire</CardTitle>
              </div>
              <CardDescription>
                Calculates the efficiency of your SeekOut investment relative to hiring outcomes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">Formula</div>
                <div className="flex flex-col md:flex-row items-center gap-4 text-lg font-medium text-slate-900">
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">Total Annual Contract Value (ARR)</div>
                  <div className="text-slate-400">÷</div>
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">Total Influenced Hires</div>
                  <div className="text-slate-400">=</div>
                  <div className="text-primary font-bold">Cost Per Hire</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Example Calculation</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Annual Contract Value</span>
                      <span className="font-mono font-medium">$150,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Influenced Hires (L12M)</span>
                      <span className="font-mono font-medium">35</span>
                    </div>
                    <div className="flex justify-between py-2 pt-3 text-slate-900 font-medium bg-slate-50 px-2 -mx-2 rounded">
                      <span>Result</span>
                      <span className="font-mono text-primary">$4,286</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  <h4 className="font-semibold text-slate-900 mb-2">Why this matters</h4>
                  <p>
                    This metric demonstrates the direct acquisition cost per candidate sourced through SeekOut. 
                    Comparing this to external agency fees (typically $20k-$30k per hire) highlights significant cost avoidance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agency Savings */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <BriefcaseIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <CardTitle>Agency Savings</CardTitle>
              </div>
              <CardDescription>
                Estimated cost avoidance by sourcing candidates internally vs. using external agencies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">Formula</div>
                <div className="flex flex-col md:flex-row items-center gap-4 text-lg font-medium text-slate-900">
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">Sum of Hires' Salaries</div>
                  <div className="text-slate-400">×</div>
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">20% (Standard Agency Fee)</div>
                  <div className="text-slate-400">=</div>
                  <div className="text-emerald-600 font-bold">Estimated Savings</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Example Calculation</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>8 Senior Leadership × $250k × 20%</span>
                      <span className="font-mono font-medium">$400,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>5 Managers × $180k × 20%</span>
                      <span className="font-mono font-medium">$180,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>12 Lead ICs × $160k × 20%</span>
                      <span className="font-mono font-medium">$384,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>10 ICs × $130k × 20%</span>
                      <span className="font-mono font-medium">$260,000</span>
                    </div>
                    <div className="flex justify-between py-2 pt-3 text-slate-900 font-medium bg-slate-50 px-2 -mx-2 rounded">
                      <span>Total Savings (35 hires)</span>
                      <span className="font-mono text-emerald-600">$1,224,000</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  <h4 className="font-semibold text-slate-900 mb-2">Why this matters</h4>
                  <p>
                    This represents "Hard ROI" - actual dollars saved that would have otherwise been spent on headhunters. 
                    Even replacing just 2-3 agency hires typically covers the entire cost of the SeekOut platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SeekOut Value Add */}
          <Card className="border-slate-200 shadow-sm overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Percent className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle>SeekOut Value Add</CardTitle>
              </div>
              <CardDescription>
                The proportion of your total hiring volume that was directly influenced by SeekOut.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">Formula</div>
                <div className="flex flex-col md:flex-row items-center gap-4 text-lg font-medium text-slate-900">
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">Influenced Hires</div>
                  <div className="text-slate-400">÷</div>
                  <div className="px-4 py-2 bg-white rounded shadow-sm border border-slate-200">Total Company Hires</div>
                  <div className="text-slate-400">=</div>
                  <div className="text-blue-600 font-bold">% Value Add</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Example Calculation</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>SeekOut Influenced Hires (L12M)</span>
                        <span className="font-mono font-medium">35</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span>Total Company Hires (L12M)</span>
                        <span className="font-mono font-medium">150</span>
                      </div>
                      <div className="flex justify-between py-2 pt-3 text-slate-900 font-medium bg-slate-50 px-2 -mx-2 rounded">
                        <span>Result</span>
                        <span className="font-mono text-blue-600">23.3%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Definition of "Influenced"</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      A hire is considered "Influenced" if any of the following actions were taken in SeekOut prior to the offer date:
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium border border-slate-200">Profile Viewed</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium border border-slate-200">Added to Project</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium border border-slate-200">Exported</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium border border-slate-200">Contact Info Revealed</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  <h4 className="font-semibold text-slate-900 mb-2">Why this matters</h4>
                  <p>
                    This metric quantifies SeekOut's contribution to your overall talent acquisition strategy. 
                    A higher percentage indicates that SeekOut is a critical source of talent for your organization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
