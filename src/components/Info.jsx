import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <section className="info">
            <h2>Informacíon</h2>
            <p>👨‍👩‍👧‍👦 ¡Puede participar toda la familia!</p>
            <p>📩 En 48 horas recibirás tus fotografías digitales por correo electrónico en alta resolución.</p>
            <p>📦 Entrega de fotos impresas a domicilio en 7–10 días hábiles una vez que las elijas.</p>
            <p>📒 Separa tu sesión con $200 MXN. El resto se liquida el día de la sesión.</p>
            <p>⏰ Reserva tu horario aquí:
                <br />
                <a
                    href="https://calendar.app.google/eYKy4XheEeKhhaCX7"
                    target="_blank"
                    rel="noopener noreferrer"
                ><br />
                    Ver horarios disponibles
                </a>
            </p>
        </section>
    );
};
export default Info;