import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Star, Users, Award, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-primary text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">5000+ Students</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">100% Placement</span>
              </div>
            </div>

            <h1 className="heading-primary text-white mb-6">
              Launch Your Career in{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Clinical Research
              </span>
            </h1>
            
            <p className="text-large text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join <span className="text-cyan-300 font-semibold">Clini</span><span className="text-orange-300 font-semibold">Global</span> Research Institute - India's leading clinical research training institute. Get industry-ready skills, 
              expert mentorship, and guaranteed placement support to transform your healthcare career.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/courses">
                <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center group">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">200+</div>
                <div className="text-blue-200 text-sm">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced Learning</h3>
                  <p className="text-blue-100 text-sm">Industry-focused curriculum designed for success</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🎯 100% Placement
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Top Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;