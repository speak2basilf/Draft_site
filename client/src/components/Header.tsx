import React, { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CliniGlobal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/placements" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Placements
            </Link>
            <Link href="/accreditations" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Accreditations
            </Link>
            <Link href="/learning-centers" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Learning Centers
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary">
              Contact Us
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/courses" className="text-gray-600 hover:text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/placements" className="text-gray-600 hover:text-blue-600 font-medium">
                Placements
              </Link>
              <Link href="/accreditations" className="text-gray-600 hover:text-blue-600 font-medium">
                Accreditations
              </Link>
              <Link href="/learning-centers" className="text-gray-600 hover:text-blue-600 font-medium">
                Learning Centers
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">
                Blog
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <button className="btn-secondary w-full">
                Contact Us
              </button>
              <button className="btn-primary w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;