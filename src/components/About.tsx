import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>I'm Abdeta Bayissa</h3>
            <p>
              I'm a passionate Computer Science student in my 3rd year at Madda Walabu University. 
              My journey in programming started with curiosity and has grown into a deep love for 
              creating digital solutions that make a difference.
            </p>
            <p>
              I enjoy working with modern web technologies and am always eager to learn new 
              programming languages and frameworks. My goal is to become a skilled software 
              developer who can contribute to innovative projects and help solve real-world problems.
            </p>
         
          </div>
          <div className="about-image">
            <div className="education-card">
              <h4>🎓 Education</h4>
              <p><strong>Madda Walabu University</strong></p>
              <p>Bachelor degree in Computer Science</p>
              <p>3rd Year Student</p>
              <div className="interests">
                <h5>Interests:</h5>
                <ul>
                  <li>Web Development</li>
                  <li>Software Engineering</li>
                  <li>Problem Solving</li>
                  <li>New Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;