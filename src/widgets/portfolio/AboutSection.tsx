import React from "react"
import {Calendar, GraduationCap, Mail, User} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-secondary w-full p-4">
      <div className="mx-auto max-w-[800px] flex flex-col">
        <h2 className="font-bold text-[32px] mx-auto"># AboutMe</h2>
        <div className="hidden md:flex flex-col m-5">
          <span>반도체 연구실에서의 학부연구생 시절,</span>
          <span>MATLAB을 활용한 실험 데이터 자료제작 업무를 담당하며</span>
          <span>자연스럽게 사용자 경험을 설계하고 데이터에 가치를 더하는 과정에 관심을 가지게 되었습니다.</span>
        </div>

        <div className="block md:hidden m-5 text-sm leading-relaxed">
          <span>반도체 연구실에서의 학부연구생 시절, MATLAB을 활용한 실험 데이터 자료제작 업무를 담당하며 자연스럽게 사용자 경험을 설계하고 데이터에 가치를 더하는 과정에 관심을 가지게 되었습니다.</span>
        </div>

        <div className="hidden md:flex flex-col items-end m-5">
          <span>사용자와 경험과 직접적으로 연관된 프론트엔드에 자연스럽게 관심이 생겨 프론트엔드로 개발에 입문했으며</span>
          <span>현재는 프론트엔드와 백엔드 구분하지 않고 역량을 키우며 개발자의 꿈을 키워나가고 있습니다.</span>
        </div>

        <div className="block md:hidden m-5 text-sm leading-relaxed">
          <span>사용자와 경험과 직접적으로 연관된 프론트엔드에 자연스럽게 관심이 생겨 프론트엔드로 개발에 입문했으며 현재는 프론트엔드와 백엔드 구분하지 않고 역량을 키우며 개발자의 꿈을 키워나가고 있습니다.</span>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col items-center text-[24px]">
          <User className="size-[32px]"/>
          <span>한지웅</span>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[16px]">
          <div className="flex flex-col items-center p-4">
            <Calendar className="size-[32px]"/>
            <span>98.01.30</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <GraduationCap className="size-[32px]"/>
            <div className="flex flex-col">
              <span>삼성 청년 SW 아카데미</span>
              <span>홍익대학교 신소재공학과</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <Mail className="size-[32px]"/>
            <span>wldnd2977@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection