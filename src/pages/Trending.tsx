import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Trending = () => {
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    loadTrendingTools();
  }, []);

  const loadTrendingTools = async () => {
    const { data } = await supabase
      .from('tools')
      .select('*')
      .eq('is_trending', true)
      .order('average_rating', { ascending: false });
    
    if (data) setTools(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Trending AI Tools</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
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
          ))}
        </div>

        {tools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No trending tools found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
