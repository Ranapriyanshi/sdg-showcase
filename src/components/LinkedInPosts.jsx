import { useState } from 'react'
import PostCard from './PostCard'
import './LinkedInPosts.css'

/* 
  Icon Attribution:
  - Action Submit icon: Icons made by sonnycandra from www.flaticon.com
*/

const LinkedInPosts = () => {
  // To add your LinkedIn posts:
  // 1. Get the post URL from LinkedIn (share button > copy link)
  // 2. Add a new object to the posts array with:
  //    - id: unique number
  //    - url: full LinkedIn post URL
  //    - title: post title or main topic
  //    - excerpt: preview text (first 100-150 characters)
  //    - thumbnail: optional image URL (if post has an image)
  const [posts] = useState([
    {
      id: 1,
      url: 'https://www.linkedin.com/feed/update/example1',
      title: 'Gender Equality in Tech',
      excerpt: 'Sharing insights on creating inclusive workplaces and empowering women in technology. Let\'s break barriers together!',
      thumbnail: null
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/feed/update/example2',
      title: 'Education for All',
      excerpt: 'Reflecting on my experiences working with students from economically disadvantaged backgrounds and the power of education to transform lives.',
      thumbnail: null
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/feed/update/example3',
      title: 'SDG Advocacy',
      excerpt: 'How technology and innovation can drive progress towards Sustainable Development Goals. Join the conversation!',
      thumbnail: null
    }
  ])

  return (
    <section id="posts" className="linkedin-posts section">
      <div className="container">
        <h2 className="section-title">LinkedIn Posts & Advocacy</h2>
        <p className="posts-intro">
          Through my LinkedIn platform, I consistently share content related to gender equality, 
          inclusive workplaces, and women's empowerment. Here are some of my recent posts:
        </p>
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              postUrl={post.url}
              title={post.title}
              excerpt={post.excerpt}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
        <div className="posts-cta">
          <p>Want to see more? Connect with me on LinkedIn!</p>
          <a 
            href="https://www.linkedin.com/in/priyanshi-rana" 
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
