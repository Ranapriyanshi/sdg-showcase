import './Hero.css'
import photo from '../../public/Priyanshi_India.png'

/* 
  Icon Attributions:
  - Read My Story icon: Icons made by laterunlabs from www.flaticon.com
  - Action Submit icon: Icons made by sonnycandra from www.flaticon.com
*/

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
            <span>Future Action Summit Australia </span>
          </div>
          <h1 className="hero-title">
            <span className="hero-name">Priyanshi</span>
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
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Read My Story
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('posts')}
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              View My Work
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-container">
            <img 
              src={photo} 
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
          <div className="hero-cards">
            <div className="hero-card hero-card-bottom"></div>
            <div className="hero-card hero-card-top"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
