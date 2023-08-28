import React, { useState } from 'react';
import '../styles/Dashboard.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`showcase ${isActive ? 'active' : ''}`}>
      <header>
        <h2 className="logo">EMPRESA PL</h2>
        <div className="container">
        <nav>
  <ul>
    <li><Link to="/" className="nav-link">Inicio</Link></li>
    <li><Link to="/Clientes" className="nav-link">Clientes</Link></li>
    <li><Link to="/Contacto" className="nav-link">Contacto</Link></li>
  </ul>
</nav>

        </div>
      </header>
      <video src="video4.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>AGENCIA</h2>
        <h3>DE VIAJES</h3>
        <p>
          Somos una Agencia de viajes que brinde los mejores servicios turísticos superando las expectativas
          de nuestros pasajeros dando a conocer las riquezas de nuestra Bolivia y destinos exóticos internacionales.
        </p>
        <a href="#">Explorar</a>
      </div>
      <ul className="social">
        <li>
          <a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" /></a>
        </li>
        <li>
          <a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" /></a>
        </li>
        <li>
          <a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="Instagram" /></a>
        </li>
      </ul>
      
    </div>
  );
}

export default Dashboard;
