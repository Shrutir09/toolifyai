import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ToolCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  imageUrl?: string;
  averageRating: number;
  totalReviews: number;
  isTrending?: boolean;
}

const ToolCard = ({
  id,
  name,
  slug,
  description,
  category,
  pricing,
  imageUrl,
  averageRating,
  totalReviews,
  isTrending,
}: ToolCardProps) => {
  const { toast } = useToast();
  const [isFavorited, setIsFavorited] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkFavorite(session.user.id);
    });
  }, [id]);

  const checkFavorite = async (userId: string) => {
    const { data } = await supabase
      .from("favorites")
      .select("id")
      .eq("user_id", userId)
      .eq("tool_id", id)
      .single();
    setIsFavorited(!!data);
  };

  const toggleFavorite = async () => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to save favorites",
        variant: "destructive",
      });
      return;
    }

    if (isFavorited) {
      await supabase.from("favorites").delete().eq("user_id", user.id).eq("tool_id", id);
      setIsFavorited(false);
      toast({ title: "Removed from favorites" });
    } else {
      await supabase.from("favorites").insert({ user_id: user.id, tool_id: id });
      setIsFavorited(true);
      toast({ title: "Added to favorites" });
    }
  };

  // FINAL IMAGE SOURCE
  const finalImage =
    imageUrl?.trim() || `https://logo.clearbit.com/${slug.toLowerCase()}.com` || "https://placehold.co/120x60?text=No+Logo";

  return (
    <Card
      className="
        group flex flex-col overflow-hidden
        rounded-xl border bg-card
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-primary/50
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 w-full bg-muted flex items-center justify-center p-2">
        <img
          key={finalImage}
          src={finalImage}
          alt={name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/120x60?text=No+Logo";
          }}
          className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {isTrending && (
          <Badge className="absolute top-2 right-2 bg-primary text-white shadow-sm text-xs">
            Trending
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-background/80 backdrop-blur-md shadow-sm hover:bg-background"
          onClick={toggleFavorite}
        >
          {isFavorited ? (
            <Heart className="h-5 w-5 fill-destructive text-destructive" />
          ) : (
            <Heart className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* HEADER */}
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 mt-1 text-sm line-clamp-1">
          <Badge variant="outline" className="text-xs">{category}</Badge>
          <Badge variant="secondary" className="text-xs">{pricing}</Badge>
        </CardDescription>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex flex-col flex-1 space-y-2 p-4 pt-2">
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center gap-1 text-xs">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-semibold">
            {averageRating > 0 ? averageRating.toFixed(1) : "No ratings"}
          </span>
          {totalReviews > 0 && (
            <span className="text-muted-foreground">({totalReviews})</span>
          )}
        </div>

        <Link to={`/tool/${slug}`} className="mt-auto">
          <Button className="w-full gap-2 text-sm">
            View Details
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
