import React, { useState } from 'react';
import { FileText, CheckCircle, DollarSign, Calendar, Download, Users, Clock, Award, Heart, Star, Sparkles, GraduationCap, BookOpen } from 'lucide-react';

const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState('apply');

  const courses = [
    {
      name: 'PG Diploma in Clinical Research',
      eligibility: 'Bachelor\'s degree in Life Sciences, Medicine, Pharmacy, or related field',
      duration: '12 Months',
      nextBatch: 'March 15, 2024'
    },
    {
      name: 'Advanced Diploma in Clinical SAS',
      eligibility: 'Bachelor\'s degree in Statistics, Mathematics, Computer Science, or related field',
      duration: '6 Months',
      nextBatch: 'March 20, 2024'
    },
    {
      name: 'Advanced Diploma in Bioinformatics',
      eligibility: 'Bachelor\'s degree in Biology, Biotechnology, Computer Science, or related field',
      duration: '6 Months',
      nextBatch: 'March 25, 2024'
    },
    {
      name: 'Advanced Diploma in Medical Coding',
      eligibility: 'Bachelor\'s degree in any field with basic medical knowledge',
      duration: '6 Months',
      nextBatch: 'March 30, 2024'
    },
    {
      name: 'PG Diploma in AI & ML Healthcare',
      eligibility: 'Bachelor\'s degree in Computer Science, Engineering, Mathematics, or related field',
      duration: '12 Months',
      nextBatch: 'April 1, 2024'
    },
    {
      name: 'MBA in Healthcare Management',
      eligibility: 'Bachelor\'s degree in any field with minimum 50% marks',
      duration: '24 Months',
      nextBatch: 'April 10, 2024'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Browse our course catalog and select the program that aligns with your career goals.',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'Check Eligibility',
      description: 'Review the eligibility criteria for your chosen course to ensure you meet the requirements.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Fill out the online application form with your personal and educational details.',
      icon: FileText
    },
    {
      step: 4,
      title: 'Document Verification',
      description: 'Upload required documents including educational certificates and ID proof.',
      icon: Award
    },
    {
      step: 5,
      title: 'Fee Payment',
      description: 'Complete the fee payment through our secure online payment gateway.',
      icon: DollarSign
    },
    {
      step: 6,
      title: 'Confirmation',
      description: 'Receive confirmation email with course details and batch information.',
      icon: GraduationCap
    }
  ];

  const paymentPlans = [
    {
      title: 'Full Payment',
      description: 'Pay the complete course fee upfront',
      discount: '10% discount',
      features: ['Immediate course access', 'All study materials included', 'Priority support']
    },
    {
      title: 'Installment Plan',
      description: 'Split your payment into easy installments',
      discount: '5% discount',
      features: ['Flexible payment schedule', 'No additional charges', 'Course access after first payment']
    },
    {
      title: 'Scholarship Program',
      description: 'Merit-based scholarships available',
      discount: 'Up to 30% off',
      features: ['Based on academic performance', 'Limited seats available', 'Application required']
    }
  ];

  const upcomingBatches = [
    {
      course: 'PG Diploma in Clinical Research',
      startDate: 'March 15, 2024',
      duration: '12 Months',
      mode: 'Online + Offline',
      seats: '25 seats available'
    },
    {
      course: 'Advanced Diploma in Clinical SAS',
      startDate: 'March 20, 2024',
      duration: '6 Months',
      mode: 'Online',
      seats: '30 seats available'
    },
    {
      course: 'Advanced Diploma in Bioinformatics',
      startDate: 'March 25, 2024',
      duration: '6 Months',
      mode: 'Online',
      seats: '35 seats available'
    },
    {
      course: 'Advanced Diploma in Medical Coding',
      startDate: 'March 30, 2024',
      duration: '6 Months',
      mode: 'Online + Offline',
      seats: '40 seats available'
    },
    {
      course: 'PG Diploma in AI & ML Healthcare',
      startDate: 'April 1, 2024',
      duration: '12 Months',
      mode: 'Online + Offline',
      seats: '20 seats available'
    },
    {
      course: 'MBA in Healthcare Management',
      startDate: 'April 10, 2024',
      duration: '24 Months',
      mode: 'Weekend Batches',
      seats: '15 seats available'
    }
  ];

  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 right-1/4 text-pink-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Star className="absolute bottom-32 left-1/5 text-yellow-400 opacity-50 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Sparkles className="absolute top-1/3 left-1/6 text-purple-400 opacity-40 animate-bounce" size={18} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <GraduationCap className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Admission</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey towards a successful healthcare career with our comprehensive admission process
          </p>
        </div>

        {/* Admission Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab('apply')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'apply'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <FileText className="inline-block mr-2" size={16} />
                How to Apply
              </button>
              <button
                onClick={() => setActiveTab('eligibility')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'eligibility'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <CheckCircle className="inline-block mr-2" size={16} />
                Eligibility
              </button>
              <button
                onClick={() => setActiveTab('fees')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'fees'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <DollarSign className="inline-block mr-2" size={16} />
                Schedule
              </button>
              <button
                onClick={() => setActiveTab('brochure')}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeTab === 'brochure'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <Download className="inline-block mr-2" size={16} />
                Brochure
              </button>
            </div>
          </div>
        </div>

        {/* How to Apply Tab */}
        {activeTab === 'apply' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Application Process</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure your seat in our healthcare training programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative bg-white/40 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-blue-600" size={28} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Start Your Application
              </button>
            </div>
          </div>
        )}

        {/* Eligibility Tab */}
        {activeTab === 'eligibility' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check the prerequisites for each course to ensure you meet the requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600 text-sm mt-1">{course.eligibility}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Duration:</span>
                            <p className="text-gray-600">{course.duration}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Next Batch:</span>
                            <p className="text-gray-600">{course.nextBatch}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fees & Funding Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Batches</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our upcoming batch schedules and secure your seat today
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingBatches.map((batch, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{batch.course}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date:</span>
                          <span className="font-medium text-gray-900">{batch.startDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium text-gray-900">{batch.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mode:</span>
                          <span className="font-medium text-gray-900">{batch.mode}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Availability:</span>
                          <span className="font-medium text-green-600">{batch.seats}</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-6 py-2 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 transition-all duration-300 text-sm">
                        Reserve Seat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brochure Tab */}
        {activeTab === 'brochure' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Download Course Brochures</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get detailed information about our courses, curriculum, and career opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-blue-600" size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{course.name}</h4>
                    <p className="text-gray-600 text-sm mb-6">
                      Comprehensive course details, curriculum, faculty information, and career prospects
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-6 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download size={16} />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Complete Course Catalog</h4>
                <p className="text-gray-600 mb-6">
                  Download our complete course catalog with all programs, fees, and admission details
                </p>
                <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-8 py-4 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
                  <Download size={20} />
                  <span>Download Complete Catalog</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admission;