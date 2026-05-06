import test from "node:test";
import assert from "node:assert/strict";
import {
  buildPortfolioMapGraph,
  type ProjectMapSource,
  type SkillMapGroup,
} from "./portfolioMapData";

const projects = [
  {
    id: "project-ringle",
    frontmatter: {
      title: "Ringle",
      sub_title: "English education features",
      slug: "ringle",
      tags: ["ReactNative", "Expo", "FastAPI"],
      summary: ["App tracking", "Learning graph"],
      git_link: "",
      date: "2025-10-06",
      hero_image: {
        childImageSharp: {
          gatsbyImageData: {
            images: {
              fallback: {
                src: "/static/ringle-thumbnail.png",
              },
            },
          },
        },
      },
    },
  },
  {
    id: "project-site",
    frontmatter: {
      title: "scorchedrice.com",
      sub_title: "Personal website",
      slug: "scorchedrice-com",
      tags: ["Gatsby", "React"],
      summary: ["MDX blog", "Search"],
      git_link: "https://github.com/scorchedrice/scorchedrice.com",
      date: "2025-04-25",
    },
  },
] as unknown as ProjectMapSource[];

const skillGroups: SkillMapGroup[] = [
  {
    name: "Frontend",
    data: [
      { name: "React", Url: "react.svg" },
      { name: "Gatsby", Url: "gatsby.svg" },
      { name: "Expo", Url: "expo.png" },
    ],
  },
  {
    name: "Backend",
    data: [{ name: "FastAPI", Url: "fastapi.svg" }],
  },
];

test("project mode renders only project nodes around the center", () => {
  const graph = buildPortfolioMapGraph(projects, skillGroups, "project");
  const ringleNode = graph.nodes.find((node) => node.id === "project-ringle");

  assert.equal(graph.nodes.some((node) => node.id === "center-projects"), true);
  assert.equal(graph.nodes.some((node) => node.id === "project-ringle"), true);
  assert.equal(graph.nodes.some((node) => node.id === "tag-expo"), false);
  assert.equal(graph.nodes.some((node) => node.id === "skill-expo"), false);
  assert.equal(
    graph.links.some(
      (link) => link.source === "center-projects" && link.target === "project-ringle",
    ),
    true,
  );
  assert.equal(
    graph.links.some(
      (link) => link.source === "project-ringle" && link.target === "tag-expo",
    ),
    false,
  );
  assert.equal(
    (ringleNode as { thumbnailUrl?: string } | undefined)?.thumbnailUrl,
    "/static/ringle-thumbnail.png",
  );
});

test("skill mode exposes category nodes and the projects using each skill", () => {
  const graph = buildPortfolioMapGraph(projects, skillGroups, "skill");

  assert.equal(graph.nodes.some((node) => node.id === "center-skills"), true);
  assert.equal(graph.nodes.some((node) => node.id === "category-frontend"), true);
  assert.equal(graph.nodes.some((node) => node.id === "skill-react"), true);
  assert.equal(graph.nodes.some((node) => node.id === "skill-reactnative"), false);
  assert.equal(graph.nodes.some((node) => node.id === "project-site"), false);
  assert.equal(
    graph.links.some(
      (link) => link.source === "center-skills" && link.target === "category-frontend",
    ),
    true,
  );
  assert.equal(
    graph.links.some(
      (link) => link.source === "category-frontend" && link.target === "skill-react",
    ),
    true,
  );
  assert.equal(
    graph.links.some(
      (link) => link.source === "skill-react" && link.target === "project-site",
    ),
    false,
  );
  assert.equal(
    graph.links.some(
      (link) => link.source === "skill-reactnative" && link.target === "project-ringle",
    ),
    false,
  );
});

test("tag mode renders only raw project tag nodes around the center", () => {
  const graph = buildPortfolioMapGraph(projects, skillGroups, "tag");

  assert.equal(graph.nodes.some((node) => node.id === "center-tags"), true);
  assert.equal(graph.nodes.some((node) => node.id === "tag-reactnative"), true);
  assert.equal(graph.nodes.some((node) => node.id === "tag-expo"), true);
  assert.equal(graph.nodes.some((node) => node.id === "project-ringle"), false);
  assert.equal(
    graph.links.some(
      (link) => link.source === "center-tags" && link.target === "tag-reactnative",
    ),
    true,
  );
  assert.equal(
    graph.links.some(
      (link) => link.source === "tag-reactnative" && link.target === "project-ringle",
    ),
    false,
  );
});
