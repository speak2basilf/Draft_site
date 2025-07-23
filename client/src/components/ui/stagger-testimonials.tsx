"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Clini Global completely transformed my career. The CRM training approach and industry connections helped me secure a position at Pfizer within 2 months of course completion.",
    by: "Anita Desai, Clinical Research Manager at Pfizer India",
    imgSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "The comprehensive Clinical SAS curriculum and hands-on training gave me the confidence to excel in statistical programming. Got a 250% salary hike at Novartis.",
    by: "Vikram Singh, Clinical SAS Programmer at Novartis",
    imgSrc: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "From a complete beginner to working at J&J - this journey was made possible by Clini Global. The Bioinformatics program and expert mentorship made all the difference.",
    by: "Priyanka Sharma, Bioinformatics Specialist at Johnson & Johnson",
    imgSrc: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "The AI & ML in Healthcare program at Clini Global is unmatched. The real-world projects and case studies prepared me perfectly for my role at Roche.",
    by: "Rajesh Kumar, AI & ML Healthcare Specialist at Roche",
    imgSrc: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "The MBA in Healthcare Management program provided excellent technical training and leadership skills development. Secured a management role at GSK.",
    by: "Meera Patel, Healthcare Operations Manager at GSK",
    imgSrc: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "The SAS programming and biostatistics course was incredibly comprehensive. The hands-on approach with real clinical data sets gave me practical experience.",
    by: "Arjun Reddy, Biostatistician at AstraZeneca",
    imgSrc: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Clini Global's placement support is exceptional. They worked tirelessly to help me land my dream job with 100% placement assistance.",
    by: "Kavya Nair, Clinical Data Manager at Merck",
    imgSrc: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "The faculty support and industry-relevant curriculum at Clini Global is outstanding. Best investment in my healthcare career!",
    by: "Amit Gupta, Regulatory Affairs Specialist at Cipla",
    imgSrc: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 8,
    testimonial: "The comprehensive training and real-world projects prepared me for the healthcare industry. Highly recommend Clini Global!",
    by: "Deepika Rao, Clinical Research Associate at Dr. Reddy's",
    imgSrc: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 9,
    testimonial: "I switched careers 2 years ago with Clini Global's help and never looked back. The support system is incredible.",
    by: "Rohit Sharma, Pharmacovigilance Specialist at Sun Pharma",
    imgSrc: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for quality healthcare training for years. So glad I finally found Clini Global - they deliver on their promises!",
    by: "Neha Agarwal, Medical Writing Specialist at Lupin",
    imgSrc: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 11,
    testimonial: "The training is so comprehensive and practical, our entire team got up to speed quickly. Excellent industry-focused curriculum.",
    by: "Sanjay Patel, Clinical Operations Manager at Biocon",
    imgSrc: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 12,
    testimonial: "Clini Global's career guidance and placement support is unparalleled. They're always there when students need them most.",
    by: "Pooja Mehta, Quality Assurance Manager at Cadila Healthcare",
    imgSrc: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains and career growth I've seen since completing my course at Clini Global are off the charts!",
    by: "Ravi Kumar, Clinical Trial Manager at Glenmark",
    imgSrc: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 14,
    testimonial: "Clini Global has revolutionized how I approach healthcare research. The training is truly a game-changer!",
    by: "Shruti Jain, Biostatistics Analyst at Wockhardt",
    imgSrc: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 15,
    testimonial: "The scalability of knowledge and skills I gained at Clini Global grows with my career seamlessly. Excellent long-term value.",
    by: "Manish Agrawal, Regulatory Manager at Torrent Pharma",
    imgSrc: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how Clini Global continually updates their curriculum. They're always one step ahead of industry trends.",
    by: "Priya Krishnan, Clinical Data Scientist at Aurobindo Pharma",
    imgSrc: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 17,
    testimonial: "The ROI I've seen with Clini Global's training is incredible. It's paid for itself many times over in career advancement.",
    by: "Arun Verma, Business Development Manager at Alkem Labs",
    imgSrc: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 18,
    testimonial: "Clini Global's platform is so robust, yet easy to understand. It's the perfect balance of depth and accessibility.",
    by: "Lakshmi Iyer, Clinical Research Coordinator at Mankind Pharma",
    imgSrc: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    tempId: 19,
    testimonial: "We've tried many training institutes, but Clini Global stands out in terms of reliability, quality, and placement support.",
    by: "Vikash Singh, Pharmacovigilance Manager at Zydus Cadila",
    imgSrc: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-500" 
          : "z-0 bg-white/40 backdrop-blur-lg text-gray-800 border-white/20 hover:border-blue-500/50 hover:bg-white/60"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(59, 130, 246, 0.3)" : "0px 4px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-blue-400" : "bg-gray-300"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top rounded-lg border-2 border-white/50"
        style={{
          boxShadow: "3px 3px 0px rgba(255, 255, 255, 0.3)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium leading-relaxed mb-4",
        isCenter ? "text-white" : "text-gray-800"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 text-sm italic font-medium",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50/50 via-white/30 to-blue-50/50 backdrop-blur-sm"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-2xl",
            "bg-white/40 backdrop-blur-lg border-2 border-white/20 hover:bg-blue-600 hover:text-white hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-2xl",
            "bg-white/40 backdrop-blur-lg border-2 border-white/20 hover:bg-blue-600 hover:text-white hover:scale-110",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};