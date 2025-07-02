import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      techStack: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveDemoLink: 'https://ecommerce-demo.com',
      documentationLink: 'https://github.com/yourusername/ecommerce/blob/main/README.md',
      description: [
        'Built a full-stack e-commerce platform with user authentication.',
        'Implemented product filtering and cart functionality.',
        'Designed responsive UI with Tailwind CSS.',
        'Integrated Stripe for payments.'
      ]
    },
    {
      title: 'Task Manager App',
      techStack: ['React', 'MongoDB', 'Express', 'Node.js'],
      githubLink: 'https://github.com/yourusername/taskmanager',
      liveDemoLink: 'https://taskmanager-demo.com',
      documentationLink: 'https://github.com/yourusername/taskmanager/blob/main/docs.md',
      description: [
        'Developed a task management app with CRUD operations.',
        'Used MongoDB for data storage.',
        'Implemented RESTful APIs with Express.',
        'Created intuitive UI with React.'
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleNext = () => {
    setAnimationClass('slide-out-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setAnimationClass('slide-in-right');
    }, 300);
  };

  const handlePrevious = () => {
    setAnimationClass('slide-out-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setAnimationClass('slide-in-left');
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 300);
    return () => clearTimeout(timer);
  }, [animationClass]);

  const title = 'Projects';
  const titleWithSpans = title.split('').map((char, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {char}
    </span>
  ));

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">{titleWithSpans}</h2>
        <div className={`project-card-wrapper ${animationClass}`}>
          <ProjectCard key={currentIndex} {...projects[currentIndex]} />
        </div>
        <div className="project-navigation">
          <button className="nav-button" onClick={handlePrevious}>
            Previous
          </button>
          <span className="progress-indicator">
            {currentIndex + 1} of {projects.length}
          </span>
          <button className="nav-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;