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
    <div>
      <div className="flex justify-center items-center bg-amber-300 ml-12">
        <img src={graduate} alt="" className="h-48" />
        <h1 className="text-center text-6xl font-extrabold font-cormorant text-gray-800 tracking-wider">
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

          <span className="text-xl tracking-widest text-gray-700">
            PRE-SCHOOL
          </span>
        </h1>

        <img src={globe} alt="" className="h-24" />
      </div>

      <div onClick={() => handleClick()} className="flex justify-center">
        <div
          className="bg-cover text-white w-full ml-12 my-8"
          style={{ backgroundImage: "url(../src/assets/images/cover.png)" }}
        >
          <div className=" mx-auto text-center bg-black/35 py-15 px-12 text-white hover:bg-black/60">
            <div className="flex justify-center gap-3 mb-6 ">
              <Star className="w-10 h-10 animate-pulse" fill="yellow" />
              <Heart className="w-10 h-10 animate-pulse" fill="red" />
              <Star className="w-10 h-10 animate-pulse" fill="purple" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Where Little Learners Grow Big Dreams
            </p>
            <button className="flex gap-2 bg-amber-500 p-4 my-5 rounded-2xl mx-auto">
              learn more <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
