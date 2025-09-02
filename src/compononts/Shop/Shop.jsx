import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Shop() {
  return (
    <>
        <h1>SHOP</h1>

        <nav>
            <ul>
            <li><Link to={""}>All Products</Link></li>
            <li><Link to={"men"}>Men</Link></li>
            <li><Link to={"women"}>Women</Link></li>
            </ul>
        </nav>

        <Outlet/>
    </>
  )
}
