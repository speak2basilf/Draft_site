import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Heart, Star, Sparkles } from 'lucide-react';

const Courses: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: 'PG Diploma in Clinical Research',
      duration: '12 Months',
      students: '500+ Enrolled',
      rating: '4.9',
      description: 'Comprehensive training in clinical trial management, GCP guidelines, and regulatory compliance.',
      features: [
        'Live Interactive Sessions',
        'Real Project Experience',
        'Industry Certification',
        '100% Placement Support',
        'Expert Mentorship'
      ],
      popular: true
    },
    {
      title: 'Advanced Diploma in Clinical SAS',
      duration: '6 Months',
      students: '350+ Enrolled',
      rating: '4.8',
      description: 'Master SAS programming for clinical data analysis, statistical reporting, and regulatory submissions.',
      features: [
        'SAS Programming',
        'Statistical Analysis',
        'Clinical Reporting',
        'Data Validation',
        'Career Guidance'
      ]
    },
    {
      title: 'Advanced Diploma in Bioinformatics',
      duration: '6 Months',
      students: '400+ Enrolled',
      rating: '4.7',
      description: 'Learn computational biology, genomics data analysis, and bioinformatics tools for healthcare research.',
      features: [
        'Genomics Analysis',
        'Computational Biology',
        'Data Mining',
        'Molecular Modeling',
        'Job Placement'
      ]
    },
    {
      title: 'Advanced Diploma in Medical Coding',
      duration: '6 Months',
      students: '450+ Enrolled',
      rating: '4.8',
      description: 'Master medical coding systems including ICD-10, CPT, and HCPCS for healthcare documentation.',
      features: [
        'ICD-10 Coding',
        'CPT Procedures',
        'Medical Terminology',
        'Healthcare Documentation',
        'Industry Projects'
      ]
    },
    {
      title: 'PG Diploma in AI & ML Healthcare',
      duration: '12 Months',
      students: '300+ Enrolled',
      rating: '4.8',
      description: 'Expertise in artificial intelligence and machine learning applications in healthcare and medical research.',
      features: [
        'Machine Learning',
        'Healthcare AI',
        'Predictive Analytics',
        'Medical Imaging AI',
        'Industry Projects'
      ]
    },
    {
      title: 'MBA in Healthcare Management',
      duration: '24 Months',
      students: '150+ Enrolled',
      rating: '4.9',
      description: 'Comprehensive business administration program focused on healthcare industry management and leadership.',
      features: [
        'Healthcare Strategy',
        'Operations Management',
        'Financial Planning',
        'Leadership Skills',
        'Executive Placement'
      ]
    }
  ];

  const coursesPerPage = 3;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + coursesPerPage >= courses.length ? 0 : prevIndex + coursesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, courses.length - coursesPerPage) : Math.max(0, prevIndex - coursesPerPage)
    );
  };

  const getCurrentCourses = () => {
    return courses.slice(currentIndex, currentIndex + coursesPerPage);
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
        <BookOpen className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-focused programs designed to make you job-ready with hands-on training and 100% placement support
          </p>
        </div>

        {/* Course Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + coursesPerPage >= courses.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {getCurrentCourses().map((course, index) => (
              <div
                key={currentIndex + index}
                className={`group relative bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 ${
                  course.popular ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <BookOpen className="text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 group">
                    <span>Enroll Now</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * coursesPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / coursesPerPage) === i
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our career counselors to find the perfect program for your goals.
            </p>
            <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;