import {IGatsbyImageData} from "gatsby-plugin-image";

// template/blog-main.tsx에 사용
export type BlogMainType = {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    category: string;
    tags: string[];
    hero_image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

// mdx파일로 불러오는 article에 활용
export type BlogPostType = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      category: string;
      tags: string[];
      hero_image_alt: string;
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

// gatsby-node.ts에서 모든 포스트를 일차적으로 불러오는 동작을 할 때 사용.
export type AllPostsQueryResult = {
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        title: string;
        date: string;
        category: string;
        tags: string[];
        hero_image_alt: string;
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }[];
  };
};
