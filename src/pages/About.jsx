import { Palette, Puzzle, Rainbow, Sparkles, Users, Heart, Star, BookOpen } from "lucide-react";
import React from "react";
import image from '../assets/images/skill.png'

const About = () => {
  const coreValues = [
    {
      icon: Rainbow,
      title: 'Care & Safety',
      description:
        'We provide a secure and loving environment for every child.',
        
    },
    {
      icon: Palette,
      title: 'Creativity',
      description:
        'We inspire imagination and self-expression through art and play.',
    },
    {
      icon: Puzzle,
      title: 'Learning by Doing',
      description:
        'Our hands-on approach encourages curiosity and discovery.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description:
        "We work closely with parents to support each child's growth.",
    },
    {
      icon: Sparkles,
      title: 'Respect & Kindness',
      description: 'We teach empathy, sharing, and teamwork from day one.',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-pink-50 to-purple-50 ml-12 ">
       <div className=" rounded-3xl p-8 text-center ">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Join Our Family?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Come visit us and see why parents trust KidsCare for their children's early learning journey!
          </p>
          
        </div>
      
      <div className="bg-cover text-white w-full " style={{backgroundImage:"url(../src/assets/images/cover.png)"}}>
        <div className="  text-center bg-black/35 py-15 px-12 text-white ">
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
        </div>
      </div>

      
      <div className=" mx-auto  py-16">
        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 md:px-24 mb-16 border-4 border-yellow-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-linear-to-br from-pink-400 to-purple-500 rounded-full">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About KidsCare Preschool
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wider">
            Welcome to <span className="font-bold text-purple-600">KidsCare Preschool</span>, where early learning begins with joy,
            curiosity, and care. Located in the heart of Kathmandu, we provide a
            safe, stimulating, and nurturing environment where children discover
            the joy of learning through play and exploration. At KidsCare, we
            believe every child is unique and full of potential. Our dedicated
            teachers encourage creativity, confidence, and kindness in every
            activity — helping children grow academically, socially, and
            emotionally. Through a balance of structured learning and free play,
            we lay the foundation for a lifelong love of learning.
          </p>
        </div>

        {/* Mission and Vision */}
       <section className="container   py-16 grid md:grid-cols-2 gap-8 ">
               <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-3 bg-white/20 rounded-full">
                     <Star className="w-8 h-8" />
                   </div>
                   <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                     🎯 Our Mission
                   </span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3">Nurturing Young Minds</h3>
                 <p className="text-lg">
                   To nurture young minds through joyful, play-based learning experiences that inspire curiosity, creativity, and confidence — preparing children for future academic and personal success.
                 </p>
               </div>
       
               <div className="bg-linear-to-br from-pink-500 to-yellow-500 text-white p-8 rounded-2xl shadow-xl">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-3 bg-white/20 rounded-full">
                     <Heart className="w-8 h-8" />
                   </div>
                   <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                     👁️ Our Vision
                   </span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3">
                   Trusted Early Learning Center
                 </h3>
                 <p className="text-lg">
                   To be a trusted early learning center in Kathmandu, known for creating a warm, engaging, and innovative space where every child feels valued, confident, and ready to explore the world.
                 </p>
               </div>
             </section>

        {/* What Makes Us Special */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Makes Us Special
            </h2>
            <div className="w-42 h-2 bg-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const colors = [
                'from-pink-400 to-rose-500',
                'from-purple-400 to-indigo-500',
                'from-yellow-400 to-orange-500',
                'from-green-400 to-emerald-500',
                'from-blue-400 to-cyan-500',
              ];

              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-lg bg-linear-to-br ${colors[index]} text-white hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-white/20 backdrop-blur rounded-full">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                  
                </div>
              );
            })}
          </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default About;