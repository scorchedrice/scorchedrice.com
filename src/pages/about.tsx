import * as React from 'react';
import {HeadFC} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from "gatsby";
import SEOTitle from "../widgets/seo/MetaTitle";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <h1>About page</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        style={{width: '100px', height: '100px'}}
      />

    </main>
  )
}

// 이런식으로 <head>를 작성 가능함.
export const Head: HeadFC = () =>
  <>
    <SEOTitle title="about page"/>
    <meta name="description" content="about page"/>
  </>

export default AboutPage;