import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handlePageNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100/50' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handlePageNavigation('/')}>
            <img 
              src="/finallll.png" 
              alt="CliniGlobal Research Institute Logo" 
              className="h-18 w-18 md:h-30 md:w-30 lg:h-34 lg:w-34 mr-2 md:mr-3 object-contain hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                mixBlendMode: 'multiply'
              }}
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                CliniGlobal Research Institute
              </h1>
              <p className="text-xs md:text-sm text-blue-600 font-medium">
                Excellence in Clinical Research Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('#home')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('#about')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handlePageNavigation('/courses')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Courses
            </button>
            <button
              onClick={() => handlePageNavigation('/placements')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Placements
            </button>
            <button
              onClick={() => handleNavigation('#contact')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@cliniglobal.com</span>
              </div>
            </div>
            <button
              onClick={() => handleNavigation('#contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-blue-100/50 mt-2">
              <button
                onClick={() => handleNavigation('#home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('#about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => handlePageNavigation('/courses')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors duration-200"
              >
                Courses
              </button>
              <button
                onClick={() => handlePageNavigation('/placements')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors duration-200"
              >
                Placements
              </button>
              <button
                onClick={() => handleNavigation('#contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="px-3 py-2 text-sm text-gray-600">
                  <div className="flex items-center mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@cliniglobal.com</span>
                  </div>
                </div>
                <button
                  onClick={() => handleNavigation('#contact')}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;