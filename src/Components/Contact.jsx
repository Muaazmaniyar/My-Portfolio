import React from 'react';
import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <h3>Get in touch</h3>
      <p><FontAwesomeIcon icon={faLocationDot} /> Bhujbal Farm house, old cidco, Nashik</p>
      <p><FontAwesomeIcon icon={faPhone} /> +91 8668298170</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> muaazmaniyar7@gmail.com</p>
      <div className="contact-links">
        <a href="https://github.com/Muaazmaniyar" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/muaaz-maniyar-57775228b/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
};

export default Contact;