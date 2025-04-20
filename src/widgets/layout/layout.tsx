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
      <footer className="w-[100dvw] h-[50px] bg-green-300">
        <div>홍익대학교 신소재공학 전공</div>
      </footer>
    </>
  )
}