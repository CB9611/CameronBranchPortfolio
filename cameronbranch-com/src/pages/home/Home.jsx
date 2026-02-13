import { useState, useEffect } from 'react'
import './Home.css'
import Biography from '../../components/biography/Biography.jsx'
import Education from '../../components/education/Education.jsx'
import Experience from '../../components/experience/Experience.jsx'
import Projects from '../../components/projects/Projects.jsx'
import Skills from '../../components/skills/Skills.jsx'

const titles = ["Developer", "React.js", "Innovator", "IT Professional"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="home-hero">
          <h1 className="name-header">
            Cameron Branch
          </h1>
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
