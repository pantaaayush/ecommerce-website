import React from 'react'
import { categories } from '../../data'
import './CategoryFilter.css'

const CategoryFilter = ({ active, onChange }) => {
  return (
    <div className="category_filter">
      <div className="category_filter_inner">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`category_bubble ${active === cat.id ? 'active' : ''}`}
          >
            <div className="category_bubble_img">
              <img src={cat.image} alt={cat.label} />
            </div>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter