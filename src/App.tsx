import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import ToolDetails from "./pages/ToolDetails";
import Trending from "./pages/Trending";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blogs from "./pages/Blogs";
import SuggestTool from "./pages/SuggestTool";

/* LAYOUT */
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          {/* PAGE CONTENT */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/tool/:slug" element={<ToolDetails />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/auth" element={<Auth />} />

              {/* ADMIN PANEL */}
              <Route path="/admin" element={<Admin />} />

              {/* STATIC PAGES */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/suggest-tool" element={<SuggestTool />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* GLOBAL FOOTER */}
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

