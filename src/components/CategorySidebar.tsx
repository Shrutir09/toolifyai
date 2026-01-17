import { Button } from "@/components/ui/button";
import { BookOpen, Code, Palette, FileText, Zap, TrendingUp, MoreHorizontal } from "lucide-react";

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "all", label: "All Tools", icon: MoreHorizontal },
  { id: "Education", label: "Education", icon: BookOpen },
  { id: "Coding", label: "Coding", icon: Code },
  { id: "Design", label: "Design", icon: Palette },
  { id: "Content", label: "Content", icon: FileText },
  { id: "Productivity", label: "Productivity", icon: Zap },
  { id: "Marketing", label: "Marketing", icon: TrendingUp },
];

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className="h-5 w-5" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
