import {graphql, useStaticQuery} from "gatsby";

export function useSiteMetaData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data.site.siteMetadata;
}