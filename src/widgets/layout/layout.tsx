import * as React from 'react';
import "../../global.css";
import {Link} from "gatsby";

export default function Layout({ children } : { children : React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-between items-center w-[100dvw] max-w-[1200px] mx-auto p-4 h-[50px] mt-4">
        <Link to="/" className="flex items-center font-bold text-[24px]">
          <span>scorchedrice.com</span>
        </Link>
      </nav>
      <div>
        {children}
      </div>
      <footer className="w-[100dvw] bg-gray-200 flex flex-col p-4 items-center justify-center mt-4">
        <div>
          <span>한지웅</span>
          <Link to="https://github.com/scorchedrice" className="m-4 hover:underline">Github</Link>
          <Link to="mailto:wldnd2977@gmail.com" className="hover:underline">wldnd2977@gmail.com</Link>
        </div>
        <div className="flex flex-col m-2">
          <span>HONGIK UNIV.</span>
          <span>MATERIAL SCIENCE & ENGINEERING 17</span>
        </div>
        <span className="m-4">2025. Han Ji Woong. All rights reserved.</span>
      </footer>
    </>
  )
}