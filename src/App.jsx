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
import TestimonialCard from './components/TestimonialCard';
import { motion } from 'framer-motion';
import { modulesData } from './data/modules';
import { testimonialsData } from './data/testimonials';
import { faqData } from './data/faq';

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
// ...existing code...

// Componente principal de la página de inicio
const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

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

      {/* Clases de CiberS */}+


    
      {/* Fin de clases de CiberS*/}

      {/* Importancia de la ciberseguridad */}
      <Section
        id="importancia"
        title="La importancia de la ciberseguridad"
        subtitle="La ciberseguridad es fundamental en un mundo cada vez más digitalizado"
        className="importance-section"
      >
        <div className="section-background-text">Security</div>
        <div className="importance-content">
          <div className="importance-text">
            <p>
            En la era digital actual, las amenazas cibernéticas no solo evolucionan, sino que se vuelven más inteligentes, sigilosas y devastadoras cada día. La protección de los datos ya no es una opción, sino una cuestión de supervivencia para individuos, empresas y gobiernos. Un solo descuido puede abrir la puerta a ataques capaces de robar identidades, paralizar sistemas enteros o destruir reputaciones en segundos. La seguridad digital se ha convertido en la primera línea de defensa en un mundo donde la información vale más que el oro.

            </p>
            <div className="stats-grid">
              <div className="stat-card" data-aos="zoom-in">
                <h3>
                  <CountUp from={0} to={95} duration={2} />%
                </h3>
                <p>de las brechas de seguridad son causadas por error humano</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <h3>
                  +<CountUp from={0} to={600} duration={2} />%
                </h3>
                <p>aumento en ciberataques desde el inicio de la pandemia</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <h3>
                  <CountUp 
                    from={0} 
                    to={3.5} 
                    duration={2} 
                    decimals={1} 
                  />
                  M
                </h3>
                <p>puestos de trabajo en ciberseguridad sin cubrir a nivel global</p>
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
        <LiquidBubble color="rgba(45, 85, 110, 0.15)" delay={1.5} size={70} position={{ top: '60%', right: '15%' }} />
        <LiquidBubble color="rgba(45, 85, 110, 0.1)" delay={3} size={40} position={{ bottom: '20%', left: '50%' }} />
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
        <LiquidBubble color="rgba(0, 200, 140, 0.15)" delay={2} size={65} position={{ top: '70%', right: '10%' }} />
        <LiquidBubble color="rgba(0, 200, 140, 0.1)" delay={3.5} size={45} position={{ bottom: '15%', left: '60%' }} />
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
        <LiquidBubble color="rgba(60, 70, 90, 0.15)" delay={2.5} size={68} position={{ top: '55%', right: '20%' }} />
        <LiquidBubble color="rgba(60, 70, 90, 0.1)" delay={4} size={42} position={{ bottom: '25%', left: '45%' }} />
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
        <LiquidBubble color="rgba(0, 255, 100, 0.15)" delay={2.2} size={62} position={{ top: '65%', right: '12%' }} />
        <LiquidBubble color="rgba(0, 255, 100, 0.1)" delay={3.8} size={38} position={{ bottom: '18%', left: '55%' }} />
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
        <LiquidBubble color="rgba(138, 43, 226, 0.15)" delay={2.8} size={66} position={{ top: '58%', right: '18%' }} />
        <LiquidBubble color="rgba(138, 43, 226, 0.1)" delay={4.2} size={44} position={{ bottom: '22%', left: '52%' }} />
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

      {/* Testimonios */}
      <Section
        id="testimonios"
        title="Lo que dicen nuestros estudiantes"
        subtitle="Experiencias reales de nuestra comunidad"
        className="testimonials-section"
      >
        <div className="section-background-text">Reviews</div>
        <div className="testimonials-grid">
          {testimonialsData.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="Preguntas frecuentes"
        subtitle="Resolvemos tus dudas más comunes"
        className="faq-section"
      >
        <div className="section-background-text">FAQ</div>
        <div className="faq-list">
          {faqData.map((item) => (
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
                  <span>Certificados de finalización</span>
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
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                <p>info@ciberguardians.com</p>
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
                <p>+52 55 1234 5678</p>
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
                <p>Ciudad de México, MX</p>
              </div>
              <span className="card-arrow">→</span>
            </div>
          </div>

          {/* INICIO DE TESTIMONIOS */}
          <div className="testimonials-intro">
            <span className="testimonials-badge">Testimonials</span>
            <h2 className="testimonials-preview-title">
              Reviews from 1000+ customers
            </h2>
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
                  <a href="#" className="social-icon-overlay" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon-overlay" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon-overlay" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                    <a href="#" className="social-icon-footer" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
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
                    <li><a href="/#quienes-somos">Quiénes somos</a></li>
                    <li><a href="/#mision-vision-valores">Misión</a></li>
                    <li><a href="/#importancia">Importancia</a></li>
                    <li><a href="/#ventajas">Ventajas</a></li>
                    <li><a href="/#testimonios">Testimonios</a></li>
                    <li><a href="/#faq">FAQ</a></li>
                    <li><a href="/#contacto">Contacto</a></li>
                  </ul>
                </div>

                {/* Column 3 - Recursos */}
                <div className="footer-column">
                  <h4 className="footer-column-title">Recursos</h4>
                  <ul className="footer-links">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Comunidad</a></li>
                    <li><a href="#">Centro de Ayuda</a></li>
                    <li><a href="#">Guías Gratuitas</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                  </ul>
                </div>

                {/* Column 4 - Legal & Contacto */}
                <div className="footer-column">
                  <h4 className="footer-column-title">Legal & Contacto</h4>
                  <div className="contact-info">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <div>
                        <a href="mailto:info@ciberguardians.com">info@ciberguardians.com</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <div>
                        <a href="tel:+525512345678">+52 55 1234 5678</a>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <div>
                        <span>Ciudad de México, MX</span>
                      </div>
                    </div>
                  </div>

                  <div className="legal-links-footer">
                    <a href="/#privacidad">Política de privacidad</a>
                    <a href="/#terminos">Términos de servicio</a>
                    <a href="/#cookies">Política de cookies</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-line-1">
                <div className="copyright-section">
                  <p>&copy; {new Date().getFullYear()} Ciber Guardians. Todos los derechos reservados.</p>
                </div>
                <div className="security-badges">
                  <span className="security-badge">🔒 SSL Encriptado</span>
                  <span className="security-badge">🛡️ Datos Protegidos</span>
                </div>
              </div>

              <div className="footer-bottom-line-2">
                <div className="made-with-love">
                  <p>Hecho con ❤️ para la comunidad latinoamericana</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;