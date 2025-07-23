import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Download, Phone, Mail, MapPin, Heart, Sparkles, GraduationCap, Target, TrendingUp, Shield, FileText, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlowingEffect } from '../components/ui/glowing-effect';
import ContactModal from '../components/ui/ContactModal';

const ADCRCourse: React.FC = () => {
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

  const courseModules = [
    {
      title: 'Corporate Etiquette and Soft Skill Training',
      duration: '1 week',
      topics: [
        'Introduction to CLRI',
        'Five must-have skills for every fresher',
        'Soft Skills for Career growth',
        'SOP standard operating procedures',
        'JAM Session (just a minute)',
        'Job application'
      ]
    },
    {
      title: 'Aptitude Preparation',
      duration: '2 weeks',
      topics: [
        'Vocabulary (Synonyms, Antonyms, Contextual)',
        'Grammar (Error Identification, Sentence Improvement)',
        'Comprehension (Reading, Fill in the blanks)',
        'Number of Questions: 18, Duration: 18 minutes'
      ]
    },
    {
      title: 'Pharmacology',
      duration: '1 week',
      topics: [
        'Overview of Drug Discovery Process',
        'Neoplastic Drugs'
      ]
    },
    {
      title: 'Clinical Research and Management',
      duration: '4 weeks',
      topics: [
        'Scope of Clinical Research in India & Global',
        'Historical Guidelines & Declaration of Helsinki',
        'Ethics & Research Ethics Committees',
        'Phases of Clinical Trials',
        'ICH, ICH-GCP Guidelines & advancement',
        'Drug & Cosmetic Act 1940 & New Drugs Rules 2019',
        'Clinical Trial Design & RCT Model',
        'Clinical Trial Monitoring & Study Activities'
      ]
    },
    {
      title: 'Pharmacovigilance',
      duration: '3 weeks',
      topics: [
        'Introduction to Pharmacology and Pharmacovigilance',
        'Adverse Drug Reactions and Safety Reports',
        'Seriousness, Expectedness & Causality Assessment',
        'Methodologies in Pharmacovigilance',
        'Management Systems and Drug Dictionaries',
        'Periodic Safety Update Report (PSUR)',
        'Pharmacovigilance Regulations in various countries',
        'Pharmacovigilance Programme in India (PVPI)',
        'Signal Detection and Data Mining',
        'Good Pharmacovigilance Practice (GPP)',
        'Case Study & Hands-on training on Vigisearch, vigiflow'
      ]
    },
    {
      title: 'Clinical Data Management',
      duration: '4 weeks',
      topics: [
        'Introduction to data management',
        'Role and responsibilities of CDM',
        'Protocol Implementation',
        'CRF/eCRF designing and Workflow',
        'Database build and validation',
        'Data management Plan creation',
        'Data Collection & acquisitions',
        'CRF tracking & Data Entry',
        'Data validation & Medical Coding',
        'QA QC & Overview of Lab Data',
        'Database Lock & Data Export/Transfer',
        'Overview and Sample of DM Reports'
      ]
    },
    {
      title: 'Medical Writing',
      duration: '2 weeks',
      topics: [
        'Introduction to medical writing',
        'Scientific Writing',
        'Pre-clinical/Non-Clinical writing',
        'Medical Writing for Clinical Trial',
        'Overview and Sample of Reports',
        'Guidelines to publish clinical data',
        'MEDICO-MARKETING WRITING',
        'Medical & Scientific Style guides',
        'Data Citation & referencing',
        'Plagiarism & Copyright'
      ]
    },
    {
      title: 'Regulatory Affairs',
      duration: '3 weeks',
      topics: [
        'Introduction to Regulatory Affairs',
        'Drug regulatory and accrediting agencies',
        'Regulatory Document & Clinical Trials (E3)',
        'Provisions related to Import of Drugs',
        'Manufacturing, sale, Labelling and packaging',
        'DMF preparation, submission, responding to deficiencies',
        'Importance of GMP Compliance',
        'Orange book & Biologics License Application (BLA)',
        'QA/QC Documentation',
        'Hatch Waxman Act- 180-day exclusivity',
        'HIPPA Act'
      ]
    }
  ];

  const careerOpportunities = [
    'Clinical Research Associate (CRA)',
    'Clinical Trial Coordinator',
    'Data Manager / Data Reviewer',
    'Pharmacovigilance Executive',
    'Regulatory Affairs Assistant',
    'Clinical QA / QC Executive'
  ];

  const eligibleCandidates = [
    'B.Sc. / M.Sc. (Life Sciences, Microbiology, Biotech, etc.)',
    'B.Pharm / M.Pharm',
    'MBBS / BDS / BHMS / BAMS',
    'Nursing, BPT, or Allied Health Sciences',
    'Working professionals in hospitals or research'
  ];

  const highlights = [
    '6 Months Industry-Ready Training',
    'Live Interactive Sessions',
    'Access to LMS & E-Learning Portal',
    'Weekend Batches for Working Professionals',
    'Resume Building + Interview Preparation',
    'Certification on Completion',
    '100% Placement Assistance'
  ];

  const programOutcomes = [
    'Master fundamentals of clinical research and GCP guidelines',
    'Understand clinical trial phases and regulatory requirements',
    'Develop expertise in pharmacovigilance and drug safety',
    'Learn clinical data management and EDC tools',
    'Gain proficiency in medical writing and documentation',
    'Build regulatory affairs knowledge and compliance skills',
    'Secure employment in pharmaceutical and CRO companies',
    'Advance to senior clinical research roles'
  ];

  const faqs = [
    {
      question: 'What is the duration of the Advanced Diploma in Clinical Research?',
      answer: 'The course duration is 6 months with intensive training covering all aspects of clinical research from basics to advanced concepts.'
    },
    {
      question: 'Do I need prior experience in clinical research?',
      answer: 'No prior experience is required. The program is designed for both freshers and professionals looking to enter the clinical research field.'
    },
    {
      question: 'What kind of job opportunities are available after completion?',
      answer: 'Graduates can work as Clinical Research Associates, Clinical Trial Coordinators, Data Managers, Pharmacovigilance Executives, and Regulatory Affairs Assistants.'
    },
    {
      question: 'Is the course available online?',
      answer: 'Yes, we offer flexible learning options including online, offline, and hybrid modes with weekday and weekend batches.'
    },
    {
      question: 'What is the average salary after course completion?',
      answer: 'Entry-level positions start from ₹3.0-4.5 LPA, with experienced professionals earning ₹6-12 LPA depending on the role and company.'
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
          <div 
            onClick={() => openContactModal('contact')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <MessageCircle className="text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-xs font-medium text-gray-700">Contact</p>
            </div>
          </div>
          <div 
            onClick={() => openContactModal('brochure')}
            className="bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-center">
              <Download className="text-green-600 mx-auto mb-1 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-xs font-medium text-gray-700">Brochure</p>
            </div>
          </div>
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

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Clinical Research Laboratory" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 via-green-600/60 to-blue-600/80"></div>
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
                Advanced Diploma in
                <span className="block text-yellow-400">Clinical Research</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-poppins">
                <strong>Duration:</strong> 6 Months | <strong>Mode:</strong> Online / Classroom
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 font-poppins">
                Launch Your Career in the Fast-Growing Clinical Research Industry
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
                  <Users className="mx-auto mb-2" size={24} />
                  <div className="text-xl md:text-2xl font-bold font-poppins">350+</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">Enrolled</div>
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
        <section id="about-course" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About the Program</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              The Advanced Diploma in Clinical Research is a 6-month intensive training program designed to prepare students and professionals for a successful career in the clinical trials and drug development industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a curriculum aligned to current industry demands, this program blends theoretical knowledge with hands-on tools, real-world case studies, and regulatory understanding.
            </p>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Program Curriculum</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                
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
              </div>
            ))}
          </div>
        </section>

        {/* Career Pathways Section */}
        <section id="career-pathways" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Career Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h3>
              <div className="space-y-4">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-xl">
                    <Target className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-800 font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Apply?</h3>
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
        <section id="program-outcomes" className="mb-20" style={{ scrollMarginTop: '250px' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Program Outcomes</h2>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg">
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
        <section id="faqs" className="mb-20" style={{ scrollMarginTop: '250px' }}>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Clinical Research Career?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join CliniGlobal's Advanced Diploma program and fast-track your entry into the clinical research industry
            </p>
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
        courseName="Advanced Diploma in Clinical Research"
      />
    </div>
  );
};

export default ADCRCourse;