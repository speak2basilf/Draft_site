import React from 'react';
import { Award, Target, Users, BookOpen, Heart, Star, Sparkles, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Training',
      description: 'Learn from industry professionals with 10+ years of experience in clinical research and healthcare.'
    },
    {
      icon: Users,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with tie-ups with 50+ pharmaceutical and healthcare companies.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Get globally recognized certifications that are valued by top healthcare organizations.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Our alumni have achieved 300% salary hikes and leadership positions in top companies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-1/4 left-1/6 text-pink-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
        <Star className="absolute top-3/4 right-1/5 text-yellow-400 opacity-60 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Sparkles className="absolute top-1/2 left-3/4 text-purple-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '2s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Why Choose <span className="cliniglobal-brand"><span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span></span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            We are India's leading healthcare training institute with a proven track record of transforming careers 
            and creating healthcare professionals who make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-poppins">
                Redefining Healthcare Education
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-poppins">
                At CliniGlobal, we are redefining the future of healthcare education. With a commitment to excellence, 
                we offer cutting-edge programs in Clinical Research, Pharmacovigilance, Medical Coding, Clinical SAS, 
                Bioinformatics, AI & ML in Healthcare, MBA in Healthcare, and more.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-poppins">
                Designed by industry leaders, our curriculum bridges the gap between academic knowledge and real-world 
                application. With state-of-the-art infrastructure, seasoned faculty, and robust industry partnerships, 
                CliniGlobal ensures that every student is career-ready from day one.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-poppins">
                Join us to be part of the next generation of healthcare professionals shaping tomorrow's medical breakthroughs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/60 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 font-poppins">25</div>
                <div className="text-gray-600 font-poppins text-sm md:text-base">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/60 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2 font-poppins">6+</div>
                <div className="text-gray-600 font-poppins text-sm md:text-base">Course Programs</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 font-poppins">{feature.title}</h4>
                  <p className="text-gray-600 font-poppins text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 font-poppins">5000+</div>
            <div className="text-gray-600 font-poppins text-xs md:text-base">Students Trained</div>
          </div>
          <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-4xl font-bold text-indigo-600 mb-2 font-poppins">95%</div>
            <div className="text-gray-600 font-poppins text-xs md:text-base">Placement Rate</div>
          </div>
          <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 font-poppins">50+</div>
            <div className="text-gray-600 font-poppins text-xs md:text-base">Industry Partners</div>
          </div>
          <div className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-4xl font-bold text-indigo-600 mb-2 font-poppins">300%</div>
            <div className="text-gray-600 font-poppins text-xs md:text-base">Avg Salary Hike</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;