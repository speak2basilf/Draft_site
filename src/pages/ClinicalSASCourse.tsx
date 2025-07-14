import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle, ChevronDown, ChevronUp, Play, Code, Database, BarChart, Cpu, Brain, Activity, ExternalLink, ChevronRight, Microscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';

const ClinicalSASCourse: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about-course');
  const [showFloatingSidebar, setShowFloatingSidebar] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: 'enroll' | 'counselling' | 'contact' | 'brochure';
  }>({
    isOpen: false,
    type: 'enroll'
  });

  // Handle scroll to show/hide floating sidebar and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingSidebar(scrollPosition > 300);

      // Update active section based on scroll position
      const sections = ['about-course', 'syllabus', 'testimonials', 'program-outcomes', 'certification', 'faqs'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactModal = (type: 'enroll' | 'counselling' | 'contact' | 'brochure') => {
    setContactModal({ isOpen: true, type });
  };

  const closeContactModal = () => {
    setContactModal({ isOpen: false, type: 'enroll' });
  };

  const navigationSections = [
    { id: 'about-course', label: 'About Course', icon: BookOpen },
    { id: 'syllabus', label: 'Syllabus', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'program-outcomes', label: 'Program Outcomes', icon: Target },
    { id: 'certification', label: 'Certification', icon: Award },
    { id: 'faqs', label: 'FAQs', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 250; // Account for main header + submenu
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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

  const programOutcomes = [
    'Master advanced SAS programming for clinical data analysis',
    'Understand CDISC standards (SDTM & ADaM) implementation',
    'Develop expertise in statistical reporting and TLFs creation',
    'Learn regulatory submission programming requirements',
    'Gain proficiency in R programming for clinical research',
    'Build strong project management and validation skills',
    'Secure employment in pharmaceutical and CRO companies',
    'Advance to senior statistical programming roles'
  ];

  const certificationDetails = {
    title: 'Advanced Clinical SAS Programming Certificate',
    issuer: 'CliniGlobal Research Institute',
    accreditation: 'Industry Recognized Certification',
    features: [
      'Globally recognized by pharmaceutical companies',
      'Validates expertise in clinical SAS programming',
      'Includes CDISC standards proficiency',
      'Portfolio of real clinical trial projects',
      'Lifetime validity with continuing education credits'
    ]
  };

  const highlights = [
    'Advanced LMS Support',
    'Experienced & Certified Trainers',
    '100% Placement Guarantee',
    'Flexible Batches – Online & Offline, Weekdays/Weekends',
    'Access to Mock Exams & Practice Sheets',
    'Real Clinical Trial Data Experience',
    'Education Loan Facility Available'
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

        {/* Floating Clinical SAS Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-10 right-1/4 text-white opacity-30 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <Database className="absolute bottom-20 left-1/5 text-blue-400 opacity-40 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <BarChart className="absolute top-1/3 left-1/6 text-white opacity-30 animate-bounce" size={30} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
          <Microscope className="absolute top-2/3 right-1/6 text-blue-400 opacity-35 animate-bounce" size={26} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
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
              {/* Rough Sketch Highlight for #1 Healthcare Training Institute */}
              <div className="relative inline-block">
                <div 
                  className="absolute inset-0 -m-2 opacity-80"
                  style={{
                    background: 'linear-gradient(90deg, #FCD34D 0%, #F97316 100%)',
                    clipPath: 'polygon(2% 15%, 98% 8%, 96% 85%, 4% 92%)',
                    transform: 'rotate(-1deg) skew(-2deg)',
                    filter: 'blur(0.5px)'
                  }}
                ></div>
                <span className="relative bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  #1 Healthcare Training Institute
                </span>
              </div>
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

      {/* Enhanced Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-lg border-b border-white/30 sticky top-[128px] z-40 shadow-xl border-t-2 border-t-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-semibold border-2 shadow-lg hover:shadow-xl ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 border-purple-600 shadow-purple-500/30'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:scale-105 border-gray-200 hover:border-purple-300 bg-white/80'
                }`}
              >
                <section.icon size={20} />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <section id="about-course" className="py-16 bg-gray-50" style={{ scrollMarginTop: '250px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Clinical SAS Course</h2>
          
          {/* Introduction */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Clinical SAS programming is a specialized field that combines statistical analysis with pharmaceutical research. 
              Our comprehensive program prepares you to become a skilled statistical programmer capable of handling complex clinical trial data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You'll master SAS programming, CDISC standards, and regulatory submission requirements while working with real clinical trial datasets. 
              This hands-on approach ensures you're job-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Course Highlights */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Course Highlights</h3>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">What You'll Master</h4>
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

              {/* CliniGlobal Advantage */}
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">The CliniGlobal Advantage</h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center font-poppins text-sm md:text-base">
                      <CheckCircle className="text-green-400 mr-3" size={20} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
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
      <section id="syllabus" className="py-16" style={{ scrollMarginTop: '250px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Course Syllabus</span>
          </h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 backdrop-blur-lg rounded-3xl p-8 border border-purple-200 shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
              Master Clinical SAS programming with our comprehensive curriculum designed by industry experts. 
              Learn advanced SAS programming, CDISC standards, and statistical reporting with hands-on practice.
            </p>
          </div>
          
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
          
          {/* Course Summary */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Course Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{courseModules.length}</div>
                  <div className="text-white/80">Total Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">20</div>
                  <div className="text-white/80">Weeks Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-white/80">Weeks Internship</div>
                </div>
              </div>
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
      <section id="testimonials" className="py-16 bg-gray-50" style={{ scrollMarginTop: '250px' }}>
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

      {/* Program Outcomes Section */}
      <section id="program-outcomes" className="py-16" style={{ scrollMarginTop: '250px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Program Outcomes</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <p className="text-gray-700 mb-8 text-center text-lg">
              Upon successful completion of this program, you will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start p-4 bg-purple-50 rounded-xl">
                  <CheckCircle className="text-purple-600 mr-3 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-16 bg-gray-50" style={{ scrollMarginTop: '250px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Certification</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <div className="text-center">
              {/* Certificate Design */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-4 border-purple-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="border-2 border-purple-300 rounded-xl p-6">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src="/finallll.png" 
                      alt="CliniGlobal Logo" 
                      className="h-16 w-16 mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-purple-600">CliniGlobal</h3>
                      <p className="text-sm text-gray-600">Research Institute</p>
                    </div>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-gray-800 mb-4">Certificate of Completion</h4>
                  <p className="text-lg text-gray-700 mb-6">This is to certify that</p>
                  
                  <div className="border-b-2 border-gray-300 mb-4 pb-2">
                    <p className="text-xl font-semibold text-gray-800">[Candidate Name]</p>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    has successfully completed the
                  </p>
                  
                  <h5 className="text-2xl font-bold text-purple-600 mb-6">
                    {certificationDetails.title}
                  </h5>
                  
                  <div className="flex justify-between items-center mt-8">
                    <div className="text-center">
                      <div className="border-t-2 border-gray-400 pt-2">
                        <p className="text-sm font-semibold">Director</p>
                        <p className="text-xs text-gray-600">CliniGlobal Research Institute</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Award className="text-purple-600 mx-auto mb-2" size={32} />
                      <p className="text-xs text-gray-600">Certified Program</p>
                    </div>
                    <div className="text-center">
                      <div className="border-t-2 border-gray-400 pt-2">
                        <p className="text-sm font-semibold">Date</p>
                        <p className="text-xs text-gray-600">[Completion Date]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certification Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificationDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-3 bg-purple-50 rounded-xl">
                      <CheckCircle className="text-purple-600 mr-3 mt-1" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      <section id="faqs" className="py-16 bg-gray-50" style={{ scrollMarginTop: '250px' }}>
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
          <h2 className="text-2xl font-bold text-white mb-4">
            Clinical SAS Course in 
            {/* Rough Sketch Highlight for Bangalore */}
            <span className="relative inline-block ml-2">
              <span 
                className="absolute inset-0 -m-1 opacity-70"
                style={{
                  background: 'linear-gradient(90deg, #FCD34D 0%, #F97316 100%)',
                  clipPath: 'polygon(3% 12%, 97% 5%, 95% 88%, 2% 95%)',
                  transform: 'rotate(-0.5deg) skew(-1deg)',
                  filter: 'blur(0.3px)'
                }}
              ></span>
              <span className="relative text-white font-bold">Bangalore</span>
            </span>
          </h2>
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