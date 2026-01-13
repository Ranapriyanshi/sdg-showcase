import { useState } from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Replace these with your actual image paths
  const images = [
    {
      id: 1,
      src: '/gallery/image1.jpg',
      alt: 'Gallery Image 1',
      title: 'Community Outreach',
      description: 'Working with students from economically disadvantaged backgrounds'
    },
    {
      id: 2,
      src: '/gallery/image2.jpg',
      alt: 'Gallery Image 2',
      title: 'Technology Workshop',
      description: 'Teaching digital skills and confidence'
    },
    {
      id: 3,
      src: '/gallery/image3.jpg',
      alt: 'Gallery Image 3',
      title: 'Festival Celebrations',
      description: 'Organizing creative activities and learning sessions'
    },
    {
      id: 4,
      src: '/gallery/image4.jpg',
      alt: 'Gallery Image 4',
      title: 'Advocacy Event',
      description: 'Promoting gender equality and inclusive workplaces'
    },
    {
      id: 5,
      src: '/gallery/image5.jpg',
      alt: 'Gallery Image 5',
      title: 'Leadership Program',
      description: 'Building networks and collaboration'
    },
    {
      id: 6,
      src: '/gallery/image6.jpg',
      alt: 'Gallery Image 6',
      title: 'Innovation Project',
      description: 'Technology-driven solutions for social change'
    }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="image-gallery section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="gallery-intro">
          A visual journey through my initiatives, community work, and advocacy efforts.
        </p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="gallery-placeholder" style={{ display: 'none' }}>
                  <span>Image {image.id}</span>
                </div>
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="gallery-modal-image"
            />
            <div className="gallery-modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ImageGallery
