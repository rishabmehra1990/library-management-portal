import { useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/Banner/Banner'
import Testimonials from './components/testimonials/Testimonials'
import Home from './components/Home/Home';
import Product from './components/Featured_product/Product'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div>
      <div><Header/></div>
      <div><Banner/></div>
      <div><Testimonials/></div>
      <div><Product/></div>
      <div><Home/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App
