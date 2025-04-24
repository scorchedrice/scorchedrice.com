import React from "react"
import {skillSvgLinkList} from "@/shared/const/skillSvgLink";

const SkillSection = () => {
  return (
    <section className="p-4 flex flex-col items-center w-full">
      <div className="mx-auto max-w-[800px] flex flex-col">
        <h2 className="font-bold text-[32px] mx-auto"># Skills</h2>
        {skillSvgLinkList.map(({name, data}) => (
          <div key={name} className="flex flex-col items-start">
            <span className="font-bold text-[20px] m-2">{name}</span>
            <div className="flex flex-wrap">
              {data.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center size-[80px] hover:scale-110 transition-all duration-200">
                  <div className="rounded-full size-[52px] bg-secondary p-3">
                    <img src={`${skill.Url}`} alt={skill.name} />
                  </div>
                  <span className="text-[12px]">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillSection