import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaTruck, FaLock, FaHeadset } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const categories = [
    { label: 'All Products', path: '/?category=all' },
    { label: 'Ladies', path: '/?category=ladies' },
    { label: 'Men', path: '/?category=men' },
    { label: 'Kids', path: '/?category=kids' },
  ]

  const support = [
    { label: 'Free Shipping', path: '/free-shipping' },
    { label: '24/7 Support', path: '/support' },
    { label: 'Secure Payment', path: '/secure-payment' },
    { label: 'Contact Us', path: '/support' },
  ]

  const company = [
    { label: 'About Us', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Terms of Service', path: '/' },
  ]

  const socials = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  ]

  const perks = [
    { icon: <FaTruck />, title: 'Free Shipping', text: 'On orders over $50' },
    { icon: <FaLock />, title: 'Secure Payment', text: '256-bit SSL encryption' },
    { icon: <FaHeadset />, title: '24/7 Support', text: 'Always here to help' },
  ]

  return (
    <footer className="footer">
      {/* Newsletter bar */}
      <div className="footer_newsletter">
        <div className="footer_container footer_newsletter_inner">
          <div>
            <h3>Join the Hummy Club</h3>
            <p>Early access to new drops, exclusive offers, and styling tips.</p>
          </div>
          <form className="footer_newsletter_form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer_container footer_main">
        {/* Brand */}
        <div className="footer_col footer_brand">
          <Link to="/" className="footer_logo">
            Hummy<span>Couture</span>
          </Link>
          <p className="footer_tagline">
            Timeless fashion for every moment. Carefully curated pieces
            for men, women, and kids.
          </p>
          <div className="footer_socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer_social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="footer_col">
          <h4>Shop</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.label}>
                <Link to={c.path}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="footer_col">
          <h4>Support</h4>
          <ul>
            {support.map((s) => (
              <li key={s.label}>
                <Link to={s.path}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer_col">
          <h4>Company</h4>
          <ul>
            {company.map((c) => (
              <li key={c.label}>
                <Link to={c.path}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Perks strip */}
      <div className="footer_container">
        <div className="footer_perks">
          {perks.map((p) => (
            <div key={p.title} className="footer_perk">
              <div className="footer_perk_icon">{p.icon}</div>
              <div>
                <h5>{p.title}</h5>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer_bottom">
        <div className="footer_container footer_bottom_inner">
          <p>© {new Date().getFullYear()} Hummy Couture. All rights reserved.</p>
          <p>
            Made with <span className="footer_heart">♥</span> for fashion lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer