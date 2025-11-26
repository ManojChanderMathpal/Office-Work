import React from 'react'


const Button = ({value ,className}) => {
  return (
    <>
        <button className={`p-2 text-black  rounded-lg ${className}`}>{value}</button>
    </>
  )
}

export default Button