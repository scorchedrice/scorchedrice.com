import * as React from 'react';
import Layout from "../../widgets/layout/layout";
import SEOTitle from "../../widgets/seo/MetaTitle";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {BlogPostType} from "@/shared/types/graphqlTypes";
import {ReactNode} from "react";


const BlogPost = ({ data, children } : { data : BlogPostType, children : ReactNode }) => {
  const frontmatter = data.mdx.frontmatter;
  const image = getImage(frontmatter.hero_image);
  const image_alt = frontmatter.hero_image_alt;
  const title = frontmatter.title;
  const date = frontmatter.date;
  const tags = frontmatter.tags.map((tag : string) => `#${tag}`);
  const category = frontmatter.category;
  return (
    <Layout>
      <main className="flex flex-col max-w-[800px] mx-auto p-4 min-h-[100dvh]">
        <span className="text-[12px] text-gray-500 md:text-[20px]">📂 {category}</span>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start mdx-content">
          {image && <GatsbyImage
            image={image}
            alt={image_alt}
            className="size-[100px] m-6 shrink-0"
          />}
          <div className="my-2 flex flex-col items-end">
            <h1 className="font-bold">{title}</h1>
            <div>
              <span className="font-light mr-2">{tags.join(', ')},</span>
              <span className="font-light text-gray-500">{date}</span>
            </div>
          </div>
        </div>
        <section className="mdx-content w-full mx-auto">
          {children}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        hero_image_alt
        category
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({data} : { data: BlogPostType }) => <SEOTitle title={data.mdx.frontmatter.title}/>

export default BlogPost;