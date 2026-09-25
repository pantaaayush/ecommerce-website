import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import FreeShipping from './pages/FreeShipping/FreeShipping'
import Support from './pages/Support/Support'
import SecurePayment from './pages/SecurePayment/SecurePayment'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/free-shipping' element={<FreeShipping />} />
          <Route path='/support' element={<Support />} />
          <Route path='/secure-payment' element={<SecurePayment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App