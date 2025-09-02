import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  const name = "Nebiyu Esaiyas";
  const nameLetters = name.split('').map((letter, index) => (
    <span key={`name-${index}`} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const title = "Web Developer";
  const titleLetters = title.split('').map((letter, index) => (
    <span key={`title-${index}`} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const message = "I'm a passionate web developer with a knack for creating dynamic and user-friendly websites. With expertise in modern JavaScript frameworks like react with responsive design and backend of django, I strive to build seamless digital experiences that make an impact.";
  const messageWords = message.split(' ').map((word, index) => (
    <span key={`word-${index}`} className="word">
      {word}
      {index < message.split(' ').length - 1 ? '\u00A0' : ''}
    </span>
  ));

  return (
    <section id="landing" className="landing-section">
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-text">
            <h2 className="landing-name">{nameLetters}</h2>
            <h3 className="landing-title">{titleLetters}</h3>
            <p className="landing-message">{messageWords}</p>
            <div className="landing-buttons">
              <a href="https://flowcv.com/resume/anje09f6ogep" target="_blank" className="btn btn-primary">View Resume</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
              <a href="https://nebiyuesaiyas.vercel.app/" target="_blank" className="btn btn-third" id="portfoliov2">My second portfolio is deployed check it out </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;