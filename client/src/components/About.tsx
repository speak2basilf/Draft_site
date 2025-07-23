import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About CliniGlobal Research Institute
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            India's premier clinical research training institute with over 5000+ successful placements in top pharmaceutical and healthcare companies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">5K+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Students Placed</h3>
            <p className="text-gray-600">Successfully placed in top companies</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">100%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Placement Rate</h3>
            <p className="text-gray-600">Guaranteed placement assistance</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">15+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
            <p className="text-gray-600">Industry expertise and training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;