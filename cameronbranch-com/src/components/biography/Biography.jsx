import React from 'react';
import './Biography.css';

const Biography = () => {
  const biographyData = [
    "I discovered my passion for frontend development in a single semester. After learning Java basics, I enrolled in CMPS 285 and went from zero to building and publishing a live React-based website by the end of the course. That was the moment everything clicked. I knew React, HTML, CSS, and JavaScript were where I wanted to build my career.",
    "Since then I've been building. My most significant project to date is IMASS, a React-based simulation platform I led frontend development on during my capstone at Southeastern Louisiana University. The platform's demonstration secured $8,000,000 in federal funding from the United States Congress. I've also built a full-stack Spotify dashboard using React, FastAPI, and OAuth 2.0, deployed across Cloudflare and Azure, later migrated to Render for cost efficiency.",
    "The junior developer market is tough right now. But I'm not going anywhere. React development isn't just a career goal, it's where I'm headed, and I'm putting in the work every day to get there.",
    "I'm actively relocating to Charlotte, NC. I'm drawn to the city for its southern familiarity, its energy, and especially its growing FinTech scene. Charlotte is where I'm planting my flag for the long-haul."
  ];

  return (
    <section className="biography-section">
      <h2 className="section-header">Biography</h2>
      <div className="biography-container">
        <div className="biography-card">
          {biographyData.map((desc, index) => (
        <p className="biography-description" key={index}>{desc}</p>
      ))}
        </div>
      </div>
    </section>
  );
};

export default Biography;