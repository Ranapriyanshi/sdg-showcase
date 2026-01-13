import { useState } from 'react'
import './Achievements.css'

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const achievements = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Practical Knowledge',
      description: 'Leadership & sustainable development strategies',
      text: 'Through the Future Action Summit Australia, I hope to gain practical knowledge about leadership, sustainable development, and how impactful projects are designed and scaled globally. I want to learn how young leaders from different countries use innovation and collaboration to address social challenges.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Technology Integration',
      description: 'Combining tech with education & gender equality',
      text: 'I am especially interested in understanding how technology can be combined with education and gender equality to create long-term change. By engaging with mentors and fellow delegates, I aim to improve my project-planning, communication, and leadership skills.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Global Connections',
      description: 'Building lasting networks for collaboration',
      text: 'Most importantly, I hope to build lasting connections that allow me to collaborate beyond the summit and apply what I learn to meaningful initiatives in India.'
    }
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const goToCard = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">What I Hope to Achieve</h2>
        <div className="achievements-content">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {achievements.map((achievement, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="achievement-item">
                      <div className="achievement-icon">
                        {achievement.icon}
                      </div>
                      <h3>{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      <p className="achievement-text">{achievement.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <button 
                className="carousel-btn carousel-btn-prev"
                onClick={prevCard}
                aria-label="Previous card"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <div className="carousel-dots">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToCard(index)}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                className="carousel-btn carousel-btn-next"
                onClick={nextCard}
                aria-label="Next card"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
