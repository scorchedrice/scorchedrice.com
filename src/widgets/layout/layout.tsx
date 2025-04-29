import * as React from 'react';
import {Link} from "gatsby";
import ThemeToggle from "@/widgets/theme/ThemeToggle";
import {Search} from "lucide-react";
import {ReactNode} from "react";

export default function Layout({ children } : { children : ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-background opacity-95 flex justify-between items-center w-[100dvw] mx-auto p-4 h-[50px] pt-4">
        <Link to="/" className="flex items-center font-bold text-[24px] min-h-[44px]">
          <span>scorchedrice.com</span>
        </Link>
        <div className="flex items-center">
          <Link
            to="/search"
            aria-label="Search Post"
          >
            <Search className="m-4"/>
          </Link>
          <ThemeToggle/>
        </div>
      </nav>
      <div>
        {children}
      </div>
      <footer className="w-[100dvw] bg-gray-200 flex flex-col p-4 items-center justify-center md:justify-start md:items-start mt-4 dark:bg-gray-700">
        <div className="m-2">
          <span>한지웅</span>
          <Link to="https://github.com/scorchedrice" className="m-4 hover:underline">Github</Link>
          <Link to="mailto:wldnd2977@gmail.com" className="hover:underline">wldnd2977@gmail.com</Link>
        </div>
        <div className="flex md:flex-row flex-col m-2">
          <span className="mr-2">HONGIK UNIV.</span>
          <span>MATERIAL SCIENCE & ENGINEERING 17</span>
        </div>
        <span className="m-2">2025. Han Ji Woong. All rights reserved.</span>
      </footer>
    </>
  )
}