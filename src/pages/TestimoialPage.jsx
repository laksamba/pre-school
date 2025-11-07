import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coverImg from "../assets/images/parent1.png";
import functionImg from "../assets/images/function.png";
import imaginationImg from "../assets/images/imagination.png";
import skillImg from "../assets/images/skill.png";

const TestimonialPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anusha Rimal",
      child: "Emma, Age 7",
      quote:
        "Best school for my brother, caring and friendly teachers, loved your school",
      image: coverImg,
    },
    {
      name: "Michael Chen",
      child: "Liam, Age 9",
      quote:
        "The teachers are amazing! My son looks forward to every session. His reading speed has doubled in just 3 months.",
      image: functionImg,
    },
    {
      name: "Priya Sharma",
      child: "Aarav, Age 6",
      quote:
        "I love how creative the activities are. My child comes home excited to tell me what he learned. Highly recommend!",
      image: imaginationImg,
    },
    {
      name: "David & Lisa Miller",
      child: "Sophie, Age 8",
      quote:
        "As parents, we feel supported and informed. The progress reports are detailed and the staff truly cares.",
      image: skillImg,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-wide">
          What Parents Say
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Real stories from families who’ve seen the difference.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-4 ml-12 h-80">
        {testimonials.map((t, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`${
                isActive ? "w-full" : "w-1/5"
              } relative overflow-hidden rounded-2xl shadow-lg cursor-pointer
                transition-all duration-700 ease-in-out transform hover:scale-[1.02]
                flex flex-col justify-center`}
              style={{
                background: isActive
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "#f3f4f6",
              }}
            >
              {!isActive ? (
                <div className="flex flex-col bg-[#E6E6FA] items-center justify-center h-full p-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <p className="text-[#333333] text-sm mt-2 font-medium">
                    {t.name}
                  </p>
                </div>
              ) : (
                <div className="px-6 py-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-semibold">{t.name}</h3>
                      <p className="text-xs opacity-90">{t.child}</p>
                    </div>
                  </div>

                  <blockquote className="text-sm italic leading-relaxed">
                    “{t.quote}”
                  </blockquote>

                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.317 9.38c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.953z" />
                      </svg>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Slider */}
      <div className="relative md:hidden px-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-full bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-base font-semibold">{t.name}</h3>
                    <p className="text-xs opacity-90">{t.child}</p>
                  </div>
                </div>

                <blockquote className="text-sm italic leading-relaxed">
                  “{t.quote}”
                </blockquote>

                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.317 9.38c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.953z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-purple-600 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;
