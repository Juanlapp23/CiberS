const ModuleCard = ({ title, description, isFree, index }) => {
    return (
      <div className="module-card" data-aos="fade-up" data-aos-delay={index * 50}>
        <div className="module-header">
          <h3 className="module-title">{title}</h3>
          {isFree && <span className="badge free">Gratis</span>}
        </div>
        <p className="module-description">{description}</p>
        <div className="module-footer">
          <button className="module-button">
            Comenzar módulo
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default ModuleCard;