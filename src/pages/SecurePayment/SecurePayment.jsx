import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPayment, MdLock, MdVerifiedUser } from 'react-icons/md'
import { FaShieldAlt, FaCreditCard, FaUserShield } from 'react-icons/fa'
import '../Feature.css'

const SecurePayment = () => {
  const features = [
    { icon: <MdLock />, title: 'SSL Encrypted', text: '256-bit encryption on every transaction.' },
    { icon: <FaCreditCard />, title: 'Multiple Methods', text: 'Visa, Mastercard, PayPal, and more.' },
    { icon: <MdVerifiedUser />, title: 'PCI Compliant', text: 'Certified to the highest industry standard.' },
    { icon: <FaUserShield />, title: 'No Data Stored', text: 'We never save your card details.' },
  ]

  const badges = [
    { icon: <FaShieldAlt />, label: 'SSL Secured' },
    { icon: <MdVerifiedUser />, label: 'PCI DSS' },
    { icon: <MdLock />, label: '3D Secure' },
    { icon: <FaCreditCard />, label: 'Card Verified' },
  ]

  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvv: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    let value = e.target.value
    if (e.target.name === 'card') value = value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ')
    if (e.target.name === 'expiry') value = value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(?=\d)/, '$1/')
    if (e.target.name === 'cvv') value = value.replace(/\D/g, '').slice(0, 4)
    setForm({ ...form, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="feature_page">
      <div className="feature_hero">
        <div className="feature_hero_icon"><MdPayment /></div>
        <h1>Secure Payment</h1>
        <p>Your money and data are protected at every step.</p>
      </div>

      <div className="feature_grid">
        {features.map((f) => (
          <div key={f.title} className="feature_card">
            <div className="feature_card_icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      <div className="feature_badges">
        <h2>Trusted by industry standards</h2>
        <div className="badges_row">
          {badges.map((b) => (
            <div key={b.label} className="badge">
              <div className="badge_icon">{b.icon}</div>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="feature_form_section">
        <h2>Card details</h2>
        <p className="feature_form_sub">Try it out — no real payment is processed.</p>

        {submitted ? (
          <div className="form_success">
            <div className="form_success_icon">✓</div>
            <h3>Payment method verified</h3>
            <p>Card ending in {form.card.slice(-4)} has been securely stored (demo only).</p>
            <button onClick={() => { setSubmitted(false); setForm({ name: '', card: '', expiry: '', cvv: '' }) }} className="feature_btn">Try again</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feature_form">
            <input name="name" placeholder="Cardholder name" value={form.name} onChange={handleChange} required />
            <input name="card" placeholder="Card number (e.g. 4242 4242 4242 4242)" value={form.card} onChange={handleChange} required />
            <div className="form_row">
              <input name="expiry" placeholder="MM/YY" value={form.expiry} onChange={handleChange} required />
              <input name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} required />
            </div>
            <button type="submit" className="feature_btn">
              <MdLock style={{ marginRight: 8, verticalAlign: 'middle' }} /> Verify Card
            </button>
          </form>
        )}
      </div>

      <div className="feature_cta">
        <Link to="/" className="feature_btn">Shop with Confidence</Link>
      </div>
    </div>
  )
}

export default SecurePayment
