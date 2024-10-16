import React from 'react'
import { Icon } from '@iconify/react';

const contact = () => {
    return (
        <section id="contact">
            <h2>Contacto</h2>
            <p>Puedes contactarme a través de los siguientes medios:</p>

            <div className='contacto'>
                <Icon icon="mdi:email" style={{ fontSize: '32px', color: 'black' }} />
                adrianportales2002@gmail.com
            </div>
            <div className='contacto'>
                <Icon icon="mdi:phone" style={{ fontSize: '32px', color: 'black' }} />
                685303418
            </div>
            <div className='contacto'>
                <a href="https://www.linkedin.com/in/adrian-portales-68b201215/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:linkedin" style={{ fontSize: '32px', color: '#4c5cfc' }} />
                </a>
            </div>


        </section>
    );
}

export default contact
