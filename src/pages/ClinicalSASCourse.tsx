import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle, Database, BarChart, Code, Cpu, Brain, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';

const ClinicalSASCourse: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about-course');
  const [showFloatingSidebar, setShowFloatingSidebar] = useState(false);
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
      const sections = ['about-course', 'curriculum', 'career-pathways', 'program-outcomes', 'faqs'];
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
    { id: 'curriculum', label: 'Curriculum', icon: FileText },
    { id: 'career-pathways', label: 'Career Pathways', icon: Target },
    { id: 'program-outcomes', label: 'Program Outcomes', icon: Award },
    { id: 'faqs', label: 'FAQs', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 250;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const highlights = [
    'Advanced LMS Support',
    'Experienced & Certified Trainers',
    '100% Placement Guarantee',
    'Flexible Batches – Online & Offline, Weekdays/Weekends',
    'Access to Mock Exams & Practice Sheets',
    'Education Loan Facility Available'
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Industry-Relevant Curriculum',
      description: 'Developed in collaboration with leading clinical research organizations and experts, ensuring you learn what the industry demands.'
    },
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Learn from seasoned professionals, academics, and researchers with extensive experience in various facets of clinical research.'
    },
    {
      icon: Activity,
      title: 'Practical & Hands-on Training',
      description: 'Emphasis on case studies, simulations, and real-world projects to develop practical skills.'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Open doors to a wide array of exciting career opportunities in a rapidly growing global industry.'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with industry leaders, guest speakers, and fellow students, building a valuable professional network.'
    },
    {
      icon: Shield,
      title: 'Placement Assistance',
      description: 'Dedicated support for internships and job placements upon successful completion of the program.'
    }
  ];

  const basicModules = [
    {
      title: 'Corporate Etiquette & Soft Skills',
      duration: '1 week',
      topics: ['SMART Goal Setting, Teamwork & Communication', 'Email & Grooming Etiquette', 'JAM Sessions, Mock Interviews & CV Writing', 'SOP Writing & Professional Networking', 'LinkedIn & Job Portal Activities']
    },
    {
      title: 'Aptitude & Communication Training',
      duration: '1 week',
      topics: ['English Proficiency: Grammar, Vocabulary, Comprehension', 'Quantitative Aptitude: Profit & Loss, Time-Speed-Distance', 'Permutation & Combination', 'Real-time Job Preparation Test Modules']
    },
    {
      title: 'Introduction to Clinical Research',
      duration: '1 week',
      topics: ['Drug Development & Clinical Trials Phases', 'CRO Functions & Industry Standards', 'Departmental Roles & Trial Process Flow']
    },
    {
      title: 'SAS in Clinical Research',
      duration: '1 week',
      topics: ['Role of SAS in Regulatory Submission', 'Importance of Protocols & Data Handling', 'CDISC Standards – SDTM & ADaM']
    }
  ];

  const programmingModules = [
    {
      title: 'Introduction to SAS Software',
      duration: '1 week',
      topics: ['SAS Architecture & Components', 'SAS Windows & Functional Overview']
    },
    {
      title: 'Working in SAS Environment',
      duration: '1 week',
      topics: ['SAS Libraries, Data States, File Management']
    },
    {
      title: 'Creating Datasets from Raw Data',
      duration: '1 week',
      topics: ['Text, Excel, Access, and Inline Data Integration']
    },
    {
      title: 'Output Delivery System (ODS)',
      duration: '1 week',
      topics: ['Export to PDF, RTF, HTML formats']
    },
    {
      title: 'Dataset Combination Techniques',
      duration: '1 week',
      topics: ['Merge, Concatenation, Interleaving, Match Merge']
    },
    {
      title: 'Functions in SAS',
      duration: '1 week',
      topics: ['Character, Numeric, Arithmetic, Date Functions']
    },
    {
      title: 'Loops in SAS',
      duration: '1 week',
      topics: ['Do, Do While, Do Until']
    },
    {
      title: 'Arrays',
      duration: '1 week',
      topics: ['Array Declaration & Processing']
    }
  ];

  const advancedModules = [
    {
      title: 'SAS Procedures',
      duration: '2 weeks',
      topics: ['PROC PRINT, IMPORT, EXPORT, APPEND, REPORT, CHART, etc.']
    },
    {
      title: 'Graphical Representation',
      duration: '1 week',
      topics: ['SAS Graphing Techniques & Custom Visuals']
    },
    {
      title: 'PROC SQL',
      duration: '2 weeks',
      topics: ['Join, Subqueries, Views, Set Operators']
    },
    {
      title: 'Macros',
      duration: '2 weeks',
      topics: ['Macro Variables, Functions, Reusability & Automation']
    }
  ];

  const clinicalModules = [
    {
      title: 'Clinical Trial Data Structures',
      duration: '2 weeks',
      topics: ['SDTM, ADaM, define.xml, Demographic & Lab Data']
    },
    {
      title: 'Transforming Clinical Trial Data',
      duration: '2 weeks',
      topics: ['LOCF, BOCF, WOCF, Baseline Change Calculations', 'Transposing & Categorization for Analysis']
    }
  ];

  const rModules = [
    {
      title: 'Statistical Modeling in R',
      duration: '2 weeks',
      topics: ['Build models for efficacy testing, survival analysis, and regression using real-world clinical trial data']
    },
    {
      title: 'Clinical Data Exploration',
      duration: '2 weeks',
      topics: ['Manipulate and analyze large clinical datasets using packages like tidyverse, dplyr, and ggplot2']
    },
    {
      title: 'Publication-Ready Visualizations',
      duration: '1 week',
      topics: ['Design compelling graphs and dashboards that help researchers, sponsors, and regulators make informed decisions']
    }
  ];

  const careerPaths = [
    'Clinical SAS Programmer',
    'Statistical Programmer Analyst',
    'Data Analyst – Clinical Trials',
    'Biostatistics Associate',
    'CDISC Programmer'
  ];

  const eligibleCandidates = [
    'Life Science & Pharmacy Graduates',
    'BSc/MSc in Statistics, Biotech, or Bioinformatics',
    'Working professionals in Clinical Research',
    'Anyone aspiring for a career in Clinical Data Analytics'
  ];

  const keyTools = [
    'SAS Base & Advanced Programming',
    'SAS/MACROS, SQL in SAS',
    'Clinical Data Interchange Standards Consortium (CDISC)',
    'SDTM, ADaM, and TLFs Automation',
    'FDA Submission Requirements',
    'Language R'
  ];

  const programOutcomes = [
    'Master SAS programming for clinical data analysis',
    'Understand CDISC standards (SDTM & ADaM)',
    'Develop expertise in statistical analysis and reporting',
    'Learn regulatory submission requirements',
    'Gain proficiency in R programming for clinical research',
    'Build skills in data visualization and interpretation',
    'Secure employment in pharmaceutical and biotech companies',
    'Advance to senior statistical programming roles'
  ];

  const faqs = [
    {
      question: 'What is the duration of the Clinical SAS course?',
      answer: 'The course duration is 6 months, including practical projects, real-time datasets, and mock regulatory scenarios.'
    },
    {
      question: 'Do I need prior programming experience?',
      answer: 'No prior programming experience is required. We start with basics and gradually build up to advanced concepts.'
    },
    {
      question: 'What kind of job opportunities are available after completion?',
      answer: 'Graduates can work as Clinical SAS Programmers, Statistical Programmer Analysts, Data Analysts, Biostatistics Associates, and CDISC Programmers in pharmaceutical companies and CROs.'
    },
    {
      question: 'Is the course available online?',
      answer: 'Yes, we offer flexible learning options including online, offline, and hybrid modes with weekday and weekend batches.'
    },
    {
      question: 'What is the average salary after course completion?',
      answer: 'Entry-level positions start from ₹4.5-6.5 LPA, with experienced professionals earning ₹8-15 LPA or more depending on the role and company.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide 100% placement assistance with dedicated career support, resume building, interview preparation, and connections to pharmaceutical companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Floating Sidebar */}
      {showFloatingSidebar && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
          {/* Contact Form */}
          <div 
            onClick={() => openContactModal('contact')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <MessageCircle className="text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-xs font-medium text-gray-700">Contact</p>
            </div>
          </div>

          {/* Download Brochure */}
          <div 
            onClick={() => openContactModal('brochure')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Download className="text-green-600 mx-auto mb-1 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-xs font-medium text-gray-700">Brochure</p>
            </div>
          </div>

          {/* Schedule Call */}
          <div 
            onClick={() => openContactModal('counselling')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Phone className="text-orange-600 mx-auto mb-1 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-xs font-medium text-gray-700">Call</p>
            </div>
          </div>
        </div>
      )}

      {/* Header with Clinical SAS Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 relative overflow-hidden">
        {/* Background Clinical SAS Image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://img.freepik.com/free-photo/scientist-woman-pipetting-liquid-test-tube-late-night-modern-equipped-lab-team-examining-virus-evolution-using-high-tech-scientific-analysis-treatment-development-against-covid19_482257-3848.jpg" 
            alt="Clinical Research Laboratory with SAS Analysis" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-purple-600/60 to-blue-600/80"></div>
        </div>

        {/* Floating Clinical SAS Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Database className="absolute top-10 right-1/4 text-white opacity-30 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <BarChart className="absolute bottom-20 left-1/5 text-yellow-400 opacity-40 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <Code className="absolute top-1/3 left-1/6 text-green-400 opacity-30 animate-bounce" size={30} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
          <Cpu className="absolute top-2/3 right-1/6 text-blue-400 opacity-35 animate-bounce" size={26} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
                Shape the Future of Medical Research with
                <span className="block text-yellow-400">Clinical SAS Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-poppins">
                Learn Advanced Analytics for Breakthrough Discoveries
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 font-poppins">
                <strong>Duration:</strong> 6 Months (Includes practical projects, real-time datasets, and mock regulatory scenarios)
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <Clock className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">6 Months</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Duration</div>
                </div>
                <div className="text-center">
                  <Database className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">SAS + R</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Languages</div>
                </div>
                <div className="text-center">
                  <Award className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">100%</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Placement</div>
                </div>
                <div className="text-center">
                  <Star className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">4.9</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold mb-6 font-poppins">The CliniGlobal Advantage</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center font-poppins text-sm md:text-base">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-4">
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1BA7C9] to-[#1BA7C9]/90 text-white px-6 py-3 rounded-full hover:from-[#1BA7C9]/90 hover:to-[#1BA7C9]/80 transition-colors font-medium font-poppins"
                  >
                    <GraduationCap size={18} />
                    <span>Access LMS</span>
                  </button>
                  <button 
                    onClick={() => openContactModal('enroll')}
                    className="w-full bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors font-poppins"
                  >
                    Enroll Now
                  </button>
                </div>
                <button 
                  onClick={() => openContactModal('brochure')}
                  className="w-full border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center font-poppins"
                >
                  <Download className="mr-2" size={16} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Course Section */}
        <section id="about-course" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Clinical SAS Program</h2>
          
          {/* Introduction */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              The Clinical SAS Program at CliniGlobal is designed to equip students with the skills needed to work with statistical software and data analysis in the clinical research domain. SAS (Statistical Analysis System) is the industry standard for analyzing clinical trial data and generating regulatory-compliant reports.
            </p>
          </div>

          {/* Why Choose CliniGlobal */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Clinical SAS at <span className="text-blue-600">Clini</span><span className="text-orange-500">Global</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/30 to-blue-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300">
                    <item.icon className="text-purple-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Tools & Technologies */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 backdrop-blur-lg rounded-3xl p-8 border border-purple-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Tools & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyTools.map((tool, index) => (
                <div key={index} className="flex items-center p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="text-purple-600 mr-3" size={20} />
                  <span className="text-gray-800 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Course Curriculum</span>
          </h2>

          {/* Foundation Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Foundation Modules</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {basicModules.map((module, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{module.title}</h4>
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold border border-purple-200">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SAS Programming Modules */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="mr-3 text-purple-600" size={28} />
              SAS Programming Modules
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {programmingModules.map((module, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{module.title}</h4>
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold border border-purple-200">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced SAS Programming */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart className="mr-3 text-blue-600" size={28} />
              Advanced SAS Programming
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {advancedModules.map((module, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{module.title}</h4>
                    <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Domain-Specific Learning */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="mr-3 text-green-600" size={28} />
              Clinical Domain-Specific Learning
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {clinicalModules.map((module, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{module.title}</h4>
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* R Programming Module */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="mr-3 text-orange-600" size={28} />
              Additional R Programming Module
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 backdrop-blur-lg rounded-3xl p-8 border border-orange-200 shadow-lg mb-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Professionals skilled in both SAS and R are now highly sought after in the life sciences and healthcare analytics industries. As clinical research evolves toward AI, automation, and advanced analytics, dual-language proficiency provides a powerful edge in the job market.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {rModules.map((module, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{module.title}</h4>
                    <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold border border-orange-200">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Pathways Section */}
        <section id="career-pathways" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Career Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h3>
              <p className="text-gray-700 mb-6">Upon successful completion, students can explore roles such as:</p>
              <div className="space-y-4">
                {careerPaths.map((career, index) => (
                  <div key={index} className="flex items-center p-4 bg-purple-50 rounded-xl">
                    <Target className="text-purple-600 mr-3" size={20} />
                    <span className="text-gray-800 font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Should Enroll?</h3>
              <div className="space-y-4">
                {eligibleCandidates.map((candidate, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                    <Users className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-800 font-medium">{candidate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Outcomes Section */}
        <section id="program-outcomes" className="mb-20">
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
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="text-purple-600 mr-3" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Clinical SAS?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join CliniGlobal and become a skilled Clinical SAS programmer with our comprehensive training and 100% placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1BA7C9] to-[#1BA7C9]/90 text-white px-8 py-4 rounded-full hover:from-[#1BA7C9]/90 hover:to-[#1BA7C9]/80 transition-colors text-lg font-medium"
                >
                  <GraduationCap size={20} />
                  <span>Access LMS</span>
                </button>
                <button 
                  onClick={() => openContactModal('enroll')}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Enroll Now
                </button>
              </div>
              <button 
                onClick={() => openContactModal('counselling')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Counselling
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={closeContactModal}
        buttonType={contactModal.type}
        courseName="Advanced Diploma in Clinical SAS"
      />
    </div>
  );
};

export default ClinicalSASCourse;