import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Shop() {
  
  let[cats,SetCats]=useState([])

  useEffect(()=>{

    async function getCat()
    {
      let cats=await axios.get('https://dummyjson.com/products/categories')
      SetCats(cats.data);
      console.log(cats.data)
    }
    getCat()
  },[])
  

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside className='sidebar'>
        <h1 className='nav-title'>LAB3</h1>
        <Link to="">All</Link>
        {cats.map((cat) => (
          <Link to={`/shop/${cat.slug}`}>{cat.name}</Link>
        ))}
      </aside>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  )
}
