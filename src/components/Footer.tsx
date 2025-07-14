import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center">
              <img 
                src="/finallll.png" 
                alt="CliniGlobal Logo" 
                className="h-12 w-12 mr-3 rounded-lg shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold cliniglobal-brand font-poppins">
                  <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
                </h3>
                <p className="text-sm text-gray-600 font-poppins">Research Institute</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed font-poppins max-w-md">
              India's leading healthcare training institute, transforming careers through comprehensive clinical research, 
              bioinformatics, and healthcare management programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block">About Us</a></li>
              <li><a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block">Our Courses</a></li>
              <li><a href="/placements" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block">Placements</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block">Contact Us</a></li>
              <li><a href="/accreditations" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block">Accreditations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 font-poppins">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Phone size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins">+919052992967</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins">info@cliniglobal.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 mt-1">
                  <MapPin size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins text-sm leading-relaxed">
                    125, 7th Cross Road, Off Bannerghatta Road<br/>
                    Dollar Layout, BTM 2nd Stage<br/>
                    Bangalore, Karnataka 560068
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm font-poppins">
                © 2024 CliniGlobal Research Institute Private Limited. All rights reserved.
              </p>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-poppins hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-poppins hover:underline"
              >
                Terms & Conditions
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-poppins hover:underline"
              >
                Refund Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 font-poppins hover:underline"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;