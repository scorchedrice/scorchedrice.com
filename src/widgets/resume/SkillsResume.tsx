import React from "react";
import SkillBlock from "@/shared/ui/SkillBlock";
import {Separator} from "@/components/ui/separator";

const SkillsResume = () => {
  return (
    <section className="w-full flex flex-col max-w-[800px] mx-auto p-2">
      <SkillBlock title="Language" child={["HTML/CSS", "JavaScript", "TypeScript", "Dart", "Python"]}/>
      <SkillBlock title="Front-End" child={["React", "Next.js", "Gatsby", "Electron", "Flutter", "Tailwindcss", "Zustand"]}/>
      <SkillBlock title="Back-End" child={["Nest.js", "Postgres", "MongoDB"]}/>
      <SkillBlock title="Test" child={["Jest"]}/>
      <br/>
      <Separator/>
    </section>
  )
}

export default SkillsResume