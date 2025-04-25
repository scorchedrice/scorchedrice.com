import React from "react"
import "../global.css";
import Layout from "@/widgets/layout/layout";
import IntroResume from "@/widgets/resume/IntroResume";
import SkillsResume from "@/widgets/resume/SkillsResume";
import ProjectResume from "@/widgets/resume/ProjectResume";
import {ProjectSectionQueryType} from "@/shared/types/graphqlTypes";
import {graphql} from "gatsby";

const Resume = ({ data } : { data : ProjectSectionQueryType }) => {
  const projects = data.allMdx.nodes
  return (
    <Layout>
      <IntroResume/>
      <SkillsResume/>
      <ProjectResume projects={projects}/>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery {
    allMdx(
      filter: { frontmatter: { category: { eq: "프로젝트" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          sub_title
          tags
          summary
          slug
          git_link
        }
      }
    }
  }
`

export default Resume