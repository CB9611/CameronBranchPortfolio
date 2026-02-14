import { useState, useEffect, useRef } from 'react'
import './Home.css'
import Biography from '../../components/biography/Biography.jsx'
import Education from '../../components/education/Education.jsx'
import Experience from '../../components/experience/Experience.jsx'
import Projects from '../../components/projects/Projects.jsx'
import Skills from '../../components/skills/Skills.jsx'

const titles = ["Developer", "React.js", "Innovator", "IT Professional"];

function Home() {
  const [index, setIndex] = useState(0);
  const nameRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const el = nameRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const yRotation = ((x - rect.width / 2) / rect.width) * 40;
    let xRotationRaw = ((y - rect.height / 2) / rect.height) * -20;

    const xMax = 15;
    const xRotation = Math.max(-xMax, Math.min(xMax, xRotationRaw));

    el.style.setProperty('--y-rotate', `${yRotation}deg`);
    el.style.setProperty('--x-rotate', `${xRotation}deg`);
  };

  const handleMouseLeave = () => {
    const el = nameRef.current;
    if (el) {
      el.style.setProperty('--y-rotate', '0deg');
      el.style.setProperty('--x-rotate', '0deg');
    }
  };

  return (
    <>
      <div className="hero-container">
        <div className="home-hero">
          <div className="tilt-wrapper">
            <h1 
              className="name-header tilt-effect"
              ref={nameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              Cameron Branch
            </h1>
          </div>
          <div className="title-container">
            <span className="title-text" key={titles[index]}>
              {titles[index]}
            </span>
          </div>
        </div>
        <div className="content-container">
          <Biography />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
      </div>
    </>
  )
}

export default Home;
