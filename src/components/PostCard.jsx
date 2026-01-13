import { useState, useEffect } from 'react'
import './PostCard.css'

const PostCard = ({ postUrl, title, excerpt, thumbnail }) => {
  const [embedHtml, setEmbedHtml] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (postUrl) {
      fetchLinkedInEmbed(postUrl)
    } else {
      setLoading(false)
    }
  }, [postUrl])

  const fetchLinkedInEmbed = async (url) => {
    try {
      // LinkedIn oEmbed endpoint
      const oembedUrl = `https://www.linkedin.com/embed/feed/update/${extractPostId(url)}`
      // Note: LinkedIn oEmbed requires server-side proxy due to CORS
      // For now, we'll use a manual preview approach
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const extractPostId = (url) => {
    // Extract post ID from LinkedIn URL
    const match = url.match(/activity-(\d+)/)
    return match ? match[1] : null
  }

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

  return (
    <div className="post-card">
      {thumbnail && (
        <div className="post-thumbnail">
          <img src={thumbnail} alt={title || 'LinkedIn Post'} />
        </div>
      )}
      <div className="post-content">
        <div className="post-header">
          <div className="post-logo">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="post-meta">
            <span className="post-platform">LinkedIn</span>
            {title && <span className="post-date">Recent Post</span>}
          </div>
        </div>
        {title && <h3 className="post-title">{title}</h3>}
        {excerpt && <p className="post-excerpt">{excerpt}</p>}
        <a 
          href={postUrl || '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="post-link"
        >
          Read Full Post on LinkedIn →
        </a>
      </div>
    </div>
  )
}

export default PostCard
