import React, { useEffect, useRef } from 'react';
import './projects.css';

const ProjectCard = ({ title, techStack, githubLink, liveDemoLink, documentationLink, description }) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      if (description.length > 5) {
        descriptionRef.current.classList.add('many-items');
      } else {
        descriptionRef.current.classList.remove('many-items');
      }
    }
  }, [description]);

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <ul className="project-description" ref={descriptionRef}>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="project-buttons">
          <a href={githubLink} target="_blank" className="project-button code-button">
            <span className="button-icon github-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            Code
          </a>
          <a href={liveDemoLink} target="_blank" className="project-button demo-button">
            <span className="button-icon globe-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            Live Demo
          </a>
          <a href={documentationLink} target="_blank" className="project-button doc-button">
            <span className="button-icon file-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </span>
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;