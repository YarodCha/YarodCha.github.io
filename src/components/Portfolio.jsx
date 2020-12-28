import data from '../assets/data.json';

export default function Portfolio() {
  let projects = data.projects;
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title} >
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <small> {project.languages.replace(",", ", ")} </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
