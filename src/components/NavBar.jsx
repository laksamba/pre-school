import React, { useState, useEffect, useRef } from "react";  
import logo from "../assets/Logo.png";
import dropdownIcon from "../assets/icons/Dropdown.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white py-3 relative z-50">
      <div className="flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="KIDs Care" className="h-14 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link
            to="/about"
            className={`hover:text-blue-500 transition ${
              isActive("/about") ? "text-blue-500 font-bold" : ""
            }`}
          >
            About
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}> 
            <button
              onClick={toggleDropdown}
              className={`flex items-center space-x-1 hover:text-blue-500 transition ${
                isActive("/program") || isDropdownOpen
                  ? "text-blue-500 font-bold"
                  : ""
              }`}
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
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 py-2 border border-gray-100">
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Early Learning
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Primary School
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  After School
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Summer Camp
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/resource"
            className={`hover:text-blue-500 transition ${
              isActive("/resource") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Resources
          </Link>
          <Link
            to="/testimonial"
            className={`hover:text-blue-500 transition ${
              isActive("/testimonial") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Testimonial
          </Link>
          <Link
            to="/instructor"
            className={`hover:text-blue-500 transition ${
              isActive("/instructor") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Instructor
          </Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="bg-white font-sans text-black px-5 py-2 rounded-bl-3xl rounded-tr-3xl shadow-sm border border-gray-700 font-semibold transition hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-3 shadow-inner px-4 py-4 space-y-3 text-gray-700 font-medium">
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block hover:text-blue-500 ${
              isActive("/about") ? "text-blue-500 font-bold" : ""
            }`}
          >
            About
          </Link>

          {/* Dropdown inside mobile */}
          <div>
            <button
              onClick={toggleDropdown}
              className="flex justify-between w-full hover:text-blue-500"
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
              <div className="pl-4 mt-2 space-y-2">
                <Link to="#" className="block text-sm hover:text-blue-600">
                  Early Learning
                </Link>
                <Link to="#" className="block text-sm hover:text-blue-600">
                  Primary School
                </Link>
                <Link to="#" className="block text-sm hover:text-blue-600">
                  After School
                </Link>
                <Link to="#" className="block text-sm hover:text-blue-600">
                  Summer Camp
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/resource"
            onClick={closeMenu}
            className={`block hover:text-blue-500 ${
              isActive("/resource") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Resources
          </Link>
          <Link
            to="/testimonial"
            onClick={closeMenu}
            className={`block hover:text-blue-500 ${
              isActive("/testimonial") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Testimonial
          </Link>
          <Link
            to="/instructor"
            onClick={closeMenu}
            className={`block hover:text-blue-500 ${
              isActive("/instructor") ? "text-blue-500 font-bold" : ""
            }`}
          >
            Instructor
          </Link>

          <Link to={'/admission'} className="w-full bg-white font-sans text-black px-5 py-2 rounded-bl-3xl rounded-tr-3xl shadow-sm border border-gray-700 font-semibold hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      )}

      <hr className="border-amber-800 mt-2" />
    </nav>
  );
};

export default NavBar;
