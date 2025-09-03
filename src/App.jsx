import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./compononts/Home/Home"
import About from "./compononts/About/About"
import Contact from './compononts/Contact/Contact'
import Products from './compononts/Products/Products'
import ProductInfo from './compononts/ProductInfo/ProductInfo'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './compononts/Layout/Layout'
import All from './compononts/Shop/All/All'
import Woemn from './compononts/Shop/Women/Woemn'
import Men from './compononts/Shop/Men/Men'
import Shop from './compononts/Shop/Shop'
import Category from './compononts/Shop/Category'

import ProductDetail from './compononts/ProductDetail/ProductDetail'


function App() {

const router=createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"lab2",element:<Products />},
      {path:"shop",element:<Shop/>,
        children:[
          {index:true,element:<All/>},
          {path:":category",element:<Category/>},
        ]
      },
      {path:"product/:id",element:<ProductDetail/>}
    ]



  }
])

  return (
    <>
    <RouterProvider router={router}/>



    {/* <Home/>
    <About/>
    <Contact/>
    <h4>====================================================</h4>
    <Products/>
    <ProductInfo/> */}
    </>
  )
}

export default App
