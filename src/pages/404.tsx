import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import {Layout} from "lucide-react";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>
        😔, 없는 페이지에요.
      </p>
      <Link to="/">메인 화면으로 이동하기</Link>.
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
