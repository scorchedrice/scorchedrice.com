import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `eeum blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'article',
        path: `${__dirname}/articles`,
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
            },
          },
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
}

export default config
