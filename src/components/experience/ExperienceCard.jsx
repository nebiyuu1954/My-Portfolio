import React, { useEffect, useRef } from 'react';
import './experience.css';

const ExperienceCard = ({ role, company, year, location, responsibilities }) => {
  const responsibilitiesRef = useRef(null);

  useEffect(() => {
    if (responsibilitiesRef.current) {
      if (responsibilities.length > 5) {
        responsibilitiesRef.current.classList.add('many-items');
      } else {
        responsibilitiesRef.current.classList.remove('many-items');
      }
    }
  }, [responsibilities]);

  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-left">
          <h3 className="experience-role">{role}</h3>
          <p className="experience-company">{company}</p>
        </div>
        <div className="experience-right">
          <p className="experience-year">
            <span className="calendar-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            {year}
          </p>
          <p className="experience-location">
            <span className="location-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            {location}
          </p>
        </div>
      </div>
      <ul className="experience-responsibilities" ref={responsibilitiesRef}>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;