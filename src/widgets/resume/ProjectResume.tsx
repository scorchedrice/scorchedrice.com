import React from 'react';
import ProjectBlock from "@/shared/ui/ProjectBlock";
import {ProjectsType} from "@/shared/types/graphqlTypes";
import ProjectBlocks from "@/widgets/portfolio/ProjectBlocks";

const ProjectResume = () => {

  return (
    <section className="w-full max-w-[800px] mx-auto p-4">
      <ProjectBlocks/>
    </section>
  )
}

export default ProjectResume