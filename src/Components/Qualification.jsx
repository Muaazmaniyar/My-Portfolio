import React from 'react';
import '../Styles/Qualification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Qualification = () => {
  return (
    <section className="qualification-section" id="qualification">
      <h2>Qualifications</h2>
      <div className="qualification-list">
        <div className="qualification-item">
          <a href="/muaaz.pdf" download={{} }><h3><FontAwesomeIcon icon={faGraduationCap} /> BBA (Computer Application)</h3></a>
          <p>Savitribai Phule Pune University, 2025 - Grade: B+</p>
        </div>
        <div className="qualification-item">
          <a href="/12th.JPG" download={{}}><h3><FontAwesomeIcon icon={faGraduationCap} /> 12th (Commerce)</h3></a>
          <p>Don Bosco Jr College, 2022 - 60%</p>
        </div>
      </div>
    </section>
  );
};

export default Qualification;