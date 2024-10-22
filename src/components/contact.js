import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
    return (
        <section id="contact" className="container my-5">
            <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                    <Icon icon="mdi:email" style={{ fontSize: '32px', color: 'black' }} />
                    <span className="ms-2">adrianportales2002@gmail.com</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                    <Icon icon="mdi:phone" style={{ fontSize: '32px', color: 'black' }} />
                    <span className="ms-2">685303418</span>
                </li>
                <li className="d-flex align-items-center">
                    <a href="https://www.linkedin.com/in/adrian-portales-68b201215/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
                        <Icon icon="mdi:linkedin" style={{ fontSize: '32px', color: '#4c5cfc' }} />
                        <span className="ms-2"></span>
                    </a>
                </li>
            </ul>
        </section>








        /*<section id="contact" className="container my-5">
            <h2 className="text-center mb-4">Contacto</h2>
            <p className="text-center">Puedes contactarme a través de los siguientes medios:</p>

            <div className="row">
                <div className="col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center contacto">
                    <Icon icon="mdi:email" style={{ fontSize: '32px', color: 'black' }} />
                    <span className="ms-2">adrianportales2002@gmail.com</span>
                </div>
                <div className="col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center contacto">
                    <Icon icon="mdi:phone" style={{ fontSize: '32px', color: 'black' }} />
                    <span className="ms-2">685303418</span>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center contacto">
                    <a href="https://www.linkedin.com/in/adrian-portales-68b201215/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" style={{ fontSize: '32px', color: '#4c5cfc' }} />
                    </a>
                </div>
            </div>
        </section>*/
    );
};

export default Contact;
