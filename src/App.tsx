import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SaasDevelopmentServicePage = lazy(() => import("./pages/SaasDevelopmentServicePage"));
const WebDevelopmentServicePage = lazy(() => import("./pages/WebDevelopmentServicePage"));
const N8nAutomationServicePage = lazy(() => import("./pages/N8nAutomationServicePage"));
const JobFoxyCaseStudyPage = lazy(() => import("./pages/JobFoxyCaseStudyPage"));
const PhotovidStudioCaseStudyPage = lazy(() => import("./pages/PhotovidStudioCaseStudyPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="bg-noise" />

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/saas-development" element={<SaasDevelopmentServicePage />} />
            <Route path="/services/web-development" element={<WebDevelopmentServicePage />} />
            <Route path="/services/n8n-automation" element={<N8nAutomationServicePage />} />
            <Route path="/case-studies/jobfoxy" element={<JobFoxyCaseStudyPage />} />
            <Route path="/case-studies/photovid-studio" element={<PhotovidStudioCaseStudyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
