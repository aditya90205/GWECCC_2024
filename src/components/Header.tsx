// src/components/Header.tsx
import React from "react";
import logo from "../assets/images/logo.png";
import partner1 from "../assets/images/partner.png";
import partner2 from "../assets/images/partner3.png";

// const Header: React.FC = () => {
//   return (
//     <header className="flex justify-evenly items-center p-5 bg-blue-200 text-white">
//       <img src={logo} alt="GWECCC Logo" className="h-24" />
//       <div className="flex items-center">
//         <img src={partner1} alt="Partner Logo" className="h-40" />
//         <img src={partner2} alt="Partner Logo" className="h-28" />
//       </div>
//       <nav className="space-x-4 text-lg lg:text-xl text-black ">
//         <a href="#about" className="hover:underline hover:text-blue-800">
//           About
//         </a>
//         <a href="#schedule" className="hover:underline hover:text-blue-800">
//           Schedule
//         </a>
//         <a href="#register" className="hover:underline hover:text-blue-800">
//           Register
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC= () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between lg:justify-evenly p-4">
        {/* Logo and Banner */}
         <div>

          <img
            src={logo}
            alt="GWECCC Logo"
            className="h-24 lg:ml-12 ml-0 "
          />
         </div>
          
        

        {/* Desktop Menu */}
        <div>

        <nav className="hidden lg:flex space-x-8">
          <a href="#about" className="text-blue-700 hover:text-blue-900">About</a>
          <a href="#committees" className="text-blue-700 hover:text-blue-900">Committees</a>
          <a href="#exhibition" className="text-blue-700 hover:text-blue-900">Exhibition</a>
          <a href="#partners" className="text-blue-700 hover:text-blue-900">Partners</a>
          <a href="#contact" className="text-blue-700 hover:text-blue-900">Contact Us</a>
          <a href="#register" className="text-blue-700 hover:text-blue-900">Register Now</a>
          <a href="#gallery" className="text-blue-700 hover:text-blue-900">Gallery</a>
        </nav>
        </div>

        {/* Host and Partnership Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="text-center">
            <p className="text-xs font-bold">Exclusive Host</p>
            <img src={partner1} alt="Bahrain Ministry" className="h-20" />
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div className="text-center">
            <p className="text-xs font-bold">In Partnership With</p>
            <img src={partner2} alt="UN Environment" className="h-20" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-blue-700" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden z-10 bg-blue-200 absolute top-24 left-0 w-full transition-transform transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <a href="#about" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>About</a>
          <a href="#committees" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Committees</a>
          <a href="#exhibition" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Exhibition</a>
          <a href="#partners" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Partners</a>
          <a href="#contact" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Contact Us</a>
          <a href="#register" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Register Now</a>
          <a href="#gallery" className="text-blue-700 hover:text-blue-900" onClick={toggleNav}>Gallery</a>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <p className="text-xs font-bold">Exclusive Host</p>
            <img src={partner1} alt="Bahrain Ministry" className="h-20" />
            <div className="border-t border-gray-300 w-full"></div>
            <p className="text-xs font-bold">In Partnership With</p>
            <img src={partner2} alt="UN Environment" className="h-20" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

