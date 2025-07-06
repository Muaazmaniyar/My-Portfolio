import React from "react";
import '../Styles/hero.css';
import profile from '../assets/portimg.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-card">
      <img src={profile} alt="Muaaz Maniyar" className="hero-image" height={200} width={150}/>
      </div>
      <h2>Hey there 👋</h2>
      <h1 className="slide-in">I'm Muaaz Maniyar</h1>
      <p style={{color:"yellow"}}>I am a Full Stack Python Developer <FontAwesomeIcon icon={faPython} style={{color: "#FFD43B",}} /></p><br />
      <a href="" className="cta-button">Download Resume</a>
    </section>
  );
};

export default Hero;