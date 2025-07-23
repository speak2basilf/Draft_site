import React from 'react';
import { Link } from 'wouter';
import { Clock, Users, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'PG Diploma in Clinical Research',
      duration: '12 Months',
      students: '1,200+',
      rating: '4.9',
      description: 'Comprehensive program covering all aspects of clinical research methodology, regulatory affairs, and project management.',
      link: '/courses/crm',
      features: ['100% Placement', 'Industry Projects', 'Expert Mentorship'],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      title: 'Advanced Diploma in Clinical Research',
      duration: '6 Months',
      students: '800+',
      rating: '4.8',
      description: 'Fast-track program for immediate entry into clinical research with hands-on training.',
      link: '/courses/adcr',
      features: ['Quick Start', 'Real Projects', 'Job Guarantee'],
      color: 'from-green-500 to-green-600',
      popular: false
    },
    {
      title: 'Clinical SAS Programming',
      duration: '6 Months',
      students: '600+',
      rating: '4.9',
      description: 'Master SAS programming for clinical data analysis and statistical reporting.',
      link: '/courses/clinical-sas',
      features: ['SAS Certified', 'Live Projects', 'High Salary'],
      color: 'from-purple-500 to-purple-600',
      popular: false
    },
    {
      title: 'Medical Coding',
      duration: '6 Months',
      students: '900+',
      rating: '4.7',
      description: 'Learn ICD-10, CPT, and HCPCS coding systems for healthcare documentation.',
      link: '/courses/medical-coding',
      features: ['Remote Work', 'Flexible Hours', 'Growth Scope'],
      color: 'from-orange-500 to-orange-600',
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="text-blue-600 mr-2" size={24} />
            <span className="status-success">Industry-Approved Programs</span>
          </div>
          <h2 className="heading-secondary text-gray-900 mb-6">
            Choose Your Perfect Course
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            Transform your career with our industry-focused programs designed by experts 
            and trusted by leading healthcare companies worldwide.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="modern-card p-6 relative group">
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    🏆 Most Popular
                  </span>
                </div>
              )}

              {/* Course Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                </div>
                <div>
                  <Users className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{course.students}</div>
                </div>
                <div>
                  <Star className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{course.rating}</div>
                </div>
              </div>

              {/* Course Features */}
              <div className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={course.link}>
                <button className="w-full btn-primary group-hover:bg-blue-700 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Not sure which course to choose?</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our career assessment to find the perfect program that matches your goals, 
              experience level, and career aspirations in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Take Career Assessment
              </button>
              <Link href="/courses">
                <button className="btn-secondary">
                  View All Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;