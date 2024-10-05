"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image
            src="/images/logo.jpg"
            alt="LOGO"
            width={80}
            height={40}
            className="border-none rounded-lg"
          />
        </div>

      
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        
        <nav className={`flex flex-wrap items-center text-base md:text-lg lg:text-xl justify-center space-x-8 ${isOpen ? "block" : "hidden"} md:flex`}>
          <Link
            href="/"
            className="text-teal-200 hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl md:font-semibold lg:font-bold"
            onClick={() => setIsOpen(false)} 
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-teal-200 hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl md:font-semibold lg:font-bold"
            onClick={() => setIsOpen(false)} 
          >
            About
          </Link>
          <Link
            href="/Products"
            className="text-teal-200 hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl md:font-semibold lg:font-bold"
            onClick={() => setIsOpen(false)} 
          >
            Products
          </Link>
          <Link
            href="/Contact"
            className="text-teal-200 hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl md:font-semibold lg:font-bold"
            onClick={() => setIsOpen(false)} 
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
