import * as path from "path"
import {GatsbyNode} from "gatsby";

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/widgets": path.resolve(__dirname, "src/widgets"),
        "@/features": path.resolve(__dirname, "src/features"),
        "@/shared": path.resolve(__dirname, "src/shared"),
        "@/templates": path.resolve(__dirname, "src/templates"),
      },
    },
  })
}

export const createPages : GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryUrl = {
    개발: "develop",
    프로젝트: "project"
  }
  const blogTemplate = path.resolve("src/templates/blog-main.tsx");
  const results = await graphql(`
  query AllPostsForPagination {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          category
          slug
        }
        id
      }
    }
  }
`);

  if (!results.data) throw new Error("GraphQL error!");
  const posts = results.data.allMdx.nodes;
  const postsPerPage = 10;
  const categoryMap: Record<string, typeof posts> = {};

  const targetCategories = ["전체", "개발", "프로젝트"];

  for (const category of targetCategories) {
    categoryMap[category] = posts.filter(
      (post) => (category === "전체" || post.frontmatter.category === category)
    );
  }

  for (const [category, postList] of Object.entries(categoryMap)) {
    const totalPages = Math.ceil(postList.length / postsPerPage);

    console.log(`\n[${category}] 총 ${postList.length}개의 글, 총 ${totalPages}페이지 생성`);

    for (let i = 0; i < totalPages; i++) {
      const isFirstPage = i === 0;
      const isAll = category === "전체";
      const pathStr = isAll
        ? isFirstPage
          ? "/"
          : `/page/${i + 1}`
        : `/category/${categoryUrl[category]}/page/${i + 1}`;

      console.log(`페이지 생성: ${pathStr}`);

      createPage({
        path: pathStr,
        component: blogTemplate,
        context: {
          category,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          totalPages,
        },
      });
    }
  }
}
