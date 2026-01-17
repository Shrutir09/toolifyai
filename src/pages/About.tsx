import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Sparkles, Users, Target, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About | ToolifyAI";
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">About ToolifyAI</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Discover the Best
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Tools for Your Needs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            ToolifyAI is your comprehensive directory for discovering, comparing, and exploring 
            cutting-edge AI tools across every category. We help you find the perfect solution 
            for your projects, whether you're a developer, designer, marketer, or entrepreneur.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
              <CardDescription className="text-base">
                What drives us every day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to democratize access to AI tools by providing a centralized platform 
                where users can discover, evaluate, and share the best AI solutions. We believe that 
                everyone should have the tools they need to innovate and create, regardless of their 
                technical background or budget.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ToolifyAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Curated Collection</CardTitle>
                <CardDescription>
                  Hand-picked AI tools verified by our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every tool in our directory is carefully reviewed and verified to ensure quality 
                  and reliability for our community.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Powered by user reviews and suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our community actively contributes by suggesting new tools, writing reviews, and 
                  sharing their experiences to help others make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Always Updated</CardTitle>
                <CardDescription>
                  Fresh tools and features added regularly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We continuously update our directory with the latest AI tools and features, ensuring 
                  you always have access to cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">AI Tools</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Users</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5K+</div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Community</CardTitle>
              <CardDescription>
                Start discovering amazing AI tools today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for productivity tools, creative solutions, or development 
                resources, ToolifyAI has something for everyone. Join thousands of users who are 
                already discovering their next favorite AI tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/categories">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors duration-300">
                    Explore Tools
                  </button>
                </a>
                <a href="/suggest-tool">
                  <button className="px-6 py-3 border border-border bg-background hover:bg-accent rounded-md font-medium transition-colors duration-300">
                    Suggest a Tool
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;


