import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsCategories = [
        {
            title: "Frontend",
            skills: ["React.js", "HTML5", "JavaScript", "CSS3", "Vite"]
        },
        {
            title: "IT Infrastructure",
            skills: ["Active Directory", "VMware", "Citrix", "Identity & Access Management (IAM)", "PowerShell"]
        },
        {
            title: "Technical Strategy",
            skills: ["User Interface Design", "Software Development Life Cycle (SDLC)", "Cross-functional Collaborations"]
        }
    ];

    return (
        <section className="skills-section">
            <h2 className="section-header">Skills & Expertise</h2>
            <div className="skills-grid">
                {skillsCategories.map((cat, index) => (
                    <div className="skill-card" key={index}>
                        <h2>{cat.title}</h2>
                        <div className="skill-tags">
                            {cat.skills.map((skill, i) => (
                                <span key={i}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;