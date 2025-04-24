import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {ArrowUpRight} from "lucide-react";
import {ProjectsType} from "@/shared/types/graphqlTypes";

const ProjectSection = ({ projects } : {projects : ProjectsType[]}) => {
  return (
    <section className="p-4 flex flex-col items-center w-full">
      <h2 className="font-bold text-[32px] mx-auto"># Projects</h2>
      <br/>
      {/*하단의 div태그 내부에 프로젝트 목록 적어넣기.*/}
      {projects.map((project) => (
        <div className="flex m-4 hover:scale-105 duration-200">
          {
            project.frontmatter.hero_image &&
            <GatsbyImage alt={project.frontmatter.hero_image_alt} image={getImage(project.frontmatter.hero_image)!} className="size-[100px] mr-4 shrink-0 rounded-lg" />
          }
          <div>
            <h2 className="font-bold text-[16px] md:text-[24px] mb-2">{project.frontmatter.title}</h2>
            <h3 className="font-semibold text-[12px] md:text-[20px]">{project.frontmatter.sub_title}</h3>
            <ul className="text-[10px] md:text-[16px] p-2">
              {project.frontmatter.summary.map((summary) => (
                  <li>‣ {summary}</li>
                )
              )}
            </ul>
            <div className="flex text-[10px] md:text-[16px] gap-4">
              <Link to={`/article/${project.frontmatter.slug}`} className="flex">
                <span>블로그 게시물 보러가기</span>
                <ArrowUpRight className="size-[10px]"/>
              </Link>
              {
                project.frontmatter.git_link.length !== 0 && (
                  <Link to={project.frontmatter.git_link} className="flex">
                    <span>
                      Github 레포지토리
                    </span>
                    <ArrowUpRight className="size-[10px]"/>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProjectSection;