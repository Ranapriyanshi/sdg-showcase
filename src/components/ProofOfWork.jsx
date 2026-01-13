import './ProofOfWork.css'

const ProofOfWork = () => {
  return (
    <section id="proof" className="proof-of-work section">
      <div className="container">
        <h2 className="section-title">Proof of Work & Initiatives</h2>
        <div className="proof-content">
          <div className="proof-main">
            <div className="proof-card">
              <div className="proof-header">
                <div className="proof-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="proof-title-section">
                  <h3>LinkedIn Advocacy</h3>
                  <p className="proof-subtitle">Digital Voice for Change</p>
                </div>
              </div>
              <div className="proof-body">
                <p>
                  My LinkedIn profile showcases my engagement with gender equality advocacy, youth leadership, and digital awareness. Through my posts and growing professional network, I promote inclusive workplaces, women's empowerment, and youth participation, reflecting my alignment with the Sustainable Development Goals and my commitment to positive social change.
                </p>
                <div className="proof-stats">
                  <div className="stat-item">
                    <div className="stat-number">2,000+</div>
                    <div className="stat-label">LinkedIn Followers</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">Active</div>
                    <div className="stat-label">Content Creator</div>
                  </div>
                </div>
                <a 
                  href="https://www.linkedin.com/in/priyanshi-rana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="proof-link"
                >
                  View My LinkedIn Profile →
                </a>
              </div>
            </div>
          </div>
          <div className="proof-initiatives">
            <h3 className="initiatives-title">Key Initiatives</h3>
            <div className="initiative-list">
              <div className="initiative-item">
                <div className="initiative-icon">📚</div>
                <div className="initiative-content">
                  <h4>School Outreach Programs</h4>
                  <p>Organizing learning activities and creative sessions for economically disadvantaged students</p>
                </div>
              </div>
              <div className="initiative-item">
                <div className="initiative-icon">💻</div>
                <div className="initiative-content">
                  <h4>Technology Outreach</h4>
                  <p>Helping students understand digital tools and basic technical concepts</p>
                </div>
              </div>
              <div className="initiative-item">
                <div className="initiative-icon">🎯</div>
                <div className="initiative-content">
                  <h4>Gender Equality Advocacy</h4>
                  <p>Consistently sharing content on LinkedIn about inclusive workplaces and women's empowerment</p>
                </div>
              </div>
              <div className="initiative-item">
                <div className="initiative-icon">🌍</div>
                <div className="initiative-content">
                  <h4>SDG Alignment</h4>
                  <p>Actively working towards SDG 4, 5, and 9 through various community initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProofOfWork
