import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import ProductInfo from '../ProductInfo/ProductInfo';


export default function Layout() {
  return (
    <>

      <nav style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          background: "#6970ffff",
          color: "white",
          marginTop:0,
        }}>
        <div style={{ marginRight: "auto", fontWeight: "bold", fontSize: "18px" }}>
          Lab3
        </div>
        <Link to="" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          About
        </Link>
        <Link to="shop" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Shop
        </Link>
        <Link to="lab2" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Lab2
        </Link>
        <Link to="contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Contact
        </Link>
        <Link to="cart" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Cart
        </Link>
      </nav>

      <Outlet />
    </>
  );

}
