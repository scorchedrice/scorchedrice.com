import React from "react"
import "../../global.css";
import Layout from "@/widgets/layout/layout";
import IntroSection from "@/widgets/resume/IntroSection";
import AboutSection from "@/widgets/resume/AboutSection";
import SkillSection from "@/widgets/resume/SkillSection";
import ArchiveSection from "@/widgets/resume/ArchiveSection";
import ProjectSection from "@/widgets/resume/ProjectSection";
import {HeadFC} from "gatsby";

const Resume = () => {
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

export default Resume

export const Head: HeadFC = () => (
  <title>한지웅의 이력서입니다.</title>
)