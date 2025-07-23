import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CliniGlobal</h3>
            <p className="text-gray-300">
              India's leading clinical research training institute with 100% placement guarantee.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
              <li><Link href="/placements" className="text-gray-300 hover:text-white">Placements</Link></li>
              <li><Link href="/accreditations" className="text-gray-300 hover:text-white">Accreditations</Link></li>
              <li><Link href="/learning-centers" className="text-gray-300 hover:text-white">Learning Centers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link href="/courses/crm" className="text-gray-300 hover:text-white">Clinical Research</Link></li>
              <li><Link href="/courses/clinical-sas" className="text-gray-300 hover:text-white">Clinical SAS</Link></li>
              <li><Link href="/courses/medical-coding" className="text-gray-300 hover:text-white">Medical Coding</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">+91 90529 92967</p>
            <p className="text-gray-300">info@cliniglobal.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CliniGlobal Research Institute. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-white ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;