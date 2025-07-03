import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Telegram Bot Developer (Django) ',
      techStack: ['Django', 'Python','Mongo DB', 'Chapa Api', 'Telegram Api'],
      githubLink: 'https://github.com/nebiyuu1954',
      liveDemoLink: ' ',
      documentationLink: ' ',
      description: [
        'Implemented a Telegram Group Bot for Tigat website using Django that has group restrictions and rules for keeping Community Guidelines',
        `Implemented a Telegram Bot for Tigat website using Django that has payment integration with Chapa's Api for Community payment`,
        'Implemented Web app in telegram for the user fetching html/css/js from our django server for succesful payement interface',
        'Implemented the test clases for the classes'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      techStack: ['React', 'Vite', 'Javascript','Html','Css'],
      githubLink: 'https://github.com/nebiyuu1954/My-Portfolio',
      liveDemoLink: 'https://nebiyu-esaiyas.vercel.app/',
      documentationLink: 'https://github.com/nebiyuu1954/My-Portfolio/blob/main/README.md',
      description: [
        'Designed and Developed intuitive Responsive UI with React ',
        'Implemented Interactive Skills Slider',
        'Integrated and Managed Assets',
        'used formik and yup for validation used Email Js for submition',
        'Deployed to Vercel',
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
          <button className="pnav-button" onClick={handlePrevious}>
            Previous
          </button>
          <span className="pprogress-indicator">
            {currentIndex + 1} of {projects.length}
          </span>
          <button className="pnav-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;