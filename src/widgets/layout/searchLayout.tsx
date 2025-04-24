import * as React from 'react';

import {SearchInput} from "@/widgets/search/SearchInput";
import {Link} from "gatsby";
import ThemeToggle from "@/widgets/theme/ThemeToggle";
import {ReactNode} from "react";
import {ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/button";

type SearchLayoutProps = {
  children: ReactNode;
  value: string;
  setValue: (value: string) => void;
}

export default function SearchLayout({ value, setValue, children }: SearchLayoutProps) {
  return (
    <div className="min-h-[100dvh]">
      <nav className="flex w-full max-w-[800px] justify-between items-center mx-auto pt-4 p-4">
        <Link to="/">
          <span className="font-bold text-[24px]">scorchedrice.com</span>
        </Link>
        <div className="flex items-center">
          <Button
            className="mr-4 bg-transparent dark:text-gray-400 text-gray-800 border-0 shadow-none hover:bg-transparent"
            onClick={() => {window.history.back()}}
          >
            <ChevronLeft/>
          </Button>
          <ThemeToggle/>
        </div>
      </nav>
      <section className="flex flex-col items-start w-full p-2 max-w-[800px] mx-auto">
        <SearchInput value={value} setValue={setValue} />
        <section className="w-full">
          {children}
        </section>
      </section>
    </div>
  )
}