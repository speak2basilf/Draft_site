import React from 'react';
import { Link } from 'wouter';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'PG Diploma in Clinical Research',
      duration: '12 Months',
      description: 'Comprehensive program covering all aspects of clinical research',
      link: '/courses/crm'
    },
    {
      title: 'Advanced Diploma in Clinical Research',
      duration: '6 Months',
      description: 'Fast-track program for immediate entry into clinical research',
      link: '/courses/adcr'
    },
    {
      title: 'Clinical SAS Programming',
      duration: '6 Months',
      description: 'Master SAS programming for clinical data analysis',
      link: '/courses/clinical-sas'
    },
    {
      title: 'Medical Coding',
      duration: '6 Months',
      description: 'Learn ICD-10, CPT, and HCPCS coding systems',
      link: '/courses/medical-coding'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our industry-focused programs designed for career success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-blue-600 font-medium mb-3">{course.duration}</p>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link href={course.link}>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/courses">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;