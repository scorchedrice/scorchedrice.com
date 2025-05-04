import React from "react"
import "../../global.css";
import Layout from "@/widgets/layout/layout";
import IntroResume from "@/widgets/resume/IntroResume";
import SkillsResume from "@/widgets/resume/SkillsResume";
import ProjectResume from "@/widgets/resume/ProjectResume";
import {HeadFC} from "gatsby";

const Resume = () => {
  return (
    <Layout>
      <IntroResume/>
      <SkillsResume/>
      <ProjectResume/>
    </Layout>
  )
}

export default Resume

export const Head: HeadFC = () => (
  <title>한지웅의 이력서입니다.</title>
)