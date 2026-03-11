import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Southeastern Louisiana University",
      website: "https://www.southeastern.edu/majors-and-minors/information-technology-bs/",
      degree: "B.S. in Information Technology",
      years: "2020 - 2025",
      status: "Graduated",
      description: "Completed Bachelor of Science in Information Technology in December 2025. Key accomplishment included the design and development of the IMASS platform, which secured $8M in federal funding."
    },
    {
      institution: "Northshore Technical Community College",
      website: "https://catalog.northshorecollege.edu/programs/AGS-GENN",
      degree: "Associate of General Studies",
      years: "2017 - 2019",
      status: "Graduated",
      description: "Foundation in technical studies and general academic excellence."
    }
  ];

  return (
    <section className="education-section">
      <h2 className="section-header">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <a href={edu.website} target="_blank" rel="noopener noreferrer" className="education-card" key={index}>
            <div className="edu-header">
              <span className="edu-years">{edu.years}</span>
              <span className="edu-status">{edu.status}</span>
            </div>
            <h1 className="edu-degree">{edu.degree}</h1>
            <h3 className="edu-school">{edu.institution}</h3>
            <p className="edu-description">{edu.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;