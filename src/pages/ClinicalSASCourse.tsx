import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle, ChevronDown, ChevronUp, Play, Code, Database, BarChart, Cpu, Brain, Activity, ExternalLink, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';

const ClinicalSASCourse: React.FC = () => {
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: 'enroll' | 'counselling' | 'contact' | 'brochure';
  }>({
    isOpen: false,
    type: 'enroll'
  });

  const openContactModal = (type: 'enroll' | 'counselling' | 'contact' | 'brochure') => {
    setContactModal({ isOpen: true, type });
  };

  const closeContactModal = () => {
    setContactModal({ isOpen: false, type: 'enroll' });
  };

  const courseModules = [
    {
      title: 'Foundation & Soft Skills',
      duration: '2 weeks',
      icon: Users,
      topics: [
        'Corporate Etiquette & Professional Communication',
        'Aptitude & Logical Reasoning',
        'Interview Preparation & Resume Building',
        'Healthcare Industry Overview'
      ]
    },
    {
      title: 'Clinical Research Fundamentals',
      duration: '2 weeks',
      icon: BookOpen,
      topics: [
        'Drug Development Process',
        'Clinical Trial Phases',
        'GCP Guidelines & Regulatory Framework',
        'CDISC Standards Introduction'
      ]
    },
    {
      title: 'SAS Programming Basics',
      duration: '3 weeks',
      icon: Code,
      topics: [
        'SAS Environment & Architecture',
        'Data Step Programming',
        'Working with Libraries & Datasets',
        'Basic Procedures & Functions'
      ]
    },
    {
      title: 'Advanced SAS Programming',
      duration: '4 weeks',
      icon: Database,
      topics: [
        'Advanced Data Manipulation',
        'Macro Programming',
        'PROC SQL & Database Connections',
        'Arrays & Hash Objects'
      ]
    },
    {
      title: 'Clinical Data Standards',
      duration: '3 weeks',
      icon: FileText,
      topics: [
        'SDTM Implementation',
        'ADaM Dataset Creation',
        'Define.xml Generation',
        'Data Validation & Quality Checks'
      ]
    },
    {
      title: 'Statistical Analysis & Reporting',
      duration: '4 weeks',
      icon: BarChart,
      topics: [
        'Clinical Statistical Analysis',
        'Tables, Listings & Figures (TLFs)',
        'Regulatory Submission Programming',
        'R Programming for Clinical Research'
      ]
    },
    {
      title: 'Real-World Projects',
      duration: '2 weeks',
      icon: Target,
      topics: [
        'End-to-End Clinical Study Programming',
        'Industry Case Studies',
        'Portfolio Development',
        'Certification Preparation'
      ]
    }
  ];

  const keyFeatures = [
    { icon: Play, title: '100% Live Classes', description: 'Interactive sessions with industry experts' },
    { icon: Target, title: 'Hybrid Projects', description: 'Real clinical trial data experience' },
    { icon: Award, title: 'Global Certification', description: 'Industry-recognized credentials' },
    { icon: Users, title: 'Industry Mentors', description: 'Learn from SAS programming veterans' },
    { icon: Clock, title: 'Flexible Schedule', description: 'Weekend & evening batches available' },
    { icon: TrendingUp, title: '100% Placement', description: 'Guaranteed job assistance' }
  ];

  const tools = [
    { name: 'SAS', logo: '/api/placeholder/120/60' },
    { name: 'R Programming', logo: '/api/placeholder/120/60' },
    { name: 'Oracle Clinical', logo: '/api/placeholder/120/60' },
    { name: 'Medidata Rave', logo: '/api/placeholder/120/60' },
    { name: 'CDISC', logo: '/api/placeholder/120/60' },
    { name: 'SQL Server', logo: '/api/placeholder/120/60' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior SAS Programmer at Novartis',
      company: 'Novartis',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'CliniGlobal\'s SAS program transformed my career. The hands-on approach with real clinical data gave me confidence to excel in my role.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Clinical Data Programmer at Pfizer',
      company: 'Pfizer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The curriculum is perfectly aligned with industry needs. Got placed within 2 months of course completion with 180% salary hike.',
      rating: 5
    },
    {
      name: 'Anita Reddy',
      role: 'Biostatistician at Johnson & Johnson',
      company: 'Johnson & Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Excellent faculty support and placement assistance. The R programming module was particularly valuable for my current role.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What is the duration of the Clinical SAS course?',
      answer: 'The course duration is 6 months (20 weeks) with intensive hands-on training, including real-world projects and certification preparation.'
    },
    {
      question: 'Do I need prior programming experience?',
      answer: 'No prior programming experience is required. We start with basics and gradually build up to advanced concepts with comprehensive support.'
    },
    {
      question: 'What kind of job opportunities are available?',
      answer: 'Graduates can work as Clinical SAS Programmers, Statistical Programmers, Clinical Data Managers, and Biostatisticians in pharmaceutical companies and CROs.'
    },
    {
      question: 'Is placement assistance really guaranteed?',
      answer: 'Yes, we provide 100% placement assistance with dedicated career support, resume building, interview preparation, and direct connections to 50+ pharmaceutical companies.'
    },
    {
      question: 'What is the average salary after course completion?',
      answer: 'Entry-level positions start from ₹4.5-6.5 LPA, with experienced professionals earning ₹8-15 LPA or more depending on the role and company.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Clinical SAS Programming" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </button>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">4.9 (500+ reviews)</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advanced Clinical SAS Programming
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master SAS programming for clinical data analysis and become a sought-after statistical programmer in the pharmaceutical industry.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>6 Months Duration</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>400+ Students Enrolled</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2" />
                <span>Industry Certification</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openContactModal('enroll')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
              >
                Apply Now - Limited Seats
              </button>
              <button 
                onClick={() => openContactModal('brochure')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Highlights */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Overview</h2>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What You'll Master</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Advanced SAS Programming</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">CDISC Standards (SDTM & ADaM)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Clinical Data Analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Statistical Reporting (TLFs)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">R Programming Integration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Regulatory Submissions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Real Clinical Trial Projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Industry Best Practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">₹45,000</div>
                  <div className="text-gray-500 line-through mb-2">₹65,000</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    30% Early Bird Discount
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode:</span>
                    <span className="font-medium">Online + Offline</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EMI Options:</span>
                    <span className="font-medium">₹7,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Batch:</span>
                    <span className="font-medium text-blue-600">March 15, 2024</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => openContactModal('enroll')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={() => openContactModal('counselling')}
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Schedule Free Counselling
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      <span>+91 90529 92967</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules - Timeline Design */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Course Curriculum</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {courseModules.map((module, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Module Card */}
                  <div className="ml-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <module.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                            <p className="text-gray-600">{module.duration}</p>
                          </div>
                        </div>
                        {expandedModule === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedModule === index && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Program</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tools & Platforms You'll Master</h2>
          
          <div className="overflow-x-auto">
            <div className="flex space-x-8 pb-4" style={{ width: 'max-content' }}>
              {tools.map((tool, index) => (
                <div key={index} className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-40 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">{tool.name}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">100% Placement Support</h2>
              <p className="text-gray-600 mb-8">
                Our dedicated placement team works tirelessly to ensure every graduate finds their ideal role in the pharmaceutical industry.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resume Building</h3>
                    <p className="text-gray-600">Professional resume crafting with industry-specific keywords</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mock Interviews</h3>
                    <p className="text-gray-600">Practice sessions with industry professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Internship Programs</h3>
                    <p className="text-gray-600">Hands-on experience with partner companies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Job Portal Access</h3>
                    <p className="text-gray-600">Exclusive access to pharmaceutical job opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-700 mb-6">Placement Success Rate</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">₹6.5L</div>
                    <p className="text-sm text-gray-600">Average Package</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <p className="text-sm text-gray-600">Partner Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedModule(expandedModule === index + 100 ? null : index + 100)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    {expandedModule === index + 100 ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedModule === index + 100 && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-Specific SEO Block */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Clinical SAS Course in Bangalore</h2>
          <p className="text-blue-100 mb-6">
            Join India's premier Clinical SAS training institute in Bangalore. Get hands-on experience with real clinical data and secure your dream job in pharmaceutical companies.
          </p>
          <button 
            onClick={() => openContactModal('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Bangalore Campus
          </button>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Clinical SAS Career Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ successful graduates who transformed their careers with our industry-leading Clinical SAS program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openContactModal('enroll')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Enroll Now - Limited Seats
            </button>
            <button 
              onClick={() => openContactModal('counselling')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Free Counselling
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-blue-100">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 90529 92967</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@cliniglobal.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeContactModal}
        buttonType={contactModal.type}
        courseName="Advanced Clinical SAS Programming"
      />
    </div>
  );
};

export default ClinicalSASCourse;