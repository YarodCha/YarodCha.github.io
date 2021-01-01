import { Link } from 'react-router-dom';
import data from '../assets/data.json';

export default function Portfolio() {
  let projects = data.projects;
  const mediaQuery = window.matchMedia('(max-width: 400px)');

  function generateProjectListElement(project) {
    const listLanguages = project.languages.split(',');
    return (
      <li key={project.title}>
        {project.link.startsWith('http') ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          <Link to={project.link}> {project.title} </Link>
        )}
        <small>
          {' '}
          {mediaQuery.matches
            ? listLanguages[listLanguages.length - 1]
            : project.languages.replace(/,/g, ', ')}
        </small>
      </li>
    );
  }

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>{projects.map(generateProjectListElement)}</ul>
    </div>
  );
}
