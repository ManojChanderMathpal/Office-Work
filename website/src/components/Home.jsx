import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-screen bg-yellow-500 flex items-center justify-around gap-4">
        <div className=" max-w-[600px] flex flex-col gap-10">
            <div className=" flex flex-col gap-4">
                <h1 className="text-black font-bold text-6xl">Welcome to the <br></br><span className='text-blue-500 text-7xl font-black'>Home Page.</span> </h1>
                <p className='text-2xl text-3xl'>Explore our features and offerings.</p>
            </div>
            <div>
                <input type="text" placeholder="Your Business Email..." className='w-[300px] p-4 rounded-md border border-gray-300'></input>
                <button className='ml-4 bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600  cursor-pointer'>Get Started</button>
            </div>
        </div>
        <div className=" max-w-[600px] flex flex-col gap-10 relative">
            <div className=' bg-white  min-h-[360px] min-w-[300px] flex flex-col  p-3 gap-2 rounded-[13px] justify-between'>
                <div className='flex flex-row gap-4 items-center mb-4 '>
                <div >
                <img className='w-10 h-10 object-cover rounded-md' src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Sample" />
                </div>
                
                <div>
                <h2 className='font-bold'>Heading</h2>
                <p className='text-[12px]'>Description</p>
                </div>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-md'>
                    <p className='text-[12px]'>Invoice</p>
                    <h2 className='font-bold text-5xl'>$100000</h2>
                    <p className='text-[12px]'>Description</p>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[13px] gap-2 flex items-center'>
                    <input type="radio" id="blue" name="color" value="blue" checked />
                    <label for="blue">Credit Card</label>
                </div>

                 <div className='border-2 border-gray-200 p-2 rounded-[13px] gap-2 flex items-center'>
                    <input type="radio" id="blue" name="color" value="blue" checked />
                    <label for="blue">Bank Account</label>
                </div>

                <div>
                    <button className='bg-green-400 rounded-[13px] px-6 py-2 cursor-pointer text-white font-bold w-full'>Pay</button>
                </div>
            </div>
            <div className='absolute top-[-40px] right-[-60px] w-[180px]'>
                <div className='bg-blue-500 min-h-[70px] p-3 rounded-t-[13px] text-white '>
                    <p>Credit Card</p>
                    <h3>234 **** ****</h3>
                </div>
                <div className='flex flex-row bg-green-400 justify-between p-3 text-white rounded-b-[13px] items-center'>
                    <h3 className='font-bold text-2xl'> Visa </h3>
                    <img className='w-10 h-7 ' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa Logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home