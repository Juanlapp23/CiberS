import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import CountUp from './components/CountUp'; // Importamos el componente del contador
import ModuleCard from './components/ModuleCard';
import { motion } from 'framer-motion';
import { modulesData } from './data/modules';
import { testimonialsData } from './data/testimonials';
import { faqData } from './data/faq';
import GradualBlur from './components/ui/GradualBlur';

// Componente para las burbujas líquidas
const LiquidBubble = ({ color, delay, size = 60, position }) => (
  <motion.div
    className="liquid-bubble"
    style={{
      background: color,
      width: size,
      height: size,
      ...position
    }}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -40, -20, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: 8,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Componente para manejar la vista de módulos individuales
const ModulePage = () => {
  const { id } = useParams();
  const module = modulesData.find(mod => mod.id === id);

  if (!module) {
    return <div className="error-page">Módulo no encontrado</div>;
  }

  return (
    <Section id={module.id} title={module.title} className="module-section">
      <div className="section-background-text">Module</div>
      <div className="module-content">
        <h3>Contenido del Módulo</h3>
        <p>{module.description}</p>
      </div>
    </Section>
  );
};

// Componente principal de la página de inicio
const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-background-text">Ciber Guardians</div>
        <Hero />
      </div>

      {/* Misión, Visión y Valores */}
      <Section
        id="mision-vision-valores"
        title="Nuestra Misión, Visión y Valores"
        subtitle="Inspiramos a futuros líderes en ciberseguridad mediante una formación basada en excelencia, innovación y compromiso social."
        className="mission-section"
      >
        <div className="section-background-text">Our Values</div>
        <div className="mission-grid">
          <div className="mission-card-wrapper" data-aos="fade-up">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>NUESTRA MISIÓN</h3>
              <p>Impulsar a los estudiantes hacia la excelencia en ciberseguridad, ofreciendo una formación gratuita y de alta calidad que fortalezca sus conocimientos y habilidades para enfrentar los desafíos del entorno digital.</p>
            </div>
          </div>
          <div className="mission-card-wrapper" data-aos="fade-up" data-aos-delay="100">
            <div className="mission-card">
              <div className="card-icon">🔭</div>
              <h3>NUESTRA VISIÓN</h3>
              <p>Consolidarnos como el centro líder en formación en ciberseguridad de Colombia y Latinoamérica, promoviendo el desarrollo de profesionales capaces de liderar la protección y transformación digital del futuro.</p>
            </div>
          </div>
          <div className="mission-card-wrapper" data-aos="fade-up" data-aos-delay="200">
            <div className="mission-card">
              <div className="card-icon">💎</div>
              <h3>NUESTROS VALORES</h3>
              <p>Fomentamos la excelencia y la innovación con pasión, manteniendo un firme compromiso con el aprendizaje de nuestros estudiantes y el fortalecimiento de la comunidad de ciberseguridad.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quiénes somos */}
      <Section
        id="quienes-somos"
        title="¿Qué es Ciber Guardians?"
        subtitle="Tu puerta de entrada al fascinante mundo de la protección digital. Formación personal de calidad y 100% gratuita para los defensores del ciberespacio del mañana."
        className="about-section"
        headerClassName="section-header-left"
      >
        <div className="section-background-text">About Us</div>
        <div className="about-content">
          <div className="about-visual">
            <div className="team-illustration">
              <img src="/img/logoCS.png" alt="Equipo Ciber Guardians" className="float-animation" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Nos dedicamos a formar a los defensores del ciberespacio del mañana, proporcionando una educación integral, <strong>100% gratuita</strong> y siempre actualizada. Nuestros cursos, impartidos por expertos en el campo, están diseñados para equiparte con las habilidades prácticas que necesitas para proteger datos e infraestructuras digitales en el mundo real. Únete a Ciber Guardians y toma el control de tu futuro en la ciberseguridad.
            </p>
          </div>
        </div>
      </Section>

      {/* Clases de CiberS */}+


    
      {/* Fin de clases de CiberS*/}

      {/* Importancia de la ciberseguridad */}
      <Section
        id="importancia"
        title="La importancia de la ciberseguridad"
        subtitle="La ciberseguridad es fundamental en un mundo cada vez más digitalizado"
        className="importance-section"
      >
        <div className="section-background-text">CYBER DEFENSE</div>
        <div className="importance-content">
          <div className="importance-text">
            <p>
            En la era digital actual, las amenazas cibernéticas no solo evolucionan, sino que se vuelven más inteligentes, sigilosas y devastadoras cada día. La protección de los datos ya no es una opción, sino una cuestión de supervivencia para individuos, empresas y gobiernos. Un solo descuido puede abrir la puerta a ataques capaces de robar identidades, parar sistemas enteros o destruir reputaciones en segundos. La seguridad digital se ha convertido en la primera línea de defensa en un mundo donde la información vale más que el oro.
            </p>
          </div>

          {/* CONTENEDOR PREMIUM LIQUID GLASS */}
          <div className="stats-premium-container" data-aos="fade-up">
            
            <div className="bento-stats-grid">
              {/* CUADRO 1: Estadística 95% */}
              <div className="bento-card stat-card-1" data-aos="fade-up" data-aos-delay="100">
                <div className="stat-number">
                  <CountUp from={0} to={95} duration={2} />%
                </div>
                <p className="stat-label">de las brechas de seguridad son causadas por error humano</p>
              </div>

              {/* CUADRO 2: Imagen 1 */}
              <div className="bento-card image-card-1" data-aos="fade-up" data-aos-delay="150">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Cybersecurity" className="bento-image" />
                <div className="image-overlay"></div>
              </div>

              {/* CUADRO 3: Imagen 2 */}
              <div className="bento-card image-card-2" data-aos="fade-up" data-aos-delay="200">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="Network" className="bento-image" />
                <div className="image-overlay"></div>
              </div>

              {/* CUADRO 4: Estadística +600% */}
              <div className="bento-card stat-card-2" data-aos="fade-up" data-aos-delay="250">
                <div className="stat-number">+
                  <CountUp from={0} to={600} duration={2} />%
                </div>
                <p className="stat-label">aumento en ciberataques desde el inicio de la pandemia</p>
              </div>

              {/* CUADRO 5: HERO - AHORA CON LA ESTADÍSTICA $10.5T */}
              <div className="bento-card stat-card-hero" data-aos="zoom-in" data-aos-delay="300">
                <div className="stat-number hero-stat">
                  $<CountUp from={0} to={10.5} duration={2} decimals={1} />T
                </div>
                <p className="stat-label hero-label">Costo global estimado del cibercrimen para 2025</p>
              </div>

              {/* CUADRO 6: Estadística 3.5M */}
              <div className="bento-card stat-card-3" data-aos="fade-up" data-aos-delay="350">
                <div className="stat-number">
                  <CountUp from={0} to={3.5} duration={2} decimals={1} />M
                </div>
                <p className="stat-label">puestos de trabajo en ciberseguridad sin cubrir a nivel global</p>
              </div>

              {/* CUADRO 7: AHORA CON IMAGEN Y TEXTO */}
              <div className="bento-card text-card-hero" data-aos="fade-up" data-aos-delay="400">
                <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&q=80" alt="Cyber Defense" className="bento-image" />
                <div className="image-overlay-text">
                  <h3>La Primera Línea de Defensa Digital</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Ventajas */}
{/* Ventajas */}
<Section
  id="ventajas"
  title="¿Por qué elegirnos?"
  subtitle="Descubre las ventajas de aprender con Ciber Guardians"
  className="advantages-section"
