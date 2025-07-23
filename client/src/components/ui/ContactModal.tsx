import React, { useState } from 'react';
import { X, Phone, Mail, Download, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  type: 'enroll' | 'counselling' | 'contact' | 'brochure';
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, type, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  if (!isOpen) return null;

  const getModalTitle = () => {
    switch (type) {
      case 'enroll': return 'Enroll Now';
      case 'counselling': return 'Book Free Counselling';
      case 'contact': return 'Contact Us';
      case 'brochure': return 'Download Brochure';
      default: return 'Contact Us';
    }
  };

  const getModalIcon = () => {
    switch (type) {
      case 'enroll': return <Phone className="text-blue-600" size={24} />;
      case 'counselling': return <MessageCircle className="text-green-600" size={24} />;
      case 'contact': return <Mail className="text-purple-600" size={24} />;
      case 'brochure': return <Download className="text-orange-600" size={24} />;
      default: return <Mail className="text-blue-600" size={24} />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {getModalIcon()}
              <h2 className="text-2xl font-bold text-gray-900">{getModalTitle()}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Course of Interest
              </label>
              <select
                id="course"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
              >
                <option value="">Select a course</option>
                <option value="crm">PG Diploma in Clinical Research</option>
                <option value="adcr">Advanced Diploma in Clinical Research</option>
                <option value="clinical-sas">Clinical SAS Programming</option>
                <option value="medical-coding">Medical Coding</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {type === 'brochure' ? 'Download Brochure' : 'Submit'}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;