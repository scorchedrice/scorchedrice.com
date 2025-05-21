import React from "react";

const IntroSection = () => {
  return (
    <section className="flex flex-col items-center m-4">
      <div className="flex flex-col font-bold md:text-[40px] text-[28px] items-center m-4">
        <h1>한지웅</h1>
        <h2>프론트엔드 개발자 포트폴리오</h2>
      </div>
      <div className="md:text-[16px] text-[12px] flex flex-col">
        <span>상황에 맞는 유연한 기술선택, </span>
        <span>새로운 기술에 대한 빠른 적응력이 강점인 개발자 한지웅입니다.</span>
      </div>
    </section>
  )
}

export default IntroSection;