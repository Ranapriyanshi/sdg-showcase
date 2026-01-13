import { useState, useEffect } from 'react'
import { getLinkedInEmbedUrl, extractLinkedInPostId, isValidLinkedInPostUrl } from '../utils/linkedinUtils'
import './PostCard.css'

const PostCard = ({ postUrl, title, excerpt, thumbnail, badge, badgeColor = 'blue' }) => {
  const [embedUrl, setEmbedUrl] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [useEmbed, setUseEmbed] = useState(false)

  useEffect(() => {
    if (postUrl && isValidLinkedInPostUrl(postUrl)) {
      const embed = getLinkedInEmbedUrl(postUrl)
      if (embed) {
        setEmbedUrl(embed)
        setUseEmbed(true)
      }
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [postUrl])

  if (loading) {
    return (
      <div className="post-card loading">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="post-card error">
        <p>Unable to load post preview</p>
        <a href={postUrl} target="_blank" rel="noopener noreferrer" className="post-link">
          View on LinkedIn →
        </a>
      </div>
    )
  }

  // If we have a valid LinkedIn embed URL, use iframe embed
  if (useEmbed && embedUrl && !loading && !error) {
    return (
      <div className="post-card post-card-embed">
        {badge && (
          <div className={`post-badge badge-${badgeColor}`}>
            {badge}
          </div>
        )}
        <iframe
          src={embedUrl}
          height="400"
          width="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="LinkedIn Post"
          className="linkedin-embed"
        ></iframe>
        <div className="post-footer">
          <a 
            href={postUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="post-button"
          >
            View on LinkedIn
          </a>
        </div>
      </div>
    )
  }

  // Fallback to custom card if no embed or metadata provided
  return (
    <div className="post-card">
      <div className="post-content">
        {badge && (
          <div className={`post-badge badge-${badgeColor}`}>
            {badge}
          </div>
        )}
        <div className="post-header">
          <div className="post-logo">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>
        {title && <h3 className="post-title">{title}</h3>}
        {excerpt && <p className="post-excerpt">{excerpt}</p>}
        <div className="post-footer">
          <a 
            href={postUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="post-button"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostCard
