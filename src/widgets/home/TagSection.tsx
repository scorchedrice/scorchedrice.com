import {Separator} from "@/components/ui/separator";
import {ChevronDown, ChevronUp, Tag} from "lucide-react";
import * as React from "react";
import {useState} from "react";
import TagButton from "@/widgets/home/TagButton";
import {graphql, useStaticQuery} from "gatsby";

const TagGroup = ({
  title,
  tags,
  expanded,
  onToggle,
  collapsedLimit,
}: {
  title: string;
  tags: string[];
  expanded: boolean;
  onToggle: () => void;
  collapsedLimit: number;
}) => {
  const hasMore = tags.length > collapsedLimit;
  const visibleTags = expanded || !hasMore
    ? tags
    : tags.slice(0, collapsedLimit);
  const hiddenCount = Math.max(tags.length - visibleTags.length, 0);

  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-semibold text-[14px]">{title}</span>
        <span className="text-[11px] text-muted-foreground">{tags.length}</span>
      </div>
      <div className="flex flex-wrap items-center">
        {visibleTags.map((tag) => (
          <TagButton
            key={`${title}-${tag}`}
            tagName={tag}
          />
        ))}
        {hasMore && (
          <button
            type="button"
            className="m-1 inline-flex min-h-[32px] shrink-0 items-center rounded-xl border border-border bg-background px-2 text-[12px] text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            onClick={onToggle}
            aria-expanded={expanded}
          >
            <span>{expanded ? "접기" : `... 더보기 ${hiddenCount}`}</span>
            {expanded
              ? <ChevronUp className="ml-1 size-[12px]"/>
              : <ChevronDown className="ml-1 size-[12px]"/>}
          </button>
        )}
      </div>
    </div>
  )
}

const TagSection = () => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
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
  const collapsedLimit = 8;
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
  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupName)) {
        next.delete(groupName);
      } else {
        next.add(groupName);
      }
      return next;
    });
  };

  return (
    <>
      <div id="sidebar" className="flex flex-col w-full p-4">
        <div className="flex text-[24px] underline items-center underline-offset-4">
          <Tag className="mr-1"/>
          <span>Tags</span>
        </div>
        <div className="p-4 pb-0">
          {Array.from(tagsMap.keys()).map((key) => {
            const uniqueTags = [...new Set(tagsMap.get(key))];
            return (
              <TagGroup
                key={key}
                title={key}
                tags={uniqueTags}
                expanded={expandedGroups.has(key)}
                onToggle={() => toggleGroup(key)}
                collapsedLimit={collapsedLimit}
              />
            )
          })}
        </div>
        <Separator />
        <div className="p-4 flex flex-col">
          <TagGroup
            title="전체"
            tags={all}
            expanded={expandedGroups.has("전체")}
            onToggle={() => toggleGroup("전체")}
            collapsedLimit={12}
          />
        </div>
      </div>
    </>
  )
}

export default TagSection;
