import { useState } from 'react';
import Header from '../../components/Header';
import './estilos/modulo1.css';

function Module1Class1() {
  const [activeTab, setActiveTab] = useState('contenido');

  const recursos = [
    { tipo: 'video', titulo: 'Introducción a Sistemas Operativos', url: '#' },
    { tipo: 'pdf', titulo: 'Guía de Comandos Básicos', url: '#' },
    { tipo: 'lab', titulo: 'Laboratorio Virtual', url: '#' },
    { tipo: 'quiz', titulo: 'Evaluación Inicial', url: '#' }
  ];

  return (
    <div className="module-class-page">
      <Header />
      
      <div className="class-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Inicio</a> / 
            <a href="#modulos">Módulos</a> / 
            <span>Módulo 1 - Clase 1</span>
          </nav>
          <h1>Reconocimiento de Sistemas Operativos</h1>
          <p>Fundamentos esenciales para identificar y entender diferentes sistemas operativos</p>
        </div>
      </div>

      <div className="class-container container">
        <div className="class-sidebar">
          <div className="class-progress">
            <h3>Progreso del Módulo</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '7%'}}></div>
            </div>
            <span>1 de 15 clases completadas</span>
          </div>

          <div className="class-navigation">
            <h3>Clases del Módulo</h3>
            <div className="class-list">
              {Array.from({length: 15}, (_, i) => (
                <a 
                  key={i} 
                  href={`#clase-${i+1}`}
                  className={i === 0 ? 'active' : ''}
                >
                  Clase {i+1}: {i === 0 ? 'Reconocimiento de SO' : `Tema ${i+1}`}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="class-content">
          <div className="content-tabs">
            <button 
              className={activeTab === 'contenido' ? 'active' : ''}
              onClick={() => setActiveTab('contenido')}
            >
              Contenido
            </button>
            <button 
              className={activeTab === 'recursos' ? 'active' : ''}
              onClick={() => setActiveTab('recursos')}
            >
              Recursos
            </button>
            <button 
              className={activeTab === 'laboratorio' ? 'active' : ''}
              onClick={() => setActiveTab('laboratorio')}
            >
              Laboratorio
            </button>
          </div>

          {activeTab === 'contenido' && (
            <div className="tab-content">
              <h2>¿Qué es un Sistema Operativo?</h2>
              <p>El sistema operativo es el software principal que gestiona el hardware y proporciona servicios para las aplicaciones.</p>
              
              <div className="content-section">
                <h3>Tipos de Sistemas Operativos</h3>
                <ul>
                  <li>Windows</li>
                  <li>Linux</li>
                  <li>macOS</li>
                  <li>Unix</li>
                </ul>
              </div>

              <div className="interactive-demo">
                <h3>Identificador de SO</h3>
                <p>Selecciona características para identificar el sistema operativo:</p>
                {/* Aquí iría el componente interactivo */}
              </div>
            </div>
          )}

          {activeTab === 'recursos' && (
            <div className="tab-content">
              <h2>Recursos de Aprendizaje</h2>
              <div className="resources-grid">
                {recursos.map((recurso, index) => (
                  <div key={index} className="resource-card">
                    <div className="resource-icon">{recurso.tipo === 'video' ? '🎬' : '📄'}</div>
                    <h4>{recurso.titulo}</h4>
                    <a href={recurso.url} className="download-btn">Descargar</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'laboratorio' && (
            <div className="tab-content">
              <h2>Laboratorio Práctico</h2>
              <div className="lab-environment">
                <p>Conecta con nuestro entorno virtual para practicar:</p>
                <button className="cta-button primary">Iniciar Laboratorio</button>
              </div>
            </div>
          )}

          <div className="class-navigation-buttons">
            <button className="cta-button secondary" disabled>Anterior</button>
            <button className="cta-button primary">Siguiente Clase</button>
          </div>
        </div>
      </div>

      {/* Footer igual al componente principal */}
      <footer className="footer">
        {/* Mismo footer que App.js */}
      </footer>
    </div>
  );
}

export default Module1Class1;