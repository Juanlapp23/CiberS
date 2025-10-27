import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const TestimonialsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 0;

  .testimonials-title {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.875rem;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
  }

  .testimonials-rows-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .testimonial-card {
    position: relative;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    padding: 20px;
    color: #fff;
    width: 250px;  // Made narrower
    min-height: 200px;  // Made shorter
    margin: 0 15px;  // Increased margin for more space
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    background: linear-gradient(to bottom, #1a1a1a, #000);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .testimonial-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(204, 155, 122, 0.5);
    background: rgba(204, 155, 122, 0.2);
  }

  .content {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
    flex-grow: 1;
    max-height: 100px;  // Reduced height
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .separator {
    width: 80%;
    height: 2px;
    background: linear-gradient(to right, transparent, #cc9b7a, transparent);
    margin: 10px auto;
  }

  .avatar-container {
    width: 50px;  // Made smaller
    height: 50px;  // Made smaller
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;  // Reduced margin
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .author {
    font-size: 12px;
    color: #cc9b7a;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }

  /* Fade effect on edges */
  .slider-row {
    position: relative;
  }

  .slider-row::before,
  .slider-row::after {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;  // Reduced width
    height: 100%;
    z-index: 1;
  }

  .slider-row::before {
    left: 0;
    background: linear-gradient(to right, rgba(0,0,0,1), transparent);
  }

  .slider-row::after {
    right: 0;
    background: linear-gradient(to left, rgba(0,0,0,1), transparent);
  }
`;

const TestimonialsCarousel = () => {
  // Datos de testimonios con URLs de avatares
  const testimonials = [
    { id: 1, author: "CyberNinja", content: "¡Excelente curso! Ha transformado mi carrera en ciberseguridad. ¿Más contenido avanzado pronto?", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 2, author: "SecurityGuru", content: "Increíble experiencia. Los módulos son claros y prácticos. ¿Habrá más contenido pronto?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 3, author: "HackMaster", content: "Recomiendo 100% Ciber Guardians. ¡Gran trabajo, más cursos serían geniales!", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 4, author: "CyberWolf", content: "Aprendí mucho sobre hacking ético. ¡Por favor, amplíen el catálogo de cursos!", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 5, author: "CodeGuardian", content: "El mejor curso gratuito que he tomado. ¡Más temas avanzados, por favor!", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 6, author: "TechSentry", content: "Material de alta calidad. ¡Estoy impresionado! ¿Más cursos en el futuro?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 7, author: "DarkCoder", content: "Transformó mi carrera en ciberseguridad. ¡Más contenido sería espectacular!", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 8, author: "NetProtector", content: "Fácil de seguir y muy útil. ¡Esperando más cursos avanzados!", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 9, author: "CyberKnight", content: "Un recurso invaluable. ¡Gracias! ¿Podrían agregar más módulos?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 10, author: "SecureMind", content: "Aprendizaje práctico de primera. ¡Más cursos para seguir creciendo!", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    // 20 nuevos testimonios
    { id: 11, author: "SecureByte", content: "¡Increíble apoyo! ¿Más cursos de pentesting?", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 12, author: "CyberPulse", content: "Aprendí mucho. ¡Más contenido avanzado, por favor!", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 13, author: "HackShield", content: "Excelente curso, muy práctico. ¡Más pronto!", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 14, author: "DigitalGuard", content: "Transformador. ¿Habrá más módulos de IA?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 15, author: "CodeLock", content: "¡Genial! Necesito más cursos de criptografía.", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 16, author: "NetWarden", content: "Muy útil. ¡Más contenido, por favor!", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 17, author: "CyberForge", content: "El mejor aprendizaje. ¿Más cursos avanzados?", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 18, author: "SecureWave", content: "¡Impresionante! Quiero más módulos.", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 19, author: "TechBarrier", content: "Gran experiencia. ¡Más cursos pronto!", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 20, author: "CyberHawk", content: "Aprendizaje de calidad. ¿Más contenido?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 21, author: "SafeCode", content: "¡Excelente! Necesito más temas prácticos.", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 22, author: "NetShield", content: "Increíble curso. ¿Más módulos avanzados?", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
    { id: 23, author: "CyberBit", content: "Muy claro. ¡Más cursos, por favor!", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 24, author: "SecureLink", content: "Transformó mi carrera. ¿Más contenido?", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 25, author: "TechGuard", content: "¡Genial! Quiero más cursos de red.", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 26, author: "CyberFlow", content: "Aprendí mucho. ¡Más pronto, por favor!", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 27, author: "SafeNet", content: "Excelente experiencia. ¿Más módulos?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 28, author: "CodeSafe", content: "¡Increíble! Necesito más cursos.", avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80" },
    { id: 29, author: "NetCore", content: "Muy práctico. ¿Más contenido avanzado?", avatarUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" },
    { id: 30, author: "CyberEdge", content: "Gran curso. ¡Más temas pronto!", avatarUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&q=80" },
  ];

  // Configuración para la hilera superior (movimiento hacia la derecha)
  const topSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    rtl: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  // Configuración para la hilera media (movimiento hacia la izquierda)
  const middleSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  // Configuración para la hilera inferior (movimiento hacia la derecha)
  const bottomSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    rtl: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  // Dividir los testimonios en tres grupos de 10
  const topTestimonials = testimonials.slice(0, 10);
  const middleTestimonials = testimonials.slice(10, 20);
  const bottomTestimonials = testimonials.slice(20, 30);

  return (
    <TestimonialsContainer>
      <h2 className="testimonials-title">Testimonios Destacados</h2>
      <div className="testimonials-rows-container">
        {/* Hilera superior: movimiento hacia la derecha */}
        <div className="slider-row">
          <Slider {...topSettings}>
            {topTestimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="content">{testimonial.content}</div>
                <div className="separator" />
                <div className="avatar-container">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author} 
                    className="avatar-img" 
                    loading="lazy"
                  />
                </div>
                <div className="author">@{testimonial.author}</div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Hilera media: movimiento hacia la izquierda */}
        <div className="slider-row">
          <Slider {...middleSettings}>
            {middleTestimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="content">{testimonial.content}</div>
                <div className="separator" />
                <div className="avatar-container">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author} 
                    className="avatar-img" 
                    loading="lazy"
                  />
                </div>
                <div className="author">@{testimonial.author}</div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Hilera inferior: movimiento hacia la derecha */}
        <div className="slider-row">
          <Slider {...bottomSettings}>
            {bottomTestimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="content">{testimonial.content}</div>
                <div className="separator" />
                <div className="avatar-container">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.author} 
                    className="avatar-img" 
                    loading="lazy"
                  />
                </div>
                <div className="author">@{testimonial.author}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </TestimonialsContainer>
  );
};

export default TestimonialsCarousel;