import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Heart, Star, Sparkles, MessageSquare, Calendar, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    course: ''
  });

  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCallbackForm({
      ...callbackForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Log the data being sent for debugging
      console.log('Form data being sent:', formData);
      
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
          message: formData.message,
          formType: 'general_enquiry',
          timestamp: new Date().toISOString(),
          source: 'website_contact_form',
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'direct'
        }),
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      } else {
        console.error('Response not ok:', response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Callback request submitted:', callbackForm);
    setCallbackForm({ name: '', phone: '', preferredTime: '', course: '' });
  };

  const courses = [
    'CRM (Clinical Research Management)',
    'Clinical SAS',
    'Bioinformatics',
    'AI & ML in Healthcare',
    'MBA in Healthcare Management'
  ];

  const locations = [
    {
      city: 'Bangalore',
      address: 'CliniGlobal Research',
      fullAddress: '125, 7th Cross Road, Off Bannerghatta Road, Dollar Layout, BTM 2nd Stage',
      pincode: 'Bangalore, Karnataka 560068',
      phone: '+919052992967',
      email: 'admin@cliniglobal.com'
    },
    {
      city: 'Bengaluru',
      address: 'CliniGlobal Research Institute',
      fullAddress: '125, 7th Cross Rd, Off Bannerghatta Rd, Dollar Layout, BTM 2nd Stage',
      pincode: 'Bengaluru – 560076, Karnataka',
      phones: ['+917093794447', '+919629752834'],
      email: 'bangalore@cliniglobal.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 right-1/3 text-pink-400 opacity-50 animate-bounce" size={20} style={{ animationDelay: '0s', animationDuration: '3.8s' }} />
        <Star className="absolute bottom-32 left-1/4 text-yellow-400 opacity-60 animate-bounce" size={22} style={{ animationDelay: '1s', animationDuration: '4.2s' }} />
        <Sparkles className="absolute top-1/3 left-1/5 text-purple-400 opacity-40 animate-bounce" size={24} style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your healthcare career journey? Contact us today for personalized guidance and course recommendations.
          </p>
        </div>

        {/* Contact Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'general'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <Mail className="inline-block mr-2" size={16} />
                General Inquiries
              </button>
              <button
                onClick={() => setActiveTab('locations')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'locations'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <MapPin className="inline-block mr-2" size={16} />
                Locations
              </button>
              <button
                onClick={() => setActiveTab('callback')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'callback'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <MessageSquare className="inline-block mr-2" size={16} />
                Request Callback
              </button>
            </div>
          </div>
        </div>

        {/* General Inquiries Tab */}
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start Your Journey</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our career counselors are here to help you choose the right program and guide you towards a successful healthcare career.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/60 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+919052992967</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/60 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                    <Mail className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@cliniglobal.com</p>
                    <p className="text-gray-600">admin@cliniglobal.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl hover:bg-white/60 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                    <Clock className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/50 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 resize-none"
                    placeholder="Tell us about your career goals and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={20} />
                </button>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-800 text-center font-medium">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-800 text-center font-medium">
                      ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Locations Tab */}
        {activeTab === 'locations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/50 hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.city} Center</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      <p className="font-medium text-blue-600 mb-1">{location.address}</p>
                      <p>{location.fullAddress}</p>
                      <p className="mt-2 font-medium">{location.pincode}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600 text-sm">{location.phone}</p>
                    <p className="text-gray-600 text-sm">{location.email}</p>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Request Callback Tab */}
        {activeTab === 'callback' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:bg-white/50 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Callback</h3>
                <p className="text-gray-600">Our counselors will call you back within 24 hours for personalized assistance</p>
              </div>

              <form onSubmit={handleCallbackSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="callback-name"
                      name="name"
                      value={callbackForm.name}
                      onChange={handleCallbackChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="callback-phone"
                      name="phone"
                      value={callbackForm.phone}
                      onChange={handleCallbackChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferred-time"
                      name="preferredTime"
                      value={callbackForm.preferredTime}
                      onChange={handleCallbackChange}
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="callback-course" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Course
                    </label>
                    <select
                      id="callback-course"
                      name="course"
                      value={callbackForm.course}
                      onChange={handleCallbackChange}
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Request Callback</span>
                  <Calendar size={20} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Quick Contact Options */}
        <div className="text-center mt-16">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Our counselors are available to help you choose the right course and answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full hover:from-blue-700/90 hover:to-indigo-700/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Call Now: +919052992967
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919052992967?text=Hello%20CliniGlobal,%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20courses.', '_blank')}
                className="bg-white/20 backdrop-blur-md border border-blue-600/30 text-blue-600 px-8 py-3 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;