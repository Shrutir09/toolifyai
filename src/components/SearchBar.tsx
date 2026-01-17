import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search AI tools..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl transition-all duration-300">
      <Search 
        className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-all duration-300 ${
          isFocused ? "text-primary scale-110" : ""
        }`} 
      />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`pl-12 h-12 text-base shadow-lg transition-all duration-300 ${
          isFocused ? "ring-2 ring-primary shadow-xl" : ""
        }`}
      />
    </div>
  );
};

export default SearchBar;
