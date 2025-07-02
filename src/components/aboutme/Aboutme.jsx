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

  const message = "I'm a passionate web developer with a knack for creating dynamic and user-friendly websites. With expertise in modern JavaScript frameworks and responsive design, I strive to build seamless digital experiences that make an impact.";
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