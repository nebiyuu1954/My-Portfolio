import React, { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import './experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Python Django Developer (Internship)',
      company: 'Conquer Agency',
      year: '04/2024 - 06/2024',
      location: 'Remote',
      responsibilities: [
        'Collaborated to build Tigat website Telegrams community features like Group management and Bot payment using Django',
        'Implemented payment integration with Chapas API',
        'Web Scrapping using libraries such as Beautiful Soup lxml for data extraction and analysis',
        'Tested python and telgram clases',
        'Implemented webhooks for payment notification',
      ]
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