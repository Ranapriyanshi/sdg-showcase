import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">SDG Showcase</span>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#motivation" onClick={(e) => { e.preventDefault(); scrollToSection('motivation') }}>Motivation</a>
          <a href="#achievements" onClick={(e) => { e.preventDefault(); scrollToSection('achievements') }}>Goals</a>
          <a href="#posts" onClick={(e) => { e.preventDefault(); scrollToSection('posts') }}>Posts</a>
          <a href="#proof" onClick={(e) => { e.preventDefault(); scrollToSection('proof') }}>Initiatives</a>
        </nav>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
