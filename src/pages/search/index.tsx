import * as React from 'react';
import "../global.css";
import SearchLayout from "@/widgets/layout/searchLayout";
import {useEffect, useState} from "react";
import useSearchData from "@/features/useSearchData";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {NoInput, SearchResultEmpty} from "@/widgets/search/SearchResult";
import {useLocation} from "@reach/router";

type LocationState = {
  defaultValue? : string;
}

const SearchIndexPage = () => {
  // TODO : 처음에 창이 나올 때, 시간차를 둬서 깜빡이는 현상을 방지하자. setTimeout!
  const location = useLocation() as { state?: LocationState };
  const defaultValue = location.state?.defaultValue || "";

  const [value, setValue] = useState("");
  const { results } = useSearchData(value);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <SearchLayout value={value} setValue={setValue}>
      {
        value === "" ?
          <NoInput/> :
          results.length === 0 ?
            <SearchResultEmpty/> :
          <ul className="w-full">
            {results.map((post) => {
              return (
                <li
                  key={post.id}
                  className="flex items-center gap-4 p-4"
                >
                  <GatsbyImage
                    alt={post.frontmatter.hero_image_alt}
                    image={getImage(post.frontmatter.hero_image)!}
                    className="w-[80px] h-[80px]"
                  />
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-sm text-muted-foreground mb-1 flex gap-4">
                      <span>📂 {post.frontmatter.category}</span>
                      <span>{post.frontmatter.date}</span>
                    </div>
                    <Link to={`/article/${post.frontmatter.slug}`} className="text-lg font-semibold hover:underline">
                      {post.frontmatter.title}
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
      }
    </SearchLayout>
  )
}

export default SearchIndexPage;