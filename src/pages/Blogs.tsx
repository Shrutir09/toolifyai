import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blogs: React.FC = () => {
  useEffect(() => {
    document.title = "Blogs | ToolifyAI";
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 AI Tools for Productivity in 2024",
      excerpt: "Discover the most powerful AI tools that can transform your workflow and boost productivity.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
    },
    {
      id: 2,
      title: "How to Choose the Right AI Tool for Your Business",
      excerpt: "A comprehensive guide to evaluating and selecting AI tools that align with your business needs.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Business",
    },
    {
      id: 3,
      title: "The Future of AI in Creative Industries",
      excerpt: "Exploring how AI is revolutionizing design, content creation, and creative workflows.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Creative",
    },
    {
      id: 4,
      title: "AI Tools for Developers: A Complete Guide",
      excerpt: "Essential AI-powered tools every developer should know about for coding, debugging, and deployment.",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Development",
    },
    {
      id: 5,
      title: "Free vs. Paid AI Tools: What's Worth It?",
      excerpt: "Comparing free and premium AI tools to help you make informed decisions about your tool stack.",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Comparison",
    },
    {
      id: 6,
      title: "Getting Started with AI: A Beginner's Guide",
      excerpt: "Everything you need to know to start using AI tools effectively, even if you're a complete beginner.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Tutorial",
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Blog & Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Latest
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Articles & Insights
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights about AI tools and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="mt-4 w-full justify-between group" disabled>
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription>
              Get the latest articles and AI tool recommendations delivered to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Blogs;