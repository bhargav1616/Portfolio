import "../Style/Project.css";
import ProjectData from "../api/projectData.json";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useMemo, useState } from "react";
import { PageTitle } from "./About";

export const Project = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "HTML/CSS"];
  const projects = useMemo(
    () => ProjectData.map((p) => ({ ...p, category: p.projectName?.includes("react") ? "React" : "HTML/CSS" })),
    []
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="inner-page projects-page">
      <div className="container">
        <PageTitle eyebrow="SELECTED WORK" title="Projects built to learn, solve and ship." />
        <div className="projects-toolbar">
          <p>{visible.length} projects in this collection</p>
          <div className="filter-pills">
            {categories.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
        </div>
        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image-wrap">
                <img src={`/${project.img}`} alt={`${project.title} preview`} className="project-image" loading="lazy" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-body">
                <div className="project-topline"><span>0{String(project.id).slice(-1)}</span><span>Web Project</span></div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">Live preview <FaArrowUpRightFromSquare /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
