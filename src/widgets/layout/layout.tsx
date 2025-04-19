import * as React from 'react';
import "../../global.css";
import {StaticImage} from "gatsby-plugin-image";
import {Button} from "@/components/ui/button";
import {Link} from "gatsby";

export default function Layout({ children } : { children : React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-between items-center w-[100dvw] max-w-[1200px] mx-auto p-4 h-[50px]">
        <Link to="/" className="flex items-center">
          <StaticImage src="../../images/icon.png" alt="Logo" width={40} />
          <span className="text-[20px] font-bold ml-2">이음블로그</span>
        </Link>
        <Button className="bg-[#A4F2EB] hover:bg-[#02DBC6] text-black">홈페이지</Button>
      </nav>
      <div>
        {children}
      </div>
      <footer className="w-[100dvw] h-[50px] bg-green-300">
        <div>이음컴퍼니</div>
      </footer>
    </>
  )
}