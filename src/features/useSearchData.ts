import {useEffect, useState} from "react";
import {SearchResultType} from "@/shared/types/searchTypes";

export default function useSearchData(value: string) {
  const [results, setResults] = useState<SearchResultType[]>([]);
  const [allPosts, setAllPosts] = useState<SearchResultType[]>([]);

  // 훅이 처음 불러와졌을 때
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/search-index.json");
      const data = await res.json();
      setAllPosts(data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    const filtered = allPosts.filter((post) => {
      return (
        post.frontmatter.title.toLowerCase().includes(value.toLowerCase())
      );
    })
    setResults(filtered);
  }, [value]);

  return {
    results
  }
}