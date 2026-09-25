import React from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../ShopContext/ShopContext'
import './Cart.css'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useShop()

  if (cartItems.length === 0) {
    return (
      <div className="cart_empty">
        <h2>Your cart is empty 🛒</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="cart_shop_btn">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h1 className="cart_title">Your Cart ({cartCount})</h1>

      <div className="cart_layout">
        {/* Items list */}
        <div className="cart_items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart_item">
              <img src={item.image} alt={item.title} className="cart_item_img" />

              <div className="cart_item_info">
                <h3>{item.title}</h3>
                <p className="cart_item_price">${item.price}</p>
              </div>

              <div className="cart_item_qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <div className="cart_item_total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="cart_item_remove"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart_summary">
          <h2>Order Summary</h2>

          <div className="cart_summary_row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cart_summary_row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cart_summary_row cart_summary_total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="cart_checkout_btn">
            Proceed to Checkout
          </Link>

          <Link to="/" className="cart_continue_btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart