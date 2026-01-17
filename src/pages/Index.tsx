import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import FAQ from "@/components/FAQ";
import AIChatbot from "@/components/AIChatbot";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingTools, setTrendingTools] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadTrendingTools();
  }, []);

  const loadTrendingTools = async () => {
    const { data } = await supabase
      .from('tools')
      .select('*')
      .eq('is_trending', true)
      .order('average_rating', { ascending: false })
      .limit(6);
    
    if (data) setTrendingTools(data);
  };

  const handleSearch = () => {
    navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-50 transition-opacity duration-300" />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 transition-all duration-300 hover:scale-105">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Discover the best AI tools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Find the Perfect
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI Tool for You
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore, compare, and discover cutting-edge AI tools across every category.
              Save your favorites and share reviews with the community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in transition-all duration-300" style={{ animationDelay: "0.3s" }}>
              <div className="w-full sm:w-auto transition-all duration-300 hover:scale-105">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search for AI tools by name or category..."
                />
              </div>
              <Button 
                size="lg" 
                onClick={handleSearch} 
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Search
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tools Section */}
      <section className="container py-16">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <TrendingUp className="h-8 w-8 text-primary transition-transform duration-300 hover:scale-110" />
          <h2 className="text-3xl md:text-4xl font-bold">Trending Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTools.map((tool, index) => (
            <div
              key={tool.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ToolCard
                id={tool.id}
                name={tool.name}
                slug={tool.slug}
                description={tool.description}
                category={tool.category}
                pricing={tool.pricing}
                imageUrl={tool.image_url}
                averageRating={tool.average_rating}
                totalReviews={tool.total_reviews}
                isTrending={tool.is_trending}
              />
            </div>
          ))}
        </div>

        {trendingTools.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">No trending tools found</p>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;
