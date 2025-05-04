import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import ProjectBlock from "@/shared/ui/ProjectBlock";
import {ProjectSectionQueryType, ProjectsType} from "@/shared/types/graphqlTypes";

const ProjectBlocks = () => {
  const data: ProjectSectionQueryType = useStaticQuery(graphql`
    {
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
  `)
  const projects : ProjectsType[] = data.allMdx.nodes;
  return (
    <>
      {projects.map((project) => (
        <ProjectBlock
          key={project.id}
          title={project.frontmatter.title}
          sub_title={project.frontmatter.sub_title}
          skills={project.frontmatter.tags}
          summaries={project.frontmatter.summary}
          git_link={project.frontmatter.git_link}
          slug={project.frontmatter.slug}
        />
      ))}
    </>
  )
}

export default ProjectBlocks;