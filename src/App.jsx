import { useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/Banner/Banner'
import Home from './components/Home/Home'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div>
      <div><Header/></div>
      <div><Banner/></div>
      <div><Home/></div>
      <div><Testimonials/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App
