import * as React from 'react';
import {Link} from "gatsby";
import ThemeToggle from "@/widgets/theme/ThemeToggle";
import {FileText, Github, Home, Mail, Network, Search} from "lucide-react";
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
          <Link
            to="/map"
            aria-label="Open Portfolio Map"
          >
            <Network className="m-4"/>
          </Link>
          <ThemeToggle/>
        </div>
      </nav>
      <div>
        {children}
      </div>
      <footer className="w-[100dvw] mt-8 border-t border-border bg-secondary/60 px-4 py-8 dark:bg-secondary/40">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-[22px] font-bold hover:underline underline-offset-4">
              scorchedrice.com
            </Link>
            <p className="max-w-[360px] text-sm leading-relaxed text-muted-foreground">
              개발하며 배운 것과 프로젝트의 흔적을 기록하는 개인 공간입니다.
            </p>
            <div className="flex flex-col text-xs text-muted-foreground">
              <span>한지웅</span>
              <span>HONGIK UNIV. MATERIAL SCIENCE & ENGINEERING 17</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Content</span>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <Home className="size-[14px]"/>
                Home
              </Link>
              <Link to="/search" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <Search className="size-[14px]"/>
                Search
              </Link>
              <Link to="/map" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <Network className="size-[14px]"/>
                Map
              </Link>
              <Link to="/resume" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <FileText className="size-[14px]"/>
                Resume
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Contact</span>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="https://github.com/scorchedrice" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <Github className="size-[14px]"/>
                GitHub
              </Link>
              <Link to="mailto:wldnd2977@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground hover:underline underline-offset-4">
                <Mail className="size-[14px]"/>
                wldnd2977@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col gap-2 border-t border-border pt-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>2025. Han Ji Woong. All rights reserved.</span>
          <span>Built with Gatsby, MDX, and a small constellation of notes.</span>
        </div>
      </footer>
    </>
  )
}
