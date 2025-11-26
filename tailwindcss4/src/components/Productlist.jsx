import React, { use } from 'react'
import {usedCounter } from './CartContext';
const productlist = () => {

const { counter, setcounter, darkmode, setdarkmode } = usedCounter();
  return (
    <div>
       <h1>Count: {counter}</h1>
             <button 
        className= {darkmode ? "bg-amber-300 px-4 py-2 text-blue-700" : "bg-gray-800 text-white px-4 py-2" } 
        onClick={() => setdarkmode(!darkmode)}
      >
        Dark Mode: {darkmode ? "ON" : "OFF"}
      </button> 
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default productlist