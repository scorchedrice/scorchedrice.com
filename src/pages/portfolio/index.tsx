import React, {useEffect, useRef} from "react"
import {HeadFC} from "gatsby";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import IntroSection from "@/widgets/portfolio/IntroSection";
import SkillSection from "@/widgets/portfolio/SkillSection";
import ProjectSection from "@/widgets/portfolio/ProjectSection";
import SplashSection from "@/widgets/portfolio/SplashSection";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  return (
    <div className="bg-[#000]">
      <div>아직 개발을 진행하고 있습니다.</div>
      <SplashSection/>
      <IntroSection/>
      <SkillSection/>
      <ProjectSection/>
    </div>
  )
}

export default Portfolio

export const Head: HeadFC = () => (
  <>
    <title>한지웅의 포트폴리오입니다.</title>
  </>
)