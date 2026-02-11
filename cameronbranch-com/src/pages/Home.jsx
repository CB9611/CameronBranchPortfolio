import { useState, useEffect } from 'react'
import './Home.css'
import Skills from '../components/skills/Skills.jsx'

const titles = ["Developer", "React.js", "Innovator", "IT Professional"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{
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
        <Skills />
      </div>
    </>
  )
}

export default Home;
