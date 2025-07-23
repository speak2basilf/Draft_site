import React, { useState } from 'react';
import { X, Send, Download, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonType: 'enroll' | 'counselling' | 'contact' | 'brochure';
  courseName?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, buttonType, courseName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseName || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showBrochureDownload, setShowBrochureDownload] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getModalTitle = () => {
    switch (buttonType) {
      case 'enroll': return 'Enroll Now';
      case 'counselling': return 'Schedule Free Counselling';
      case 'contact': return 'Contact Us';
      case 'brochure': return 'Download Brochure';
      default: return 'Contact Us';
    }
  };

  const getDefaultMessage = () => {
    switch (buttonType) {
      case 'enroll': return `I would like to enroll in the ${courseName} program. Please provide me with more details about the admission process.`;
      case 'counselling': return `I would like to schedule a free counselling session for the ${courseName} program. Please contact me at your earliest convenience.`;
      case 'brochure': return `I would like to download the brochure for the ${courseName} program. Please send me the detailed course information.`;
      default: return '';
    }
  };

  const triggerBrochureDownload = () => {
    // Create a dummy PDF download (in real implementation, this would be an actual PDF)
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKENsaW5pR2xvYmFsIENvdXJzZSBCcm9jaHVyZSkKL0NyZWF0b3IgKENsaW5pR2xvYmFsKQovUHJvZHVjZXIgKENsaW5pR2xvYmFsKQovQ3JlYXRpb25EYXRlIChEOjIwMjQwMTE1KQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMyAwIFIKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFs0IDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKENsaW5pR2xvYmFsIENvdXJzZSBCcm9jaHVyZSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago2IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKeHJlZgowIDcKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxNDggMDAwMDAgbiAKMDAwMDAwMDE5NSAwMDAwMCBuIAowMDAwMDAwMjUyIDAwMDAwIG4gCjAwMDAwMDAzNDkgMDAwMDAgbiAKMDAwMDAwMDQ0MyAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDcKL1Jvb3QgMiAwIFIKPj4Kc3RhcnR4cmVmCjUyNwolJUVPRg==';
    link.download = `${courseName || 'CliniGlobal'}_Course_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowBrochureDownload(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://hook.eu2.make.com/q4oedzjganbsk9c972mlj39p63kij5gi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message || getDefaultMessage(),
          formType: buttonType,
          timestamp: new Date().toISOString(),
          source: 'course_detail_page',
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', course: courseName || '', message: '' });
        
        // If it's a brochure request, trigger download after successful submission
        if (buttonType === 'brochure') {
          setTimeout(() => {
            triggerBrochureDownload();
          }, 1000);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    'PG Diploma in Clinical Research',
    'Advanced Diploma in Clinical Research',
    'Advanced Diploma in Clinical SAS',
    'Advanced Diploma in Medical Coding',
    'PG Diploma in AI & ML Healthcare',
    'MBA in Healthcare Management'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 font-poppins">{getModalTitle()}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                Thanks for registering! Our team will get in touch shortly.
              </h3>
              
              {buttonType === 'brochure' && (
                <div>
                  <p className="text-blue-800 mb-4 font-poppins">
                    Your brochure download should start automatically.
                  </p>
                  {showBrochureDownload && (
                    <button
                      onClick={triggerBrochureDownload}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-poppins"
                    >
                      <Download size={16} />
                      <span>If the brochure didn't download, click here</span>
                    </button>
                  )}
                  {!showBrochureDownload && (
                    <button
                      onClick={triggerBrochureDownload}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-poppins"
                    >
                      <Download size={16} />
                      <span>Download Brochure Now</span>
                    </button>
                  )}
                </div>
              )}
              
              <button
                onClick={onClose}
                className="mt-6 bg-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors font-poppins"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 resize-none font-poppins"
                  placeholder={getDefaultMessage()}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 font-poppins"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center">
                    <AlertCircle className="text-red-600 mr-3" size={20} />
                    <p className="text-red-800 font-medium font-poppins">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;