import {Separator} from "@/components/ui/separator";
import {Tag} from "lucide-react";
import * as React from "react";
import TagButton from "@/widgets/home/TagButton";
import {graphql, useStaticQuery} from "gatsby";

const TagSection = () => {
  const data = useStaticQuery(graphql`
    query TagSectionQuery {
      allMdx(
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            category
            tags
          }
        }
      }
    }
  `)
  const tagsMap = new Map<string, string[]>();
  for (const tag of data.allMdx.nodes) {
    const info = tag.frontmatter;
    const tags = info.tags;
    const category = info.category;
    if (tagsMap.has(category)) {
      tagsMap.get(category)!.push(...tags);
    } else {
      tagsMap.set(category, []);
      tagsMap.get(category)!.push(...tags);
    }
  }

  const all : string[] = Array.from(new Set(Array.from(tagsMap.values()).flat()));
  return (
    <>
      <div id="sidebar" className="flex flex-col w-full p-4">
        <div className="flex text-[24px] underline items-center">
          <Tag/>
          <span>Tags</span>
        </div>
        <div className="p-4">
          {Array.from(tagsMap.keys()).map((key) => {
            const uniqueTags = [...new Set(tagsMap.get(key))];
            return (
              <div key={key}>
                <span>{key}</span>
                <div className="flex flex-wrap">
                  {uniqueTags.map((tag) => (
                    <TagButton
                      key={`${key}-${tag}`}
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
          <div className="flex flex-wrap">
            {all.map((tag) => {
              return (
                <TagButton key={`all-${tag}`} tagName={tag}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default TagSection;