import React from 'react';
import './Biography.css';

const Biography = () => {
  const biographyData = [
    {
      description: "I’m an IT professional turned Frontend Developer who bridges the gap between enterprise infrastructure and modern user experiences. With a background in managing high-availability systems like Active Directory and VMware, I bring a unique 'systems-first' perspective to my code. My most notable achievement was designing the React-based interface for the IMASS platform, a project that directly helped secure $8,000,000 in federal funding for my university. I don’t just build interfaces; I build scalable solutions that drive real-world results."
    }
  ];

  return (
    <section className="biography-section">
      <h2 className="section-header">Biography</h2>
      <div className="biography-container">
        {biographyData.map((desc, index) => (
          <div className="biography-card" key={index}>
            <p className="biography-description">{desc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Biography;