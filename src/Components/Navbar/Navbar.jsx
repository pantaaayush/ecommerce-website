import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShop } from '../ShopContext/ShopContext'
import './Navbar.css'

const Navbar = () => {
  const { cartCount } = useShop()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToProducts = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = '/#products'
    } else {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar_scrolled' : ''}`}>
      <div className="navbar_inner">
        <Link to="/" className="navbar_logo">
          Hummy<span>Couture</span>
        </Link>

        <div className="navbar_links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <a href="#products" onClick={scrollToProducts}>Collection</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/cart" className="navbar_cart" aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && <span className="navbar_cart_badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar