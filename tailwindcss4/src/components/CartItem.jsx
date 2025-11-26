import React from 'react'
import { usedCounter } from './CartContext'
const CartItem = () => {
    const {counter,setcounter}=usedCounter();
  return (
    <div>CartItem
        <h1>Count: {counter}</h1>
        <button onClick={()=>setcounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default CartItem