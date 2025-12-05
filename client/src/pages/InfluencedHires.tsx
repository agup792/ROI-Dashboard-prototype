import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_HIRES, Hire } from "@/lib/mockData";
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

export default function InfluencedHires() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");

  const filteredHires = MOCK_HIRES.filter((hire) => {
    const matchesSearch = 
      hire.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hire.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || hire.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Senior Leadership": return "bg-purple-100 text-purple-700 hover:bg-purple-100";
      case "Manager": return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "Lead IC": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
      default: return "bg-slate-100 text-slate-700 hover:bg-slate-100";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
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

        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          {/* Filters */}
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
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
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                  <TableHead className="font-semibold text-slate-600">Name</TableHead>
                  <TableHead className="font-semibold text-slate-600">Title</TableHead>
                  <TableHead className="font-semibold text-slate-600">Level</TableHead>
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
      </div>
    </DashboardLayout>
  );
}
