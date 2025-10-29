// src/components/Hero.jsx
import TextType from './TextType';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';
import Magnet from './Magnet';
import GradualBlur from './ui/GradualBlur';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title">
            <TextType 
              text={["!Aprende ciberseguridad Gratis¡  desde 0 con Ciber Guardians"]}
              as="span"
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              variableSpeed={{ min: 60, max: 120 }}
              className="text-white font-bold"
            />
          </h1>
          <p className="hero-description">
            ¡Lanza tu carrera en ciberseguridad con nuestro curso gratuito! Aprende habilidades 
            prácticas y reconocidas mundialmente, ideales para principiantes que buscan dar sus 
            primeros pasos en seguridad digital y aumentar su sueldo con una profesión de alta demanda.
          </p>
          <div className="hero-actions">
            <Magnet 
              padding={30} 
              magnetStrength={3}
              wrapperClassName="magnet-wrapper"
              innerClassName="magnet-inner"
            >
              <a href="/html/Todolosmodulos.html" className="cta-button primary">
                Ver módulos disponibles
              </a>
            </Magnet>
            
            <Magnet 
              padding={30} 
              magnetStrength={3}
              wrapperClassName="magnet-wrapper"
              innerClassName="magnet-inner"
            >
              <button 
                className="cta-button secondary"
                onClick={() => scrollToSection('contacto')}
              >
                Contactar 
              </button>
            </Magnet>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>
                +<CountUp 
                  from={0} 
                  to={835} 
                  duration={1.5} 
                  separator=","
                />
              </strong>
              <span>Estudiantes</span>
            </div>
            <div className="stat">
              <strong>
                <CountUp 
                  from={0} 
                  to={22} 
                  duration={2} 
                />
              </strong>
              <span>Módulos</span>
            </div>
            <div className="stat">
              <strong>
                <CountUp 
                  from={0} 
                  to={100} 
                  duration={2} 
                />%
              </strong>
              <span>Gratuito</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image">
            <img 
              src="/img/Portada.png" 
              alt="Visual Hero" 
              className="float-animation" 
              style={{ width: '110%', height: '110%', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
      </div>
    </section>
  );
};

export default Hero;