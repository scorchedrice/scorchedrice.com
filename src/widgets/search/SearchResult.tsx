import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export function SearchResultEmpty() {
  return (
    <div className="flex flex-col items-center m-10">
      <div className="flex">
        <StaticImage src="../../shared/assets/glass-person.png" alt="can't find post"/>
        <div className="font-bold text-[34px] animate-pulse">?</div>
      </div>
      <span className="mt-2">검색 결과를 찾지 못했어요.</span>
    </div>
  )
}

export function NoInput() {
  return (
    <div className="flex flex-col items-center m-10">
      <span>검색해보고 싶은 내용을 입력해주세요.</span>
    </div>
  )
}