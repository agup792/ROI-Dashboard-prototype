import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ACTIVITY_REPORT_DATA, FUNNEL_STAGES, MOCK_FUNNEL_CANDIDATES } from "@/lib/mockData";
import { Download, FileSpreadsheet, Presentation } from "lucide-react";
import { FunnelChart } from "@/components/FunnelChart";
import { FunnelDrillDown } from "@/components/FunnelDrillDown";

// Reusable metric card component for this page
function MetricCard({ 
  label, 
  value, 
  isPercentage = false 
}: { 
  label: string; 
  value: number; 
  isPercentage?: boolean;
}) {
  return (
    <div className="bg-slate-100 rounded-lg p-4">
      <p className="text-sm text-slate-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-slate-900 font-mono">
        {isPercentage ? `${value.toFixed(2)}%` : value.toLocaleString()}
      </p>
    </div>
  );
}

// Large metric card for the top section
function LargeMetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-100 rounded-lg p-6 border-l-4 border-violet-500">
      <p className="text-sm text-slate-600 mb-2">{label}</p>
      <p className="text-4xl font-bold text-slate-900 font-mono">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

export default function ActivityReport() {
  const data = ACTIVITY_REPORT_DATA;
  const [drillDownOpen, setDrillDownOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<string>("");

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
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              SeekOut Activity Report Summary
            </h1>
            <p className="text-slate-500">
              Comprehensive overview of recruiter activity and engagement metrics
            </p>
          </div>
        </div>

        {/* Sourcing Funnel - Detailed View */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>SeekOut Sourcing Funnel</CardTitle>
            <CardDescription>
              Complete candidate journey from SeekOut activity to ATS outcomes • Click any stage to view candidates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FunnelChart data={FUNNEL_STAGES} onStageClick={handleStageClick} />
          </CardContent>
        </Card>

        {/* Profile Totals - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LargeMetricCard 
            label="Total profiles that users took action on" 
            value={data.profileTotals.total} 
          />
          <LargeMetricCard 
            label="Unique profiles that users took action on" 
            value={data.profileTotals.unique} 
          />
          <LargeMetricCard 
            label="Unique Diverse" 
            value={data.profileTotals.uniqueDiverse} 
          />
        </div>

        {/* Diversity Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Diversity</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <MetricCard label="Women" value={data.diversity.women} />
            <MetricCard label="African American" value={data.diversity.africanAmerican} />
            <MetricCard label="Hispanic" value={data.diversity.hispanic} />
            <MetricCard label="Asian" value={data.diversity.asian} />
            <MetricCard label="Veteran" value={data.diversity.veteran} />
          </div>
        </div>

        {/* Talent Pools Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Talent pools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            <MetricCard label="Public" value={data.talentPools.public} />
            <MetricCard label="Rediscovery" value={data.talentPools.rediscovery} />
            <MetricCard label="Internal Talent" value={data.talentPools.internalTalent} />
            <MetricCard label="Healthcare" value={data.talentPools.healthcare} />
            <MetricCard label="Nursing" value={data.talentPools.nursing} />
            <MetricCard label="Applicant Review" value={data.talentPools.applicantReview} />
            <MetricCard label="Github" value={data.talentPools.github} />
            <MetricCard label="Expert" value={data.talentPools.expert} />
          </div>
        </div>

        {/* Profiles With Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Profiles with</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard label="Security clearance" value={data.profilesWith.securityClearance} />
            <MetricCard label="Enriched ATS" value={data.profilesWith.enrichedATS} />
          </div>
        </div>

        {/* Activity Type Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Activity type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <MetricCard label="Request Contact" value={data.activityTypes.requestContact} isPercentage />
            <MetricCard label="Added To Project" value={data.activityTypes.addedToProject} isPercentage />
            <MetricCard label="Profiles Viewed" value={data.activityTypes.profilesViewed} isPercentage />
            <MetricCard label="Exported Profiles" value={data.activityTypes.exportedProfiles} isPercentage />
            <MetricCard label="Moved Stages" value={data.activityTypes.movedStages} isPercentage />
          </div>
        </div>

        {/* Top Lists Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Top 25 and 50 lists included in report
          </h2>
          <p className="text-xl font-semibold text-slate-800">
            {data.topLists.join(", ")}
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 justify-end pt-4 border-t border-slate-200">
          <Button 
            className="bg-violet-600 hover:bg-violet-700 text-white gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            DOWNLOAD XLS
          </Button>
          <Button 
            className="bg-violet-600 hover:bg-violet-700 text-white gap-2"
          >
            <Presentation className="w-4 h-4" />
            DOWNLOAD PPT
          </Button>
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

