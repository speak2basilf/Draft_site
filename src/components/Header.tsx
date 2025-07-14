import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap, UserPlus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside or navigating
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'placements', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 180;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 180;
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
  };

  const handleCourseNavigation = (coursePath: string) => {
    setIsCoursesOpen(false);
    setIsMenuOpen(false);
    navigate(coursePath);
  };

  const getTabClasses = (tabName: string) => {
    const baseClasses = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg";
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
      {/* Top Blue Header Background */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Left side - Contact Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center text-white/90 hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105">
                <Phone size={14} className="mr-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-poppins text-sm group-hover:font-semibold">+919052992967</span>
              </div>
              <div className="flex items-center text-white/90 hover:text-white transition-all duration-300 cursor-pointer group hover:scale-105">
                <Mail size={14} className="mr-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-poppins text-sm group-hover:font-semibold">info@cliniglobal.com</span>
              </div>
            </div>
            
            {/* Center - Main Highlight */}
            <div className="text-center">
              <span className="text-orange-400 font-bold text-sm md:text-base font-poppins hover:text-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 transform inline-block px-2 py-1 rounded hover:bg-orange-500/20">
                #1 Healthcare Training Institute
              </span>
            </div>
            
            {/* Right side - Tagline */}
            <div className="text-white/90 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105">
              <span className="font-poppins text-sm hover:scale-105 hover:font-semibold transform inline-block transition-all duration-300">
                Assured Healthcare Training • Career Focused
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Increased size by 25% */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/finallll.png" 
              alt="CliniGlobal Logo" 
              className="h-24 w-24 md:h-29 md:w-29 mr-4 rounded-lg shadow-md"
            />
            <div>
              {/* Larger, bold CliniGlobal text */}
              <h1 className="text-2xl md:text-3xl font-bold cliniglobal-brand font-poppins">
                <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
              </h1>
              {/* Smaller, muted gray subtext */}
              <p className="text-sm text-gray-500 font-poppins font-medium">Research Institute</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleTabClick('home', '#home')}
              className={getTabClasses('home')}
            >
              <span className="font-poppins">Home</span>
              {getActiveIndicator('home')}
            </button>

            <button
              onClick={() => handleTabClick('about', '#about')}
              className={getTabClasses('about')}
            >
              <span className="font-poppins">About</span>
              {getActiveIndicator('about')}
            </button>

            {/* Courses Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={handleCoursesDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg"
              >
                <span className="font-poppins">Courses</span>
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
              onClick={() => navigate('/placements')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-4 py-2 rounded-lg font-poppins"
            >
              Placements
            </button>

            <button
              onClick={() => handleTabClick('contact', '#contact')}
              className={getTabClasses('contact')}
            >
              <span className="font-poppins">Contact</span>
              {getActiveIndicator('contact')}
            </button>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              {/* Enroll Now Button - Orange */}
              <button 
                onClick={() => navigate('/courses')}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-sm font-poppins shadow-lg hover:shadow-xl hover:scale-105"
              >
                <UserPlus size={16} />
                <span>Enroll Now</span>
              </button>

              {/* LMS Button - Cyan Blue */}
              <button 
                onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm font-poppins shadow-lg hover:shadow-xl hover:scale-105"
              >
                <GraduationCap size={16} />
                <span>LMS</span>
              </button>
            </div>
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

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={() => navigate('/courses')}
                  className="flex items-center justify-center space-x-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors font-bold font-poppins"
                >
                  <UserPlus size={16} />
                  <span>Enroll Now</span>
                </button>

                <button 
                  onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                  className="flex items-center justify-center space-x-2 w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg transition-colors font-medium font-poppins"
                >
                  <GraduationCap size={16} />
                  <span>Access LMS</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;