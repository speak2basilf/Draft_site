import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300">
            Ready to start your career in clinical research? Contact us today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300">+91 90529 92967</p>
            <p className="text-gray-300">+91 70937 94447</p>
          </div>
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300">info@cliniglobal.com</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300">Hyderabad & Bangalore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;