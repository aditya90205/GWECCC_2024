import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="GWECCC Logo" className="h-16 w-32" />
          
            <span className="text-sm">Global Water, Energy and Climate Change Congress</span>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p>GWECCC Secretariat</p>
            <a href="mailto:info@gweccc.com" className="text-blue-300 hover:text-blue-500">
              info@gweccc.com
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end space-x-6 mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-blue-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-300">
            <FaLinkedin size={20} />
          </a>
        </div>
        <div className="mt-6 border-t border-gray-500 pt-4 text-center text-sm">
          <p>GWECCC © 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
