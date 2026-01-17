import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SuggestTool: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    toolName: "",
    toolUrl: "",
    category: "",
    description: "",
    whyRecommend: "",
    yourName: "",
    yourEmail: "",
  });

  useEffect(() => {
    document.title = "Suggest a Tool | ToolifyAI";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Tool suggestion submitted!",
      description: "Thank you for your suggestion. Our team will review it and add it to the directory if approved.",
    });
    setFormData({
      toolName: "",
      toolUrl: "",
      category: "",
      description: "",
      whyRecommend: "",
      yourName: "",
      yourEmail: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    "Productivity",
    "Design",
    "Development",
    "Marketing",
    "Writing",
    "Video",
    "Audio",
    "Business",
    "Education",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="container py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Share Your Discovery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Suggest a
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Tool
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Found an amazing AI tool that should be in our directory? Share it with us and help the community discover it!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Tool Information</CardTitle>
              <CardDescription>
                Please provide as much information as possible about the tool you're suggesting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="toolName">Tool Name *</Label>
                    <Input
                      id="toolName"
                      name="toolName"
                      type="text"
                      required
                      value={formData.toolName}
                      onChange={handleChange}
                      placeholder="e.g., ChatGPT, Midjourney"
                      className="transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="toolUrl">Tool Website URL *</Label>
                    <Input
                      id="toolUrl"
                      name="toolUrl"
                      type="url"
                      required
                      value={formData.toolUrl}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    required
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="transition-colors duration-300">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tool Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="What does this tool do? What are its main features?"
                    rows={4}
                    className="transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whyRecommend">Why do you recommend this tool? *</Label>
                  <Textarea
                    id="whyRecommend"
                    name="whyRecommend"
                    required
                    value={formData.whyRecommend}
                    onChange={handleChange}
                    placeholder="Share your experience and why you think others would benefit from this tool..."
                    rows={4}
                    className="transition-colors duration-300"
                  />
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="yourName">Your Name *</Label>
                      <Input
                        id="yourName"
                        name="yourName"
                        type="text"
                        required
                        value={formData.yourName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yourEmail">Your Email *</Label>
                      <Input
                        id="yourEmail"
                        name="yourEmail"
                        type="email"
                        required
                        value={formData.yourEmail}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree that the tool information is accurate and publicly available. 
                    Our team will review your suggestion and may contact you for additional information.
                  </p>
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Submit Suggestion
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
            <CardHeader>
              <CardTitle className="text-xl">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Our team reviews all tool suggestions within 2-3 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>If approved, the tool will be added to our directory and you'll be notified.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>We may reach out for additional information or clarification if needed.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SuggestTool;
