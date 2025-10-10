import React from 'react';
import './modulo1.css';
import '../Estilos/modulo1.css';

const Modulo1 = () => {
  return (
    <div className="modulo-container">
      <header className="modulo-header">
        <h1>Módulo 1: Fundamentos del Sistema Operativo</h1>
        <p>Introducción a los conceptos básicos de los sistemas operativos y su rol en la ciberseguridad.</p>
      </header>

      <section className="modulo-section">
        <h2>¿Qué es un Sistema Operativo?</h2>
        <p>
          Un sistema operativo (SO) es el software que gestiona los recursos de hardware y software de un dispositivo, actuando como intermediario entre el usuario y la máquina. Ejemplos comunes incluyen Windows, macOS y distribuciones de Linux como Ubuntu.
        </p>
      </section>

      <section className="modulo-section">
        <h2>Funciones Básicas</h2>
        <ul>
          <li>Gestión de procesos y memoria.</li>
          <li>Provisión de interfaces (GUI o CLI).</li>
          <li>Seguridad básica mediante autenticación y permisos.</li>
        </ul>
      </section>

      <section className="modulo-section">
        <h2>Ejercicio Práctico</h2>
        <p>Explora tu SO: Identifica el sistema operativo de tu equipo y verifica su versión (e.g., en Windows usa "Acerca de", en Linux usa `uname -a`).</p>
      </section>

      <footer className="modulo-footer">
        <button onClick={() => window.history.back()}>Volver a Módulos</button>
      </footer>
    </div>
  );
};

export default Modulo1;