import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import teacher from '../assets/images/teacher.png'
import { Link } from "react-router-dom";


const instructors = [
  {
    name: "Ms. Emily Carter",
    role: "Preschool Teacher",
    image: teacher,
    bio: "Loves creating playful learning experiences for children aged 3–5.",
  },
  {
    name: "Mr. Daniel Kim",
    role: "Art & Creativity Instructor",
    image: teacher,
    bio: "Encourages kids to express creativity through painting, music, and crafts.",
  },
  {
    name: "Ms. Sofia Sharma",
    role: "Early Literacy Coach",
    image:teacher,
    bio: "Passionate about building strong reading and communication skills.",
  },
];

const Instructors = () => {
  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 font-cormorant mb-3">
          Our Caring Instructors
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Meet the loving, creative, and professional educators guiding your child every step of the way.
        </p>
      </div>

      {/* Instructors Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {instructors.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-300"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{teacher.name}</h3>
            <p className="text-sm text-gray-600">{teacher.role}</p>
            <p className="mt-3 text-gray-700 text-sm">{teacher.bio}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-5">
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <Mail size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Join Team Section */}
      <div className="text-center mt-16 bg-yellow-100 rounded-2xl py-10 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">Join Our Team</h2>
        <p className="text-gray-700 mb-4">
          Are you passionate about early childhood education? We’re always looking for caring educators to join us.
        </p>
          <Link
 to="https://wa.me/9779814983127?text=Hello!%20I%27m%20interested%20in%20applying%20for%20a%20teaching%20position%20at%20KidsCare%20Preschool."
                      target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-medium transition-all"
         >
                    Apply Now
                  </Link>
       
      </div>
    </section>
  );
};

export default Instructors;
