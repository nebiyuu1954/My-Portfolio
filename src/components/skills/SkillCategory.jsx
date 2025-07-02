import './skills.css';

const SkillCategory = ({ title, skills }) => {
  const subSkills = {
    'HTML5': ['Semantic HTML', 'Form Creation', 'Accessibility', 'Image Embedding'],
    'CSS3': ['Flexbox', 'Grid', 'Animations', 'Responsive Design Techniques'],
    'JavaScript': ['ES6', 'DOM', 'Async', 'Events', 'OOP Principles'],
    'React': ['Components', 'Hooks', 'State', 'Router', 'React testing'],
    'Responsive Design': ['Mobile-First', 'Media Queries', 'Fluid Layouts'],
    'Tailwind CSS': ['Utility-First', 'Responsive', 'Custom Components'],
    'UX/UI Design': ['Wireframing', 'Prototyping', 'User Research'],
    'Python': ['OOP', 'Scripting', 'Data Analysis', 'Data Scraping'],
    'Django': ['MVC', 'ORM', 'DTL(Djnago Templating Language) ', 'Django Admin Panel'],
    'REST APIs': ['RESTful Services', 'API Design', 'REST best Practices'],
    'MongoDB': ['NoSQL', 'Document Models'],
    'PostgreSQL': ['Relational DB', 'SQL Queries'],
    'SQL': ['Queries', 'Joins', 'Indexes'],
    'Django REST Framework': ['API Development', 'Filtering', 'searching', 'ordering', 'pagination ', ' Throttling', 'Serializers'],
    'VS Code': ['Editing', 'Extensions', 'Debugging'],
    'Git': ['Version Control', 'Branching'],
    'GitHub': ['Repos', 'Pull Requests'],
    'MongoDB Compass': ['GUI', 'Query Building'],
    'Vite': ['Fast Build', 'HMR'],
    'Figma': ['UI Design', 'Prototyping'],
    'Postman': ['API Testing', 'Collections'],
    'Insomnia': ['API Testing', 'Collections']
  };

  return (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-container">
            <span className="skill-badge">{skill}</span>
            {subSkills[skill] && (
              <div className="skill-popup">
                <ul>
                  {subSkills[skill].map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;