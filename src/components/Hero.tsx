import React from 'react';
import { ArrowRight, Calendar, Award, Users, BookOpen, Heart, Star, Sparkles, Stethoscope, Activity, Brain, Microscope, Pill, Shield, Zap, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Large Healthcare Professional Banner Background */}
      <div className="absolute inset-0">
        {/* Main large banner image with overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Healthcare Professionals Team" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
        </div>

        {/* Secondary banner images for depth */}
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-15">
          <img 
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop" 
            alt="Healthcare Professional" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90"></div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full opacity-15">
          <img 
            src="https://images.pexels.com/photos/4173277/pexels-photo-4173277.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop" 
            alt="Healthcare Professional" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/90"></div>
        </div>

        {/* Bottom banner strip */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 opacity-10">
          <img 
            src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
            alt="Healthcare Team" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/80"></div>
        </div>
      </div>

      {/* Enhanced Moving Background with Higher Opacity */}
      <div className="absolute inset-0">
        {/* Large moving gradient orbs - More visible */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-300/30 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/25 to-indigo-200/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
        
        {/* Additional moving background elements - More visible */}
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-r from-indigo-300/25 to-purple-300/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating Healthcare Icons with Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Row 1 - Top floating icons - More visible */}
        <Stethoscope className="absolute top-1/6 left-1/12 text-blue-500 opacity-40 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Activity className="absolute top-1/5 left-1/4 text-green-500 opacity-50 animate-bounce" size={28} style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <Brain className="absolute top-1/4 left-1/2 text-purple-500 opacity-45 animate-bounce" size={30} style={{ animationDelay: '1s', animationDuration: '4.2s' }} />
        <Microscope className="absolute top-1/6 right-1/4 text-indigo-500 opacity-50 animate-bounce" size={34} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
        <Shield className="absolute top-1/5 right-1/12 text-blue-600 opacity-45 animate-bounce" size={29} style={{ animationDelay: '2s', animationDuration: '4.5s' }} />
        
        {/* Row 2 - Middle floating icons - More visible */}
        <Pill className="absolute top-2/5 left-1/8 text-red-500 opacity-40 animate-bounce" size={26} style={{ animationDelay: '0.8s', animationDuration: '3.2s' }} />
        <Database className="absolute top-1/2 left-1/3 text-cyan-500 opacity-50 animate-bounce" size={28} style={{ animationDelay: '1.2s', animationDuration: '4.8s' }} />
        <Zap className="absolute top-2/5 right-1/3 text-yellow-500 opacity-45 animate-bounce" size={32} style={{ animationDelay: '1.8s', animationDuration: '3.6s' }} />
        <BookOpen className="absolute top-1/2 right-1/8 text-blue-500 opacity-50 animate-bounce" size={30} style={{ animationDelay: '2.2s', animationDuration: '4.1s' }} />
        
        {/* Row 3 - Bottom floating icons - More visible */}
        <Heart className="absolute bottom-1/4 left-1/6 text-pink-500 opacity-45 animate-bounce" size={28} style={{ animationDelay: '0.3s', animationDuration: '3.7s' }} />
        <Star className="absolute bottom-1/3 left-1/2 text-yellow-500 opacity-50 animate-bounce" size={26} style={{ animationDelay: '0.7s', animationDuration: '4.3s' }} />
        <Sparkles className="absolute bottom-1/5 right-1/4 text-purple-500 opacity-40 animate-bounce" size={32} style={{ animationDelay: '1.1s', animationDuration: '3.9s' }} />
        <Award className="absolute bottom-2/5 right-1/6 text-indigo-500 opacity-45 animate-bounce" size={28} style={{ animationDelay: '1.6s', animationDuration: '4.4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/40 backdrop-blur-md border border-white/30 text-blue-700 rounded-full text-sm font-medium shadow-lg animate-pulse">
                <Award className="mr-2" size={16} />
                #1 Healthcare Training Institute
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn, Advance,
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Accelerate Your Career
                </span>
                <span className="block text-2xl md:text-4xl group cursor-pointer font-poppins">
                  With 
                  <span className="relative inline-block ml-2 underline-hover-continuous font-bold cliniglobal-brand font-poppins">
                    <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium font-poppins">
                Step into the Future of Healthcare with New-Age Programs like Clinical Research, Medical Coding, 
                Clinical SAS, Bioinformatics, AI & ML in Healthcare, MBA in Healthcare, and more – designed to 
                equip you for tomorrow's medical and healthcare landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600/95 to-indigo-600/95 backdrop-blur-md border border-white/30 text-white rounded-full hover:from-blue-700/95 hover:to-indigo-700/95 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins">
                <span className="font-medium text-sm md:text-base">Explore Courses</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white/30 backdrop-blur-md border border-blue-600/40 text-blue-700 rounded-full hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium font-poppins text-sm md:text-base">
                <Calendar className="mr-2" size={20} />
                Schedule Free Counselling
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 font-poppins">5000+</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Students Trained</div>
              </div>
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 font-poppins">95%</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Placement Rate</div>
              </div>
              <div className="text-center p-4 bg-white/30 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 font-poppins">50+</div>
                <div className="text-xs md:text-sm text-gray-700 font-medium font-poppins">Industry Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Visual with Healthcare Video */}
          <div className="relative">
            <div className="relative bg-white/40 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-blue-100/80 to-indigo-100/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-indigo-600/15"></div>
                
                {/* Healthcare Video Background */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-70"
                    poster="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  >
                    <source src="https://videos.pexels.com/video-files/6823568/6823568-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/6823568/6823568-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/4098878/4098878-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    {/* Fallback image if video doesn't load */}
                    <img 
                      src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                      alt="Healthcare Professionals" 
                      className="w-full h-full object-cover"
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
                </div>
                
                {/* Animated healthcare icons inside the video area */}
                <div className="absolute inset-0 pointer-events-none">
                  <Stethoscope className="absolute top-4 left-4 text-white opacity-80 animate-pulse drop-shadow-lg" size={24} style={{ animationDelay: '0s' }} />
                  <Activity className="absolute top-4 right-4 text-green-400 opacity-90 animate-pulse drop-shadow-lg" size={22} style={{ animationDelay: '1s' }} />
                  <Brain className="absolute bottom-4 left-4 text-purple-400 opacity-85 animate-pulse drop-shadow-lg" size={26} style={{ animationDelay: '2s' }} />
                  <Microscope className="absolute bottom-4 right-4 text-blue-400 opacity-90 animate-pulse drop-shadow-lg" size={24} style={{ animationDelay: '1.5s' }} />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Calendar className="text-blue-600 ml-1" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Schedule Free Counselling</h3>
                  <p className="text-white/90 font-medium drop-shadow-md">Get personalized career guidance from our experts</p>
                </div>
              </div>
              
              {/* Course Highlights with Healthcare Icons */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100/80 rounded-full flex items-center justify-center">
                    <BookOpen className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Advanced LMS Support</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-indigo-100/80 rounded-full flex items-center justify-center">
                    <Users className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">100% Placement Assistance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 hover:bg-white/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100/80 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Industry Recognised Accreditations and Certification</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Cards with Healthcare Theme */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/70 to-indigo-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce border border-white/30 flex items-center justify-center">
              <Stethoscope className="text-blue-600" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/70 to-blue-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce delay-1000 border border-white/30 flex items-center justify-center">
              <Activity className="text-indigo-600" size={20} />
            </div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400/70 to-pink-400/70 backdrop-blur-md rounded-full shadow-lg animate-bounce delay-2000 border border-white/30 flex items-center justify-center">
              <Brain className="text-purple-600" size={16} />
            </div>
            <div className="absolute top-1/4 -right-6 w-14 h-14 bg-gradient-to-br from-cyan-400/70 to-blue-400/70 backdrop-blur-md rounded-2xl shadow-lg animate-bounce delay-1500 border border-white/30 flex items-center justify-center">
              <Microscope className="text-cyan-600" size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;