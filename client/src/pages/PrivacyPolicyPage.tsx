import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Globe, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-poppins">
              Your privacy is important to us. This policy explains how CliniGlobal collects, uses, and protects your information.
            </p>
            <p className="text-sm text-white/80 font-poppins">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-blue-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
            CliniGlobal Research Institute Private Limited ("CliniGlobal," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Personal Information</h3>
              <p className="text-gray-700 mb-3 font-poppins">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Name, email address, phone number</li>
                <li>Educational background and qualifications</li>
                <li>Professional experience and career interests</li>
                <li>Course enrollment and academic records</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Website usage patterns and preferences</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Referral sources and search terms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Eye className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">How We Use Your Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins">Educational Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                <li>Process course enrollments and registrations</li>
                <li>Deliver educational content and materials</li>
                <li>Track academic progress and performance</li>
                <li>Provide student support services</li>
                <li>Issue certificates and credentials</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins">Communication & Marketing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                <li>Send course updates and announcements</li>
                <li>Provide customer support and assistance</li>
                <li>Share relevant educational opportunities</li>
                <li>Conduct surveys and feedback collection</li>
                <li>Send promotional materials (with consent)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins">Business Operations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                <li>Process payments and billing</li>
                <li>Maintain accurate records</li>
                <li>Improve our services and website</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-poppins">Placement Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins text-sm">
                <li>Connect students with employers</li>
                <li>Share profiles with potential employers</li>
                <li>Provide career guidance and support</li>
                <li>Track placement success rates</li>
                <li>Maintain alumni networks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-orange-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Information Sharing and Disclosure</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">We may share your information with:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li><strong>Educational Partners:</strong> Accredited institutions and certification bodies</li>
                <li><strong>Placement Partners:</strong> Employers and recruitment agencies (with your consent)</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-blue-800 font-medium font-poppins">
                <strong>Important:</strong> We never sell your personal information to third parties for marketing purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Lock className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Data Security</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Technical Measures</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security updates and patches</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Organizational Measures</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Employee training on data protection</li>
                  <li>Limited access on need-to-know basis</li>
                  <li>Regular security audits and assessments</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-indigo-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Your Rights and Choices</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              You have the following rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Access</h4>
                    <p className="text-gray-700 text-sm font-poppins">Request copies of your personal information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Correction</h4>
                    <p className="text-gray-700 text-sm font-poppins">Update or correct inaccurate information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Deletion</h4>
                    <p className="text-gray-700 text-sm font-poppins">Request deletion of your personal information</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Portability</h4>
                    <p className="text-gray-700 text-sm font-poppins">Receive your data in a portable format</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Opt-out</h4>
                    <p className="text-gray-700 text-sm font-poppins">Unsubscribe from marketing communications</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">Restriction</h4>
                    <p className="text-gray-700 text-sm font-poppins">Limit how we process your information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies Policy */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Cookies and Tracking Technologies</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Improve website functionality and performance</li>
              <li>Deliver targeted advertisements (with your consent)</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-xl">
              <p className="text-yellow-800 font-medium font-poppins">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Data Retention</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Student Records</h3>
                <p className="text-gray-700 text-sm font-poppins">
                  Academic records and certificates are retained permanently for verification purposes and alumni services.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Marketing Data</h3>
                <p className="text-gray-700 text-sm font-poppins">
                  Marketing communications data is retained until you opt-out or for a maximum of 3 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us</h2>
            <p className="text-white/90 font-poppins">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="text-white/90 font-poppins">privacy@cliniglobal.com</p>
                  <p className="text-white/90 font-poppins">info@cliniglobal.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Phone</p>
                  <p className="text-white/90 font-poppins">+919052992967</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="text-white mt-1" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Address</p>
                  <p className="text-white/90 text-sm font-poppins">
                    CliniGlobal Research Institute Private Limited<br/>
                    125, 7th Cross Road, Off Bannerghatta Road<br/>
                    Dollar Layout, BTM 2nd Stage<br/>
                    Bangalore, Karnataka 560068
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm font-poppins">
              This Privacy Policy is effective as of January 15, 2024, and may be updated from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;