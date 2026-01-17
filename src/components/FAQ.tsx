import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ToolifyAI?",
      answer: "ToolifyAI is a comprehensive directory that helps you discover, compare, and explore cutting-edge AI tools across various categories. We curate the best AI tools to help you find the perfect solution for your needs, whether you're a developer, designer, marketer, or entrepreneur.",
    },
    {
      question: "How do I suggest a new AI tool?",
      answer: "You can suggest a new AI tool by visiting our 'Suggest a Tool' page. Simply fill out the form with the tool's name, website URL, category, description, and why you recommend it. Our team reviews all suggestions and adds approved tools to the directory.",
    },
    {
      question: "Are the tools on ToolifyAI free to use?",
      answer: "ToolifyAI features tools with various pricing models - some are completely free, others offer freemium plans, and some are paid. Each tool listing includes pricing information so you can find options that fit your budget. We recommend checking the tool's official website for the most current pricing details.",
    },
    {
      question: "How do I save my favorite tools?",
      answer: "To save your favorite tools, you'll need to create a free account and log in. Once logged in, you can click the heart icon on any tool card to add it to your favorites. You can access all your saved tools from the 'Favorites' page in the navigation menu.",
    },
    {
      question: "Can I leave reviews for tools?",
      answer: "Yes! After creating an account, you can leave reviews and ratings for any tool in our directory. Your reviews help other users make informed decisions. Simply navigate to a tool's detail page and scroll to the reviews section to share your experience.",
    },
    {
      question: "How often is the directory updated?",
      answer: "We continuously update our directory with new tools and features. Our team reviews user suggestions regularly and adds new tools weekly. We also update existing tool information to ensure accuracy and include the latest features and pricing.",
    },
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-4">
          <HelpCircle className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Common Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most frequently asked questions about ToolifyAI
        </p>
      </div>

      <Card className="border-2 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="sr-only">FAQ</CardTitle>
          <CardDescription className="sr-only">Frequently asked questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQ;

