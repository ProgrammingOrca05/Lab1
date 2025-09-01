import React, { useState } from 'react'
import ProductInfo from '../ProductInfo/ProductInfo';

export default function Products() {
    let[pro,SetProduct]=useState([
  { id: 1, category: "Electronics", price: 499.99, name: "Smartphone", stock: 25 },
  { id: 2, category: "Electronics", price: 899.99, name: "Laptop", stock: 12 },
  { id: 3, category: "Electronics", price: 59.99, name: "Headphones", stock: 50 },
  { id: 4, category: "Electronics", price: 29.99, name: "Mouse", stock: 100 },
  { id: 5, category: "Electronics", price: 79.99, name: "Keyboard", stock: 75 },

  { id: 6, category: "Clothing", price: 19.99, name: "T-Shirt", stock: 200 },
  { id: 7, category: "Clothing", price: 39.99, name: "Jeans", stock: 80 },
  { id: 8, category: "Clothing", price: 49.99, name: "Jacket", stock: 40 },
  { id: 9, category: "Clothing", price: 14.99, name: "Socks (Pack of 5)", stock: 300 },
  { id: 10, category: "Clothing", price: 24.99, name: "Cap", stock: 120 },
])
    function DeletePro(id)
    {
        let temp = pro.filter((prod) => prod.id !== id)
        SetProduct(temp)
    }


    return (
    <>
    <ProductInfo pro={pro} delete_fun={DeletePro}/>
    </>
  )
}
