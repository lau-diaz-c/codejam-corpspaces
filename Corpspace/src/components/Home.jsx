import React from 'react';
import './home.css'; // Asegúrate de tener este archivo de estilos

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenido a CorpSpaces</h1>
        <p>Encuentra la sala perfecta para tu reunión</p>
      </header>

      <section className="home-content">
        <div className="card">
          <img src="/images/meeting-room1.jpg" alt="Sala de reuniones 1" />
          <h2>Sala de Reuniones 1</h2>
          <p>Perfecta para conferencias y reuniones grandes.</p>
        </div>
        <div className="card">
          <img src="/images/meeting-room2.jpg" alt="Sala de reuniones 2" />
          <h2>Sala de Reuniones 2</h2>
          <p>Ideal para reuniones pequeñas y privadas.</p>
        </div>
        <div className="card">
          <img src="/images/lounge.jpg" alt="Sala de descanso" />
          <h2>Sala de Descanso</h2>
          <p>Un espacio cómodo para relajarse.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

