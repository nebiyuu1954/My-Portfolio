import React, { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import './experience.css';

const Experience = () => {
  const experiences = [
    {
     role: 'Backend & Bot Developer (Internship)',
     company: 'Conquer Agency',
     year: '04/2024 – 07/2024',
     location: 'Addis Ababa, Ethiopia',
     responsibilities: [ 'Developed a Django-based Telegram bot for group management, payments, and access control.', 'Integrated Chapa Payment Gateway API for secure, real-time transactions and subscription handling.', 'Built a Telegram Web App interface with dynamic HTML/CSS/JS served from Django.', 'Implemented webhooks to synchronize payment status and automate user access.', 'Applied Python testing frameworks to validate bot logic and backend services.' ]
    },
    {
      role: 'Full Stack Web Developer',
      company: 'DAFTech Social ICT Solutions',
      year: '08/2025 – 02/2026',
      location: 'Addis Ababa, Ethiopia',
      responsibilities: [ 'Built internal production web applications using .NET 8 and Angular, deployed on IIS with SSL.', 'Designed relational database schemas with SQL Server and Entity Framework Core.', 'Exposed scalable RESTful APIs with JWT authentication and role-based access control (RBAC).', 'Configured IIS application pools and SSL certificates to ensure high availability.', 'Developed UNICEF-supported government water billing system (Wuha Limat Billing Software).' ]
    },
    {
      role: 'Recent Graduate',
      company: 'Life University',
      year: '2025',
      location: 'Everywhere',
      responsibilities: [
        'Mastered the art of learning and adapting quickly.',
        'Navigated the chaos of deadlines with a smile.',
        'Ready to code, create, and conquer new challenges!',
        'Hey people, I just graduated, give me some time!'
      ],
      isHumorous: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleNext = () => {
    setAnimationClass('slide-out-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
      setAnimationClass('slide-in-right');
    }, 300);
  };

  const handlePrevious = () => {
    setAnimationClass('slide-out-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
      setAnimationClass('slide-in-left');
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 300);
    return () => clearTimeout(timer);
  }, [animationClass]);

  const title = `Experience`;
  const titleWithSpans = title.split('').map((char, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {char}
    </span>
  ));

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">{titleWithSpans}</h2>
        <div className={`experience-card-wrapper ${animationClass}`}>
          <ExperienceCard key={currentIndex} {...experiences[currentIndex]} />
        </div>
        <div className="experience-navigation">
          <button className="nav-button" onClick={handlePrevious}>
            Previous
          </button>
          <span className="progress-indicator">
            {currentIndex + 1} of {experiences.length}
          </span>
          <button className="nav-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
