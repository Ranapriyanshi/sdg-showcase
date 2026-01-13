import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SDG Showcase</h3>
            <p className="footer-description">
              Showcasing commitment to Sustainable Development Goals through 
              technology, education, and advocacy.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#motivation">Motivation Letter</a></li>
              <li><a href="#achievements">Summit Goals</a></li>
              <li><a href="#posts">LinkedIn Posts</a></li>
              <li><a href="#proof">Initiatives</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/in/priyanshi-rana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Priyanshi Rana. All rights reserved.</p>
          <p className="footer-sdg">Advocating for SDG 4, 5, and 9</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
