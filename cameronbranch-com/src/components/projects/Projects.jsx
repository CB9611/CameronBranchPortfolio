import React, { useState, useEffect } from 'react';
import './Projects.css';

// Image imports
import imass1 from '../../assets/project-images/imass/imass1.jpg'
import imass2 from '../../assets/project-images/imass/imass2.jpg'
import imass3 from '../../assets/project-images/imass/imass3.jpg'
import imass4 from '../../assets/project-images/imass/imass4.jpg'
import imass5 from '../../assets/project-images/imass/imass5.jpg'
import entrack1 from '../../assets/project-images/entrack/entrack1.jpg'
import entrack2 from '../../assets/project-images/entrack/entrack2.jpg'
import entrack3 from '../../assets/project-images/entrack/entrack3.jpg'
import entrack4 from '../../assets/project-images/entrack/entrack4.jpg'
import entrack5 from '../../assets/project-images/entrack/entrack5.jpg'

const ProjectCard = ({ project }) => {

  return (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="scrolling-wrapper">
        {[...project.images, ...project.images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.name} screenshot ${index}`}
            className="scroll-image"
          />
        ))}
      </div>
      <div className="project-overlay">
        <h1 className="project-name">{project.name}</h1>
        <p className="project-tagline">{project.tagline}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  const myProjects = [
    {
      name: "IMASS",
      tagline: "Integrated Modeling and Simulation System",
      github: "https://github.com/CB9611/IMASS_2025",
      images: [imass1, imass2, imass3, imass4, imass5]
    },
    {
      name: "EnTrack",
      tagline: "Enterprise Tracking & Inventory Management",
      github: "https://github.com/CB9611/CMPS-383-Spring-2023-EnTrack",
      images: [entrack1, entrack2, entrack3, entrack4, entrack5]
    }
  ];

  return (
    <section className="projects-section section-wrapper">
      <h2 className="section-header">Projects</h2>
      <div className="projects-grid">
        {myProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;