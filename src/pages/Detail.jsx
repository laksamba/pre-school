import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Detail = () => {
  return (
      <section id=''>
        <div className="flex justify-between items-center ml-12 py-4 bg-amber-300  px-4 mb-4">
          <h1 className="text-4xl text-left font-bold  tracking-widest  py-8  ">
            Smart and clever Kids <br /> ready to <span className="text-purple-950"> Fly high</span>!
          </h1>
          <p className="text-center text-sm  text-gray-900 font-sans p-4 ">
            Let us be partners in your child’s early journey of discovery <br />{" "}
            fun, and learning.
          </p>
          
            <button className=" bg-white font-sans flex gap-2 text-black px-5 py-2 rounded-bl-3xl rounded-tr-3xl shadow-sm border-gray-black border-2 font-semibold transition">
              <p>Enroll Now</p> <ArrowUpRight />
            </button>
        </div>

        {/* cards */}
        <div className=" flex justify-between ml-12 pb-4">
          <div
            className="w-[450px] h-96   shadow-lg bg-cover  bg-center flex items-end justify-center text-white border-8 border-green-400  hover:border-green-600 rounded-bl-4xl  rounded-tr-4xl "
            style={{ backgroundImage: "url('../src/assets/images/skill.png')" }}
          >
            <h1 className="text-green-700 bg-green-300/60 p-2 font-bold text-xl ">life skill for Kids</h1>
          </div>
           <div
            className="w-[450px] h-96   shadow-lg bg-cover  bg-center flex items-end justify-center text-white border-8 border-purple-500  hover:border-purple-700 rounded-bl-4xl  rounded-tr-4xl "
            style={{ backgroundImage: "url('../src/assets/images/imagination.png')" }}
          >
            <h1 className="text-purple-700 bg-purple-400/60 p-2 font-bold text-xl ">imagination is power</h1>
          </div>
           <div
            className="w-[450px] h-96   shadow-lg bg-cover  bg-center flex items-end justify-center text-white border-8 border-blue-400  hover:border-blue-600 rounded-tl-4xl  rounded-br-4xl "
            style={{ backgroundImage: "url('../src/assets/images/function.png')" }}
          >
            <h1 className="text-blue-700 bg-blue-400/60 p-2 font-bold text-xl ">grow your own wings</h1>
          </div>
        </div>
      </section>
  )
}

export default Detail