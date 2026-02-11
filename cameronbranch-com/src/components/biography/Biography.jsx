import React from 'react';
import './Biography.css';

const Biography = () => {
  const biographyData = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis ipsum ac dignissim egestas. Phasellus convallis fermentum ipsum ut ornare. Suspendisse in lectus vitae lacus blandit malesuada. Aliquam nec lectus at dolor faucibus pretium. Vivamus mi eros, lacinia a ex a, consequat ornare mauris. Cras gravida et enim nec lobortis. Donec aliquet nibh quis augue consequat feugiat. Ut metus nisi, maximus et orci non, pulvinar pellentesque turpis. Morbi aliquam, mi cursus ullamcorper sollicitudin, neque arcu imperdiet nulla, in sagittis tellus enim vitae ante. Quisque semper mauris odio, a mattis elit accumsan commodo. Ut sed tortor id ipsum fringilla pellentesque. Fusce semper ipsum sed erat venenatis, sed feugiat odio semper. Maecenas consequat purus nec lectus pellentesque, a malesuada tortor pharetra."
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