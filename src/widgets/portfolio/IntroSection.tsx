import React, {useEffect, useRef} from "react";
import gsap from "gsap";

export default function IntroSection() {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!textRef.current) return;
    gsap.to(textRef.current, {
      backgroundSize: "100% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        pinnedContainer: textRef.current,
        start: "top 80%", // 요소의 top이 화면 80% 지점에 닿을 때 시작
        end: "bottom 40%",
        markers: true,
        scrub: 1,      // 스크롤에 따라 애니메이션 진행
      },
    })
  }, [])
  return (
    <div className="text-[78px] w-full" style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1.2 }}>
      <div className="text-center">
        <span
           ref={textRef}
           className="text-transparent text-fill-white-30 bg-gradient-to-r from-white to-white bg-[size:0%_100%] bg-no-repeat bg-clip-text"
         >
            기술, 역할에 고정되지 않고<br />
            유연한 문제해결을 지향하는<br />
            개발자 한지웅입니다<br />
          </span>
      </div>
    </div>
  )
}