import React from "react";
import {Link} from "gatsby";
import {Link as Clip} from "lucide-react";
import GithubSVG from "@/shared/assets/GithubSVG";

type Props = {
  title: string;
  sub_title: string;
  summaries: string[];
  skills: string[];
  git_link: string;
  slug: string;
}

export default function ProjectBlock({ title, sub_title, summaries, skills, git_link, slug } : Props) {
  return (
    <div className="mb-6">
      <h3 className="text-lg md:text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground mb-2">{sub_title}</p>

      {summaries.length > 0 && (
        <ul className="list-disc list-inside text-sm md:text-base mb-2 space-y-1">
          {summaries.map((summary) => (
            <li key={summary}>{summary}</li>
          ))}
        </ul>
      )}

      <div className="flex mt-2">
        {git_link.length > 0 && (
          <Link to={git_link}>
            <div className="size-[24px] mr-2 text-black dark:text-white">
              <GithubSVG/>
            </div>
          </Link>
        )}
        <Link to={`/article/${slug}`}>
          <div className="mr-2 size-[24px] rounded-full overflow-hidden p-1 flex justify-center items-center text-white dark:text-black dark:bg-white bg-black">
            <Clip/>
          </div>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 text-xs md:text-sm text-secondary-foreground font-medium mt-2">
        {skills.map((skill) => (
          <span key={`${title}-${skill}`} className="bg-secondary rounded-md px-2 py-1">
            #{skill}
          </span>
        ))}
      </div>
    </div>
  )
}