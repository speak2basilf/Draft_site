import React from 'react';
import { Link } from 'wouter';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="text-2xl font-bold text-blue-600">CliniGlobal</div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
            <Link href="/placements" className="text-gray-700 hover:text-blue-600">Placements</Link>
            <Link href="/accreditations" className="text-gray-700 hover:text-blue-600">Accreditations</Link>
            <Link href="/learning-centers" className="text-gray-700 hover:text-blue-600">Learning Centers</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;