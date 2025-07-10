import { useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/Banner/Banner'
import Product from './components/Featured_product/Product'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div>
      <Header/>
      <Banner/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
