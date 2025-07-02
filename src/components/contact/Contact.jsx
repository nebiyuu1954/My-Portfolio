import React from 'react';
import { useFormik } from 'formik';
import { getFormConfig } from './contactFormConfig';
import ContactForm from './ContactForm';
import './contact.css';

// Main Contact component
const Contact = () => {
  // Section Title with Wave Effect
  const title = 'Contact';
  const titleWithSpans = title.split('').map((char, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {char}
    </span>
  ));

  // Form Configuration
  const formik = useFormik(getFormConfig());

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Title */}
        <h2 className="contact-title">{titleWithSpans}</h2>
        <div className="contact-content">
          {/* Left Content: Let's Work Together */}
          <div className="contact-left">
            <h3 className="contact-heading">Let's Work Together</h3>
            <p className="contact-message">
              I'm excited to collaborate on innovative projects! Feel free to reach out to discuss opportunities or ideas.
            </p>
            <div className="contact-buttons">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button github-button"
              >
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
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button linkedin-button"
              >
                <span className="button-icon linkedin-icon">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
          </div>
          {/* Right Content: Contact Form */}
          <div className="contact-right">
            <h3 className="contact-heading">Get in Touch</h3>
            <ContactForm formik={formik} />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;