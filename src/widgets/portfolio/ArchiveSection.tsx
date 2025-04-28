import React from "react";
import {Link} from "gatsby";
import GithubSVG from "@/shared/assets/GithubSVG";

const ArchiveSection = () => {
  return (
    <section className="p-4 flex flex-col items-center w-full bg-secondary">
      <div className="mx-auto max-w-[800px] flex flex-col">
        <h2 className="font-bold text-[32px] mx-auto"># Archive</h2>
        <div className="flex gap-4 flex-wrap text-secondary justify-center my-4">
          <Link to="https://github.com/scorchedrice" className="rounded-xl bg-secondary-foreground w-full max-w-[400px] h-[150px] flex flex-col p-4 mx-4 hover:scale-110 duration-200 group">
            <div className="flex items-center font-bold text-[24px]">
              <div className="size-[24px] mr-2">
                <GithubSVG/>
              </div>
              <span>
                scorchedrice
              </span>
            </div>
            <span className="my-2 group-hover:underline underline-offset-4">github.com/scorchedrice</span>
            <span>소스코드 저장소입니다.</span>
          </Link>
          <Link to="https://scorchedrice.com" className="rounded-xl bg-secondary-foreground w-full max-w-[400px] h-[150px] flex flex-col p-4 mx-4 hover:scale-110 duration-200 group">
            <span className="font-bold text-[24px]">scorchedrice.com</span>
            <span className="my-2 group-hover:underline underline-offset-4">scorchedrice.com</span>
            <span>블로그, 이력서, 포트폴리오를 통합했습니다.</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ArchiveSection;