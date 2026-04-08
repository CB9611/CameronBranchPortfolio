import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsCategories = [
        {
            title: "Frontend",
            skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite"]
        },
        {
            title: "Backend & APIs",
            skills: ["Python", "FastAPI", "REST APIs", "OAuth 2.0"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker", "Git", "Cloudflare", "Render", "Azure"]
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