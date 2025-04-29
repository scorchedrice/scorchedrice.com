import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import {Link} from "gatsby";
import {ArrowUpRight} from "lucide-react";
import GithubSVG from "@/shared/assets/GithubSVG";

export default function Profile() {
  return (
    <>
      <div className="rounded-full size-[100px] overflow-hidden shrink-0">
        <StaticImage src="../../shared/assets/profile.jpg" alt="profileImage"/>
      </div>
      <div className="flex flex-col ml-4">
        <Link to="https://github.com/scorchedrice" className="flex items-center font-bold text-[24px] hover:underline underline-offset-4">
          <div className="size-[24px] mr-2 text-black dark:text-white">
            <GithubSVG/>
          </div>
          <span>
            scorchedrice
          </span>
        </Link>
        <span>의미 있는 성장을 위해 나의 흔적을 기록하는 공간입니다.</span>
        <div className="text-[14px] flex">
          <Link
            to="/profile/resume"
            className="flex items-center min-h-[44px] px-2"
          >
            <span>이력서</span>
            <ArrowUpRight className="size-[12px] ml-1"/>
          </Link>
          <Link
            to="/profile/portfolio"
            className="flex items-center min-h-[44px] px-2"
          >
            <span>포트폴리오</span>
            <ArrowUpRight className="size-[12px] ml-1"/>
          </Link>
        </div>

      </div>
    </>
  )
}