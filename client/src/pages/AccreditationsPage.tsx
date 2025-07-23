import React from 'react';
import { Award, Shield, Globe, CheckCircle } from 'lucide-react';

const AccreditationsPage: React.FC = () => {
  const accreditations = [
    {
      name: 'ISO 9001:2015',
      logo: '/logo 2 copy.png',
      description: 'International Organization for Standardization - Quality Management Systems',
      details: 'Demonstrates our commitment to quality management and continuous improvement in educational services.',
      category: 'Quality Management'
    },
    {
      name: 'IAO',
      logo: '/logo 1 copy.png', 
      description: 'International Accreditation Organization',
      details: 'Global recognition for excellence in healthcare education and training standards.',
      category: 'International Accreditation'
    },
    {
      name: 'LSSSDC',
      logo: '/logo 3 copy.png',
      description: 'Life Sciences Sector Skill Development Council',
      details: 'Academic partnership for degree and diploma programs in healthcare education.',
      category: 'Skill Development'
    },
    {
      name: 'CICRE',
      logo: '/logo 4 copy.jpeg',
      description: 'Council for Clinical Research & Education',
      details: 'Specialized accreditation for clinical research education and training programs.',
      category: 'Clinical Research Education'
    },
    {
      name: 'Asian International University',
      logo: '/logo 5.jpeg',
      description: 'Asian International University - Manipur',
      details: 'Government of India recognition for skill development in life sciences and healthcare sector.',
      category: 'Academic Partnership'
    }
  ];

  const benefits = [
    'Globally recognized certifications',
    'Industry-standard curriculum',
    'Quality assured training programs',
    'Enhanced career opportunities',
    'International mobility',
    'Employer confidence'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Accreditations & <span className="text-yellow-400">Recognition</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
              Our commitment to excellence is validated by prestigious national and international accreditations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="group bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/80 hover:scale-105 transition-all duration-500">
              <div className="text-center">
                {/* Logo Container */}
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={accreditation.logo} 
                    alt={accreditation.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-blue-600 transition-colors">
                  {accreditation.name}
                </h3>
                
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {accreditation.category}
                </div>
                
                <p className="text-gray-700 font-medium mb-4 font-poppins">
                  {accreditation.description}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                  {accreditation.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Benefits of Our Accredited Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                <CheckCircle className="text-blue-600 mr-3" size={20} />
                <span className="text-gray-800 font-medium font-poppins">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Join Our Accredited Programs
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Get globally recognized certifications that open doors to international career opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Explore Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsPage;