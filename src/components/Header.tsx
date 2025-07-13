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
    <header className="bg-white/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg h-[128px]">
      {/* Rest of your JSX code remains unchanged */}
    </header>
  );
};

export default Header;