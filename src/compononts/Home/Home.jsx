import { useState } from "react";

export default function Home()
{
    let[count,SetCount]=useState(0);
    let[random,SetRandom]=useState(0);
    return(
        <>
            <h1>LAB1</h1>
            <h1>HOME PAGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis?</p>
            <h2>COUNTER</h2>
            <button onClick={()=>{SetCount(count++)}}>Increament</button>
            <button onClick={()=>{SetCount(count--)}}>Decreament</button>
            <button onClick={()=>{SetRandom(count=Math.round(Math.random()*100))}}>Random</button>
            <br></br>
            <strong><span style={{display:"inline-block",margin:"20px"}}>Count: {count}</span></strong>
            <strong><span style={{display:"inline-block",margin:"20px"}}>Random: {random}</span></strong>
            <br></br>
            <button onClick={()=>{SetCount(0)}}>Reset</button>
            
        </>
    )
};

