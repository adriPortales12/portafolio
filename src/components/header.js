import React from 'react';
import About from './about';
import { Icon } from '@iconify/react'; // Usamos el componente Icon para el ícono

const Header = () => {
    const scrollToNextSection = () => {
        const projectsSection = document.getElementById('projects'); // Seleccionamos la sección por su ID
        projectsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    };

    const descargaCV = () => {
        // Asegúrate de que el nombre del archivo esté correctamente configurado
        const fileUrl = `${process.env.PUBLIC_URL}/CV Adrián Portales.pdf`;

        // Crea un enlace para la descarga
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'CV_Adrian_Portales.pdf'); // Asegúrate de que el nombre aquí sea correcto
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <header className='header'>
            <h1 className='my-2'>Adrián Portales</h1>
            <div className="container text-center my-5">
                <img
                    src={`${process.env.PUBLIC_URL}/cara.jpeg`}
                    alt="Perfil"
                    className="profile-picture rounded-circle mb-3"

                />

                <About />


                <div className="container d-flex justify-content-center">
                    <button onClick={descargaCV} className="botonCV">
                        <span> Descargar CV</span>
                    </button>
                </div>

                <div className="scroll-down-icon mt-4" onClick={scrollToNextSection}>
                    <Icon
                        icon="mdi:chevron-down"
                        style={{ fontSize: '48px', cursor: 'pointer', color: 'white' }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
