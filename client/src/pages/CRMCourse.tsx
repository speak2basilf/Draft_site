import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, Microscope, Activity, Brain, FileText, BarChart, Globe, Upload, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TestimonialSlider } from '../components/ui/testimonial-slider';
import ContactModal from '../components/ui/ContactModal';

const CRMCourse: React.FC = () => {
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
      title: 'Corporate Etiquette & Soft Skill Training',
      duration: '1 week',
      topics: ['Professionalism', 'Confidence Building', 'Communication for Corporate Success', 'Professional Ethics']
    },
    {
      title: 'Non-Technical Training (Aptitude + Communication)',
      duration: '1 week',
      topics: ['Problem-solving', 'Reasoning Skills', 'Interpersonal Communication', 'Presentation Skills']
    },
    {
      title: 'Human Anatomy & Physiology',
      duration: '2 weeks',
      topics: ['Body Systems Overview', 'Organ Functions', 'Physiological Processes', 'Medical Terminology']
    },
    {
      title: 'Pharmacology',
      duration: '2 weeks',
      topics: ['Drug Actions in Body', 'Therapeutic Uses', 'Drug Classifications', 'Pharmacokinetics & Pharmacodynamics']
    },
    {
      title: 'Clinical Research and Ethical Consideration',
      duration: '3 weeks',
      topics: ['Clinical Trial Design', 'Ethical Principles', 'Compliance Requirements', 'GCP Guidelines']
    },
    {
      title: 'Pharmacovigilance',
      duration: '2 weeks',
      topics: ['Adverse Drug Reactions', 'Safety Reporting', 'Risk Assessment', 'Signal Detection']
    },
    {
      title: 'Clinical Data Management',
      duration: '3 weeks',
      topics: ['Data Collection', 'Data Validation', 'Database Management', 'Quality Assurance']
    },
    {
      title: 'Biostatistics (Minor Module)',
      duration: '1 week',
      topics: ['Statistical Tools', 'Clinical Data Analysis', 'Hypothesis Testing', 'Statistical Software']
    },
    {
      title: 'Clinical SAS',
      duration: '3 weeks',
      topics: ['SAS Programming', 'Clinical Data Analysis', 'Statistical Reporting', 'Data Visualization']
    },
    {
      title: 'Medical Coding (Minor Module)',
      duration: '1 week',
      topics: ['ICD-10 Basics', 'CPT Coding', 'Medical Terminology', 'Healthcare Documentation']
    },
    {
      title: 'Medical Writing',
      duration: '2 weeks',
      topics: ['Protocol Writing', 'Clinical Study Reports', 'Scientific Summaries', 'Regulatory Documents']
    },
    {
      title: 'Regulatory Affairs',
      duration: '2 weeks',
      topics: ['Global Regulatory Frameworks', 'Drug Approvals', 'Compliance Requirements', 'Submission Processes']
    }
  ];

  const careerOpportunities = [
    'Clinical Research Coordinator (CRC)',
    'Clinical Research Associate (CRA)',
    'Clinical Data Manager (CDM)',
    'Drug Safety Associate/PV Executive',
    'Regulatory Affairs Associate',
    'Medical Writer'
  ];

  const eligibleCandidates = [
    'Pharmacy',
    'Life Sciences',
    'Medicine (MBBS, BDS)',
    'Nursing',
    'Biotechnology',
    'Healthcare Graduates'
  ];

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
      title: 'Industry-Aligned Curriculum',
      description: 'Our syllabus is developed in collaboration with industry experts, covering the latest trends, regulations (GCP, ICH), and best practices in clinical trials.'
    },
    {
      icon: GraduationCap,
      title: 'Expert Faculty & Mentors',
      description: 'Learn from seasoned clinical research professionals with extensive experience in leading complex trials and regulatory submissions.'
    },
    {
      icon: BookOpen,
      title: 'Hands-on Practical Training',
      description: 'Gain practical experience through case studies, mock trials, site visits (where applicable), and simulation exercises.'
    },
    {
      icon: TrendingUp,
      title: 'Dedicated Placement Support',
      description: 'Receive comprehensive career assistance, including resume building, interview preparation, and connections to leading CROs and Pharma companies.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understand international regulations and practices, preparing you for roles in a globally connected industry.'
    },
    {
      icon: Users,
      title: 'Strong Alumni Network',
      description: 'Join a vibrant community of successful clinical research professionals for ongoing networking and mentorship.'
    }
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Visit Our Website',
      description: 'Go to www.cliniglobal.com and navigate to the Clinical Research Program page.',
      icon: Globe
    },
    {
      step: 2,
      title: 'Fill Out the Online Application Form',
      description: 'Click on "Apply Now" and complete the registration form with your personal and academic details.',
      icon: FileText
    },
    {
      step: 3,
      title: 'Upload Required Documents',
      description: 'Submit Resume/CV, Academic Transcripts, ID Proof, and Statement of Purpose through the portal.',
      icon: Upload
    },
    {
      step: 4,
      title: 'Attend an Admission Interview',
      description: 'Our admissions counselor may schedule a short interaction to assess your eligibility.',
      icon: Users
    },
    {
      step: 5,
      title: 'Confirm Your Seat & Begin Learning',
      description: 'Pay the first installment and receive Welcome Kit, LMS Access, and Batch Schedule.',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Anita Desai',
      role: 'Clinical Research Manager at Pfizer India',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'CliniGlobal completely transformed my career. The CRM training approach and industry connections helped me secure a position at Pfizer within 2 months of course completion.'
    },
    {
      name: 'Vikram Singh',
      role: 'Clinical SAS Programmer at Novartis',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'The comprehensive Clinical SAS curriculum and hands-on training gave me the confidence to excel in statistical programming. Got a 250% salary hike at Novartis.'
    },
    {
      name: 'Priyanka Sharma',
      role: 'Bioinformatics Specialist at Johnson & Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      testimonial: 'From a complete beginner to working at J&J - this journey was made possible by CliniGlobal. The Bioinformatics program and expert mentorship made all the difference.'
    }
  ];

  const programOutcomes = [
    'Master the complete clinical trial lifecycle from protocol to submission',
    'Understand regulatory requirements and GCP guidelines',
    'Develop expertise in clinical data management and analysis',
    'Gain proficiency in pharmacovigilance and safety reporting',
    'Learn medical writing and regulatory documentation',
    'Build strong project management and leadership skills',
    'Secure employment in pharmaceutical and biotech companies',
    'Advance to senior clinical research management roles'
  ];

  const faqs = [
    {
      question: 'What is the duration of the Clinical Research Management course?',
      answer: 'The course duration is 12 months total - 10 months of intensive training plus 2 months of hands-on internship with our industry partners.'
    },
    {
      question: 'Do I need prior experience in healthcare to join this course?',
      answer: 'No prior experience is required. However, candidates should have a background in Life Sciences, Medicine, Pharmacy, Nursing, or Biotechnology.'
    },
    {
      question: 'What kind of job opportunities are available after completion?',
      answer: 'Graduates can work as Clinical Research Associates, Clinical Data Managers, Regulatory Affairs Associates, Medical Writers, and Drug Safety Associates in pharmaceutical companies and CROs.'
    },
    {
      question: 'Is the course available online?',
      answer: 'Yes, we offer flexible learning options including online, offline, and hybrid modes with weekday and weekend batches to accommodate working professionals.'
    },
    {
      question: 'What is the average salary after course completion?',
      answer: 'Entry-level positions start from ₹3.5-5 LPA, with experienced professionals earning ₹8-15 LPA or more depending on the role and company.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide 100% placement assistance with dedicated career support, resume building, interview preparation, and connections to 50+ pharmaceutical companies.'
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

      {/* Header with Clinical Research Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        {/* Background Clinical Research Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Clinical Research Laboratory" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        {/* Floating Clinical Research Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Microscope className="absolute top-10 right-1/4 text-white opacity-30 animate-bounce" size={32} style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <Activity className="absolute bottom-20 left-1/5 text-green-400 opacity-40 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <Brain className="absolute top-1/3 left-1/6 text-purple-400 opacity-30 animate-bounce" size={30} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
          <BarChart className="absolute top-2/3 right-1/6 text-yellow-400 opacity-35 animate-bounce" size={26} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
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
                Master Clinical Research:
                <span className="block text-yellow-400">Drive Tomorrow's Healthcare</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-poppins">
                Launch an impactful career in pharmaceutical, biotech, and medical device industries.
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 font-poppins">
                <strong>Duration:</strong> 10 Months + 2 Months Internship
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <Clock className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">12 Months</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Total Duration</div>
                </div>
                <div className="text-center">
                  <GraduationCap className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">2 Months</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Internship</div>
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
                    className="w-full bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors font-poppins"
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
      <div className="bg-white/95 backdrop-blur-lg border-b border-white/30 sticky top-[128px] z-40 shadow-xl border-t-2 border-t-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-semibold border-2 shadow-lg hover:shadow-xl ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-110 border-blue-600 shadow-blue-500/30'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 border-gray-200 hover:border-blue-300 bg-white/80'
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
        <section id="about-course" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Clinical Research Course</h2>
          
          {/* Introduction */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Clinical research is the branch of healthcare science that determines the safety and effectiveness (efficacy) of medications, devices, diagnostic products, and treatment regimens intended for human use. These may be used for prevention, treatment, diagnosis, or for relieving symptoms of a disease.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It's a dynamic field at the forefront of medical innovation, crucial for bringing new therapies from the lab to patients. Professionals in this domain play a vital role in designing, conducting, and monitoring clinical trials, ensuring ethical standards and scientific rigor are maintained throughout the process.
            </p>
          </div>

          {/* Why Choose CliniGlobal */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose <span className="text-blue-600">Clini</span><span className="text-orange-500">Global</span> for Clinical Research Training?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:scale-105 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus Section */}
        <section id="syllabus" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Course Syllabus</span>
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-lg rounded-3xl p-8 border border-blue-200 shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
              Gain a globally recognized qualification to launch your career in the clinical research industry. 
              Experience a blended learning model combining theory with real-time clinical exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{module.title}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Module {index + 1} of {courseModules.length}</span>
                    <span className="text-blue-600 font-semibold">{module.duration}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / courseModules.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Course Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
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
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Hear From Our Successful Graduates</h2>
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <TestimonialSlider testimonials={testimonials.map(t => ({
              img: t.image,
              quote: t.testimonial,
              name: t.name,
              role: t.role
            }))} />
          </div>
        </section>

        {/* Program Outcomes Section */}
        <section id="program-outcomes" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Program Outcomes</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <p className="text-gray-700 mb-8 text-center text-lg">
              Upon successful completion of this program, you will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="text-blue-600 mr-3 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Certification</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
            <div className="text-center">
              {/* Certificate Design */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-4 border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="border-2 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src="/finallll.png" 
                      alt="CliniGlobal Logo" 
                      className="h-16 w-16 mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">CliniGlobal</h3>
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
                  
                  <h5 className="text-2xl font-bold text-blue-600 mb-6">
                    Clinical Research Management Program
                  </h5>
                  
                  <div className="flex justify-between items-center mt-8">
                    <div className="text-center">
                      <div className="border-t-2 border-gray-400 pt-2">
                        <p className="text-sm font-semibold">Director</p>
                        <p className="text-xs text-gray-600">CliniGlobal Research Institute</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Award className="text-blue-600 mx-auto mb-2" size={32} />
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
              
              <p className="text-gray-700 mt-8 text-lg">
                Upon successful completion of the course, you will receive an industry-recognized certificate 
                that validates your expertise in Clinical Research Management.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="text-blue-600 mr-3" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey in Clinical Research?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join CliniGlobal and become a part of the exciting world of medical innovation. Our comprehensive training will equip you with the expertise needed to excel.
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
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
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
        courseName="PG Diploma in Clinical Research"
      />
    </div>
  );
};

export default CRMCourse;