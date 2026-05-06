import React from "react";
import {graphql, HeadFC, PageProps} from "gatsby";
import "../global.css";
import MapExplorer from "@/widgets/map/MapExplorer";
import {skillSvgLinkList} from "@/shared/const/skillSvgLink";
import type {ProjectMapSource} from "@/widgets/map/portfolioMapData";

type MapPageData = {
  allMdx: {
    nodes: ProjectMapSource[];
  };
};

const MapPage = ({data}: PageProps<MapPageData>) => {
  return (
    <MapExplorer
      projects={data.allMdx.nodes}
      skillGroups={skillSvgLinkList}
    />
  );
};

export default MapPage;

export const Head: HeadFC = () => (
  <title>scorchedrice.com map</title>
);

export const query = graphql`
  query PortfolioMapProjects {
    allMdx(
      filter: { frontmatter: { category: { eq: "프로젝트" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          sub_title
          slug
          tags
          summary
          git_link
          date(formatString: "YYYY-MM-DD")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
