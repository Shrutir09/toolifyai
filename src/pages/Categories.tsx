import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategorySidebar from "@/components/CategorySidebar";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [pricingFilter, setPricingFilter] = useState("all");
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    loadTools();
  }, [selectedCategory, searchQuery, pricingFilter]);

  const loadTools = async () => {
    let query = supabase.from('tools').select('*');

    // If search query matches a category name, filter by that category
    const categoryNames = [
      "AI Chatbot", "AI Search", "AI Presentation Tools", "AI App Builders", "Communication",
      "Education", "Coding", "Design", "Content", "Productivity", "Marketing"
    ];
    const matchingCategory = categoryNames.find(cat => 
      cat.toLowerCase().includes(searchQuery.toLowerCase()) || 
      searchQuery.toLowerCase().includes(cat.toLowerCase())
    );

    if (matchingCategory && selectedCategory === "all") {
      query = query.eq('category', matchingCategory);
    } else if (selectedCategory !== "all") {
      query = query.eq('category', selectedCategory);
    }

    if (searchQuery && !matchingCategory) {
      query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
    }

    if (pricingFilter !== "all") {
      query = query.ilike('pricing', `%${pricingFilter}%`);
    }

    const { data } = await query.order('average_rating', { ascending: false });
    if (data) setTools(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Browse AI Tools</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <CategorySidebar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search tools..."
                  />
                </div>
                <Select value={pricingFilter} onValueChange={setPricingFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Pricing</SelectItem>
                    <SelectItem value="Free">Free</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  <p className="text-muted-foreground">No tools found matching your criteria</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Categories;
