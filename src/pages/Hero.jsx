import React from "react";
import { ArrowUpRight } from "lucide-react";
import Ball from "../assets/icons/ball.png";
import baloon from "../assets/icons/baloon.png";
import child1 from "../assets/icons/childlearning.png";
import child2 from "../assets/icons/childplaying.png";
import experience from "../assets/icons/experience.png";
import teacher from "../assets/icons/Teacher.png";
import fun from "../assets/icons/funlearning.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white w-full px-4 sm:px-8">
      <div id="">
        {/* heading */}
        <div className="flex justify-between items-center pt-6 pb-4">
          <img src={baloon} alt="img" className="h-8 sm:h-12 -rotate-25" />

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-cormorant text-center text-[#333333] leading-snug">
            Putting your Child's Future <br /> in great motion
          </h1>

          <img src={Ball} alt="img" className="h-8 sm:h-12" />
        </div>

        {/* images */}
        <div className="flex items-center justify-between my-6">
          <div className="ml-2 sm:ml-12">
            <img src={child1} alt="" className="h-32 sm:h-56" />
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-6">
            <Link to={'/admission'} className="text-white flex items-center gap-2 font-sans bg-linear-to-r from-pink-500 to-yellow-400 px-3 py-2 sm:px-5 sm:py-3 rounded-bl-2xl rounded-tr-2xl shadow-sm border-gray-black border-2 hover:bg-amber-500 hover:shadow-lg font-semibold text-xs sm:text-base transition">
              <span>Start learning</span> <ArrowUpRight size={14} />
            </Link>

            <p className="text-[10px] sm:text-sm text-gray-700 font-sans text-center leading-relaxed">
              Give your child the best start in life with a safe <br /> fun and
              nurturing environment.
            </p>

            <img src={fun} alt="" className="w-28 sm:w-40 mb-0" />
          </div>

          <div>
            <img src={child2} alt="" className="h-32 sm:h-56" />
          </div>
        </div>

        {/* stats */}
        <div className="flex justify-between bg-amber-950 text-white px-4 sm:px-8 rounded-tr-full ml-2 sm:ml-12">
          <div className="flex gap-2 p-2 sm:p-3 h-20 sm:h-32">
            <img
              src={experience}
              alt=""
              className="h-6 sm:h-10 rounded-full p-1 bg-yellow-400"
            />
            <div>
              <h1 className="text-sm sm:text-3xl">15+</h1>
              <p className="text-[8px] sm:text-sm text-gray-400">
                Years of Experience <br /> – Shaping young minds with care.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-white h-14 sm:h-24 mt-2"></div>

          <div className="flex gap-2 p-2 sm:p-3">
            <img
              src={teacher}
              alt="icon"
              className="h-6 sm:h-10 rounded-full p-1 bg-purple-400"
            />
            <div>
              <h1 className="text-sm sm:text-3xl">30+</h1>
              <p className="text-[8px] sm:text-sm text-gray-400">
                Skilled Teachers <br /> – Experts in academics and arts.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-white h-14 sm:h-24 mt-2"></div>

          <div className="flex gap-2 p-2 sm:p-3">
            <img
              src={teacher}
              alt="icon"
              className="h-6 sm:h-10 rounded-full p-1 bg-blue-400"
            />
            <div>
              <h1 className="text-sm sm:text-3xl">50+</h1>
              <p className="text-[8px] sm:text-sm text-gray-400">
                Extracurricular Activities <br /> – Sports, arts, music, more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
