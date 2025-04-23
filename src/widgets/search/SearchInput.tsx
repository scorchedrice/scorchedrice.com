import * as React from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
  value: string;
  setValue: (v: string) => void;
};

export const SearchInput = ({value, setValue, placeholder, className} : SearchInputProps) => {
  function handleClear() {
    setValue("")
  }

  return (
    <div className="relative w-full max-w-[800px]">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Search className="w-6 h-6" />
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full h-12 px-12 rounded-md border bg-transparent text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50",
          className
        )}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
