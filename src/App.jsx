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
      <div><Header/></div>
      <div><Banner/></div>
      <div><Product/></div>
      <div><Testimonials/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App