>
  <div className="section-background-text">Why Us</div>
  <div className="advantages-grid">
    <div className="advantage-card liquid-glass" data-aos="fade-up" data-tag="FÁCIL">
      <div className="liquid-background"></div>
      <div className="liquid-bubbles">
        <LiquidBubble color="rgba(45, 85, 110, 0.2)" delay={0} size={50} position={{ top: '20%', left: '10%' }} />
        <LiquidBubble color="rgba(45, 85, 110, 0.15}" delay={1.5} size={70} position={{ top: '60%', right: '15%' }} />
        <LiquidBubble color="rgba(45, 85, 110, 0.1}" delay={3} size={40} position={{ bottom: '20%', left: '50%' }} />
      </div>
      <div className="card-content">
        <div className="advantage-icon">📚</div>
        <h3>Fácil de aprender</h3>
        <p>Contenido estructurado desde cero, sin conocimientos previos necesarios</p>
      </div>
    </div>

    <div className="advantage-card liquid-glass" data-aos="fade-up" data-aos-delay="100" data-tag="GRATIS">
      <div className="liquid-background"></div>
      <div className="liquid-bubbles">
        <LiquidBubble color="rgba(0, 200, 140, 0.2)" delay={0.5} size={55} position={{ top: '15%', left: '20%' }} />
        <LiquidBubble color="rgba(0, 200, 140, 0.15}" delay={2} size={65} position={{ top: '70%', right: '10%' }} />
        <LiquidBubble color="rgba(0, 200, 140, 0.1}" delay={3.5} size={45} position={{ bottom: '15%', left: '60%' }} />
      </div>
      <div className="card-content">
        <div className="advantage-icon">🎁</div>
        <h3>100% gratis</h3>
        <p>Formación completa sin costos ocultos ni suscripciones</p>
      </div>
    </div>

    <div className="advantage-card liquid-glass" data-aos="fade-up" data-aos-delay="200" data-tag="REAL">
      <div className="liquid-background"></div>
      <div className="liquid-bubbles">
        <LiquidBubble color="rgba(60, 70, 90, 0.2)" delay={1} size={48} position={{ top: '25%', left: '15%' }} />
        <LiquidBubble color="rgba(60, 70, 90, 0.15}" delay={2.5} size={68} position={{ top: '55%', right: '20%' }} />
        <LiquidBubble color="rgba(60, 70, 90, 0.1}" delay={4} size={42} position={{ bottom: '25%', left: '45%' }} />
      </div>
      <div className="card-content">
        <div className="advantage-icon">🔍</div>
        <h3>Casos de uso reales</h3>
        <p>Aprende con ejemplos prácticos y situaciones del mundo real</p>
      </div>
    </div>

    <div className="advantage-card liquid-glass" data-aos="fade-up" data-aos-delay="300" data-tag="PRÁCTICO">
      <div className="liquid-background"></div>
      <div className="liquid-bubbles">
        <LiquidBubble color="rgba(0, 255, 100, 0.2)" delay={0.8} size={52} position={{ top: '18%', left: '25%' }} />
        <LiquidBubble color="rgba(0, 255, 100, 0.15}" delay={2.2} size={62} position={{ top: '65%', right: '12%' }} />
        <LiquidBubble color="rgba(0, 255, 100, 0.1}" delay={3.8} size={38} position={{ bottom: '18%', left: '55%' }} />
      </div>
      <div className="card-content">
        <div className="advantage-icon">⚡</div>
        <h3>Enfoque práctico</h3>
        <p>Más práctica, menos teoría. Aprende haciendo</p>
      </div>
    </div>

    <div className="advantage-card liquid-glass" data-aos="fade-up" data-aos-delay="350" data-tag="IA">
      <div className="liquid-background"></div>
      <div className="liquid-bubbles">
        <LiquidBubble color="rgba(138, 43, 226, 0.2)" delay={1.2} size={54} position={{ top: '22%', left: '18%' }} />
        <LiquidBubble color="rgba(138, 43, 226, 0.15}" delay={2.8} size={66} position={{ top: '58%', right: '18%' }} />
        <LiquidBubble color="rgba(138, 43, 226, 0.1}" delay={4.2} size={44} position={{ bottom: '22%', left: '52%' }} />
      </div>
      <div className="card-content">
        <div className="advantage-icon">🤖</div>
        <h3>Asistente IA</h3>
        <p>Chat inteligente que responde tus dudas 24/7 sobre ciberseguridad</p>
      </div>
    </div>
  </div>
