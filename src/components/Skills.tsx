import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Java', level: 75, category: 'Programming' },
    { name: 'SQL', level: 70, category: 'Database' },
  ];

  const categories = ['Frontend', 'Backend', 'Programming', 'Tools', 'Database'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="skills-intro text-center">
          Here are the technologies and programming languages I work with
        </p>
        
        <div className="skills-categories">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className="learning-section">
          <h3>Currently Learning</h3>
          <div className="learning-items">
            <span className="learning-item">React Native</span>
            <span className="learning-item">Git</span>
            <span className="learning-item">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;