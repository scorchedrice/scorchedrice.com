import React from "react"
import "../../global.css";
import Layout from "@/widgets/layout/layout";
import IntroSection from "@/widgets/portfolio/IntroSection";
import AboutSection from "@/widgets/portfolio/AboutSection";
import SkillSection from "@/widgets/portfolio/SkillSection";
import ArchiveSection from "@/widgets/portfolio/ArchiveSection";
import ProjectSection from "@/widgets/portfolio/ProjectSection";
import {HeadFC} from "gatsby";

const Portfolio = () => {
  return (
    <Layout>
      <IntroSection/>
      <AboutSection/>
      <SkillSection/>
      <ArchiveSection/>
      <ProjectSection/>
    </Layout>
  )
}

export default Portfolio

export const Head: HeadFC = () => (
  <title>한지웅의 포트폴리오입니다.</title>
)