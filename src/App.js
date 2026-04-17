import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Aditi</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm Aditi Ghadage</h1>
        <p>Aspiring Full Stack Developer</p>
        <button className="btn">Explore</button>
      </header>

      {/* About */}
      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          I am Aditi Ghadage, a passionate developer who enjoys building web
          applications using React and cloud platforms. I love learning new
          technologies and solving real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="card">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-box">
            <h3>Portfolio Website</h3>
            <button className="btn small">View</button>
          </div>
          <div className="project-box">
            <h3>To-Do App</h3>
            <button className="btn small">View</button>
          </div>
          <div className="project-box">
            <h3>E-commerce</h3>
            <button className="btn small">View</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="card contact">
        <h2>Contact</h2>
        <p>Email: aditig@email.com</p>

        <div className="socials">
          <a href="#" target="_blank" rel="noreferrer">
            <button className="btn small">LinkedIn</button>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <button className="btn small">GitHub</button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Aditi Ghadage</p>
      </footer>
    </div>
  );
}

export default App;