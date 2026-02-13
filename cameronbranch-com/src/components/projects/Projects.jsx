import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      description: "."
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-header">Projects</h2>
      <div className="projects-container">
        {projectsData.map((proj, index) => (
          <div className="projects-card" key={index}>
            <p className="projects-description">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;