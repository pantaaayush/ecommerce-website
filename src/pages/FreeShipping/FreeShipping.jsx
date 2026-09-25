import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShippingFast, FaBoxOpen, FaGlobe, FaTruck, FaClock } from 'react-icons/fa'
import '../Feature.css'

const FreeShipping = () => {
  const perks = [
    { icon: <FaTruck />, title: 'Free Delivery', text: 'On all orders over $50, no matter where you are.' },
    { icon: <FaClock />, title: 'Fast Dispatch', text: 'Orders ship within 24 hours on business days.' },
    { icon: <FaGlobe />, title: 'Worldwide', text: 'We deliver to over 40 countries across the globe.' },
    { icon: <FaBoxOpen />, title: 'Easy Returns', text: 'Not happy? Return within 30 days, free of charge.' },
  ]

  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="feature_page">
      <div className="feature_hero">
        <div className="feature_hero_icon"><FaShippingFast /></div>
        <h1>Free Shipping</h1>
        <p>Fast, free, and reliable delivery — on us.</p>
      </div>

      <div className="feature_grid">
        {perks.map((p) => (
          <div key={p.title} className="feature_card">
            <div className="feature_card_icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      <div className="feature_steps">
        <h2>How it works</h2>
        <div className="steps_row">
          <div className="step"><span>1</span><h4>Place your order</h4><p>Add items to cart and checkout.</p></div>
          <div className="step"><span>2</span><h4>We pack it</h4><p>Ships within 24 hours.</p></div>
          <div className="step"><span>3</span><h4>Track it</h4><p>Get updates by email.</p></div>
          <div className="step"><span>4</span><h4>Enjoy</h4><p>Delivered in 3–5 days.</p></div>
        </div>
      </div>

      <div className="feature_form_section">
        <h2>Where should we ship?</h2>
        <p className="feature_form_sub">Enter your delivery details and we'll calculate shipping.</p>

        {submitted ? (
          <div className="form_success">
            <div className="form_success_icon">✓</div>
            <h3>Address saved!</h3>
            <p>Thanks, {form.name}. We'll ship to {form.address}, {form.city}.</p>
            <button onClick={() => setSubmitted(false)} className="feature_btn">Edit details</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feature_form">
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
            <input name="address" placeholder="Street address" value={form.address} onChange={handleChange} required />
            <div className="form_row">
              <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
              <input name="zip" placeholder="ZIP code" value={form.zip} onChange={handleChange} required />
            </div>
            <button type="submit" className="feature_btn">Save Address</button>
          </form>
        )}
      </div>

      <div className="feature_cta">
        <Link to="/" className="feature_btn">Start Shopping</Link>
      </div>
    </div>
  )
}

export default FreeShipping
