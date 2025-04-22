import TagSection from "@/widgets/home/TagSection";
import * as React from "react";
import {Separator} from "@/components/ui/separator";

export default function RightSide({tagMapData} : {tagMapData : Map<string, string[]>}) {
  return (
    <section className="hidden md:w-1/3 md:flex md:p-4">
      <Separator orientation="vertical"/>
      <TagSection tagMapData={tagMapData}/>
    </section>
  )
}