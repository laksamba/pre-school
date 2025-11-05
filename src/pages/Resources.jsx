import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  HeartHandshake,
  Palette,
  ChevronDown,
} from "lucide-react";

const Resources = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Helpful Resources for Parents
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore essential guides, forms, and safety practices that support
          your child’s joyful learning at KidsCare Preschool.
        </p>
      </div>

      {/* Stacked Accordion Style */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {/* Parent Handbook */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(0)}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-full">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Parent Handbook
                </h3>
                <p className="text-gray-600 text-sm">
                  Guidelines, policies, and everything parents need to know.
                </p>
              </div>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                openIndex === 0 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 0 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-pink-100 pt-4 text-gray-700 text-sm leading-relaxed">
              <p className="mb-2">
                Our{" "}
                <span className="font-semibold text-pink-600">
                  Parent Handbook
                </span>{" "}
                explains everything from arrival times to safety rules.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Our learning philosophy and values</li>
                <li>Health, hygiene, and safety policies</li>
                <li>Daily routines and communication guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment Form */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(1)}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-full">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Enrollment Form
                </h3>
                <p className="text-gray-600 text-sm">
                  Steps and required documents to enroll your child.
                </p>
              </div>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 1 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-pink-100 pt-4 text-gray-700 text-sm leading-relaxed">
              <p className="mb-2">Enrolling your child is simple!</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Completed registration form</li>
                <li>Child’s birth certificate copy</li>
                <li>Two passport-size photos</li>
                <li>Health record or vaccination proof</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Health & Safety Tips */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(2)}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-full">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Health & Safety Tips
                </h3>
                <p className="text-gray-600 text-sm">
                  How we ensure your child’s safety and well-being.
                </p>
              </div>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 2 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-pink-100 pt-4 text-gray-700 text-sm leading-relaxed">
              <ul className="list-disc list-inside space-y-1">
                <li>Daily sanitation of classrooms</li>
                <li>Emergency medical care on-site</li>
                <li>Pick-up safety verification process</li>
                <li>Nutritious meal and allergy awareness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Activity Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(3)}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-full">
                <Palette className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Activity Calendar
                </h3>
                <p className="text-gray-600 text-sm">
                  Monthly schedule of fun activities and events.
                </p>
              </div>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-pink-500 transition-transform duration-300 ${
                openIndex === 3 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === 3 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-pink-100 pt-4 text-gray-700 text-sm leading-relaxed">
              <ul className="list-disc list-inside space-y-1">
                <li>Art & Craft Week 🎨</li>
                <li>Outdoor Fun Day 🌿</li>
                <li>Storytelling Fridays 📖</li>
                <li>Festival Celebrations 🎉</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
