import React from 'react';
import foto from '../assets/fotografo.jpg';

const About = () => {
  return (
    <section className="about">
      <img src={foto} alt="fotografo" />
      <div>
        {/* <h2>Sobre Nosotros</h2> */}
        <p>
          ¡Hola! Somos <strong>IBIZA Fotografía</strong> apasionados por capturar momentos auténticos y llenos de emoción.
        </p>
        {/* <p>
          Trabajamos en sesiones familiares, retratos, parejas y eventos especiales en Monterrey y sus alrededores.
        </p> */}
      </div>
      {/* <img src={foto} alt="Fotógrafo" /> */}
    </section>

  );
};

export default About;
