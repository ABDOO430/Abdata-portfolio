import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            I'm <span className="highlight">Abdeta </span>
          </h1>
          <h2 className="hero-subtitle">Computer Science Student & Programming Enthusiast</h2>
          <p className="hero-description">
            3rd year Computer Science student at Madda Walabu University with a passion for programming 
            and building innovative solutions. I love creating web applications and exploring new technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image-container">
            <img 
              src="/me.jpg" 
              alt="Abdeta Bayissa" 
              className="profile-image"
            />
            <div className="image-overlay">
              <div className="overlay-text">Abdeta Bayissa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;