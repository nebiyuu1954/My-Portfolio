import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'UNICEF-Supported Water Billing System',
      techStack: ['C#', '.NET 8', 'Entity Framework Core', 'SQL Server', 'Angular 16', 'TypeScript', 'JWT', 'Swagger'],
      githubLink: '',
      liveDemoLink: '',
      documentationLink: '',
      description: [
        'Developed a full-stack billing and customer management system for government water services.',
        'Designed RESTful APIs with JWT authentication and role-based access control (RBAC).',
        'Implemented automated bill calculation and PDF receipt generation.',
        'Built Angular dashboards with charts for operational reporting.',
        'Deployed and maintained the system on IIS with SSL configuration.'
      ]
    },
    {
      title: 'Temp AI Internship Matching Platform',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'Formik & Yup', 'Django', 'Django Rest Framework'],
      githubLink: '',
      liveDemoLink: '',
      documentationLink: '',
      description: [
        'Led development of an AI-powered internship matching platform for Ethiopia with job seeker, employer, and admin roles.',
        'Implemented automated resume scoring using OpenRouter APIs and rule-based matching logic.',
        'Designed modular Django backend with role-based access control (RBAC).',
        'Built responsive frontend with Tailwind CSS and integrated data visualizations.',
        'Implemented JWT authentication and API documentation with Swagger.'
      ]
    },
    {
      title: 'Telegram Bot & Web App (Django)',
      techStack: ['Django', 'Python', 'MongoDB', 'Chapa API', 'Telegram API'],
      githubLink: 'https://github.com/nebiyuu1954',
      liveDemoLink: '',
      documentationLink: '',
      description: [
        'Developed a Django-based Telegram bot with group management, restrictions, and community guideline enforcement.',
        'Integrated Chapa Payment Gateway API for secure community payments and subscription handling.',
        'Built a Telegram Web App interface serving dynamic HTML/CSS/JS from Django for seamless payment processing.',
        'Implemented webhook logic to synchronize payment status and automate user access.',
        'Applied Python testing frameworks to validate bot functionality and backend services.'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      techStack: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/nebiyuu1954/My-Portfolio',
      liveDemoLink: 'https://nebiyu-esaiyas.vercel.app/',
      documentationLink: 'https://github.com/nebiyuu1954/My-Portfolio/blob/main/README.md',
      description: [
        'Designed and developed a responsive, intuitive UI using React and Vite.',
        'Implemented interactive skills slider and multilingual support (English, Amharic, Spanish).',
        'Integrated contact forms with Formik and Yup validation, connected via EmailJS.',
        'Optimized asset management and applied theme switching (light/dark mode).',
        'Deployed with CI/CD pipeline on Vercel for automated builds and updates.'
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
