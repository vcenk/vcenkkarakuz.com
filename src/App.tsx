import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for code-splitting
const Index = lazy(() => import("./pages/Index"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const AnimationLibrary = lazy(() => import("./pages/AnimationLibrary"));
const AutomationsPage = lazy(() => import("./pages/AutomationsPage"));
const ComponentsPage = lazy(() => import("./pages/ComponentsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* GLOBAL NOISE OVERLAY - Adds texture to the dark background */}
      <div className="bg-noise" />

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/animations" element={<AnimationLibrary />} />
            <Route path="/automations" element={<AutomationsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
