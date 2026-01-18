import React from 'react';
import './aboutme.css';
import profilePhoto from './nebiyuesaiyas.JPG'; // Primary profile photo
import profilePhotoHover from './nebiyuesaiyas2.JPG'; // Secondary photo for hover

const Aboutme = () => {
  const name = "Nebiyu Esaiyas";
  const nameLetters = name.split('').map((letter, index) => (
    <span key={`name-${index}`} className="letter">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const title = "Web Developer";
  const titleLetters = title.split('').map((letter, index) => (
    <span key={`title-${index}`} className="letter">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const message = "I'm Nebiyu Esaiyas, a full-stack web developer passionate about building secure, scalable, and user‑friendly applications. With hands‑on experience in React, Django, Angular and .NET, I specialize in crafting dynamic solutions that blend strong backend architecture with engaging front‑end design. My goal is to deliver seamless digital experiences that empower organizations and users alike.";


  const messageWords = message.split(' ').map((word, index) => (
    <span key={`word-${index}`} className="word">
      {word}
      {index < message.split(' ').length - 1 ? '\u00A0' : ''}
    </span>
  ));

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="profile-photo-container">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <img src={profilePhotoHover} alt="Profile Hover" className="profile-photo-hover" />
          </div>
          <div className="about-text">
            <h2 className="about-name">{nameLetters}</h2>
            <h3 className="about-title">{titleLetters}</h3>
            <p className="about-message">{messageWords}</p>
            <div className="about-buttons">
              <a href="/NebiyuEsaiyas.pdf" download className="btn btn-primary">Download Resume</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
