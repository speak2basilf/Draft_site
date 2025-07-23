import React from 'react';
import { Users, Award, Building, TrendingUp, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Students Placed',
      description: 'Successfully placed in top pharmaceutical and healthcare companies',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Placement Rate',
      description: 'Guaranteed placement assistance with our proven track record',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Building,
      number: '200+',
      label: 'Partner Companies',
      description: 'Strong industry connections with leading healthcare organizations',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      number: '15+',
      label: 'Years Experience',
      description: 'Deep industry expertise and comprehensive training programs',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const features = [
    'Industry-aligned curriculum designed by experts',
    'Hands-on training with real clinical data',
    'Dedicated placement support team',
    'Continuous mentorship throughout the program',
    'State-of-the-art learning management system',
    'Regular industry guest lectures and workshops'
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-yellow-400 mr-2" size={24} />
            <span className="status-info">India's #1 Clinical Research Institute</span>
          </div>
          <h2 className="heading-secondary text-gray-900 mb-6">
            Transforming Healthcare Careers Since 2008
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            CliniGlobal Research Institute has been at the forefront of clinical research education, 
            bridging the gap between academic knowledge and industry requirements with our comprehensive training programs.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="modern-card p-6 text-center">
              <div className={`${achievement.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <achievement.icon className={`${achievement.color} w-8 h-8`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose CliniGlobal?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-600 w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="modern-card p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Certified Excellence</h4>
                  <p className="text-gray-600 text-sm">Accredited programs meeting international standards</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span>ISO Certified</span>
                  <span>•</span>
                  <span>Industry Approved</span>
                  <span>•</span>
                  <span>NAAC Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;