import React from 'react'

export default function ProductInfo({pro=[],delete_fun}) {
    
  return (
    <>
        <h1>LAB2</h1>
      {pro.map(({ id, name, category, price, stock }) => (
        <div className='logo2' style={{ border: "1px solid white", margin: "10px", padding: "10px" }}>
          <h5>Name: {name}</h5>
          <h5>Category: {category}</h5>
          <h5>Price: ${price}</h5>
          <h5>{stock} in Stock</h5>
          <button onClick={() => delete_fun(id)}>Delete</button>
        </div>
      ))}
    </>
  )
}
