import { ArrowRight, Heart, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import graduate from "../assets/icons/graduate.png";
import globe from "../assets/icons/globe.png";

export const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="flex  sm:flex-row justify-center items-center bg-[#A8E6CF] ml-4 sm:ml-8 md:ml-12 px-4 py-6 rounded-tr-3xl">
        <img
          src={graduate}
          alt="graduate"
          className="h-20 sm:h-32 md:h-48 mb-4 sm:mb-0"
        />

        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold font-cormorant text-gray-800 tracking-wider leading-snug sm:mx-4">
          {["K", "I", "D", "S", " ", "C", "A", "R", "E"].map((letter, i) => (
            <span
              key={i}
              className={`inline-block ${
                [
                  "text-red-600",
                  "text-purple-500",
                  "text-orange-500",
                  "text-cyan-500",
                  "text-indigo-500",
                  "text-purple-500",
                  "text-orange-500",
                  "text-cyan-500",
                ][i]
              } animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {letter}
            </span>
          ))}

          <div className="h-1 w-full bg-linear-to-r from-pink-500 via-yellow-500 to-purple-500 rounded-full my-3"></div>

          <span className="text-sm sm:text-lg md:text-xl tracking-widest text-gray-700">
            PRE-SCHOOL
          </span>
        </h1>

        <img src={globe} alt="globe" className="h-12 sm:h-20 md:h-24 mt-4 sm:mt-0" />
      </div>

      {/* About Us Banner Section */}
      <div onClick={handleClick} className="flex justify-center">
        <div
          className="bg-cover bg-center text-white w-full ml-4 sm:ml-8 md:ml-12 my-8 rounded-3xl overflow-hidden"
          style={{ backgroundImage: "url(../src/assets/images/cover.png)" }}
        >
          <div className="mx-auto text-center bg-black/35 py-10 sm:py-16 px-6 sm:px-12 text-white hover:bg-black/60 transition-all">
            <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" fill="yellow" />
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" fill="red" />
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" fill="purple" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-light opacity-90">
              Where Little Learners Grow Big Dreams
            </p>

            <button className="flex items-center justify-center gap-2 bg-amber-500 px-4 sm:px-6 py-2 sm:py-3 my-5 rounded-2xl mx-auto text-sm sm:text-base font-semibold hover:bg-amber-400 transition">
              Learn more <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
