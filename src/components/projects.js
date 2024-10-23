import React from 'react';

const projects = [
  {
    title: "Wallity",
    description: "TFG de DAW. Aplicación de control de gastos personales",
    tech: "Javascript, PHP, Bootstrap, SQL",
    link: "https://github.com/adriPortales12/Wallity"
  },
  {
    title: "Nuevo Proyecto",
    description: "Aplicación en desarrollo...",
    tech: "Javascript(React, Node)",
    link: "https://github.com/adriPortales12/"
  }
];

function Projects() {
  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Proyectos</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title mb-4">{project.title}</h3>
                <p className="card-text min-height-custom">{project.description}</p>
                <p><strong>Tecnologías:</strong> {project.tech}</p>
                <a href={project.link} className="botonSec" target="_blank" rel="noopener noreferrer"><span>Ver Proyecto</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
