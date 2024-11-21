import React from "react";
import "../css/Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one.",
    imageUrl: "path-to-image-1.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    imageUrl: "path-to-image-2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project two.",
    imageUrl: "path-to-image-2.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of project two.",
    imageUrl: "path-to-image-2.jpg",
  },
  // Ajoute d'autres projets ici
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-details">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
