// src/components/Hero.jsx
import TextType from './TextType';
import CountUp from './CountUp';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Componente para texto con gradiente
  const GradientText = ({ children, className = "" }) => (
    <span className={`bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );

  return (
    <section id="inicio" className="hero">
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
            <button 
              className="cta-button primary"
              onClick={() => scrollToSection('modulos')}
            >
              Ver módulos disponibles
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => scrollToSection('contacto')}
            >
              Contactar 
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>
                <GradientText>
                  +<CountUp 
                    from={0} 
                    to={835} 
                    duration={1.5} 
                    separator=","
                    className="font-bold text-2xl"
                  />
                </GradientText>
              </strong>
              <span>Estudiantes</span>
            </div>
            <div className="stat">
              <strong>
                <GradientText>
                  <CountUp 
                    from={0} 
                    to={22} 
                    duration={2} 
                    className="font-bold text-2xl"
                  />
                </GradientText>
              </strong>
              <span>Módulos</span>
            </div>
            <div className="stat">
              <strong>
                <GradientText>
                  <CountUp 
                    from={0} 
                    to={100} 
                    duration={2} 
                    className="font-bold text-2xl"
                  />%
                </GradientText>
              </strong>
              <span>Gratuito</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image">
            <img src="/Portada.png" alt="Visual Hero" className="float-animation" style={{ width: '110%', height: '110%', objectFit: 'contain' }} />
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