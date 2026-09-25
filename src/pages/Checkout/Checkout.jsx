import React, { useState } from 'react'
import { useShop } from '../../Components/ShopContext/ShopContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useShop()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', city: '', zip: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div style={{ padding: '140px 20px', textAlign: 'center' }}>
        <h1>🎉 Order Placed!</h1>
        <p>Thank you, {form.name || 'customer'}. Your order will arrive soon.</p>
        <button
          onClick={() => navigate('/')}
          style={{ marginTop: '20px', padding: '10px 24px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Back to Home
        </button>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '140px 20px', textAlign: 'center' }}>
        <h1>Your cart is empty</h1>
        <p>Add some products before checking out.</p>
        <button
          onClick={() => navigate('/')}
          style={{ marginTop: '20px', padding: '10px 24px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Shop Now
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '120px auto', padding: '20px' }}>
      <h1>Checkout</h1>

      <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', margin: '20px 0' }}>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>{item.title} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="zip" placeholder="ZIP code" value={form.zip} onChange={handleChange} required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
        <button type="submit"
          style={{ padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout