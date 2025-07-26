import React from "react";
import AnimatedCard from "@/widgets/portfolio/AnimatedCard";

type Select = "FrontEnd" | "BackEnd";

export default function SkillSection() {
  const [select, setSelect] = React.useState<Select>("FrontEnd");
  const [selectedSkill, setSelectedSkill] = React.useState("React");
  const [visible, setVisible] = React.useState(true);

  const items: Select[] = ["FrontEnd", "BackEnd"];
  const skills = {
    "FrontEnd": {
      React: ["동작원리를 이해하고 있습니다."],
      ReactNative: ["앱 배포 경험을 보유하고 있습니다."],
      Next: [],
      Gatsby: [],
      Electron: [],
      Flutter: [],
    },
    "BackEnd": {
      Nest: [],
      Docker: [],
    }
  }
  const handleSkillChange = (skill:string) => {
    if (skill === selectedSkill) {
      return;
    }
    setVisible(false);
    setTimeout(() => {
      setSelectedSkill(skill);
      setVisible(true);
    }, 400);
  };

  return (
    <div className="h-[100dvh] flex flex-col items-center">
      <div className="flex flex-col w-full max-w-6xl">
        <h1 className="text-[88px] font-bold text-white">Skills</h1>
        <hr className="mt-4 mb-8"/>
        <div className="font-bold text-[40px] text-white gap-8 flex mb-10">
          {items.map((item) => (
            <span
              key={item}
              onClick={() => setSelect(item)}
              className={`
              cursor-pointer 
              transition-all duration-500 
              ${select === item ? "text-white scale-105" : "text-white/30 hover:text-white"}
            `}
            >
            {item}
          </span>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col leading-none flex-1">
            {Object.entries(skills[select]).map(([key, value]) => (
              <div
                key={key}
                className="text-white/30 transition-colors duration-500 hover:text-white/50"
                style={{ color: selectedSkill === key ? "white" : "" }}
              >
                <h3
                  className="text-[92px] font-bold"
                  onClick={() => handleSkillChange(key)}
                >{key}</h3>
              </div>
            ))}
          </div>
          <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            <AnimatedCard name={selectedSkill}/>
          </div>
        </div>
      </div>
    </div>
  );
}
