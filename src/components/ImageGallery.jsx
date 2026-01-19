import { useMemo, useState } from 'react'
import './ImageGallery.css'
import image1 from '../assets/Children_Teej_Festival_Celebration.jpeg'
import image2 from '../assets/ChildrenDiwaliFestival.jpeg'
import image3 from '../assets/Outdoor Activity Day.jpeg'
import image4 from '../assets/Swweet distibutioncelbration.jpeg'
import image5 from '../assets/Plantation drive.jpeg'

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Gallery images - 4 sections
  const images = [
    {
      id: 1,
      src: image1,
      alt: 'Teej Festival Celebration',
      title: 'Teej Festival Celebration',
      description: 'Observance of the Teej festival to promote cultural awareness and community engagement'
    },
    {
      id: 2,
      src: image2,
      alt: 'Diwali Diya Lighting Ceremony',
      title: 'Diwali Celebration',
      description: 'Celebration of Diwali through the lighting of diyas to foster unity and positive values'
    },
    {
      id: 3,
      src: image5,
      alt: 'Tree Plantation Drive with Teachers',
      title: 'Tree Plantation Drive',
      description: 'Tree plantation activities conducted with the active support and participation of teachers'
    },
    {
      id: 4,
      src: image4,
      alt: 'Sweet Distribution at School',
      title: 'Sweet Distribution Day',
      description: 'Distribution of sweets at the school in collaboration with teachers to encourage togetherness'
    },
    {
      id: 5,
      src: image3,
      alt: 'Outdoor Activity Day at School',
      title: 'Outdoor Activity Day',
      description: 'An outdoor activity day organized to encourage physical fitness, teamwork, and active participation'
    }
  ]
  

  const totalImages = images.length

  const goToIndex = (index) => {
    const normalizedIndex = (index + totalImages) % totalImages
    setActiveIndex(normalizedIndex)
  }

  const goNext = () => {
    goToIndex(activeIndex + 1)
  }

  const goPrev = () => {
    goToIndex(activeIndex - 1)
  }

  const visibleIndices = useMemo(() => {
    const prevIndex = (activeIndex - 1 + totalImages) % totalImages
    const nextIndex = (activeIndex + 1) % totalImages
    return { prevIndex, nextIndex }
  }, [activeIndex, totalImages])

  const getCardClass = (index) => {
    if (index === activeIndex) return 'gallery-card is-active'
    if (index === visibleIndices.prevIndex) return 'gallery-card is-prev'
    if (index === visibleIndices.nextIndex) return 'gallery-card is-next'
    return 'gallery-card is-hidden'
  }

  return (
    <section id="gallery" className="image-gallery section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="gallery-intro">
          A visual journey through my initiatives, community work, and advocacy efforts.
        </p>
        <div className="gallery-carousel">
          <button
            className="gallery-nav gallery-nav-prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="gallery-track">
            {images.map((image, index) => (
              <div key={image.id} className={getCardClass(index)}>
                <div className="gallery-card-inner">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-card-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="gallery-placeholder" style={{ display: 'none' }}>
                    <span>Image {image.id}</span>
                  </div>
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-info">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="gallery-nav gallery-nav-next"
            onClick={goNext}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="gallery-dots">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`gallery-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
