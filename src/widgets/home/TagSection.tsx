import {Separator} from "@/components/ui/separator";
import {Tag} from "lucide-react";
import * as React from "react";
import TagButton from "@/widgets/home/TagButton";

const TagSection = ({tagMapData} : {tagMapData : Map<string, string[]>}) => {
  const all = Array.from(new Set(Array.from(tagMapData.values()).flat()));
  return (
    <>
      <div id="sidebar" className="flex flex-col w-full p-4">
        <div className="flex text-[24px] underline items-center">
          <Tag/>
          <span>Tags</span>
        </div>
        <div className="p-4">
          {Array.from(tagMapData.keys()).map((key) => {
            const uniqueTags = [...new Set(tagMapData.get(key))];
            return (
              <div key={key}>
                <span>{key}</span>
                <div className="flex flex-nowrap">
                  {uniqueTags.map((tag) => (
                    <TagButton
                      key={tag}
                      tagName={tag}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <br/>
        <Separator />
        <div className="p-4 flex flex-col">
          <span>전체</span>
          <div className="flex">
            {all.map((tag) => {
              return (
                <TagButton tagName={tag}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default TagSection;