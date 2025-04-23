import {IGatsbyImageData} from "gatsby-plugin-image";

export type SearchResultType = {
  id: string;
  frontmatter: {
    category: string;
    slug: string;
    title: string;
    date: string;
    hero_image_alt: string;
    hero_image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};