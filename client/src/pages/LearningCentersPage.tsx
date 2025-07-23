import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Building, Users, Award } from 'lucide-react';

const LearningCentersPage: React.FC = () => {
  const centers = [
    {
      id: 'hyderabad',
      name: 'Learning Center – Hyderabad',
      type: 'Learning Center',
      address: {
        line1: 'CliniGlobal Research Institute',
        line2: '303, Meghamala Apartment Road,',
        line3: 'Kumar Basti, Srinivasa Nagar, Ameerpet,',
        line4: 'Hyderabad – 500082, Telangana'
      },
      phones: ['+919052992967', '+917093794447'],
      email: 'hyderabad@cliniglobal.com',
      mapUrl: 'https://maps.google.com/?q=Ameerpet,Hyderabad',
      facilities: ['Modern Classrooms', 'Computer Lab', 'Library', 'Student Lounge'],
      timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
      facilityImages: [
        '/Facility 5 copy.jpeg',
        '/Facility 3.jpeg',
        '/Facility 4.jpeg'
      ]
    },
    {
      id: 'bangalore',
      name: 'Corporate Office – Bengaluru',
      type: 'Corporate Office',
      address: {
        line1: 'CliniGlobal Research Institute',
        line2: '125, 7th Cross Rd, Off Bannerghatta Rd,',
        line3: 'Dollar Layout, BTM 2nd Stage,',
        line4: 'Bengaluru – 560076, Karnataka'
      },
      phones: ['+919052992967', '+917093794447'],
      email: 'bangalore@cliniglobal.com',
      mapUrl: 'https://maps.google.com/?q=BTM+2nd+Stage,Bangalore',
      facilities: ['Executive Offices', 'Conference Rooms', 'Training Halls', 'Reception'],
      timings: 'Mon-Sat: 9:00 AM - 6:00 PM',
      facilityImages: [
        '/Facilty 6 copy.jpeg',
        '/Facility 7.jpeg',
        '/Facility 3 copy.jpeg'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Learning Centers" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Our <span className="text-yellow-400">Learning Centers</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
              State-of-the-art facilities designed to provide the best learning experience for our students
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Centers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {centers.map((center, index) => (
            <div key={center.id} className="bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 group">
              {/* Facility Images Carousel with Motion Effect */}
              <div className="relative h-64 overflow-hidden">
                <div className="flex animate-slide-infinite">
                  {[...center.facilityImages, ...center.facilityImages].map((image, imgIndex) => (
                    <div key={imgIndex} className="min-w-full h-64 relative">
                      <img 
                        src={image} 
                        alt={`${center.name} facility ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a default image if facility image fails to load
                          e.currentTarget.src = 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {center.type}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold font-poppins">{center.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Address</h4>
                      <div className="text-gray-700 space-y-1 font-poppins">
                        <p className="font-medium text-blue-600">{center.address.line1}</p>
                        <p>{center.address.line2}</p>
                        <p>{center.address.line3}</p>
                        <p className="font-medium">{center.address.line4}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Phone</h4>
                      {center.phones.map((phone, phoneIndex) => (
                        <p key={phoneIndex} className="text-gray-700 font-poppins">{phone}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-orange-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Timings</h4>
                      <p className="text-gray-700 font-poppins">{center.timings}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {center.facilities.map((facility, facilityIndex) => (
                      <div key={facilityIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="font-poppins">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => window.open(center.mapUrl, '_blank')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-poppins"
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                  </button>
                  
                  <button 
                    onClick={() => window.open(`tel:${center.phones[0]}`, '_self')}
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-poppins"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Why Choose Our Learning Centers?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <Building className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 font-poppins">Modern Infrastructure</h3>
              <p className="text-gray-600 text-sm font-poppins">State-of-the-art facilities with latest technology</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <Users className="text-green-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 font-poppins">Expert Faculty</h3>
              <p className="text-gray-600 text-sm font-poppins">Experienced professionals and industry experts</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <Award className="text-orange-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 font-poppins">Accredited Programs</h3>
              <p className="text-gray-600 text-sm font-poppins">Globally recognized certifications</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <Clock className="text-purple-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2 font-poppins">Flexible Timings</h3>
              <p className="text-gray-600 text-sm font-poppins">Weekend and evening batches available</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Visit Our Learning Centers
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Experience our world-class facilities and meet our expert faculty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCentersPage;