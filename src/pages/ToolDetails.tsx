import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Star, ExternalLink, Heart, Check, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ToolDetails = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const [tool, setTool] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [userReview, setUserReview] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    loadTool();
    loadReviews();
  }, [slug]);

  const loadTool = async () => {
    const { data } = await supabase
      .from('tools')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (data) setTool(data);
  };

  const loadReviews = async () => {
    const { data: toolData } = await supabase
      .from('tools')
      .select('id')
      .eq('slug', slug)
      .single();

    if (!toolData) return;

    const { data: reviewsData } = await supabase
      .from('reviews')
      .select('*, profiles(full_name, email)')
      .eq('tool_id', toolData.id)
      .order('created_at', { ascending: false });

    if (reviewsData) {
      setReviews(reviewsData);
      
      if (user) {
        const myReview = reviewsData.find((r) => r.user_id === user.id);
        if (myReview) {
          setUserReview(myReview);
          setRating(myReview.rating);
          setComment(myReview.comment || "");
        }
      }
    }
  };

  const handleSubmitReview = async () => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to submit a review",
        variant: "destructive",
      });
      return;
    }

    if (!tool) return;

    const reviewData = {
      tool_id: tool.id,
      user_id: user.id,
      rating,
      comment: comment.trim() || null,
    };

    if (userReview) {
      const { error } = await supabase
        .from('reviews')
        .update(reviewData)
        .eq('id', userReview.id);

      if (error) {
        toast({ title: "Error updating review", variant: "destructive" });
      } else {
        toast({ title: "Review updated successfully" });
        loadReviews();
        loadTool();
      }
    } else {
      const { error } = await supabase
        .from('reviews')
        .insert(reviewData);

      if (error) {
        toast({ title: "Error submitting review", variant: "destructive" });
      } else {
        toast({ title: "Review submitted successfully" });
        loadReviews();
        loadTool();
      }
    }
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <img
                  src={tool.image_url}
                  alt={tool.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-4xl">{tool.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{tool.category}</Badge>
                      <Badge variant="secondary">{tool.pricing}</Badge>
                    </div>
                  </div>
                  <a href={tool.external_link} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2">
                      Visit Tool
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>

                {tool.features && tool.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tool.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tool.pros && tool.pros.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">Pros</h3>
                      <ul className="space-y-2">
                        {tool.pros.map((pro: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tool.cons && tool.cons.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-destructive">Cons</h3>
                      <ul className="space-y-2">
                        {tool.cons.map((con: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Submit Review */}
                <div className="space-y-4 border-b pb-6">
                  <h3 className="font-semibold">
                    {userReview ? "Update Your Review" : "Write a Review"}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Rating:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <Textarea
                    placeholder="Share your experience with this tool..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                  />

                  <Button onClick={handleSubmitReview}>
                    {userReview ? "Update Review" : "Submit Review"}
                  </Button>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold">
                            {review.profiles?.full_name || review.profiles?.email || "Anonymous"}
                          </p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {review.comment && (
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      )}
                    </div>
                  ))}

                  {reviews.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No reviews yet. Be the first to review!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold">
                      {tool.average_rating > 0 ? tool.average_rating.toFixed(1) : "N/A"}
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                  <p className="text-2xl font-bold mt-1">{tool.total_reviews}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <Badge className="mt-1">{tool.category}</Badge>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Pricing</p>
                  <Badge variant="secondary" className="mt-1">{tool.pricing}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
