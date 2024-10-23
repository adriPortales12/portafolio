import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
    return (
        <section id="contact">
            

            <div className='contact-icons'>
                <div className='contacto'>
                    <Icon icon="mdi:email" style={{ fontSize: '40px', color: 'black' }} />
                    <span className="transition-text ms-2">adrianportales2002@gmail.com</span>
                </div>
                <div className='contacto'>
                    <Icon icon="mdi:phone" style={{ fontSize: '40px', color: 'black' }} />
                    <span className="transition-text ms-2">685303418</span>
                </div>
                <div className='contacto'>
                    <a href="https://www.linkedin.com/in/adrian-portales-68b201215/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" style={{ fontSize: '40px', color: '#4c5cfc' }} />
                    </a>
                    <span className="transition-text ms-2">Adrián Portales</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
