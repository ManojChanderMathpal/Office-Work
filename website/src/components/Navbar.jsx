 import React from 'react'
 import logo from '../assets/logo.jpg'
 const Navbar = () => {
   return (
    
        <nav className="w-full bg-white flex justify-between items-center pr-20 pl-20">   
            <div className="flex items-center gap-20">
           <div>
                <img className="w-32 h-auto" src={logo} alt="Logo" />
           </div>
           <div>
               <ul className="flex space-x-6">
                   <li className="text-gray-700 hover:text-blue-900 hover:font-bold cursor-pointer">Home</li>
                   <li className="text-gray-700 hover:text-blue-900 hover:font-bold cursor-pointer">About</li>
                    <li className="text-gray-700 hover:text-blue-900 hover:font-bold cursor-pointer">Services</li>
                    <li className="text-gray-700 hover:text-blue-900 hover:font-bold cursor-pointer ">Contact</li>
                </ul>
            </div>
            </div>
            <div>
                <button className="mr-4 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">Login</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Sign Up</button>
            </div>
           
         </nav>
    
   )
 }
 
 export default Navbar