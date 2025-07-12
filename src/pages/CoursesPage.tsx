import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, ArrowRight, GraduationCap, Target, TrendingUp, Star } from 'lucide-react';
import { GlowingEffect } from '../components/ui/glowing-effect';

const CoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'pgdcr',
      title: 'PG Diploma in Clinical Research',
      subtitle: 'Master clinical trial management, GCP guidelines, and regulatory compliance for pharmaceutical industry leadership.',
      duration: '12 Months',
      mode: 'Online / Classroom',
      students: '500+ Enrolled',
      rating: '4.9',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Live Interactive Sessions',
        'Real Project Experience', 
        'Industry Certification',
        '100% Placement Support',
        'Expert Mentorship'
      ],
      popular: true,
      route: '/courses/crm',
      color: 'blue'
    },
    {
      id: 'adcr',
      title: 'Advanced Diploma in Clinical Research',
      subtitle: 'Fast-track 6-month program for immediate entry into clinical research with comprehensive hands-on training.',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '350+ Enrolled',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Industry-Ready Training',
        'GCP & ICH Guidelines',
        'Practical Case Studies',
        'Career Guidance',
        'Placement Assistance'
      ],
      route: '/courses/adcr',
      color: 'green'
    },
    {
      id: 'clinical-sas',
      title: 'Advanced Diploma in Clinical SAS',
      subtitle: 'Master SAS programming for clinical data analysis, statistical reporting, and regulatory submissions.',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '400+ Enrolled',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'SAS Programming',
        'Statistical Analysis',
        'Clinical Reporting',
        'Data Validation',
        'R Programming'
      ],
      route: '/courses/clinical-sas',
      color: 'purple'
    },
    {
      id: 'medical-coding',
      title: 'Advanced Diploma in Medical Coding',
      subtitle: 'Master ICD-10, CPT, and HCPCS coding systems for accurate healthcare documentation and billing.',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '450+ Enrolled',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'ICD-10 Coding',
        'CPT Procedures',
        'Medical Terminology',
        'Healthcare Documentation',
        'CPC Certification Prep'
      ],
      route: '/courses/medical-coding',
      color: 'emerald'
    },
    {
      id: 'ai-ml',
      title: 'PG Diploma in AI & ML Healthcare',
      subtitle: 'Cutting-edge artificial intelligence and machine learning applications in healthcare and medical research.',
      duration: '12 Months',
      mode: 'Online / Classroom',
      students: '300+ Enrolled',
      rating: '4.8',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Machine Learning',
        'Healthcare AI',
        'Predictive Analytics',
        'Medical Imaging AI',
        'Industry Projects'
      ],
      route: '/courses/ai-ml',
      color: 'orange'
    },
    {
      id: 'mba',
      title: 'MBA in Healthcare Management',
      subtitle: 'Comprehensive business administration program focused on healthcare industry leadership and strategic management.',
      duration: '24 Months',
      mode: 'Weekend Batches',
      students: '150+ Enrolled',
      rating: '4.9',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Healthcare Strategy',
        'Operations Management',
        'Financial Planning',
        'Leadership Skills',
        'Executive Placement'
      ],
      route: '/courses/mba',
      color: 'indigo'
    }
  ];

  const handleCourseClick = (course: typeof courses[0]) => {
    navigate(course.route);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Healthcare Education" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 font-poppins">
              Our <span className="text-yellow-400">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
              Transform your career with our industry-focused healthcare training programs. 
              Choose from our comprehensive range of courses designed for success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <GraduationCap className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">6</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Programs</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <Users className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">5000+</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Students</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <Award className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">95%</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Placement</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <TrendingUp className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">300%</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Avg Hike</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
              onClick={() => handleCourseClick(course)}
            >
              {/* Glowing Effect */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              
              {/* Split Layout */}
              <div className="flex h-full">
                {/* Left Half - Image */}
                <div className="w-1/2 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                </div>

                {/* Right Half - Content */}
                <div className="w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-blue-600 to-blue-700 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <BookOpen className="text-white" size={20} />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-300 fill-current" size={14} />
                        <span className="text-white text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        Most Popular
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {course.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-3">
                      {course.subtitle}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        📅 {course.duration}
                      </span>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        👥 {course.students}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {course.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-white/90 text-xs">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                        {course.features.length > 3 && (
                          <li className="text-white/70 text-xs">
                            +{course.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="relative z-10">
                    <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium font-semibold">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {course.popular && (
                <div className="absolute top-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-20">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Book a free consultation with our career counselors to find the perfect program for your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                Download Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;