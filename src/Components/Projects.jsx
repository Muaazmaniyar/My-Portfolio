import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Resturent Website 🍽️</h3>
        <p>Restaurant Website Clone
          A modern and fully responsive restaurant website clone built using ReactJS, Bootstrap 5, and CSS3. This project focuses on delivering an elegant user interface with seamless navigation and mobile-friendly design.</p>
        <a href="https://github.com/Muaazmaniyar/restaurant" target="_blank" rel="noopener noreferrer">View Source code</a>
      </div>
      <div className="project-card">
        <h3>Personal Portfolio Website 📁</h3>
        <p>🚀 "A modern and responsive personal portfolio built using ReactJS, CSS3, and Font Awesome. This project showcases my skills, qualifications, projects, and contact details — all in one dynamic web interface."</p>
        <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>
    </section>
  );
};
export default Projects;