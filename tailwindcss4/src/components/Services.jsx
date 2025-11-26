import React from 'react'
import Button from './Button'

const Services = () => {
    const service =[{name: "Web Design" , price:"$500"},
                    {name:"App Development", price:"$1000" },
                    {name:"UI/UX Design",price:"500" }
                   ]
  return (
    <div className='flex justify-center items-center flex-col gap-12 py-10 bg-gray-900 min-h-screen'>
        <h1 className='text-white font-bold text-4xl sm:text-5xl'>My Services</h1>
        
        {/* Container: Column on mobile, Row (and wrap) on small screens (640px) and up */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-stretch p-4'> 
            {
                service.map((m1, index) => (
                    // Item Card: Full width on mobile, 1/3 width on large screens (for a 3-column layout)
                    <div 
                        className="bg-amber-300 p-8 w-full sm:w-[calc(50%-10px)] lg:w-[300px] xl:w-[370px] rounded-2xl flex flex-col items-center justify-between" 
                        key={index}
                    >
                        <div className='flex flex-col items-center text-xl font-semibold mb-6 gap-2' >
                            <h1>{m1.name}</h1>
                            <p>{m1.price}</p>
                        </div>
                        <Button label="Talk Now" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services
