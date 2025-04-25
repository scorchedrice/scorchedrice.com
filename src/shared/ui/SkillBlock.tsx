import React from "react";

export default function SkillBlock({ title, child } : { title: string, child: string[] }) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-[24px]">{title}</span>
      <span className="p-2">
        {child.join(', ')}
      </span>
    </div>
  )
}