import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Hero from '../../Components/Hero/Hero'
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter'
import ProductList from '../../Components/ProductList/ProductList'

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl)

  useEffect(() => {
    setActiveCategory(categoryFromUrl)
  }, [categoryFromUrl])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div>
      <Hero />
      <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
      <ProductList category={activeCategory} />
    </div>
  )
}

export default Homepage