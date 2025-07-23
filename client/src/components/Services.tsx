import React from 'react';
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart, 
  Clock, 
  Smartphone, 
  Database,
  Star,
  Sparkles
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Patient Care Management',
      description: 'Comprehensive patient management system with real-time monitoring and care coordination.',
      features: ['Electronic Health Records', 'Appointment Scheduling', 'Treatment Planning']
    },
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI algorithms for accurate diagnosis and personalized treatment recommendations.',
      features: ['Medical Imaging Analysis', 'Predictive Analytics', 'Risk Assessment']
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security ensuring HIPAA compliance and patient data protection.',
      features: ['End-to-End Encryption', 'Access Control', 'Audit Trails']
    },
    {
      icon: Users,
      title: 'Telemedicine Platform',
      description: 'Seamless virtual consultations connecting patients with healthcare providers.',
      features: ['Video Consultations', 'Remote Monitoring', 'Digital Prescriptions']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics dashboard for operational insights and performance tracking.',
      features: ['Custom Dashboards', 'Performance Metrics', 'Predictive Insights']
    },
    {
      icon: Smartphone,
      title: 'Mobile Health Apps',
      description: 'Patient-friendly mobile applications for health tracking and engagement.',
      features: ['Health Monitoring', 'Medication Reminders', 'Appointment Booking']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 right-1/4 text-yellow-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Sparkles className="absolute bottom-32 left-1/5 text-purple-400 opacity-50 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Heart className="absolute top-1/3 left-1/6 text-pink-400 opacity-40 animate-bounce" size={18} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare technology solutions designed to transform patient care and operational efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <service.icon className="text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;