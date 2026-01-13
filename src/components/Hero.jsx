import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Floating decorative elements */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>Future Action Summit Australia</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-name">Priyanshi Rana</span>
            <span className="hero-tagline">Empowering Change Through Technology & Education</span>
          </h1>
          <p className="hero-description">
            A Computer Science student from Haryana, India, dedicated to using technology 
            as a tool for empowerment and social change. Advocating for gender equality, 
            quality education, and inclusive innovation.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('motivation')}
            >
              Read My Story
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('posts')}
            >
              View My Work
            </button>
          </div>
          <div className="hero-sdg-badges">
            <div className="sdg-badge sdg-4">SDG 4</div>
            <div className="sdg-badge sdg-5">SDG 5</div>
            <div className="sdg-badge sdg-9">SDG 9</div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-container">
            <img 
              src="/photo.jpg" 
              alt="Priyanshi Rana" 
              className="hero-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-photo-placeholder" style={{ display: 'none' }}>
              <span>Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
