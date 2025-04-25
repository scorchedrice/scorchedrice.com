import React from "react"
import Layout from "@/widgets/layout/layout";
import IntroSection from "@/widgets/portfolio/IntroSection";
import AboutSection from "@/widgets/portfolio/AboutSection";
import SkillSection from "@/widgets/portfolio/SkillSection";
import ArchiveSection from "@/widgets/portfolio/ArchiveSection";
import ProjectSection from "@/widgets/portfolio/ProjectSection";
import {graphql} from "gatsby";
import {ProjectSectionQueryType} from "@/shared/types/graphqlTypes";

const Portfolio = ({ data } : { data : ProjectSectionQueryType }) => {
  const projects = data.allMdx.nodes;
  return (
    <Layout>
      <IntroSection/>
      <AboutSection/>
      <SkillSection/>
      <ArchiveSection/>
      <ProjectSection projects={projects} />
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

export default Portfolio