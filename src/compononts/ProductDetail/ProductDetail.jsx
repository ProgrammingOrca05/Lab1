import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetail() {
    const {id}=useParams();
    let[details,SetDetails]=useState([])

    useEffect(()=>{
            async function GetDetails()
            {
                let det=await axios.get(`https://dummyjson.com/products/${id}`)
                SetDetails(det.data)
            }
            GetDetails()
    }
    ,[id])

    return (
   <div
      style={{
        border: "1px solid #24445eff",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "600px",
        background: "#050065ff",
        textAlign: "center",
      }}
    >
        <h2>LAB4</h2>
      <img
        src={details.thumbnail}
        alt={details.title}
        style={{ width: "200px", borderRadius: "8px", marginBottom: "15px" }}
      />
      <h2>{details.title}</h2>
      <h4 style={{ color: "#00ffd0ff" }}>{details.brand}</h4>
      <p>{details.description}</p>
      <p>
        <b>Price:</b> ${details.price}
      </p>
      <p>
        <b>Availability:</b> {details.availabilityStatus}
      </p>
    </div>
  )
}
