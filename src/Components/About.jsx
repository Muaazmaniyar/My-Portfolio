import React from 'react';
import '../Styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faPython,} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faC } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <p>I am a certified Full Stack Python Developer skilled in HTML5, CSS3, JavaScript, ReactJS, jQuery, C, C++, Python, Django, and MySQL.</p>
      <div>
        <FontAwesomeIcon className='icons' icon={faHtml5} />
        <FontAwesomeIcon className='icons' icon={faCss3Alt}/>
        <FontAwesomeIcon className='icons' icon={faJsSquare}/>
        <FontAwesomeIcon className='icons' icon={faBootstrap} />
        <FontAwesomeIcon className='icons' icon={faAngular} />
        <FontAwesomeIcon className='icons' icon={faReact}/>
        <FontAwesomeIcon className='icons' icon={faC}/>
        <FontAwesomeIcon className='icons' icon={faPython}/>
        <FontAwesomeIcon className='icons' icon={faDatabase} />
      </div>
    </section>
  );
};

export default About;