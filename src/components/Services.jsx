import React from 'react';

const services = [
  {
    icon: '👤',
    title: 'Sesiones individuales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '📅',
    title: 'Cobertura de eventos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '✨',
    title: 'Edición profesional',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '✨',
    title: 'Edición profesional',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;