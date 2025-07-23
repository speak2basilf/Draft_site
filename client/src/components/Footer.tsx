import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">CliniGlobal</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's leading clinical research training institute with 100% placement guarantee. 
                Transforming healthcare careers since 2008.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/placements" className="text-gray-300 hover:text-white transition-colors">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="/accreditations" className="text-gray-300 hover:text-white transition-colors">
                    Accreditations
                  </Link>
                </li>
                <li>
                  <Link href="/learning-centers" className="text-gray-300 hover:text-white transition-colors">
                    Learning Centers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/courses/crm" className="text-gray-300 hover:text-white transition-colors">
                    Clinical Research
                  </Link>
                </li>
                <li>
                  <Link href="/courses/adcr" className="text-gray-300 hover:text-white transition-colors">
                    Advanced Clinical Research
                  </Link>
                </li>
                <li>
                  <Link href="/courses/clinical-sas" className="text-gray-300 hover:text-white transition-colors">
                    Clinical SAS Programming
                  </Link>
                </li>
                <li>
                  <Link href="/courses/medical-coding" className="text-gray-300 hover:text-white transition-colors">
                    Medical Coding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+91 90529 92967</p>
                    <p className="text-gray-300">+91 70937 94447</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">info@cliniglobal.com</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Hyderabad & Bangalore</p>
                    <p className="text-gray-400 text-sm">Multiple Learning Centers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CliniGlobal Research Institute. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;