import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and TypeScript showcasing my skills and projects.',
      technologies: ['React', 'TypeScript', 'CSS3', 'HTML5'],
      image: 'portfolio.jpg',
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Student Management System',
      description: 'A web application for managing student records, grades, and course enrollment with user authentication.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
      image: '/projects/student-management.svg',
      github: 'https://github.COM/ABDOO_430',
      demo: '#',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'RWSSO Web Portal',
      description: 'A web application for Robe Water supply service Office ',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/projects/weather-app.svg',
      github: 'https://Github.COM/ABDOO_430',
      demo: 'https://TELEGRAM.COM/ABDOO_430',
      status: 'In Progress'
    },

    {
      id: 5,
      title: 'Shopping Website',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'shopping.jpg',
      github: '#',
      demo: '#',
      status: 'Planning'
    },

  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="projects-intro text-center">
          Here are some of the projects I've worked on and am currently developing
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} className="project-link demo">
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta text-center">
          <p>Want to see more of my work?</p>
          <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;