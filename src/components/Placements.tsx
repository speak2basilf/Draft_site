import React from 'react';
import { Building, TrendingUp, Users, Award, Heart, Star, Sparkles } from 'lucide-react';

const Placements: React.FC = () => {
  const companies = [
    { name: 'Pfizer', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Pfizer-Logo.png' },
    { name: 'Novartis', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Novartis-Logo.png' },
    { name: 'Johnson & Johnson', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Johnson-Johnson-Logo.png' },
    { name: 'Roche', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Roche-Logo.png' },
    { name: 'GSK', logo: 'https://1000logos.net/wp-content/uploads/2017/02/GSK-Logo.png' },
    { name: 'AstraZeneca', logo: 'https://1000logos.net/wp-content/uploads/2017/02/AstraZeneca-Logo.png' },
    { name: 'Merck', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Merck-Logo.png' },
    { name: 'Bristol Myers Squibb', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Bristol-Myers-Squibb-Logo.png' },
    { name: 'Eli Lilly', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Eli-Lilly-Logo.png' },
    { name: 'Sanofi', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Sanofi-Logo.png' },
    { name: 'Bayer', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Bayer-Logo.png' },
    { name: 'Boehringer Ingelheim', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Boehringer-Ingelheim-Logo.png' },
    { name: 'Teva', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Teva-Logo.png' },
    { name: 'Gilead Sciences', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Gilead-Sciences-Logo.png' },
    { name: 'Biogen', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Biogen-Logo.png' },
    { name: 'Amgen', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Amgen-Logo.png' },
    { name: 'Abbott', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Abbott-Logo.png' },
    { name: 'Medtronic', logo: 'https://1000logos.net/wp-content/uploads/2017/02/Medtronic-Logo.png' }
  ];

  const placementStats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Students Placed',
      color: 'blue'
    },
    {
      icon: Building,
      number: '50+',
      label: 'Partner Companies',
      color: 'indigo'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Placement Rate',
      color: 'blue'
    },
    {
      icon: Award,
      number: '₹18L',
      label: 'Highest Package',
      color: 'indigo'
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Clinical Research Manager',
      company: 'Pfizer',
      package: '₹6.5 LPA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'Clini Global transformed my career. The CRM training and placement support helped me land my dream job at Pfizer.'
    },
    {
      name: 'Rahul Patel',
      role: 'Clinical SAS Programmer',
      company: 'Novartis',
      package: '₹5.8 LPA',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The expert faculty and industry connections at Clini Global made all the difference in my career growth.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Bioinformatics Specialist',
      company: 'Johnson & Johnson',
      package: '₹4.2 LPA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'From zero healthcare knowledge to working at J&J - Clini Global made this incredible journey possible.'
    }
  ];

  return (
    <section id="placements" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Placements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with our comprehensive placement support
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/60 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-400/30 to-${stat.color}-600/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                <stat.icon className={`text-${stat.color}-600`} size={28} />
              </div>
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/50 shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{story.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{story.company}</p>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.package}
                  </div>
                </div>
                <p className="text-gray-600 text-center italic leading-relaxed">
                  "{story.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Companies with Moving Effect */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Placement Partners</h3>
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="flex animate-slide-infinite space-x-8">
                {[...companies, ...companies].map((company, index) => (
                  <div key={index} className="flex-shrink-0 w-56 h-28 flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-white/80 hover:scale-105 transition-all duration-300 shadow-lg">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mb-2"
                      onError={(e) => {
                        // Fallback to text if logo fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const textElement = target.nextElementSibling as HTMLElement;
                        if (textElement) {
                          textElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-gray-700 font-medium text-xs text-center font-poppins">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for smooth infinite scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/40 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Healthcare Career?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our next batch and get guaranteed placement support with top healthcare companies.
            </p>
            <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;