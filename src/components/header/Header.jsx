import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">NebiyuEsaiyas.com</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          {/* <a href="#certificates">Certificates</a> */}
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;