import React from 'react'
import About from './about';
import { Icon } from '@iconify/react'; // Usamos el componente Icon para el ícono

const header = () => {
    const scrollToNextSection = () => {
        const aboutSection = document.getElementById('projects'); // Seleccionamos la sección por su ID
        aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
    const descargaCV = () => {
        const fileUrl = '/CV Adrián Portales.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'CV_AdrianPortales.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <header className='header'>
            <img src={`${process.env.PUBLIC_URL}/cara.png`} alt="Perfil" className="profile-picture" />
            <About />
            <button onClick={descargaCV} className='botonCV'>
                <span> Descargar CV</span>
            </button>
            <div className="scroll-down-icon" onClick={scrollToNextSection}>
                <Icon icon="mdi:chevron-down" style={{ fontSize: '48px', cursor: 'pointer', color: 'white' }} />
            </div>
        </header>
    );
}

export default header
