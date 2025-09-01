import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./compononts/Home/Home"
import About from "./compononts/About/About"
import Contact from './compononts/Contact/Contact'
import Products from './compononts/Products/Products'
import ProductInfo from './compononts/ProductInfo/ProductInfo'

function App() {


  return (
    <>
    <Home/>
    <About/>
    <Contact/>
    <h4>====================================================</h4>
    <Products/>
    <ProductInfo/>
    </>
  )
}

export default App
