import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo white.jpeg" 
                alt="CliniGlobal Logo" 
                className="h-10 w-10 md:h-12 md:w-12 mr-3 rounded-lg shadow-md"
              />
              <h3 className="text-xl md:text-2xl font-bold cliniglobal-brand font-poppins">
                <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed font-poppins text-sm md:text-base">
              India's leading healthcare training institute, transforming careers through comprehensive clinical research, 
              bioinformatics, and healthcare management programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#crm-course" className="text-gray-300 hover:text-blue-400 transition-colors">PG Diploma in Clinical Research</a></li>
              <li><a href="#clinical-sas-course" className="text-gray-300 hover:text-blue-400 transition-colors">Advanced Diploma in Clinical SAS</a></li>
              <li><a href="#bioinformatics-course" className="text-gray-300 hover:text-blue-400 transition-colors">Advanced Diploma in Bioinformatics</a></li>
              <li><a href="#medical-coding-course" className="text-gray-300 hover:text-blue-400 transition-colors">Advanced Diploma in Medical Coding</a></li>
              <li><a href="#ai-ml-course" className="text-gray-300 hover:text-blue-400 transition-colors">PG Diploma in AI & ML Healthcare</a></li>
              <li><a href="#mba-course" className="text-gray-300 hover:text-blue-400 transition-colors">MBA in Healthcare Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#admission" className="text-gray-300 hover:text-blue-400 transition-colors">Admission</a></li>
              <li><a href="#placements" className="text-gray-300 hover:text-blue-400 transition-colors">Placements</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#leadership" className="text-gray-300 hover:text-blue-400 transition-colors">Faculty</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">+919052992967</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">info@cliniglobal.com</p>
                  <p className="text-gray-300">admin@cliniglobal.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <div>
                  <p className="text-blue-400 font-medium">CliniGlobal Research Institute Private Limited</p>
                  <p className="text-gray-300">125, 7th Cross Road</p>
                  <p className="text-gray-300">Off Bannerghatta Road</p>
                  <p className="text-gray-300">Dollar Layout, BTM 2nd Stage</p>
                  <p className="text-gray-300">Bangalore, Karnataka 560068</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-300 text-sm">
                © 2024 CliniGlobal Research Institute Private Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Site Crafted & Powered by</span>
                <span className="relative group">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse hover:animate-none transition-all duration-300 text-lg tracking-wider">
                    ManageOps
                  </span>
                  {/* Neon glow effect */}
                  <span className="absolute inset-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300 text-lg tracking-wider">
                    ManageOps
                  </span>
                  {/* Additional outer glow */}
                  <span className="absolute inset-0 font-bold text-cyan-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 text-lg tracking-wider">
                    ManageOps
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Sitemap</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Accessibility Statement</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;