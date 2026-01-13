import { useState } from 'react'
import PostCard from './PostCard'
import { linkedInPosts, linkedInProfileUrl } from '../config/linkedinPosts'
import './LinkedInPosts.css'

/* 
  Icon Attribution:
  - Action Submit icon: Icons made by sonnycandra from www.flaticon.com
*/

const LinkedInPosts = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  // Posts are now loaded from config file for easier management
  // Edit src/config/linkedinPosts.js to add/update your posts
  const [posts] = useState(linkedInPosts)

  // All posts in carousel for better carousel experience
  const mainPosts = [] // No separate main grid
  const carouselPosts = posts // All posts in carousel
  const postsPerSlide = 2
  
  const totalSlides = Math.ceil(carouselPosts.length / postsPerSlide)

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="posts" className="linkedin-posts section">
      <div className="container">
        <h2 className="section-title">LinkedIn Posts & Advocacy</h2>
        <p className="posts-intro">
          Through my LinkedIn platform, I consistently share content related to gender equality, 
          inclusive workplaces, and women's empowerment. Here are some of my recent posts:
        </p>
        
        {/* Carousel for all posts */}
        {carouselPosts.length > 0 && (
          <div className="posts-carousel-section">
            <div className="carousel-container">
              <div className="carousel-wrapper">
                <div 
                  className="carousel-track"
                  style={{ 
                    transform: `translateX(-${(carouselIndex * 100) / totalSlides}%)`,
                    width: `${totalSlides * 100}%`
                  }}
                >
                  {Array.from({ length: totalSlides }).map((_, groupIndex) => {
                    const slidePosts = carouselPosts.slice(groupIndex * postsPerSlide, (groupIndex + 1) * postsPerSlide)
                    return (
                      <div 
                        key={groupIndex} 
                        className="carousel-slide"
                        style={{ width: `${100 / totalSlides}%` }}
                      >
                        <div className="carousel-grid">
                          {slidePosts.map((post) => (
                            <PostCard
                              key={post.id}
                              postUrl={post.url}
                              title={post.title}
                              excerpt={post.excerpt}
                              thumbnail={post.thumbnail}
                              badge={post.badge}
                              badgeColor={post.badgeColor}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {totalSlides > 1 && (
                <div className="carousel-controls">
                  <button 
                    className="carousel-btn carousel-btn-prev"
                    onClick={prevCarousel}
                    aria-label="Previous posts"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <div className="carousel-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === carouselIndex ? 'active' : ''}`}
                        onClick={() => setCarouselIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    className="carousel-btn carousel-btn-next"
                    onClick={nextCarousel}
                    aria-label="Next posts"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="posts-cta">
          <p>Want to see more? Connect with me on LinkedIn!</p>
          <a 
            href={linkedInProfileUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Visit My LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default LinkedInPosts
