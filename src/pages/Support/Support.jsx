import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSupport, BiPhone, BiEnvelope, BiChat } from 'react-icons/bi'
import { FaClock, FaCheckCircle, FaUsers } from 'react-icons/fa'
import '../Feature.css'

const Support = () => {
  const channels = [
    { icon: <BiPhone />, title: 'Call Us', text: '+1 (800) 123-4567', sub: 'Mon–Fri, 9am–6pm' },
    { icon: <BiEnvelope />, title: 'Email', text: 'support@hummycouture.com', sub: 'Reply within 4 hours' },
    { icon: <BiChat />, title: 'Live Chat', text: 'Available 24/7', sub: 'On every page' },
  ]

  const stats = [
    { icon: <FaClock />, value: '< 5 min', label: 'Avg. response time' },
    { icon: <FaCheckCircle />, value: '98%', label: 'Issues resolved' },
    { icon: <FaUsers />, value: '24/7', label: 'Always online' },
  ]

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="feature_page">
      <div className="feature_hero">
        <div className="feature_hero_icon"><BiSupport /></div>
        <h1>24/7 Support</h1>
        <p>Real humans. Real answers. Anytime you need them.</p>
      </div>

      <div className="feature_grid feature_grid_3">
        {channels.map((c) => (
          <div key={c.title} className="feature_card">
            <div className="feature_card_icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p className="feature_card_value">{c.text}</p>
            <p className="feature_card_sub">{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="feature_stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat_icon">{s.icon}</div>
            <div className="stat_value">{s.value}</div>
            <div className="stat_label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="feature_form_section">
        <h2>Send us a message</h2>
        <p className="feature_form_sub">We'll get back to you within a few hours.</p>

        {submitted ? (
          <div className="form_success">
            <div className="form_success_icon">✓</div>
            <h3>Message sent!</h3>
            <p>Thanks {form.name}, our team will reply to {form.email} shortly.</p>
            <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="feature_btn">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feature_form">
            <div className="form_row">
              <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
            </div>
            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="How can we help?" rows="5" value={form.message} onChange={handleChange} required />
            <button type="submit" className="feature_btn">Send Message</button>
          </form>
        )}
      </div>

      <div className="feature_cta">
        <Link to="/" className="feature_btn">Back to Shop</Link>
      </div>
    </div>
  )
}

export default Support
