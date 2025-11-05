import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-gray-800 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-pink-600 mb-2 font-cormorant">
            Kids<span className="text-blue-600">Care</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            A fun and caring environment where children learn, play, and grow every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-blue-600 transition">
                Our Programs
              </Link>
            </li>
            <li>
              <Link to="/instructors" className="hover:text-blue-600 transition">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-500" />
              Hiledole, Nepaltar,Tarkeshwor 11, Kathmandu, Nepal, 44620
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-green-500" />
              +977-986-4831445
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-red-500" />
              kidscarepreschool2010@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              to="https://www.facebook.com/kidscarenepal/"
              target="_blank"
              className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} KidsCare Preschool. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
