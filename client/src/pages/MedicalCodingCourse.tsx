import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../components/ui/ContactModal';

const MedicalCodingCourse: React.FC = () => {
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

  // Handle scroll to show/hide floating sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingSidebar(scrollPosition > 300);
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

  const courseModules = [
    {
      title: 'Corporate Etiquette & Soft Skills',
      duration: '1 week',
      topics: ['Workplace Professionalism', 'Time Management', 'Teamwork', 'Communication Skills']
    },
    {
      title: 'Aptitude & Communication Training',
      duration: '1 week',
      topics: ['Logical Reasoning', 'Problem-solving', 'English Fluency', 'Interview Skills']
    },
    {
      title: 'Medical Terminology + Anatomy & Physiology',
      duration: '2 weeks',
      topics: ['ENT (Ear, Nose, Throat)', 'Nervous System', 'Digestive & Cardiovascular Systems', 'Respiratory, Musculoskeletal & Reproductive Systems']
    },
    {
      title: 'ICD-10-CM Coding Guidelines',
      duration: '3 weeks',
      topics: ['International Diagnostic Coding', 'Chapter-specific Rules', 'Real-world Case Applications', 'Code Selection Guidelines']
    },
    {
      title: 'CPT (Current Procedural Terminology)',
      duration: '2 weeks',
      topics: ['Medical Procedures Coding', 'Hospital Services', 'Clinic Procedures', 'Accurate Documentation']
    },
    {
      title: 'HCPCS (Healthcare Common Procedure Coding System)',
      duration: '2 weeks',
      topics: ['Services Coding', 'Supplies & Equipment', 'Non-CPT Procedures', 'Medicare Guidelines']
    },
    {
      title: 'Medical Billing & Modifiers',
      duration: '2 weeks',
      topics: ['Insurance Claims', 'Billing Processes', 'Code Modifiers', 'Precise Documentation']
    },
    {
      title: 'CPC Exam Prep + Mock Tests',
      duration: '3 weeks',
      topics: ['Practice Papers', 'Exam Strategies', 'Mock Tests', 'Time Management Techniques']
    }
  ];

  const programOutcomes = [
    'Master medical coding systems including ICD-10, CPT, and HCPCS',
    'Understand healthcare documentation and billing processes',
    'Develop proficiency in medical terminology and anatomy',
    'Gain expertise in compliance and regulatory requirements',
    'Prepare for CPC certification exam',
    'Build strong communication and professional skills',
    'Secure employment in healthcare organizations',
    'Advance to senior coding and auditing roles'
  ];

  const testimonials = [
    {
      name: 'Ayesha S.',
      role: 'Medical Coder at Optum',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The training was in-depth, and I got placed immediately after certification. Thank you CliniGlobal!'
    },
    {
      name: 'Priya M.',
      role: 'Coding Analyst at Accenture',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The faculty support and practical training helped me transition from IT to healthcare coding seamlessly.'
    },
    {
      name: 'Rajesh K.',
      role: 'Revenue Cycle Executive at Apollo',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'CliniGlobal\'s placement support is exceptional. They helped me secure a great position with excellent salary.'
    }
  ];

  const faqs = [
    {
      question: 'Is medical coding hard to learn?',
      answer: 'No, with the right training and practice, anyone from a science or allied background can master it. Our structured curriculum makes it easy to understand.'
    },
    {
      question: 'Can I take this course online?',
      answer: 'Yes! We offer both online and offline batches with flexible timings to accommodate working professionals and students.'
    },
    {
      question: 'Do I need to be from a medical background?',
      answer: 'Not necessarily. Graduates in Life Sciences, IT, Nursing, and even BCA/B.Tech are eligible. We provide foundational medical knowledge.'
    },
    {
      question: 'Is CPC certification mandatory?',
      answer: 'While not mandatory, CPC certification enhances your job prospects and salary significantly. We provide complete exam preparation.'
    },
    {
      question: 'What is the job market like for medical coders?',
      answer: 'The demand for medical coders is growing rapidly with digitization of healthcare. Remote work opportunities are also abundant.'
    },
    {
      question: 'How much can I earn as a medical coder?',
      answer: 'Entry-level medical coders can earn ₹2.5-4 LPA, with experienced professionals earning ₹6-10 LPA or more.'
    }
  ];

  const highlights = [
    'Advanced LMS Support',
    'Experienced & Certified Trainers',
    '100% Placement Guarantee',
    'Flexible Batches – Online & Offline, Weekdays/Weekends',
    'Access to Mock Exams & Practice Sheets',
    'CPC Certification Preparation',
    'Education Loan Facility Available'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Floating Sidebar */}
      {showFloatingSidebar && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
          {/* Contact Form */}
          <div 
            onClick={() => openContactModal('contact')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <MessageCircle className="text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Contact Form</p>
            </div>
          </div>

          {/* Download Brochure */}
          <div 
            onClick={() => openContactModal('brochure')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Download className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Download Brochure</p>
            </div>
          </div>

          {/* Schedule Call */}
          <div 
            onClick={() => openContactModal('counselling')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Phone className="text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-xs font-medium text-gray-700">Schedule Call</p>
            </div>
          </div>
        </div>
      )}

      {/* Header with Medical Coding Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 relative overflow-hidden">
        {/* Background Medical Coding Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Medical Coding and Healthcare Documentation" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 via-green-600/60 to-blue-600/80"></div>
        </div>

        {/* Floating Medical Coding Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FileText className="absolute top-10 right-1/4 text-white opacity-30 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <BookOpen className="absolute bottom-20 left-1/5 text-yellow-400 opacity-40 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <GraduationCap className="absolute top-1/3 left-1/6 text-white opacity-30 animate-bounce" size={30} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
          <Award className="absolute top-2/3 right-1/6 text-yellow-400 opacity-35 animate-bounce" size={26} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
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
                Turn Your Passion for Healthcare Into a Career in 
                <span className="block text-yellow-400">Medical Coding!</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-poppins">
                Our <strong>Medical Coding Certification Program</strong> is designed for students and professionals who want to build a career in the healthcare domain without being on the frontlines.
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 font-poppins">
                Learn from certified trainers, gain hands-on experience, and get <strong>100% placement assistance</strong> to launch your career in the growing healthcare industry.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <Clock className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">6 Months</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Duration</div>
                </div>
                <div className="text-center">
                  <Award className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">100%</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Placement</div>
                </div>
                <div className="text-center">
                  <Star className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">4.8</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Rating</div>
                </div>
                <div className="text-center">
                  <GraduationCap className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">2 Months</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Internship</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold mb-6 font-poppins">CliniGlobal Highlights</h3>
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
                    className="w-full bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors font-poppins"
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

      {/* Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-lg border-b border-white/30 sticky top-[128px] z-40 shadow-xl border-t-2 border-t-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-semibold border-2 shadow-lg hover:shadow-xl ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white scale-110 border-green-600 shadow-green-500/30'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:scale-105 border-gray-200 hover:border-green-300 bg-white/80'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Medical Coding Course</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Medical coders play a crucial role in transforming patient records into universal codes for billing, insurance, and hospital records. Our comprehensive Medical Coding Program is structured to provide both technical knowledge and essential workplace skills.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You'll gain hands-on experience and exam-focused training that prepares you for a successful career in healthcare documentation and coding. The program covers all major coding systems including ICD-10, CPT, and HCPCS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <Target className="text-green-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Industry-Focused</h3>
                <p className="text-gray-600 text-sm">Curriculum designed with industry experts</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <Award className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">CPC Certification</h3>
                <p className="text-gray-600 text-sm">Complete preparation for AAPC certification</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <TrendingUp className="text-orange-600 mx-auto mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Career Growth</h3>
                <p className="text-gray-600 text-sm">100% placement assistance guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Course Syllabus</span>
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-lg rounded-3xl p-8 border border-green-200 shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
              Master medical coding with our comprehensive curriculum designed by industry experts. 
              Learn ICD-10, CPT, HCPCS coding systems with hands-on practice and real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{module.title}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Module {index + 1} of {courseModules.length}</span>
                    <span className="text-green-600 font-semibold">{module.duration}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / courseModules.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Course Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Course Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{courseModules.length}</div>
                  <div className="text-white/80">Total Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">16</div>
                  <div className="text-white/80">Weeks Training</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-white/80">Weeks Internship</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/50 shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-green-600 font-medium">{testimonial.role}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-green-600 mb-4">"</div>
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
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
                <div key={index} className="flex items-start p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="text-green-600 mr-3 mt-1" size={20} />
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
                  <MessageCircle className="text-green-600 mr-3" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Coding Career?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful medical coders who transformed their careers with CliniGlobal
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
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
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
        courseName="Advanced Diploma in Medical Coding"
      />
    </div>
  );
};

export default MedicalCodingCourse;