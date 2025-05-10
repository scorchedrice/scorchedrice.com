import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "@/widgets/layout/layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center min-h-[90dvh]">
        <p className="text-[32px] font-bold animate-bounce">
          404!
        </p>
        <Link to="/" className="mt-4 hover:bg-secondary hover:text-secondary-foreground p-4 rounded-lg">메인 화면으로 이동하기</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
