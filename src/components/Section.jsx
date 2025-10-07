const Section = ({ id, title, subtitle, children, className = '', container = true }) => {
    return (
      <section id={id} className={`section ${className}`}>
        {container ? (
          <div className="container">
            {(title || subtitle) && (
              <div className="section-header">
                {title && <h2 className="section-title">{title}</h2>}
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
              </div>
            )}
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  };
  
  export default Section;