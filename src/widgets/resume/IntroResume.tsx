import {CornerDownRight, GraduationCap, Mail, Phone} from "lucide-react";
import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Separator} from "@/components/ui/separator";
import {Link} from "gatsby";
import GithubSVG from "@/shared/assets/GithubSVG";

const IntroResume = () => {
  return (
    <section className="w-full flex flex-col items-center max-w-[800px] mx-auto">
      <div className="flex md:flex-row flex-col">
        <div className="flex">
          <div className="rounded-full size-[100px] overflow-hidden m-4">
            <StaticImage src="../../shared/assets/profile.jpg" alt="profile"/>
          </div>
          <div className="flex flex-col text-[24px] m-4 justify-center">
            <span>한지웅</span>
            <span>풀스택 개발자 (신입)</span>
          </div>
        </div>
        <div className="flex flex-col justify-center md:ml-8 p-2">
          <Link to="https://github.com/scorchedrice" className="flex hover:underline underline-offset-4 mb-2">
            <div className="size-[24px] mr-2 text-black dark:text-white">
              <GithubSVG/>
            </div>
            <span>github.com/scorchedrice</span>
          </Link>
          <div className="flex mb-2">
            <div className="mr-2 size-[24px] rounded-full overflow-hidden p-1 flex justify-center items-center text-white dark:text-black dark:bg-white bg-black">
              <Phone/>
            </div>
            <span>010-2977-8384</span>
          </div>
          <div className="flex mb-2">
            <div className="mr-2 size-[24px] rounded-full overflow-hidden p-1 flex justify-center items-center text-white dark:text-black dark:bg-white bg-black">
              <Mail/>
            </div>
            <a href="mailto:wldnd2977@gmail.com">wldnd2977@gmail.com</a>
          </div>
          <div className="flex">
            <div className="mr-2 size-[24px] rounded-full overflow-hidden p-1 flex justify-center items-center text-white dark:text-black dark:bg-white bg-black">
              <GraduationCap/>
            </div>
            <span>홍익대학교 신소재공학</span>
          </div>
          <div className="flex">
            <div className="mr-2 size-[24px]"/>
            <span>삼성 청년 SW 아카데미 11기</span>
          </div>
        </div>
      </div>
      <br/>
      <Separator/>
      <br/>
      <div className="flex flex-col items-start p-2 w-full">
        <span className="font-bold italic bg-primary text-primary-foreground text-[16px] md:text-[24px] p-1">"경쟁력 있는 개발자는 어떤 개발자일까?"</span>
        <div className="flex flex-col my-2">
          <span className="font-bold text-[12px] md:text-[16px]">유연하게 기술을 선택하고, 신기술을 빠르게 학습하여 문제를 해결하는 개발자라고 생각합니다.</span>
          <div className="text-[12px] md:text-[16px] p-2">
            <div className="flex items-start">
              <CornerDownRight className="size-[12px] md:size-[16px] mr-1"/>
              <span>프로젝트 목적에 적합한 프레임워크를 활용하며 유연성과 적응력을 키워왔습니다.</span>
            </div>
            <div className="flex items-start">
              <CornerDownRight className="size-[12px] md:size-[16px] mr-1"/>
              <span>언어, 프레임워크를 초월한 개발자 되는 것이 궁극적인 목표입니다.</span>
            </div>
          </div>
        </div>
      </div>
      <Separator/>
      <br/>
    </section>
  )
}

export default IntroResume;