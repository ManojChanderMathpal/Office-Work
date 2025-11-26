import React from 'react'
import Button from './Button'

const Carditem = ({ name, img, money, location, categorie, level, company, day }) => {
  return (
    <div className='border-2 border-gray-200 p-6 rounded-lg w-full h-full flex flex-col justify-between shadow-lg'>
      
      <img className='w-10 h-10 rounded-3xl' src={img} alt="company logo" />

      <div className='mb-7'>
        <div className='flex flex-row gap-4 items-center'>
          <h3 className='text-[20px] font-bold'>{company}</h3> 
          <p className='text-gray-500 text-[12px]'>{day}</p>
        </div>

        <h1 className='font-black text-2xl'>{name}</h1>

        <div className='flex flex-row gap-4 mt-4'>
          <Button className="bg-gray-300" value={categorie} />
          <Button className="bg-gray-300" value={level} />
        </div>
      </div>

      <div className='flex flex-row justify-between border-t-2 border-gray-200 pt-4'>
        <div>
          <h2 className='text-xl font-semibold'>{money}</h2>
          <p>{location}</p>
        </div>
        <button className='p-2 bg-black text-white rounded-lg'>Apply Now</button>
      </div>
                
    </div>
  )
}

export default Carditem
