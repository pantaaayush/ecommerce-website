import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../../data'
import './ProductList.css'

const ProductList = ({ category = 'all' }) => {
  const filtered =
    category === 'all'
      ? productsData
      : productsData.filter((p) => p.category === category)

  return (
    <section className="product_list_section" id="products">
      <div className="product_list_header">
        <h2>{category === 'all' ? 'Our Collection' : `${category} Collection`}</h2>
        <p>
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'} found
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="product_empty">
          <p>No products in this category yet.</p>
        </div>
      ) : (
        <div className="product_grid">
          {filtered.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product_card"
            >
              <div className="product_card_image">
                <img src={product.image} alt={product.title} loading="lazy" />
                <span className="product_card_badge">New</span>
              </div>
              <div className="product_card_body">
                <h3>{product.title}</h3>
                <p className="product_card_price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList