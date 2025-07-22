import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} IBIZA Fotografía. Todos los derechos reservados.</p>

      <div className="footer-socials">
        <a href="https://www.facebook.com/Ibiza.fotografiaa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/ibiza.fotografia/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://wa.me/message/AO2ZDIZKC7S2N1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      <div className="footer-links">
        {/* <a href="#servicios">Servicios</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#sobre-nosotros">Sobre Nosotros</a> */}
      </div>
    </footer>
  );
};

export default Footer;
