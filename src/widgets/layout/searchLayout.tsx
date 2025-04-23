import * as React from 'react';

import {SearchInput} from "@/widgets/search/SearchInput";
import {Link} from "gatsby";
import ThemeToggle from "@/widgets/theme/ThemeToggle";
import {ReactNode} from "react";

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
        <ThemeToggle/>
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