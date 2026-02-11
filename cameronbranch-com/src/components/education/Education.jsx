import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Southeastern Louisiana University",
      degree: "B.S. in Information Technology",
      years: "2020 - 2025",
      status: "Completed",
      description: "Completed Bachelor of Science in Information Technology in December 2025. Key accomplishment included the design and development of the IMASS platform, which secured $8M in federal funding."
    },
    {
      institution: "Northshore Technical Community College",
      degree: "Associate of General Studies",
      years: "2017 - 2019",
      status: "Completed",
      description: "Foundation in technical studies and general academic excellence."
    }
  ];

  return (
    <section className="education-section">
      <h2 className="section-header">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-header">
              <span className="edu-years">{edu.years}</span>
              <span className="edu-status">{edu.status}</span>
            </div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <h4 className="edu-school">{edu.institution}</h4>
            <p className="edu-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;