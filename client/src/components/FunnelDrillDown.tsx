import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FunnelCandidate } from "@/lib/mockData";

interface FunnelDrillDownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stageName: string;
  candidates: FunnelCandidate[];
}

export function FunnelDrillDown({ open, onOpenChange, stageName, candidates }: FunnelDrillDownProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {stageName} - {candidates.length} Candidate{candidates.length !== 1 ? 's' : ''}
          </DialogTitle>
          <DialogDescription>
            SeekOut-sourced candidates at this stage
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Search and Export */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by name..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                  <TableHead className="font-semibold text-slate-600">Name</TableHead>
                  <TableHead className="font-semibold text-slate-600">Current Stage</TableHead>
                  <TableHead className="font-semibold text-slate-600 text-right">Days in Stage</TableHead>
                  <TableHead className="font-semibold text-slate-600">SeekOut Activity</TableHead>
                  <TableHead className="font-semibold text-slate-600">Activity Date</TableHead>
                  <TableHead className="font-semibold text-slate-600">Diversity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCandidates.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-slate-500 py-8">
                      No candidates found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredCandidates.map((candidate) => (
                    <TableRow key={candidate.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium text-slate-900">
                        {candidate.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-300">
                          {candidate.currentStage}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-slate-600">
                        {candidate.daysInStage}
                      </TableCell>
                      <TableCell className="text-slate-600 text-sm">
                        {candidate.seekOutActivityType}
                      </TableCell>
                      <TableCell className="text-slate-600 text-sm font-mono">
                        {candidate.seekOutActivityDate}
                      </TableCell>
                      <TableCell>
                        {candidate.diversity ? (
                          <div className="flex flex-col gap-1">
                            {candidate.diversity.gender && (
                              <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-0">
                                {candidate.diversity.gender}
                              </Badge>
                            )}
                            {candidate.diversity.ethnicity && (
                              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-0">
                                {candidate.diversity.ethnicity}
                              </Badge>
                            )}
                          </div>
                        ) : (
                          <span className="text-slate-400 text-xs">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Results count */}
          <div className="text-sm text-slate-500">
            Showing {filteredCandidates.length} of {candidates.length} candidates
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

