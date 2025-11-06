import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <section id="">
      {/* Top Detail Section */}
      <div className="flex flex-col md:flex-row justify-between items-center ml-4 sm:ml-8 md:ml-12 py-4 bg-[#A8E6CF] px-4 mb-6 rounded-tr-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest py-4 md:py-8 text-center md:text-left">
          Smart and clever Kids <br /> ready to{" "}
          <span className="text-yellow-500">Fly high!</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-center text-gray-900 font-sans px-2 md:px-4 leading-relaxed">
          Let us be partners in your child’s early journey of discovery, <br />
          fun, and learning.
        </p>

        <Link
          to="https://wa.me/9779814983127?text=Hello!%20I%27m%20interested%20in%20enrolling%20my%20child%20at%20KidsCare%20Preschool."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white font-sans flex items-center gap-2 text-black px-4 py-2 rounded-bl-3xl rounded-tr-3xl shadow-sm border-gray-black border-2 font-semibold text-xs sm:text-sm md:text-base transition hover:bg-yellow-100"
        >
          <p>Enroll Now</p> <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-between ml-4 sm:ml-8 md:ml-12 pb-6 gap-4 md:gap-5">
        {/* Card 1 */}
        <div
          className="w-full md:w-[360px] lg:w-[450px] h-52 sm:h-64 md:h-80 shadow-lg bg-cover bg-center flex items-end justify-center text-white border-4 md:border-8 border-green-400 hover:border-green-600 rounded-bl-3xl md:rounded-bl-4xl rounded-tr-3xl md:rounded-tr-4xl transition"
          style={{ backgroundImage: "url('../src/assets/images/skill.png')" }}
        ></div>

        {/* Card 2 */}
        <div
          className="w-full md:w-[360px] lg:w-[450px] h-52 sm:h-64 md:h-80 shadow-lg bg-cover bg-center flex items-end justify-center text-white border-4 md:border-8 border-purple-500 hover:border-purple-700 rounded-bl-3xl md:rounded-bl-4xl rounded-tr-3xl md:rounded-tr-4xl transition"
          style={{
            backgroundImage: "url('../src/assets/images/imagination.png')",
          }}
        ></div>

        {/* Card 3 */}
        <div
          className="w-full md:w-[360px] lg:w-[450px] h-52 sm:h-64 md:h-80 shadow-lg bg-cover bg-center flex items-end justify-center text-white border-4 md:border-8 border-blue-400 hover:border-blue-600 rounded-tl-3xl md:rounded-tl-4xl rounded-br-3xl md:rounded-br-4xl transition"
          style={{
            backgroundImage: "url('../src/assets/images/function.png')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Detail;
