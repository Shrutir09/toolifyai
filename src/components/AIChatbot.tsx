import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, X, Minimize2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm ToolifyAI Assistant. I can help you find the perfect AI tools, answer questions about our platform, and guide you through our features. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Category-related responses
    if (lowerMessage.includes("category") || lowerMessage.includes("categories")) {
      return "We have many categories including AI Chatbot, AI Search, AI Presentation Tools, AI App Builders, Communication, Education, Coding, Design, Content, Productivity, and Marketing. You can browse tools by category from the Categories page!";
    }

    if (lowerMessage.includes("chatbot") || lowerMessage.includes("ai chatbot")) {
      return "AI Chatbot tools help you create conversational AI assistants. Check out our AI Chatbot category to find tools like ChatGPT, Claude, and other chatbot platforms that can help with customer service, content generation, and more.";
    }

    if (lowerMessage.includes("search") || lowerMessage.includes("ai search")) {
      return "AI Search tools use artificial intelligence to provide better search results. Visit our AI Search category to discover tools that offer semantic search, AI-powered search engines, and intelligent information retrieval systems.";
    }

    if (lowerMessage.includes("presentation") || lowerMessage.includes("slide")) {
      return "AI Presentation Tools can help you create stunning presentations quickly. Our AI Presentation Tools category features tools that generate slides, design layouts, and even create content for your presentations automatically.";
    }

    if (lowerMessage.includes("app builder") || lowerMessage.includes("build app")) {
      return "AI App Builders allow you to create applications without extensive coding knowledge. Check our AI App Builders category for tools that use AI to help you build web apps, mobile apps, and other software solutions.";
    }

    // General questions
    if (lowerMessage.includes("how") && lowerMessage.includes("use")) {
      return "To use ToolifyAI, simply browse our categories or use the search bar to find tools. You can create an account to save favorites, leave reviews, and suggest new tools. Click on any tool card to see detailed information, reviews, and ratings.";
    }

    if (lowerMessage.includes("free") || lowerMessage.includes("pricing")) {
      return "Many tools on ToolifyAI offer free tiers or are completely free. Each tool listing shows its pricing model. You can also filter tools by pricing (Free/Paid) on the Categories page. Some tools offer freemium plans with limited features for free.";
    }

    if (lowerMessage.includes("favorite") || lowerMessage.includes("save")) {
      return "To save favorites, create a free account and log in. Then click the heart icon on any tool card to add it to your favorites. Access all your saved tools from the Favorites page in the navigation menu.";
    }

    if (lowerMessage.includes("suggest") || lowerMessage.includes("add tool")) {
      return "You can suggest a tool by visiting the 'Suggest a Tool' page from the navigation menu. Fill out the form with the tool's information, and our team will review it. If approved, it will be added to our directory!";
    }

    if (lowerMessage.includes("trending") || lowerMessage.includes("popular")) {
      return "Trending tools are featured on our homepage and are marked with a 'Trending' badge. These are tools that are currently popular based on user engagement, reviews, and ratings. Check the homepage to see what's trending!";
    }

    // Default responses
    const defaultResponses = [
      "That's a great question! I can help you find AI tools, explain how ToolifyAI works, or answer questions about our features. What would you like to know?",
      "I'm here to help! You can ask me about categories, specific tools, how to use the platform, or anything else about ToolifyAI. What can I help you with?",
      "I'd be happy to assist! Try asking about specific tool categories, how to save favorites, how to suggest tools, or browse our FAQ section for more detailed information.",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 bg-gradient-to-br from-primary to-secondary"
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <Card
      className={cn(
        "fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-8rem)] flex flex-col shadow-2xl border-2 transition-all duration-300",
        isMinimized && "h-auto"
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <CardTitle className="text-lg">ToolifyAI Assistant</CardTitle>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 animate-fade-in",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    {!message.isUser && (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                    {message.isUser && (
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold">You</span>
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start animate-fade-in">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default AIChatbot;

