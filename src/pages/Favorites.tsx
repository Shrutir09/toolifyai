import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Favorites = () => {
  const navigate = useNavigate();
  const [tools, setTools] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        loadFavorites(session.user.id);
      }
    });
  }, [navigate]);

  const loadFavorites = async (userId: string) => {
    const { data } = await supabase
      .from('favorites')
      .select('tool_id, tools(*)')
      .eq('user_id', userId);
    
    if (data) {
      const favoriteTools = data.map((fav: any) => fav.tools);
      setTools(favoriteTools);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <h1 className="text-4xl font-bold">My Favorites</h1>
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
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No favorites yet. Start exploring and save tools!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
