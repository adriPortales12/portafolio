import React from 'react';

const projects = [
  {
    title: "Wallity",
    description: "TFG de DAW. Aplicación de control de gastos personales",
    tech: "Javascript, PHP, Bootstrap, SQL",
    link: "https://github.com/adriPortales12/Wallity"
  },
  {
    title: "Wallity",
    description: "TFG de DAW. Aplicación de control de gastos personales",
    tech: "Javascript, PHP, Bootstrap, SQL",
    link: "https://github.com/adriPortales12/Wallity"
  },
  {
    title: "Wallity",
    description: "TFG de DAW. Aplicación de control de gastos personales",
    tech: "Javascript, PHP, Bootstrap, SQL",
    link: "https://github.com/adriPortales12/Wallity"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologías:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
