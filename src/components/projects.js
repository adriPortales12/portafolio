// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: "Aplicación de Tareas",
    description: "Una app para gestionar tareas diarias.",
    tech: "React, Firebase",
    link: "https://github.com/usuario/tareas"
  },
  {
    title: "E-Commerce",
    description: "Tienda en línea con carrito de compras.",
    tech: "React, Node.js, MongoDB",
    link: "https://github.com/usuario/ecommerce"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div>
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
