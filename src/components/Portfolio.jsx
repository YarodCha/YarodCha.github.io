import { Link } from 'react-router-dom';
import data from '../assets/data.json';

export default function Portfolio() {
  let projects = data.projects;

  function generateProjectListElement(project) {
    return (
      <li key={project.title}>
        {project.link.startsWith('http') ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          <Link to={project.link}> {project.title} </Link>
        )}
        <small> {project.languages.replace(/,/g, ', ')} </small>
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
