import React, { useState } from "react";
import logo from "../assets/Logo.png";
import dropdownIcon from "../assets/icons/Dropdown.png";


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-100  py-2 px-6 md:px-12">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="KIDs Care" className="h-14 md:h-20" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 hover:text-blue-500 transition"
            >
              <span>Program</span>
              <img
                src={dropdownIcon}
                alt="dropdown"
                className={`w-4 h-4 mt-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 py-2 z-50 border border-gray-100">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Early Learning
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Primary School
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  After School
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Summer Camp
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-500 transition">
            Resources
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            testimonial
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Instructor
          </a>
        </div>

        {/* Button */}
        <div>
          <button className=" bg-white font-sans text-black px-5 py-2 rounded-bl-3xl rounded-tr-3xl shadow-sm border-gray-black border-2 font-semibold transition">
            Get Started 
          </button>
        </div>
      </div>
       <hr className="border-amber-800"/>
    </nav>
  );
};

export default NavBar;
