import React from 'react';
import './Services.css';

const services = [

  {
    icon: '📅',
    text: 'Cobertura de Eventos',
  },
   {
    icon: '📷',
    text: 'Sesiones Individuales',
  },
  {
    icon: '💑',
    text: 'Sesiones de Pareja',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    text: 'Sesiones Familiares',
  },
   {
    icon: '💒',
    text: 'XV / Bodas',
  },
   {
    icon: '🙏',
    text: 'Bautizos / 1er Comunion',
  },
  {
    icon: '🤰',
    text: 'Maternidad',
  },
  {
    icon: '👨‍🎓👩‍🎓',
    text: 'Graduaciones',
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Servicios</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <span>{s.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;