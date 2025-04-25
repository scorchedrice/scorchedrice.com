import React from "react";
import {ProjectsType} from "@/shared/types/graphqlTypes";
import ProjectBlock from "@/shared/ui/ProjectBlock";

const ProjectSection = ({ projects } : {projects : ProjectsType[]}) => {
  return (
    <section className="w-full flex flex-col max-w-[800px] mx-auto p-4">
      <h2 className="font-bold text-[32px] mx-auto"># Projects</h2>
      <br/>
      {/*하단의 div태그 내부에 프로젝트 목록 적어넣기.*/}
      <div>
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
      </div>
    </section>
  )
}

export default ProjectSection;