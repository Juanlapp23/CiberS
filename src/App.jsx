import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ModuleCard from './components/ModuleCard';
import TestimonialCard from './components/TestimonialCard';
import { modulesData } from './data/modules';
import { testimonialsData } from './data/testimonials';
import { faqData } from './data/faq';

function App() {
  // Inicializa AOS una vez que el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación
      once: true,    // La animación ocurre solo una vez
    });
  }, []);

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
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="app">
      <Header />
      <Hero />

      {/* Quiénes somos */}
      <Section 
        id="quienes-somos" 
        title="¿Qué es Ciber Guardians?" 
        subtitle="Tu puerta de entrada al fascinante mundo de la protección digital. Formación personal de calidad y 100% gratuita para los defensores del ciberespacio del mañana."
        className="about-section"
        headerClassName="section-header-left"
      >
        <div className="about-content">
          <div className="about-visual">
            <div className="team-illustration">
              <img src="/logoCS.png" alt="Equipo Ciber Guardians" className="float-animation" />
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
        <div className="mission-grid">
          <div className="mission-card-wrapper" data-aos="fade-up">
            <div className="mission-card"> 
              <div className="card-icon">🎯</div>
              <h3>NUESTRA MISIÓN</h3>
              <p>Impulsar a los estudiantes hacia la excelencia en ciberseguridad, ofreciendo una formación gratuita y de alta calidad que fortalezca sus conocimientos y habilidades para enfrentar los desafíos del entorno digital.
              </p>
            </div>
          </div>
          <div className="mission-card-wrapper" data-aos="fade-up" data-aos-delay="100">
            <div className="mission-card"> 
              <div className="card-icon">🔭</div>
              <h3>NUESTRA VISIÓN</h3>
              <p>Consolidarnos como el centro líder en formación en ciberseguridad de Colombia y Latinoamérica, promoviendo el desarrollo de profesionales capaces de liderar la protección y transformación digital del futuro.
              </p>
            </div>
          </div>
          <div className="mission-card-wrapper" data-aos="fade-up" data-aos-delay="200">
            <div className="mission-card"> 
              <div className="card-icon">💎</div>
              <h3>NUESTROS VALORES</h3>
              <p>Fomentamos la excelencia y la innovación con pasión, manteniendo un firme compromiso con el aprendizaje de nuestros estudiantes y el fortalecimiento de la comunidad de ciberseguridad.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Módulos */}
      <Section 
        id="modulos" 
        title="Nuestros módulos formativos" 
        subtitle="Domina la ciberseguridad con nuestro plan de estudios integral, enfocado en la práctica y el aprendizaje aplicado.
"
        className="modules-section"
      >
        <div className="modules-grid">
          {modulesData.map((module, index) => (
            // ModuleCard internamente ya debe tener su data-aos
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              isFree={module.isFree}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Importancia de la ciberseguridad */}
      <Section 
        id="importancia" 
        title="La importancia de la ciberseguridad" 
        subtitle="La ciberseguridad es fundamental en un mundo cada vez más digitalizado"
        className="importance-section"
      >
        <div className="importance-content">
          <div className="importance-text">
            <p>
              En la era digital actual, las amenazas evolucionan constantemente y la protección 
              de datos se ha convertido en una necesidad crítica para individuos y organizaciones.
            </p>
            <div className="stats-grid">
              <div className="stat-card" data-aos="zoom-in">
                <h3>95%</h3>
                <p>de las brechas de seguridad son causadas por error humano</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <h3>+600%</h3>
                <p>aumento en ciberataques desde el inicio de la pandemia</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <h3>3.5M</h3>
                <p>puestos de trabajo en ciberseguridad sin cubrir a nivel global</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ventajas */}
      <Section 
        id="ventajas" 
        title="¿Por qué elegirnos?" 
        subtitle="Descubre las ventajas de aprender con Ciber Guardians"
        className="advantages-section"
      >
        <div className="advantages-grid">
          <div className="advantage-card" data-aos="fade-up">
            <div className="advantage-icon">📚</div>
            <h3>Fácil de aprender</h3>
            <p>Contenido estructurado desde cero, sin conocimientos previos necesarios</p>
          </div>
          <div className="advantage-card" data-aos="fade-up" data-aos-delay="100">
            <div className="advantage-icon">🎁</div>
            <h3>100% gratis</h3>
            <p>Formación completa sin costos ocultos ni suscripciones</p>
          </div>
          <div className="advantage-card" data-aos="fade-up" data-aos-delay="200">
            <div className="advantage-icon">🔍</div>
            <h3>Casos de uso reales</h3>
            <p>Aprende con ejemplos prácticos y situaciones del mundo real</p>
          </div>
          <div className="advantage-card" data-aos="fade-up" data-aos-delay="300">
            <div className="advantage-icon">⚡</div>
            <h3>Enfoque práctico</h3>
            <p>Más práctica, menos teoría. Aprende haciendo</p>
          </div>
        </div>
      </Section>

      {/* Testimonios */}
      <Section 
        id="testimonios" 
        title="Lo que dicen nuestros estudiantes" 
        subtitle="Experiencias reales de nuestra comunidad"
        className="testimonials-section"
      >
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
        title="Únete a nuestra comunidad" 
        subtitle="Comienza tu journey en ciberseguridad hoy mismo"
        className="contact-section"
      >
        <div className="contact-content">
          <div className="contact-info">
            <h3>¡No esperes más!</h3>
            <p>
              Únete a más de 400 estudiantes que ya están transformando su futuro 
              en ciberseguridad. Forma parte de nuestra comunidad y accede a:
            </p>
            <ul className="contact-features">
              <li>✅ 22 módulos completamente gratuitos</li>
              <li>✅ Soporte 24/7 de instructores</li>
              <li>✅ Certificados de finalización</li>
              <li>✅ Comunidad activa de estudiantes</li>
              <li>✅ Actualizaciones constantes</li>
            </ul>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu.email@ejemplo.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mensaje">¿Qué te gustaría aprender? *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                placeholder="Cuéntanos tus objetivos de aprendizaje..."
              ></textarea>
            </div>
            
            <button type="submit" className="cta-button primary full-width">
              <span>Unirme ahora</span>
              <span className="button-arrow">→</span>
            </button>
            
            <p className="form-note">
              Al unirte, aceptas nuestra política de privacidad y recibirás información 
              sobre los cursos. Puedes darte de baja en cualquier momento.
            </p>
          </form>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/logoCS.png" alt="Ciber Guardians" className="float-animation" />
                <span>Ciber Guardians</span>
              </div>
              <p>
                Formando a los profesionales en ciberseguridad del mañana. 
                Educación gratuita y accesible para todos.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navegación</h4>
                <a href="#inicio">Inicio</a>
                <a href="#modulos">Módulos</a>
                <a href="#ventajas">Ventajas</a>
                <a href="#testimonios">Testimonios</a>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#privacidad">Política de privacidad</a>
                <a href="#terminos">Términos de servicio</a>
                <a href="#cookies">Política de cookies</a>
              </div>
              
              <div className="footer-column">
                <h4>Contacto</h4>
                <a href="mailto:info@ciberguardians.com">info@ciberguardians.com</a>
                <a href="tel:+525512345678">+52 55 1234 5678</a>
                <span>Ciudad de México, MX</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Ciber Guardians. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ para la comunidad latinoamericana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;