export type MapMode = "tag" | "skill" | "project";

type MapGatsbyImageData = {
  images?: {
    fallback?: {
      src?: string;
    };
  };
};

export type ProjectMapSource = {
  id: string;
  frontmatter: {
    title: string;
    sub_title: string;
    slug: string;
    tags: string[];
    summary: string[];
    git_link?: string;
    date?: string;
    hero_image?: {
      childImageSharp?: {
        gatsbyImageData?: MapGatsbyImageData;
      };
    };
  };
};

export type SkillMapGroup = {
  name: string;
  data: {
    name: string;
    Url: string;
  }[];
};

export type MapNodeKind = "center" | "project" | "skill" | "tag" | "category";

export type PortfolioMapNode = {
  id: string;
  label: string;
  kind: MapNodeKind;
  group: string;
  color: string;
  x: number;
  y: number;
  radius: number;
  slug?: string;
  subTitle?: string;
  summary?: string[];
  tags?: string[];
  gitLink?: string;
  date?: string;
  iconUrl?: string;
  thumbnailUrl?: string;
  projectIds?: string[];
};

export type PortfolioMapLink = {
  source: string;
  target: string;
};

export type PortfolioMapGraph = {
  mode: MapMode;
  nodes: PortfolioMapNode[];
  links: PortfolioMapLink[];
};

const palette = [
  "#7dd3fc",
  "#a78bfa",
  "#34d399",
  "#f59e0b",
  "#f472b6",
  "#fb7185",
  "#22d3ee",
  "#c084fc",
];

const categoryColors: Record<string, string> = {
  language: "#60a5fa",
  frontend: "#34d399",
  "backend & infra": "#f59e0b",
  backend: "#f59e0b",
  tool: "#f472b6",
  tag: "#c084fc",
};

