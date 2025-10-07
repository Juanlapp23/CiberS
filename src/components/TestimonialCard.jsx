const TestimonialCard = ({ quote, name, role, avatar }) => {
    return (
      <div className="testimonial-card" data-aos="fade-up">
        <div className="testimonial-content">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">{quote}</p>
        </div>
        <footer className="testimonial-footer">
          <div className="testimonial-avatar">
            {avatar ? (
              <img src={avatar} alt={name} />
            ) : (
              <div className="avatar-placeholder">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          <div className="testimonial-info">
            <strong className="testimonial-name">{name}</strong>
            <p className="testimonial-role">{role}</p>
          </div>
        </footer>
      </div>
    );
  };
  
  export default TestimonialCard;