import React from "react";
import Skill from "@/shared/svg/skill/skill";
import useAnimatedCard from "@/features/useAnimatedCard";
import { skillGradients } from "@/shared/const/gradientInfo";
import {SkillNameType} from "@/shared/types/skillTypers";

type Props = {
  name: string;
}

export default function AnimatedCard({name} : Props) {
  const { handleMouseMove, handleMouseLeave, handleMouseClick, flip } = useAnimatedCard();
  const gradient = skillGradients[name.toLowerCase()] || skillGradients.default;
  const glowColor = gradient.from;

  const CardInner = ({ full }: { full?: boolean }) => (
      <div
        className={`
      w-[400px] h-[560px]
        rounded-2xl text-xl
        transition-transform duration-200 ease-out
        relative overflow-hidden cursor-pointer
        flex flex-col items-center justify-center p-8
        opacity-80
      `}
        style={{
          transform: `perspective(500px) rotateX(var(--rotateX)) rotateY(var(--rotateY))`,
          transformStyle: "preserve-3d",
          background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
          boxShadow: `0 0 40px ${gradient.from}`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-1/2 w-full">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-white blur-3xl" />
          <div className="relative flex flex-col items-center gap-2">
            <Skill skillName={name.toLowerCase() as SkillNameType} size={100} />
            <span
              className="text-[40px] font-bold"
              style={{
                color: glowColor,
              }}
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <CardInner />
    </>
  );
}
