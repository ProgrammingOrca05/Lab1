import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function Category() {
    const {category}=useParams();
    let [products,SetProducts]=useState([])

    useEffect(()=>{
        async function GetProduct()
        {
            let product=await axios.get(`https://dummyjson.com/products/category/${category}`)
            SetProducts(product.data.products)

        }

        GetProduct()
    },[category])
    return (
    <>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <h1 style={{textAlign:"center"}}>{category}</h1>
      {products.map((pro) => (
        <div style={{border:"2px black",padding:"10%"}}>
          <Link to={`/product/${pro.id}`}>{pro.title}</Link>
        </div>
      ))}
      </div>
    </>
  )
}
