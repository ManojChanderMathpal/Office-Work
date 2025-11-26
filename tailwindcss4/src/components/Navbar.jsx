import React, { useState } from 'react';
// We are using 'lucide-react' for simple, common icons. You might use 'react-icons' instead.
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  // 1. STATE LOGIC: Tracks if the mobile menu is open. Default is 'false' (closed).
  const [isOpen, setIsOpen] = useState(false);

  // 2. TOGGLE FUNCTION: Reverses the current state (true becomes false, false becomes true).
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-20">
      {/* Main container: Desktop links and Mobile Icon */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4 md:px-8">
        
        {/* Logo/Title (Always visible) */}
        <div className="text-2xl font-bold tracking-wide z-30">MyPortfolio</div>

        {/* DESKTOP LINKS: Hidden on small screens, flex on medium screens and up */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        </ul>

        {/* MOBILE HAMBURGER ICON: Visible on small screens, hidden on medium screens and up */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden z-30 text-2xl p-2 rounded-md hover:bg-gray-800 transition"
          aria-label="Toggle Menu"
        >
          {/* CONDITIONAL RENDERING: Shows X icon if menu is open, Menu icon if closed */}
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* 5. MOBILE MENU PANEL: The full-screen overlay that slides in */}
      <div 
        className={`
          md:hidden 
          fixed top-0 left-0 h-screen w-full 
          bg-gray-900/95 backdrop-blur-sm 
          transition-transform duration-300 ease-in-out
          z-20
          
          /* CONDITIONAL STYLING: key to the slide effect */
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          pt-20 
        `}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl pt-10">
          {/* Note: We call toggleMenu() on link click to close the menu after navigation */}
          <li><a onClick={toggleMenu} href="#home" className="hover:text-blue-400 transition p-2 block">Home</a></li>
          <li><a onClick={toggleMenu} href="#about" className="hover:text-blue-400 transition p-2 block">About</a></li>
          <li><a onClick={toggleMenu} href="#projects" className="hover:text-blue-400 transition p-2 block">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;