import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import ExecutiveSummary from "@/pages/ExecutiveSummary";
import InfluencedHires from "@/pages/InfluencedHires";
import AdoptionMetrics from "@/pages/AdoptionMetrics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ExecutiveSummary} />
      <Route path="/influenced-hires" component={InfluencedHires} />
      <Route path="/adoption-metrics" component={AdoptionMetrics} />
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
