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
import flutter from "@/shared/svg/skill/flutter";
import reactnative from "@/shared/svg/skill/reactnative";
import {SkillNameType} from "@/shared/types/skillTypers";

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
  flutter,
  reactnative,
}

export default function Skill({ size = 30, skillName }: { size?: number, skillName:
  SkillNameType }) {
  const SkillSVG = skillMap[skillName];
  return SkillSVG ? <div style={{ width: size, height: size }}><SkillSVG /></div> : null;
}