</Section>

      {/* Empresas que confían */}
      <section className="brands-section">
        <div className="brands-container">
          <h3 className="brands-title">Recomendado por líderes de la industria</h3>
          <div className="brands-scroll">
            <div className="brands-track">
              {/* Primera serie de logos */}
              <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" />
              <img src="https://logo.clearbit.com/google.com" alt="Google" />
              <img src="https://logo.clearbit.com/amazon.com" alt="AWS" />
              <img src="https://logo.clearbit.com/cisco.com" alt="Cisco" />
              <img src="https://logo.clearbit.com/ibm.com" alt="IBM" />
              <img src="https://logo.clearbit.com/oracle.com" alt="Oracle" />
              <img src="https://logo.clearbit.com/dell.com" alt="Dell Technologies" />
              <img src="https://logo.clearbit.com/hp.com" alt="HP" />
              <img src="https://logo.clearbit.com/intel.com" alt="Intel" />
              <img src="https://logo.clearbit.com/adobe.com" alt="Adobe" />
              {/* Segunda serie de logos (duplicados para efecto infinito) */}
              <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" />
              <img src="https://logo.clearbit.com/google.com" alt="Google" />
              <img src="https://logo.clearbit.com/amazon.com" alt="AWS" />
              <img src="https://logo.clearbit.com/cisco.com" alt="Cisco" />
              <img src="https://logo.clearbit.com/ibm.com" alt="IBM" />
              <img src="https://logo.clearbit.com/oracle.com" alt="Oracle" />
              <img src="https://logo.clearbit.com/dell.com" alt="Dell Technologies" />
              <img src="https://logo.clearbit.com/hp.com" alt="HP" />
              <img src="https://logo.clearbit.com/intel.com" alt="Intel" />
              <img src="https://logo.clearbit.com/adobe.com" alt="Adobe" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section
        id="faq"
        title="Preguntas frecuentes"
        subtitle="Resolvemos tus dudas más comunes"
        className="faq-section"
      >
        <div className="section-background-text">FAQ</div>
        <div className="faq-list">
          {faqData.slice(0, showAllFAQs ? faqData.length : 3).map((item) => (
            <details className="faq-item" key={item.id} data-aos="fade-up">
              <summary className="faq-question">
                {item.question}
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className="faq-show-more-container">
          <button 
            className="faq-show-more-btn btn-shine"
            onClick={() => setShowAllFAQs(!showAllFAQs)}
          >
            <span>{showAllFAQs ? 'Mostrar menos FAQ' : 'Mostrar más FAQ'}</span>
          </button>
        </div>
      </Section>

      {/* Contacto */}
      <Section
        id="contacto"
        className="contact-section-v2"
      >
        <div className="contact-wrapper">
          {/* Texto gigante de fondo */}
          <div className="section-background-text">Contact Us</div>

          {/* Contenedor principal */}
          <div className="contact-main-grid">

            {/* COLUMNA IZQUIERDA */}
            <div className="contact-left">
              <h2 className="contact-main-title">
                ¡No esperes más! <span className="arrow-accent">→</span>
              </h2>
              <p className="contact-description">
                Únete a más de 400 estudiantes que ya están transformando su futuro
                en ciberseguridad. Forma parte de nuestra comunidad y accede a:
              </p>

              <ul className="contact-features-list">
                <li>
                  <span className="check-icon">✅</span>
                  <span>22 módulos completamente gratuitos</span>
                </li>
                <li>
                  <span className="check-icon">✅</span>
                  <span>Soporte 24/7 de instructores</span>
                </li>
                <li>
                  <span className="check-icon">✅</span>
                  <span>Comunidad activa de estudiantes</span>
                </li>
                <li>
                  <span className="check-icon">✅</span>
                  <span>Actualizaciones constantes</span>
                </li>
              </ul>

              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.689-.072 4.948-.072zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                  </a>
              </div>
            </div>

            {/* COLUMNA DERECHA - FORMULARIO */}
            <div className="contact-right">
              <form className="contact-form-glass" onSubmit={handleSubmit}>
                <div className="form-row-double">
                  <div className="form-group-v2">
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                  <div className="form-group-v2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Correo electrónico"
                      required
                    />
                  </div>
                </div>

                <div className="form-group-v2">
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="¿Qué te gustaría aprender?"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button-v2">
                  <span>Unirme ahora</span>
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* TARJETAS DE CONTACTO DIRECTO */}
          <div className="contact-cards-grid">
            <div className="contact-info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="card-info">
                <h4>Email us</h4>
                <p>ciberguardian@gmail.com</p>
              </div>
              <span className="card-arrow">→</span>
            </div>

            <div className="contact-info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="card-info">
                <h4>Call us</h4>
                <p>+57 3011471160</p>
              </div>
              <span className="card-arrow">→</span>
            </div>

            <div className="contact-info-card">
              <div className="card-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="card-info">
                <h4>Our location</h4>
                <p>Bogotá, Colombia</p>
              </div>
              <span className="card-arrow">→</span>
            </div>
          </div>

        </div>
      </Section>

      {/* Ethical Disclaimer */}
      <Section className="ethical-disclaimer-section">
        <div className="container">
          <div className="disclaimer-card">
            <div className="disclaimer-icon">🔒</div>
            <div className="disclaimer-content">
              <h3>Aviso Ético y Legal</h3>
              <p>
                Ciber Guardians se dedica exclusivamente a la educación en ciberseguridad con fines 
                defensivos y de protección. Todas las técnicas enseñadas están destinadas únicamente 
                para fines educativos, de prueba en entornos controlados y para mejorar la seguridad 
                de sistemas y redes. No apoyamos ni fomentamos actividades ilegales. El uso inapropiado 
                de estos conocimientos es responsabilidad exclusiva del usuario.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={
            <div className="error-page">
              <h1>404 - Página no encontrada</h1>
              <p><a href="/">Volver al inicio</a></p>
            </div>
          } />
        </Routes>
        {/* ===== COMMENTS SECTION ===== */}
        <Section
          id="comentarios"
          title="Comentarios de la Comunidad"
          subtitle="Únete a la conversación de Ciber Guardians"
          className="comments-section"
        >
          <div className="section-background-text">Comments</div>
          <CommentsSection />
        </Section>

        {/* ===== NEWSLETTER SECTION OVERLAY ===== */}
        <div className="newsletter-section-overlay">
          <div className="container">
            <div className="newsletter-card-glass">
              <div className="newsletter-content">
                <h3 className="newsletter-title">Never Miss an Update</h3>
                <p className="newsletter-subtitle">Únete a miles de profesionales en ciberseguridad</p>
    
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="newsletter-input"
                  />
                  <button className="newsletter-button">
                    <span>Suscribirse Gratis</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>

                <div className="social-icons-overlay">
                  <a href="#" className="social-icon-overlay" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon-overlay" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FOOTER PRINCIPAL ===== */}
        <footer className="footer-premium">
          <div className="footer-container">
            {/* Main Footer Content */}
            <div className="footer-main">
              <div className="footer-grid">
                {/* Column 1 - Branding */}
                <div className="footer-column">
                  <div className="footer-brand">
                    <div className="logo-container">
                      <img src="/img/logoCS.png" alt="Ciber Guardians" />
                    </div>
                    <h3 className="brand-name">Ciber Guardians</h3>
                    <p className="brand-tagline">Formando a los Ciber Guardianes del mañana</p>
                  </div>

                  <div className="social-icons-footer">
                    <a href="#" className="social-icon-footer" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon-footer" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Column 2 - Navegación */}
                <div className="footer-column">
                  <h4 className="footer-column-title">Navegación</h4>
                  <ul className="footer-links">
                    <li><a href="/#inicio">Inicio</a></li>
                    <li><a href="/#mision-vision-valores">Misión</a></li>
                    <li><a href="/#quienes-somos">Quiénes somos</a></li>
                    <li><a href="/#importancia">Importancia</a></li>
                    <li><a href="/#ventajas">Ventajas</a></li>
                    <li><a href="/#faq">FAQ</a></li>
                    <li><a href="/#contacto">Contacto</a></li>
                  </ul>
                </div>

                {/* Column 4 - Legal & Contacto */}
                <div className="footer-column">
                  <h4 className="footer-column-title">Legal & Contacto</h4>
                  <div className="contact-info">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <div>
                        <a href="mailto:ciberguardian@gmail.com">ciberguardian@gmail.com</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <div>
                        <a href="tel:+573011471160">+57 3011471160</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <div>
                        <span>Bogotá, Colombia</span>
                      </div>
                    </div>
                  </div>

                  <div className="legal-links-footer">
                    <a href="/#privacidad">Política de privacidad</a>
                    <a href="/#terminos">Términos de servicio</a>
                    <a href="/#cookies">Política de cookies</a>
                    <p className="copyright-legal">&copy; {new Date().getFullYear()} Ciber Guardians. Todos los derechos reservados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-line-1">
              </div>

              <div className="footer-bottom-line-2">
              </div>
            </div>
          </div>
        </footer>
        
        {/* Fixed Gradual Blur at the bottom of the screen */}
        <GradualBlur
          position="bottom"
          height="6rem"
          strength={2}
          divCount={4}
          curve="linear"
          exponential={false}
          opacity={0.7}
          target="page"
          zIndex={1100}
        />
      </div>
    </BrowserRouter>
  );
}

