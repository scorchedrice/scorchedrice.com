import React, {useEffect, useMemo, useRef, useState} from "react";
import {Link, navigate} from "gatsby";
import {
  ArrowLeft,
  Blocks,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FolderKanban,
  Github,
  Hash,
  Layers3,
  Network,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import {
  buildPortfolioMapGraph,
  type MapMode,
  type PortfolioMapGraph,
  type PortfolioMapNode,
  type ProjectMapSource,
  type SkillMapGroup,
} from "@/widgets/map/portfolioMapData";
import "./map-explorer.css";

type Point = {
  x: number;
  y: number;
};

type Props = {
  projects: ProjectMapSource[];
  skillGroups: SkillMapGroup[];
};

const plane = {
  width: 1680,
  height: 1320,
};

const buildPositionMap = (graph: PortfolioMapGraph) =>
  graph.nodes.reduce<Record<string, Point>>((acc, node) => {
    acc[node.id] = { x: node.x, y: node.y };
    return acc;
  }, {});

const useConnectedIds = (
  graph: PortfolioMapGraph,
  selectedNode: PortfolioMapNode | undefined,
) =>
  useMemo(() => {
    if (!selectedNode) return new Set<string>();

    const ids = new Set<string>([selectedNode.id]);
    graph.links.forEach((link) => {
      if (link.source === selectedNode.id) ids.add(link.target);
      if (link.target === selectedNode.id) ids.add(link.source);
    });

    return ids;
  }, [graph.links, selectedNode]);

const isInternalMapReferrer = (referrer: string) => {
  if (!referrer || typeof window === "undefined") return false;

  try {
    const referrerUrl = new URL(referrer);
    const currentHost = window.location.hostname;
    const referrerHost = referrerUrl.hostname;
    const isSameOrigin = referrerUrl.origin === window.location.origin;
    const isScorchedriceDomain =
      referrerHost === "scorchedrice.com" ||
      referrerHost.endsWith(".scorchedrice.com");
    const isCurrentLocalDev =
      currentHost === "localhost" ||
      currentHost === "127.0.0.1" ||
      currentHost === "::1";

    return isSameOrigin || (!isCurrentLocalDev && isScorchedriceDomain);
  } catch {
    return false;
  }
};

const ProjectIcon = ({node}: {node: PortfolioMapNode}) => {
  if (node.kind === "center") return <Sparkles size={30} strokeWidth={1.8} />;
  if (node.kind === "tag") return <Hash size={20} />;
  if (node.kind === "category") {
    if (node.id.includes("frontend")) return <Layers3 size={22} />;
    if (node.id.includes("backend")) return <Server size={22} />;
    if (node.id.includes("tool")) return <Blocks size={22} />;
    return <Network size={22} />;
  }
  if (node.kind === "project" && node.thumbnailUrl) {
    return (
      <img
        className="map-node__thumbnail"
        src={node.thumbnailUrl}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    );
  }
  if (node.kind === "project") return <BriefcaseBusiness size={22} />;
  if (node.iconUrl) {
    return (
      <img
        className="map-node__logo"
        src={node.iconUrl}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    );
  }
  return <Code2 size={20} />;
};

const Sidebar = ({
  node,
  projects,
  onClose,
}: {
  node: PortfolioMapNode;
  projects: ProjectMapSource[];
  onClose: () => void;
}) => {
  const relatedProjects =
    node.kind === "skill" || node.kind === "tag"
      ? projects.filter((project) => project.frontmatter.tags.includes(node.label))
      : node.kind === "category"
        ? projects.filter((project) =>
            project.frontmatter.tags.some((tag) => node.tags?.includes(tag)),
          )
      : node.kind === "project"
        ? projects.filter((project) => project.id === node.id)
        : projects;

  return (
    <aside className="map-sidebar" aria-label="Selected node detail">
      <div className="map-sidebar__top">
        <div>
          <span className="map-sidebar__eyebrow">{node.group}</span>
          <h1>{node.label}</h1>
        </div>
        <button className="map-sidebar__close" type="button" onClick={onClose} aria-label="Close detail">
          <X size={18} />
        </button>
      </div>

      {node.subTitle && <p>{node.subTitle}</p>}

      {node.summary && node.summary.length > 0 && (
        <div className="map-sidebar__section">
          <h2>Summary</h2>
          <ul className="map-sidebar__list">
            {node.summary.map((summary) => (
              <li key={summary}>{summary}</li>
            ))}
          </ul>
        </div>
      )}

      {node.tags && node.tags.length > 0 && (
        <div className="map-sidebar__section">
          <h2>{node.kind === "category" ? "Skills" : "Stack"}</h2>
          <div className="map-sidebar__chips">
            {node.tags.map((tag) => (
              <span className="map-sidebar__chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {(node.kind === "skill" || node.kind === "tag" || node.kind === "category") && (
        <div className="map-sidebar__section">
          <h2>Projects</h2>
          <ul className="map-sidebar__list">
            {relatedProjects.length > 0 ? (
              relatedProjects.map((project) => (
                <li key={project.id}>
                  <Link to={`/article/${project.frontmatter.slug}`}>
                    {project.frontmatter.title}
                  </Link>
                </li>
              ))
            ) : (
              <li>No linked project yet.</li>
            )}
          </ul>
        </div>
      )}

      {node.kind === "center" && (
        <div className="map-sidebar__section">
          <h2>Archive</h2>
          <p>{projects.length} projects are connected through the current map view.</p>
        </div>
      )}

      {node.kind === "project" && (
        <div className="map-sidebar__actions">
          <Link className="map-sidebar__link" to={`/article/${node.slug}`}>
            <ExternalLink size={15} />
            Article
          </Link>
          {node.gitLink && node.gitLink.length > 0 && (
            <a className="map-sidebar__link" href={node.gitLink} target="_blank" rel="noreferrer">
              <Github size={15} />
              GitHub
            </a>
          )}
        </div>
      )}
    </aside>
  );
};

export default function MapExplorer({projects, skillGroups}: Props) {
  const [mode, setMode] = useState<MapMode>("tag");
  const graph = useMemo(
    () => buildPortfolioMapGraph(projects, skillGroups, mode),
    [mode, projects, skillGroups],
  );
  const [positions, setPositions] = useState<Record<string, Point>>(() =>
    buildPositionMap(graph),
  );
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const lastPointer = useRef<Point>({ x: 0, y: 0 });
  const movedRef = useRef(false);

  useEffect(() => {
    setPositions(buildPositionMap(graph));
    setSelectedId(null);
    setPan({ x: 0, y: 0 });
  }, [graph]);

  const selectedNode = useMemo(
    () => graph.nodes.find((node) => node.id === selectedId),
    [graph.nodes, selectedId],
  );
  const connectedIds = useConnectedIds(graph, selectedNode);

  const positionFor = (id: string) => positions[id] ?? { x: 0, y: 0 };

  const handleMapBack = () => {
    if (isInternalMapReferrer(document.referrer)) {
      window.history.back();
      return;
    }

    navigate("/");
  };

  const handleViewportPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsPanning(true);
    movedRef.current = false;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleViewportPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dx = event.clientX - lastPointer.current.x;
    const dy = event.clientY - lastPointer.current.y;

    if (draggingNodeId) {
      movedRef.current = movedRef.current || Math.abs(dx) + Math.abs(dy) > 2;
      setPositions((current) => {
        const previous = current[draggingNodeId] ?? { x: 0, y: 0 };
        return {
          ...current,
          [draggingNodeId]: {
            x: previous.x + dx,
            y: previous.y + dy,
          },
        };
      });
    } else if (isPanning) {
      movedRef.current = movedRef.current || Math.abs(dx) + Math.abs(dy) > 2;
      setPan((current) => ({
        x: current.x + dx,
        y: current.y + dy,
      }));
    }

    lastPointer.current = { x: event.clientX, y: event.clientY };
  };

  const handleViewportPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsPanning(false);
    setDraggingNodeId(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleNodePointerDown = (
    event: React.PointerEvent<HTMLButtonElement>,
    nodeId: string,
  ) => {
    event.stopPropagation();
    setDraggingNodeId(nodeId);
    movedRef.current = false;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleNodePointerMove = (
    event: React.PointerEvent<HTMLButtonElement>,
    nodeId: string,
  ) => {
    event.stopPropagation();
    if (draggingNodeId !== nodeId) return;

    const dx = event.clientX - lastPointer.current.x;
    const dy = event.clientY - lastPointer.current.y;

    movedRef.current = movedRef.current || Math.abs(dx) + Math.abs(dy) > 2;
    setPositions((current) => {
      const previous = current[nodeId] ?? { x: 0, y: 0 };
      return {
        ...current,
        [nodeId]: {
          x: previous.x + dx,
          y: previous.y + dy,
        },
      };
    });
    lastPointer.current = { x: event.clientX, y: event.clientY };
  };

  const handleNodePointerUp = (
    event: React.PointerEvent<HTMLButtonElement>,
    nodeId: string,
  ) => {
    event.stopPropagation();
    setDraggingNodeId(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!movedRef.current) {
      setSelectedId(nodeId);
    }
  };

  return (
    <main className="map-explorer">
      <div className="map-boot-overlay" aria-hidden="true" />

      <button className="map-back" type="button" onClick={handleMapBack}>
        <ArrowLeft size={18} />
        Back
      </button>

      <div
        className={`map-viewport ${isPanning ? "is-panning" : ""} ${draggingNodeId ? "is-dragging-node" : ""}`}
        onPointerDown={handleViewportPointerDown}
        onPointerMove={handleViewportPointerMove}
        onPointerUp={handleViewportPointerUp}
        onPointerCancel={handleViewportPointerUp}
      >
        <div
          className="map-plane"
          style={{
            transform: `translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px))`,
          }}
        >
          <svg
            className="map-lines"
            viewBox={`0 0 ${plane.width} ${plane.height}`}
            aria-hidden="true"
          >
            {graph.links.map((link) => {
              const source = positionFor(link.source);
              const target = positionFor(link.target);
              const active =
                !selectedNode ||
                link.source === selectedNode.id ||
                link.target === selectedNode.id;

              return (
                <line
                  key={`${link.source}-${link.target}`}
                  className={`map-link ${selectedNode && !active ? "is-dimmed" : ""} ${selectedNode && active ? "is-active" : ""}`}
                  x1={source.x + plane.width / 2}
                  y1={source.y + plane.height / 2}
                  x2={target.x + plane.width / 2}
                  y2={target.y + plane.height / 2}
                />
              );
            })}
          </svg>

          {graph.nodes.map((node) => {
            const position = positionFor(node.id);
            const isSelected = node.id === selectedId;
            const isDimmed = selectedNode && !connectedIds.has(node.id);

            return (
              <button
                type="button"
                key={node.id}
                className={`map-node map-node--${node.kind} ${isSelected ? "is-selected" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                data-label={node.label}
                aria-label={node.label}
                style={{
                  "--node-color": node.color,
                  width: node.radius * 2,
                  height: node.radius * 2,
                  left: position.x + plane.width / 2,
                  top: position.y + plane.height / 2,
                } as React.CSSProperties}
                onPointerDown={(event) => handleNodePointerDown(event, node.id)}
                onPointerMove={(event) => handleNodePointerMove(event, node.id)}
                onPointerUp={(event) => handleNodePointerUp(event, node.id)}
                onPointerCancel={(event) => handleNodePointerUp(event, node.id)}
              >
                <ProjectIcon node={node} />
              </button>
            );
          })}
        </div>
      </div>

      {selectedNode && (
        <Sidebar
          node={selectedNode}
          projects={projects}
          onClose={() => setSelectedId(null)}
        />
      )}

      <nav className="map-dock" aria-label="Map views">
        <button
          type="button"
          className={`map-dock__button ${mode === "tag" ? "is-active" : ""}`}
          aria-pressed={mode === "tag"}
          onClick={() => setMode("tag")}
        >
          <Hash size={17} />
          Tag
        </button>
        <span className="map-dock__divider" />
        <button
          type="button"
          className={`map-dock__button ${mode === "skill" ? "is-active" : ""}`}
          aria-pressed={mode === "skill"}
          onClick={() => setMode("skill")}
        >
          <Network size={17} />
          Skill
        </button>
        <span className="map-dock__divider" />
        <button
          type="button"
          className={`map-dock__button ${mode === "project" ? "is-active" : ""}`}
          aria-pressed={mode === "project"}
          onClick={() => setMode("project")}
        >
          <FolderKanban size={17} />
          Project
        </button>
      </nav>

      <div className="map-mini-status">scorchedrice.com/map</div>
    </main>
  );
}
