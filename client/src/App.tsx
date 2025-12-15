import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ExecutiveSummary from "@/pages/ExecutiveSummary";
import InfluencedHires from "@/pages/InfluencedHires";
import UserAdoptionUsage from "@/pages/UserAdoptionUsage";
import ROICalculations from "@/pages/ROICalculations";
import ActivityReport from "@/pages/ActivityReport";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ExecutiveSummary} />
      <Route path="/influenced-hires" component={InfluencedHires} />
      <Route path="/user-adoption-usage" component={UserAdoptionUsage} />
      <Route path="/roi-calculations" component={ROICalculations} />
      <Route path="/activity-report" component={ActivityReport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
