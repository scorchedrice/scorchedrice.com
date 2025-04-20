import * as React from 'react';
import electron from "@/shared/svg/skill/electron";
import gatsby from "@/shared/svg/skill/gatsby";
import javascript from "@/shared/svg/skill/javascript";
import nest from "@/shared/svg/skill/nest";
import next from "@/shared/svg/skill/next";
import node from "@/shared/svg/skill/node";
import react from "@/shared/svg/skill/react";
import tailwindcss from "@/shared/svg/skill/tailwindcss";
import typescript from "@/shared/svg/skill/typescript";

type SkillNameType =
  "electron"|
  "gatsby"|
  "javascript"|
  "nest"|
  "next"|
  "node"|
  "react"|
  "tailwindcss"|
  "typescript";

const skillMap = {
  electron,
  gatsby,
  javascript,
  nest,
  next,
  node,
  react,
  tailwindcss,
  typescript,
}

export default function Skill({ skillName }: { skillName: SkillNameType }) {
  const SkillSVG = skillMap[skillName];
  return SkillSVG ? <div className="size-[30px] m-4"><SkillSVG /></div> : null;
}