// Componente de sección de comentarios
const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "CyberNinja",
      content: "Este curso me ha ayudado a entender conceptos complejos de ciberseguridad de una manera muy clara. ¡Recomendado 100%!",
      timestamp: "2025-10-20T10:30:00Z",
      avatar: "CN",
      replies: [
        {
          id: 101,
          author: "HackMaster",
          content: "Totalmente de acuerdo. Los módulos sobre criptografía son excelentes.",
          timestamp: "2025-10-20T14:15:00Z",
          avatar: "HM"
        }
      ]
    },
    {
      id: 2,
      author: "SecurityGuru",
      content: "La sección de hacking ético es increíble. Me ha permitido identificar vulnerabilidades en mis propios proyectos.",
      timestamp: "2025-10-18T16:45:00Z",
      avatar: "SG",
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState({
    author: "",
    content: ""
  });

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  // Add some dummy comments for demonstration
  const additionalComments = [
    {
      id: 3,
      author: "JUJUAn",
      content: "gergergeg",
      timestamp: "2025-10-24T17:25:00Z",
      avatar: "JU",
      replies: [
        {
          id: 301,
          author: "Usuario",
          content: "Tambien digo lo mismo",
          timestamp: "2025-10-24T17:26:00Z",
          avatar: "U"
        }
      ]
    }
  ];

  // Combine initial comments with additional comments
  const allComments = [...comments, ...additionalComments];
  const displayedComments = showAllComments ? allComments : comments;

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment = {
        id: Date.now(),
        author: newComment.author,
        content: newComment.content,
        timestamp: new Date().toISOString(),
        avatar: newComment.author.substring(0, 2).toUpperCase(),
        replies: []
      };
      setComments(prev => [comment, ...prev]);
      setNewComment({ author: "", content: "" });
    }
  };

  const handleReplySubmit = (commentId) => {
    if (replyContent.trim()) {
      const reply = {
        id: Date.now(),
        author: "Usuario", // In a real app, this would be the logged-in user
        content: replyContent,
        timestamp: new Date().toISOString(),
        avatar: "U"
      };

      setComments(prev => prev.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply]
          };
        }
        return comment;
      }));

      setReplyContent("");
      setReplyingTo(null);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="comments-container">
      <div className="comment-count">
        {allComments.length} {allComments.length === 1 ? 'comentario' : 'comentarios'}
      </div>

      {/* Formulario para nuevo comentario */}
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <h3 className="comment-form-title">Deja tu comentario</h3>
        <div className="form-group-comment">
          <label htmlFor="author">Nombre</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleCommentChange}
            placeholder="Tu nombre de hacker"
            required
          />
        </div>
        <div className="form-group-comment">
          <label htmlFor="content">Comentario</label>
          <textarea
            id="content"
            name="content"
            value={newComment.content}
            onChange={handleCommentChange}
            placeholder="Comparte tu experiencia con Ciber Guardians..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-comment-btn">
          Publicar Comentario
        </button>
      </form>

      {/* Lista de comentarios */}
      <ul className="comments-list">
        {displayedComments.map(comment => (
          <li key={comment.id} className="comment-item">
            <div className="comment-header">
              <div className="comment-avatar">{comment.avatar}</div>
              <div>
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{formatTime(comment.timestamp)}</span>
              </div>
            </div>
            <div className="comment-content">
              {comment.content}
            </div>
            <div className="comment-actions">
              <button 
                className="comment-action"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              >
                ↳ Responder
              </button>
            </div>

            {/* Formulario de respuesta */}
            {replyingTo === comment.id && (
              <div className="comment-reply-form">
                <div className="form-group-comment">
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Escribe tu respuesta..."
                    required
                  ></textarea>
                </div>
                <button 
                  className="submit-comment-btn"
                  onClick={() => handleReplySubmit(comment.id)}
                >
                  Publicar Respuesta
                </button>
              </div>
            )}

            {/* Respuestas */}
            {comment.replies.length > 0 && (
              <ul className="comment-replies">
                {comment.replies.map(reply => (
                  <li key={reply.id} className="comment-item">
                    <div className="comment-header">
                      <div className="comment-avatar">{reply.avatar}</div>
                      <div>
                        <span className="comment-author">{reply.author}</span>
                        <span className="comment-time">{formatTime(reply.timestamp)}</span>
                      </div>
                    </div>
                    <div className="comment-content">
                      {reply.content}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Botón Ver más */}
      {allComments.length > comments.length && (
        <div className="show-more-container">
          <button 
            className="show-more-btn"
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? 'Ver menos ↑' : 'Ver más ↓'}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
