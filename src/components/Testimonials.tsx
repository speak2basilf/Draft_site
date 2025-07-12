import React from 'react';
import { Star, Quote, Heart, Sparkles } from 'lucide-react';
import { TestimonialSlider } from './ui/testimonial-slider';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "CliniGlobal's Clinical Research program was a game-changer for my career. The faculty were exceptional, and the practical exposure prepared me perfectly for my role as a CRA.",
      name: "Anita Desai",
      role: "Clinical Research Manager at Pfizer India",
    },
    {
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The comprehensive Clinical SAS curriculum and hands-on training gave me the confidence to excel in statistical programming. Got a 250% salary hike at Novartis.",
      name: "Vikram Singh",
      role: "Clinical SAS Programmer at Novartis",
    },
    {
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "From a complete beginner to working at J&J - this journey was made possible by CliniGlobal. The Bioinformatics program and expert mentorship made all the difference.",
      name: "Priyanka Sharma",
      role: "Bioinformatics Specialist at Johnson & Johnson",
    },
    {
      img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The AI & ML in Healthcare program at CliniGlobal is unmatched. The real-world projects and case studies prepared me perfectly for my role at Roche.",
      name: "Rajesh Kumar",
      role: "AI & ML Healthcare Specialist at Roche",
    },
    {
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The MBA in Healthcare Management program provided excellent technical training and leadership skills development. Secured a management role at GSK.",
      name: "Meera Patel",
      role: "Healthcare Operations Manager at GSK",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 right-1/4 text-pink-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Star className="absolute bottom-32 left-1/5 text-yellow-400 opacity-50 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Sparkles className="absolute top-1/3 left-1/6 text-purple-400 opacity-40 animate-bounce" size={18} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <Quote className="absolute top-2/3 right-1/6 text-blue-400 opacity-30 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful graduates who transformed their careers with Clini Global's comprehensive training programs
          </p>
        </div>

        {/* Stagger Testimonials Component */}
        <div className="mb-16">
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Overall Rating */}
        <div className="text-center">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500 inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating from 1000+ Students</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;