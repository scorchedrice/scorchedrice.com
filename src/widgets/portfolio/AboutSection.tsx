import React from "react"
import {Calendar, CornerDownRight, GraduationCap, Mail, User} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-secondary w-full p-4">
      <div className="mx-auto max-w-[800px] flex flex-col">
        <h2 className="font-bold text-[32px] mx-auto"># AboutMe</h2>
        <details className="border rounded-lg my-2">
          <summary className="cursor-pointer px-4 py-3 font-semibold text-[16px] md:text-[18px]">개발을 시작한 이유</summary>

          <div className="m-5 text-sm">
            <span>반도체 연구실에서의 학부연구생 시절, MATLAB을 활용한 실험 데이터 자료제작 업무를 담당하며 자연스럽게 사용자 경험을 설계하고 데이터에 가치를 더하는 과정에 관심을 가지게 되었습니다.</span>
          </div>

          <div className="m-5 text-sm leading-relaxed">
            <span>사용자와 경험과 직접적으로 연관된 프론트엔드에 자연스럽게 관심이 생겨 프론트엔드로 개발에 입문했으며 현재는 프론트엔드와 백엔드 구분하지 않고 역량을 키우며 개발자의 꿈을 키워나가고 있습니다.</span>
          </div>
        </details>
        <details className="border rounded-lg my-2">
          <summary className="cursor-pointer px-4 py-3 font-semibold text-[16px] md:text-[18px]">개발 가치관</summary>
          <div className="flex flex-col items-start p-2 w-full">
            <span className="font-bold italic bg-primary text-primary-foreground text-[16px] md:text-[24px] p-1">"경쟁력 있는 개발자는 어떤 개발자일까?"</span>
            <div className="flex flex-col my-2">
              <span className="font-semibold text-[12px] md:text-[16px]">유연하게 기술을 선택하고, 신기술을 빠르게 학습하여 문제를 해결하는 개발자라고 생각합니다.</span>
              <div className="text-[12px] md:text-[16px] px-2 pt-2">
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
        </details>
      </div>
      <br/>
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