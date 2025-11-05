import React, { useState } from 'react';
import coverImg from '../assets/images/parent1.png';
import functionImg from '../assets/images/function.png';
import imaginationImg from '../assets/images/imagination.png';
import skillImg from '../assets/images/skill.png';

const TestimonialPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Anusha Rimal ',
      child: 'Emma, Age 7',
      quote:
        'Best school for my brother, caring and friendly teachers, loved your school',
      image: coverImg,
    },
    {
      name: 'Michael Chen',
      child: 'Liam, Age 9',
      quote:
        'The teachers are amazing! My son looks forward to every session. His reading speed has doubled in just 3 months.',
      image: functionImg,
    },
    {
      name: 'Priya Sharma',
      child: 'Aarav, Age 6',
      quote:
        'I love how creative the activities are. My child comes home excited to tell me what he learned. Highly recommend!',
      image: imaginationImg,
    },
    {
      name: 'David & Lisa Miller',
      child: 'Sophie, Age 8',
      quote:
        'As parents, we feel supported and informed. The progress reports are detailed and the staff truly cares.',
      image: skillImg,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12   p-2 ">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What Parents Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from families who’ve seen the difference.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 l ml-12 h-96">
        {testimonials.map((t, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                ${isActive ? 'w-full' : 'w-1/5'}
                relative overflow-hidden rounded-2xl shadow-xl cursor-pointer
                transition-all duration-700 ease-in-out transform hover:scale-[1.02]
                flex flex-col justify-center
              `}
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : '#e5e7eb',
              }}
            >
              {/* Inactive – only avatar */}
              {!isActive ? (
                <div className="flex flex-col bg-[#E6E6FA] items-center justify-center h-full p-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <p className='text-[#333333]'>{t.name}</p>
                </div>
              ) : (
                /* Active – full content */
                <div className="px-8 py-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{t.name}</h3>
                      <p className="text-sm opacity-90">{t.child}</p>
                    </div>
                  </div>

                  <blockquote className="text-lg italic leading-relaxed">
                    “{t.quote}”
                  </blockquote>

                  {/* 5-star rating */}
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
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
    </div>
  );
};

export default TestimonialPage;