import React from 'react';
import './Info.css';

const Info = () => {
  return (
    // <section className="info">
    //   
    //   <li>👨‍👩‍👧‍👦 ¡Puede participar toda la familia!</li>
    //   <li>📩 En 48 horas recibirás tus fotografías digitales por correo electrónico en alta resolución.</li>
    //   <li>📦 Entrega de fotos impresas a domicilio en 7–10 días hábiles una vez que las elijas.</li>
    //   <li>📒 Separa tu sesión con $200 MXN. El resto se liquida el día de la sesión.</li>
    //   <li>⏰ Reserva tu horario aquí:
    //     <br />
    //     <a
    //       href="https://calendar.app.google/eYKy4XheEeKhhaCX7"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Ver horarios disponibles
    //     </a>
    //   </li>
    // </section>

    <section className="info">
      <h2>Cobertura</h2>
      <div>
        <span>📍 Monterrey</span>
        <span>📍 García (límites con Mty hasta Valle de Lincoln)</span>
        <span>📍 Guadalupe</span>
        <span>📍 Apodaca</span>
        <span>📍 Santa Catarina</span>
        <span>📍 San Nicolás</span>
        <span>📍 Escobedo</span>
        <span>📍 San Pedro</span>
      </div>
    </section>

  );
};

export default Info;