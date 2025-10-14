import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes somos' },
    { id: 'mision-vision-valores', label: 'Misión' },
    { id: 'importancia', label: 'Importancia' },
    { id: 'ventajas', label: 'Ventajas' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className="header-modern">
      <div className="container">
        <nav className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
          {/* Logo */}
          <a
            href="#inicio"
            className="logo-icon"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
          >
            <img src="/img/logoCS.png" alt="Ciber Guardians" />
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links-horizontal">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="cta-pill-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto');
            }}
          >
            Empezar ahora
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-expanded">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="cta-pill-button mobile"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
            >
              Empezar ahora
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;