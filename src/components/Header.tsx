import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = ['Assured', 'Transformation Focused', 'Career Focused', 'Accredited'];

  // Rotate words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside or navigating
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsCoursesOpen(false);
        setIsAboutOpen(false);
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'admission', 'courses', 'placements', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 150; // Increased offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName: string, href: string) => {
    setActiveTab(tabName);
    setIsMenuOpen(false); // Close mobile menu if open
    setIsCoursesOpen(false); // Close courses dropdown
    setIsAboutOpen(false); // Close about dropdown
    setIsResourcesOpen(false); // Close resources dropdown
    
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 160; // Account for both top bar and main nav
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Smooth scroll to section with proper offset for sticky header
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 160; // Account for both top bar and main nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsAboutOpen(false); // Close other dropdowns
    setIsResourcesOpen(false);
  };

  const handleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsCoursesOpen(false); // Close other dropdowns
    setIsResourcesOpen(false);
  };

  const handleCourseNavigation = (coursePath: string) => {
    setIsCoursesOpen(false);
    setIsMenuOpen(false);
    navigate(coursePath);
  };

  const handleAboutNavigation = (section: string) => {
    setIsAboutOpen(false);
    setIsMenuOpen(false);
    
    if (section === 'about' || section === 'testimonials') {
      handleTabClick(section, `#${section}`);
    } else if (section === 'accreditations') {
      navigate('/accreditations');
      // Ensure smooth scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // For other about sections, navigate to dedicated pages (to be created later)
      console.log(`Navigate to ${section} page`);
    }
  };

  const getTabClasses = (tabName: string) => {
    const baseClasses = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-3 py-2 rounded-lg";
    const activeClasses = "text-blue-600 bg-blue-50/50 shadow-md scale-105";
    
    return activeTab === tabName ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const getActiveIndicator = (tabName: string) => {
    if (activeTab === tabName) {
      return (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      );
    }
    return null;
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-1 sm:mb-0">
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>+919052992967</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-1" />
                <span>info@cliniglobal.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/80">
                {rotatingWords[currentWordIndex]} Healthcare Training
              </span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/finallll.png" 
              alt="CliniGlobal Logo" 
              className="h-18 w-18 md:h-24 md:w-24 mr-3 rounded-lg shadow-md"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold cliniglobal-brand font-poppins">
                <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
              </h1>
              <p className="text-xs text-gray-600 font-poppins">Research Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleTabClick('home', '#home')}
              className={getTabClasses('home')}
            >
              Home
              {getActiveIndicator('home')}
            </button>

            <button
              onClick={() => handleTabClick('about', '#about')}
              className={getTabClasses('about')}
            >
              About
              {getActiveIndicator('about')}
            </button>

            {/* Courses Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={handleCoursesDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-3 py-2 rounded-lg"
              >
                Courses
                <ChevronDown size={16} className={`ml-1 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl py-4 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 font-poppins">Our Programs</h3>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => handleCourseNavigation('/courses/crm')}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 font-poppins">PG Diploma in Clinical Research</div>
                      <div className="text-sm text-gray-600 font-poppins">12 Months • Most Popular</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/adcr')}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 font-poppins">Advanced Diploma in Clinical Research</div>
                      <div className="text-sm text-gray-600 font-poppins">6 Months • Fast Track</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/clinical-sas')}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 font-poppins">Advanced Diploma in Clinical SAS</div>
                      <div className="text-sm text-gray-600 font-poppins">6 Months • Programming</div>
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/medical-coding')}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 font-poppins">Advanced Diploma in Medical Coding</div>
                      <div className="text-sm text-gray-600 font-poppins">6 Months • High Demand</div>
                    </button>
                    <button
                      onClick={() => navigate('/courses')}
                      className="w-full text-left px-4 py-3 text-blue-600 hover:bg-blue-50 transition-colors border-t border-gray-200 mt-2"
                    >
                      <div className="font-medium font-poppins">View All Courses →</div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleTabClick('admission', '#admission')}
              className={getTabClasses('admission')}
            >
              Admission
              {getActiveIndicator('admission')}
            </button>

            <button
              onClick={() => navigate('/placements')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-3 py-2 rounded-lg"
            >
              Placements
            </button>

            <button
              onClick={() => handleTabClick('contact', '#contact')}
              className={getTabClasses('contact')}
            >
              Contact
              {getActiveIndicator('contact')}
            </button>

            {/* LMS Access Button */}
            <button 
              onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#1BA7C9] to-[#1BA7C9]/90 text-white px-4 py-2 rounded-full hover:from-[#1BA7C9]/90 hover:to-[#1BA7C9]/80 transition-colors font-medium font-poppins"
            >
              <GraduationCap size={16} />
              <span>LMS</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              <button
                onClick={() => handleTabClick('home', '#home')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Home
              </button>
              
              <button
                onClick={() => handleTabClick('about', '#about')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                About
              </button>

              {/* Mobile Courses */}
              <div>
                <button
                  onClick={handleCoursesDropdown}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
                >
                  Courses
                  <ChevronDown size={16} className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCoursesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button
                      onClick={() => handleCourseNavigation('/courses/crm')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                    >
                      PG Diploma in Clinical Research
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/adcr')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                    >
                      Advanced Diploma in Clinical Research
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/clinical-sas')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                    >
                      Advanced Diploma in Clinical SAS
                    </button>
                    <button
                      onClick={() => handleCourseNavigation('/courses/medical-coding')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                    >
                      Advanced Diploma in Medical Coding
                    </button>
                    <button
                      onClick={() => navigate('/courses')}
                      className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                    >
                      View All Courses →
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleTabClick('admission', '#admission')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Admission
              </button>

              <button
                onClick={() => navigate('/placements')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Placements
              </button>

              <button
                onClick={() => handleTabClick('contact', '#contact')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium font-poppins"
              >
                Contact
              </button>

              <button 
                onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                className="flex items-center space-x-2 w-full bg-gradient-to-r from-[#1BA7C9] to-[#1BA7C9]/90 text-white px-4 py-3 rounded-lg hover:from-[#1BA7C9]/90 hover:to-[#1BA7C9]/80 transition-colors font-medium font-poppins mt-4"
              >
                <GraduationCap size={16} />
                <span>Access LMS</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;