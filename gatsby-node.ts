import * as path from "path"
import {GatsbyNode} from "gatsby";
import {AllPostsQueryResult} from "@/shared/types/graphqlTypes";
import fs from "fs-extra";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
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
  const blogTemplate = path.resolve("src/templates/blog-main.tsx");
  const results = await graphql<AllPostsQueryResult>(`
  query AllPostsForPagination {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          category
          slug
          title
          tags
          date(formatString: "YYYY-MM-DD")
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`);

  if (!results.data) throw new Error("GraphQL error!");
  const posts = results.data.allMdx.nodes;
  const postsPerPage = 5;
  const categoryMap: Record<string, typeof posts> = {};
  const targetCategories = ["전체", "개발", "프로젝트", "일상"];
  const categoryUrl = {
    "개발": "develop",
    "프로젝트": "project",
    "일상": "daily",
  }

  for (const category of targetCategories) {
    categoryMap[category] = posts.filter(
      (post) => (category === "전체" || post.frontmatter.category === category)
    );
  }

  for (const [category, postList] of Object.entries(categoryMap)) {
    const totalPages = Math.ceil(postList.length / postsPerPage);

    for (let i = 0; i < totalPages; i++) {
      const isFirstPage = i === 0;
      const isAll = category === "전체";
      const pathStr = isAll
        ? isFirstPage
          ? "/"
          : `/page/${i + 1}`
        : `/category/${categoryUrl[category as keyof typeof categoryUrl]}/page/${i + 1}`;

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

  const searchIndexPath = path.join("public", "search-index.json");
  await fs.outputJSON(searchIndexPath, posts);
}
