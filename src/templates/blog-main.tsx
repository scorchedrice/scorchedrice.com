import * as React from "react"
import {graphql, HeadFC, Link, PageProps} from "gatsby"
import Layout from "../widgets/layout/layout";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Separator} from "@/components/ui/separator";
import CategoryButton from "@/widgets/home/CategoryButton";
import RightSide from "@/widgets/home/RightSide";
import Profile from "@/widgets/home/Profile";

type BlogPageContext = {
  category: string;
  currentPage: number;
  totalPages: number;
}

const BlogPageTemplate: React.FC<PageProps<any, BlogPageContext>> = ({data, pageContext}) => {
  const isAll = pageContext.category === "전체";
  const postNodes = isAll
    ? data.allMdxUnfiltered.nodes
    : data.allMdxFiltered.nodes;
  const tagsMap = new Map();
  for (const node of postNodes) {
    const category = node.frontmatter.category;
    const tags = node.frontmatter.tags;
    if (tagsMap.has(category)) {
      tagsMap.get(category).push(...tags);
    } else {
      tagsMap.set(category, []);
      tagsMap.get(category).push(...tags);
    }
  }
  return (
    <Layout>
      <div className="w-full max-w-[1200px] mx-auto h-[200px] flex items-center p-4">
        <Profile/>
      </div>
      <main className="w-full flex max-w-[1200px] min-h-[100dvh] mx-auto">
        <section id="post_list" className="w-full md:w-2/3 p-4">
          <div className="w-full flex" id="categories">
            <CategoryButton categoryName="전체"/>
            <CategoryButton categoryName="개발"/>
            <CategoryButton categoryName="프로젝트"/>
          </div>
          <Separator/>
          {/*여기서부터 리스트로 포스트를 표시하는 공간.*/}
          {postNodes.map((node) => {
            const excerpt = node.excerpt;
            const frontmatter = node.frontmatter;
            const category = frontmatter.category;
            const date = frontmatter.date;
            const gatsby_image = getImage(frontmatter.hero_image);
            const title = frontmatter.title;
            const slug = "/article/" + frontmatter.slug;
            const id = node.id;
            const tags = frontmatter.tags;
            return (
              <Link
                to={slug}
                key={id}
                className="flex items-center justify-between p-4 my-4 h-[160px] rounded-[10px]
                  transition-all hover:scale-105
                "
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h1 className="text-[20px] font-bold mb-2">{title}</h1>
                    <span className="text-[14px]">{excerpt}</span>
                    <div className="flex my-2">
                      {tags.map((tag : string) => {
                        return (
                          <div className="bg-gray-300 rounded-2xl p-1 text-[12px] mr-1">
                            {tag}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-[12px] font-light text-gray-500">{date} · {category}</div>
                </div>
                {
                  gatsby_image && (
                    <GatsbyImage alt="test" image={gatsby_image} className="ml-2 w-[100px] h-[80px] shrink-0"/>
                  )
                }
              </Link>
            )
          })}
        </section>
        <section className="hidden md:w-1/3 md:flex md:p-4">
          <RightSide tagMapData={tagsMap} />
        </section>
      </main>
      <div>
        Pagination Section
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMdxFiltered: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      skip: $skip
      limit: $limit
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        ...CommonFields
      }
    }
    allMdxUnfiltered: allMdx(
      skip: $skip
      limit: $limit
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        ...CommonFields
      }
    }
  }

  fragment CommonFields on Mdx {
    id
    excerpt(pruneLength: 50)
    frontmatter {
      title
      slug
      date(formatString: "YYYY-MM-DD")
      category
      tags
      hero_image {
        childImageSharp {
          gatsbyImageData(width: 100, height: 80)
        }
      }
    }
  }
`;


export default BlogPageTemplate

export const Head: HeadFC = () => <title>Home Page</title>
