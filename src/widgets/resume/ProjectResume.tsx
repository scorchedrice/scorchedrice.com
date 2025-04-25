import React from 'react';
import ProjectBlock from "@/shared/ui/ProjectBlock";
import {ProjectsType} from "@/shared/types/graphqlTypes";

const ProjectResume = ({ projects } : { projects : ProjectsType[] }) => {
  // const projects = [
  //   {
  //     title: "알고리즘 보조 슬랙봇 - AlgoBot",
  //     sub_title: "데브코스 교육생들의 코딩테스트 대비를 돕기위한 슬랙봇",
  //     summaries: [
  //       "자료구조에 따른 예시코드 제공 기능 개발",
  //       "조건에 적합한 알고리즘 자동 문제추천 기능 개발",
  //     ],
  //     skills: ["Bolt"],
  //   },
  //   {
  //     title: "블로그와 포트폴리오를 통합한 scorchedrice.com",
  //     sub_title: "기존 Jekyll 기반의 블로그 유지보수 관리 어려움 해결, 블로그와 포트폴리오 페이지의 통합을 목적으로 개발",
  //     summaries: ["GraphQL을 활용한 데이터 관리", "mdx 플러그인을 활용한 블로그 게시물 구현", "카테고리, 태그별 게시글 분류 / 검색기능", "다크모드와 라이트모드 구현"],
  //     skills: ["Gatsby", "GraphQL", "TailwindCSS"],
  //   },
  //   // {
  //   //   title: "이음 컴퍼니 브랜드페이지",
  //   //   sub_title: "출장 세차 서비스를 중심으로 서비스하는 스타트업 '이음 컴퍼니'의 브랜드 페이지 개발",
  //   //   summaries: ["현재 개발이 진행중인 프로젝트로, 완성 마무리단계", "서버리스 DB Neon, Next.js의 API 라우터 활용 백엔드 기능 구현", "Framer-motion을 활용한 애니메이션 구현"],
  //   //   skills: ["Next.js", "Zustand", "Neon", "Framer-motion"],
  //   // },
  //   {
  //     title: "학습 보조 데스크탑앱 - 미루니",
  //     sub_title: "OCR, AI를 활용한 개발한 학습보조 데스크탑앱",
  //     summaries: ["tessaract.js를 활용한 OCR기능 구현", "집중도 기록을 활용한 개인화된 기록 페이지 개발", "웹캠 / OCR 데이터를 서버측으로 주기적으로 전송하여 집중도 판별하는 기능을 구현"],
  //     skills: ["Electron"],
  //   },
  //   {
  //     title: "공연 물품 대여 플랫폼 - 바로바로",
  //     sub_title: "Next.js를 활용한 웹앱 기반의 플랫폼",
  //     summaries: ["PIN번호 입력으로 부인방지 기능 구현", "실시간 계약 체결 로직 구현", "마이페이지/검색/게시물 상세 기능 구현"],
  //     skills: ["Next.js", "Zustand"],
  //   },
  //   {
  //     title: "미션 참여형 알람앱 - 자냥",
  //     sub_title: "OpenVidu를 활용한 미션 참여 알람앱",
  //     summaries: ["미션 선택 / 튜토리얼 기능 구현", "회원가입 기능 구현", "미션 참여도 바탕의 개인화 그래프 기능 구현", "Lottie를 활용한 동적 로고 제작"],
  //     skills: ["Flutter", "GetX"],
  //   },
  // ];


  return (
    <section className="w-full max-w-[800px] mx-auto p-4">
      {projects.map((project) => (
        <ProjectBlock
          key={project.id}
          title={project.frontmatter.title}
          sub_title={project.frontmatter.sub_title}
          skills={project.frontmatter.tags}
          summaries={project.frontmatter.summary}
          git_link={project.frontmatter.git_link}
          slug={project.frontmatter.slug}
        />
      ))}
    </section>
  )
}

export default ProjectResume