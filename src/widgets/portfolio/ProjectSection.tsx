import React from "react";
import ProjectBlocks from "@/widgets/portfolio/ProjectBlocks";

const ProjectSection = () => {
  return (
    <section className="w-full flex flex-col max-w-[800px] mx-auto p-4">
      <h2 className="font-bold text-[32px] mx-auto"># Projects</h2>
      <br/>
      {/*하단의 div태그 내부에 프로젝트 목록 적어넣기.*/}
      <div>
        <ProjectBlocks/>
      </div>
    </section>
  )
}

export default ProjectSection;