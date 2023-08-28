import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Usuarios from './components/Usuarios';
import NotFound from './components/NotFound';
import Contacto from './components/Contacto';
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
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
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Clientes" element={<Usuarios />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
