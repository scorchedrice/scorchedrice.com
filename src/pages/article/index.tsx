import * as React from 'react';
import Layout from "../../widgets/layout/layout";
import {graphql, HeadFC, Link} from "gatsby";
import SEOTitle from "../../widgets/seo/MetaTitle";

const BlogPage = ({ data } : { data : any }) => {
  return (
    <Layout>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head : HeadFC = () =>
  <>
    <SEOTitle title="blog page"/>
  </>

export default BlogPage;
