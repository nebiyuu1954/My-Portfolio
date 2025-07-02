import React from 'react';
import SkillCategory from './SkillCategory';
import html5Icon from '../../assets/logos/html5.svg';
import css3Icon from '../../assets/logos/css3.svg';
import javascriptIcon from '../../assets/logos/javascript.svg';
import responsiveDesignIcon from '../../assets/logos/responsivedesign.svg';
import tailwindcssIcon from '../../assets/logos/tailwindcss.svg';
import uxuiDesignIcon from '../../assets/logos/react.svg';
import reactIcon from '../../assets/logos/react.svg';
import pythonIcon from '../../assets/logos/python.svg';
import djangoIcon from '../../assets/logos/django.svg';
import restApisIcon from '../../assets/logos/vite.svg';
import mongodbIcon from '../../assets/logos/mongodb.svg';
import postgresqlIcon from '../../assets/logos/postgresql.svg';
import sqlIcon from '../../assets/logos/mysql.svg';
import djangoRestFrameworkIcon from '../../assets/logos/drf.svg';
import visualstudiocodeIcon from '../../assets/logos/visualstudiocode.svg';
import gitIcon from '../../assets/logos/git.svg';
import githubIcon from '../../assets/logos/github.svg';
import mongodbCompassIcon from '../../assets/logos/vite.svg';
import viteIcon from '../../assets/logos/vite.svg';
import figmaIcon from '../../assets/logos/figma.svg';
import postmanIcon from '../../assets/logos/postman.svg';
import insomniaIcon from '../../assets/logos/insomnia.svg';
import './skills.css';

const Skills = () => {
  const frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Responsive Design',
    'Tailwind CSS',
    'UX/UI Design'
  ];

  const backEndSkills = [
    'Python',
    'Django',
    'REST APIs',
    'MongoDB',
    'PostgreSQL',
    'SQL',
    'Django REST Framework'
  ];

  const toolsSkills = [
    'VS Code',
    'Git',
    'GitHub',
    'MongoDB Compass',
    'Vite',
    'Figma',
    'Postman',
    'Insomnia'
  ];

  const allSkills = [
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Responsive Design', icon: responsiveDesignIcon },
    { name: 'Tailwind CSS', icon: tailwindcssIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Insomnia', icon: insomniaIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'Django REST Framework', icon: djangoRestFrameworkIcon },
    { name: 'VS Code', icon: visualstudiocodeIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Vite', icon: viteIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'React', icon: reactIcon }
  ];

  const title = "Skills";
  const titleLetters = title.split('').map((letter, index) => (
    <span key={`title-${index}`} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">{titleLetters}</h2>
        <div className="skills-content">
          <SkillCategory title="Front End" skills={frontEndSkills} />
          <SkillCategory title="Back End" skills={backEndSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        </div>
        <div className="skills-slider">
          <div className="slider-track">
            {allSkills.map((skill, index) => (
              <img
                key={`slider-skill-${index}`}
                src={skill.icon}
                alt={skill.name}
                className="slider-skill"
                title={skill.name}
              />
            ))}
            {allSkills.map((skill, index) => (
              <img
                key={`slider-skill-dup-${index}`}
                src={skill.icon}
                alt={skill.name}
                className="slider-skill"
                title={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;