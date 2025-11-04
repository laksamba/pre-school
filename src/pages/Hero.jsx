import React from 'react'
import { ArrowUpLeftSquareIcon, ArrowUpRight } from "lucide-react";
import Ball from "../assets/icons/ball.png";
import baloon from "../assets/icons/baloon.png";
import laptop from "../assets/icons/laptop.png";
import child1 from "../assets/icons/childlearning.png";
import child2 from "../assets/icons/childplaying.png";
import experience from "../assets/icons/experience.png";
import teacher from "../assets/icons/Teacher.png";
import fun from "../assets/icons/funlearning.png";


const Hero = () => {
  return (
   <div>
     <div>
        <div>
        <div id=''>
          {/* heading */}
          <div className="flex justify-between mx-45 pt-10 items-center pb-5">
            <img src={baloon} alt="img" className="h-16 -rotate-25" />
            
            <h1 className="text-6xl font-extrabold font-cormorant text-center text-orange-900">
              Putting your Child's Future <br /> in great motion
            </h1>
            <img src={Ball} alt="img" className="h-16 " />
          </div>

          {/* images */}
          <div className="flex items-center justify-between my-8 ">
            <div className="ml-12">
              <img src={child1} alt="" className="h-78" />
            </div>
            <div className="flex flex-col items-center gap-6 ">
              <button className="text-white flex  font-sans bg-amber-600 px-5 py-3 rounded-bl-3xl rounded-tr-3xl shadow-sm border-gray-black border-2 hover:bg-amber-500 hover:shadow-lg font-semibold transition">
                <span>Start learning</span> <ArrowUpRight />
              </button>
              <p className="text-center text-sm  text-gray-700 font-sans">
                Give your child the best start in life with a safe <br /> fun
                and nurturing environment.
              </p>
              <img src={fun} alt="" className="w-42 mb-0" />
            </div>
            <div>
              <img src={child2} alt="" className="h-78" />
            </div>
          </div>

          {/* stats */}
          <div className="flex justify-between bg-amber-950  text-white px-8 rounded-tr-full ml-12">
            <div className="flex gap-2 p-3 h-32">
              <img
                src={experience}
                alt=""
                className="h-10 rounded-full p-1 bg-yellow-400"
              />
              <div>
                <h1 className="text-3xl ">15+</h1>
                <p className="text-sm text-gray-400">
                  Years of Experience <br /> – Shaping young minds with
                  dedication and care.
                </p>
              </div>
            </div>
            <div className="border-l-2 border-white h-24 mt-2"></div>
            <div className="flex gap-2 p-3">
              <img
                src={teacher}
                alt="icon"
                className="h-10 rounded-full p-1 bg-purple-400"
              />
              <div>
                <h1 className="text-3xl ">30+</h1>
                <p className="text-sm text-gray-400">
                  Skilled Teachers <br /> – Experts in academics, arts, and
                  child development.
                </p>
              </div>
            </div>
            <div className="border-l-2 border-white h-24 mt-2"></div>
            <div className="flex gap-2 p-3">
              <img
                src={teacher}
                alt="icon"
                className="h-10 rounded-full p-1 bg-blue-400"
              />
              <div>
                <h1 className="text-3xl">50+</h1>
                <p className="text-sm text-gray-400">
                  Extracurricular Activities <br /> – Sports, arts, music, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
   </div>


  )
}

export default Hero