const normalizeId = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const pointOnCircle = (
  index: number,
  total: number,
  radius: number,
  offset = -Math.PI / 2,
) => {
  const angle = offset + (Math.PI * 2 * index) / Math.max(total, 1);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

const buildSkillMeta = (skillGroups: SkillMapGroup[]) => {
  const meta = new Map<string, { category: string; iconUrl: string; color: string }>();

  skillGroups.forEach((group, groupIndex) => {
    const categoryKey = group.name.toLowerCase();
    const color = categoryColors[categoryKey] ?? palette[groupIndex % palette.length];

    group.data.forEach((skill) => {
      meta.set(skill.name, {
        category: group.name,
        iconUrl: skill.Url,
        color,
      });
    });
  });

  return meta;
};

const categoryLabel = (name: string) => {
  const key = name.toLowerCase();
  if (key === "frontend") return "FE";
  if (key === "backend & infra" || key === "backend") return "BE & Infra";
  return name;
};

const uniqueTagsFromProjects = (projects: ProjectMapSource[]) =>
  Array.from(
    new Set(projects.flatMap((project) => project.frontmatter.tags ?? [])),
  ).sort((a, b) => a.localeCompare(b));

const projectThumbnailUrl = (project: ProjectMapSource) =>
  project.frontmatter.hero_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;

const projectNode = (
  project: ProjectMapSource,
  index: number,
  total: number,
  radius: number,
): PortfolioMapNode => {
  const point = pointOnCircle(index, total, radius, -Math.PI / 2.4);

  return {
    id: project.id,
    label: project.frontmatter.title,
    kind: "project",
    group: "Project",
    color: palette[index % palette.length],
    x: point.x,
    y: point.y,
    radius: 30,
    slug: project.frontmatter.slug,
    subTitle: project.frontmatter.sub_title,
    summary: project.frontmatter.summary,
    tags: project.frontmatter.tags,
    gitLink: project.frontmatter.git_link,
    date: project.frontmatter.date,
    thumbnailUrl: projectThumbnailUrl(project),
  };
};

const skillNode = (
  skill: string,
  skillMeta: Map<string, { category: string; iconUrl: string; color: string }>,
  index: number,
  total: number,
  radius: number,
): PortfolioMapNode => {
  const point = pointOnCircle(index, total, radius, -Math.PI / 1.9);
  const meta = skillMeta.get(skill);

  return {
    id: `skill-${normalizeId(skill)}`,
    label: skill,
    kind: "skill",
    group: meta?.category ?? "Skill",
    color: meta?.color ?? palette[index % palette.length],
    x: point.x,
    y: point.y,
    radius: 20,
    iconUrl: meta?.iconUrl,
  };
};

const tagNode = (
  tag: string,
  index: number,
  total: number,
  radius: number,
): PortfolioMapNode => {
  const point = pointOnCircle(index, total, radius, -Math.PI / 1.85);

  return {
    id: `tag-${normalizeId(tag)}`,
    label: tag,
    kind: "tag",
    group: "Tag",
    color: palette[(index + 3) % palette.length],
    x: point.x,
    y: point.y,
    radius: 20,
  };
};

export const buildPortfolioMapGraph = (
  projects: ProjectMapSource[],
  skillGroups: SkillMapGroup[],
  mode: MapMode,
): PortfolioMapGraph => {
  const skillMeta = buildSkillMeta(skillGroups);
  const nodes: PortfolioMapNode[] = [];
  const links: PortfolioMapLink[] = [];
  const addLink = (source: string, target: string) => {
    if (!links.some((link) => link.source === source && link.target === target)) {
      links.push({ source, target });
    }
  };

  if (mode === "project") {
    nodes.push({
      id: "center-projects",
      label: "Projects",
      kind: "center",
      group: "Map",
      color: "#f8fafc",
      x: 0,
      y: 0,
      radius: 36,
    });

    const projectNodes = projects.map((project, index) =>
      projectNode(project, index, projects.length, 320),
    );

    nodes.push(...projectNodes);

    projectNodes.forEach((node) => addLink("center-projects", node.id));
  } else if (mode === "skill") {
    nodes.push({
      id: "center-skills",
      label: "Skills",
      kind: "center",
      group: "Map",
      color: "#f8fafc",
      x: 0,
      y: 0,
      radius: 36,
    });

    const categoryNodes = skillGroups.map((group, index) => {
      const point = pointOnCircle(index, skillGroups.length, 260, -Math.PI / 2);
      const key = group.name.toLowerCase();

      return {
        id: `category-${normalizeId(group.name)}`,
        label: categoryLabel(group.name),
        kind: "category" as const,
        group: "Category",
        color: categoryColors[key] ?? palette[index % palette.length],
        x: point.x,
        y: point.y,
        radius: 26,
        tags: group.data.map((skill) => skill.name),
      };
    });

    nodes.push(...categoryNodes);
    categoryNodes.forEach((node) => addLink("center-skills", node.id));

    skillGroups.forEach((group, groupIndex) => {
      const categoryPoint = categoryNodes[groupIndex];

      group.data.forEach((skill, skillIndex) => {
        const local = pointOnCircle(
          skillIndex,
          group.data.length,
          170,
          -Math.PI / 2 + groupIndex * 0.35,
        );
        const relatedProjectIds = projects
          .filter((project) => project.frontmatter.tags.includes(skill.name))
          .map((project) => project.id);

        nodes.push({
          id: `skill-${normalizeId(skill.name)}`,
          label: skill.name,
          kind: "skill",
          group: group.name,
          color: categoryPoint.color,
          x: categoryPoint.x + local.x,
          y: categoryPoint.y + local.y,
          radius: 20,
          iconUrl: skill.Url,
          projectIds: relatedProjectIds,
        });
        addLink(`category-${normalizeId(group.name)}`, `skill-${normalizeId(skill.name)}`);
      });
    });

  } else {
    nodes.push({
      id: "center-tags",
      label: "Tags",
      kind: "center",
      group: "Map",
      color: "#f8fafc",
      x: 0,
      y: 0,
      radius: 36,
    });

    const tags = uniqueTagsFromProjects(projects);
    const tagNodes = tags.map((tag, index) =>
      tagNode(tag, index, tags.length, 300),
    );

    nodes.push(...tagNodes);

    tagNodes.forEach((node) => addLink("center-tags", node.id));
  }

  return { mode, nodes, links };
};
