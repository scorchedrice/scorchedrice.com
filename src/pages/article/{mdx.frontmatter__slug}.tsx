import * as React from 'react';
import Layout from "../../widgets/layout/layout";
import SEOTitle from "../../widgets/seo/MetaTitle";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";


const BlogPost = ({ data, children } : { data : any, children : any }) => {
  const frontmatter = data.mdx.frontmatter;
  const image = getImage(frontmatter.hero_image);
  const title = frontmatter.title;
  const date = frontmatter.date;
  return (
    <Layout>
      <main className="flex flex-col items-start max-w-[800px] mx-auto p-4 min-h-[100dvh]">
        <div className="mdx-content my-2">
          <h1 className="font-bold">{title}</h1>
          <span className="font-light text-gray-500">{date}</span>
        </div>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          className="w-[full] mx-auto max-w-[300px] h-auto"
        />
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
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <SEOTitle title={data.mdx.frontmatter.title}/>

export default BlogPost;