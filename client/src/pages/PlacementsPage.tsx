import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Building, Clock, ExternalLink, Download, GraduationCap, Users, TrendingUp, Award, ChevronDown, Briefcase, Star, Calendar } from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  skills: string[];
  responsibilities: string[];
  source: string;
  sourceUrl: string;
  postedDate: string;
  course: string;
  industry: string;
}

const PlacementsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);

  // Mock job data - in real implementation, this would come from APIs
  const jobListings: JobListing[] = [
    {
      id: '1',
      title: 'Clinical Research Associate',
      company: 'Pfizer India',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4.5 - 6.5 LPA',
      skills: ['GCP Guidelines', 'Clinical Trials', 'Site Management', 'Data Collection'],
      responsibilities: [
        'Monitor clinical trial sites for compliance',
        'Ensure adherence to GCP guidelines',
        'Collect and verify clinical data',
        'Prepare monitoring reports'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '2 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '2',
      title: 'Medical Coder - ICD-10',
      company: 'Optum Global Solutions',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹3.2 - 4.8 LPA',
      skills: ['ICD-10', 'CPT Coding', 'Medical Terminology', 'HCPCS'],
      responsibilities: [
        'Review medical records for accurate coding',
        'Assign appropriate ICD-10 and CPT codes',
        'Ensure compliance with coding guidelines',
        'Maintain coding accuracy standards'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '1 day ago',
      course: 'Medical Coding',
      industry: 'Healthcare IT'
    },
    {
      id: '3',
      title: 'Clinical SAS Programmer',
      company: 'Novartis Healthcare',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6.0 - 9.0 LPA',
      skills: ['SAS Programming', 'Clinical Data Analysis', 'CDISC Standards', 'Statistical Analysis'],
      responsibilities: [
        'Develop SAS programs for clinical data analysis',
        'Create statistical reports and tables',
        'Validate clinical databases',
        'Support regulatory submissions'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '3 days ago',
      course: 'Clinical SAS',
      industry: 'Pharmaceutical'
    },
    {
      id: '4',
      title: 'Bioinformatics Analyst',
      company: 'Johnson & Johnson',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹5.5 - 7.5 LPA',
      skills: ['Python', 'R Programming', 'Genomics', 'Data Analysis', 'Bioinformatics Tools'],
      responsibilities: [
        'Analyze genomic and proteomic data',
        'Develop bioinformatics pipelines',
        'Support drug discovery research',
        'Collaborate with research teams'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '1 week ago',
      course: 'Bioinformatics',
      industry: 'Biotechnology'
    },
    {
      id: '5',
      title: 'Pharmacovigilance Associate',
      company: 'Dr. Reddy\'s Laboratories',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹3.8 - 5.2 LPA',
      skills: ['Drug Safety', 'Adverse Event Reporting', 'MedDRA', 'Regulatory Guidelines'],
      responsibilities: [
        'Process adverse event reports',
        'Ensure compliance with safety regulations',
        'Prepare safety reports for regulatory authorities',
        'Maintain safety databases'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '4 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '6',
      title: 'Healthcare Data Analyst',
      company: 'Apollo Hospitals',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4.0 - 6.0 LPA',
      skills: ['Healthcare Analytics', 'SQL', 'Tableau', 'Statistical Analysis'],
      responsibilities: [
        'Analyze healthcare data for insights',
        'Create dashboards and reports',
        'Support clinical decision making',
        'Ensure data quality and integrity'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '5 days ago',
      course: 'AI & ML Healthcare',
      industry: 'Healthcare'
    },
    {
      id: '7',
      title: 'Regulatory Affairs Specialist',
      company: 'Cipla Limited',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹5.0 - 7.5 LPA',
      skills: ['Regulatory Submissions', 'FDA Guidelines', 'Drug Registration', 'Compliance'],
      responsibilities: [
        'Prepare regulatory submissions',
        'Ensure compliance with regulatory requirements',
        'Liaise with regulatory authorities',
        'Support product registrations'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '6 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '8',
      title: 'Clinical Data Manager',
      company: 'Biocon Limited',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹6.5 - 9.5 LPA',
      skills: ['Clinical Data Management', 'EDC Systems', 'Data Validation', 'CDISC'],
      responsibilities: [
        'Design and maintain clinical databases',
        'Ensure data quality and integrity',
        'Perform data validation and cleaning',
        'Generate data reports for analysis'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '1 week ago',
      course: 'Clinical Research',
      industry: 'Biotechnology'
    },
    {
      id: '9',
      title: 'Medical Writer',
      company: 'Lupin Pharmaceuticals',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4.5 - 6.5 LPA',
      skills: ['Medical Writing', 'Clinical Documentation', 'Regulatory Writing', 'Scientific Communication'],
      responsibilities: [
        'Prepare clinical study reports',
        'Write regulatory documents',
        'Develop medical communications',
        'Ensure document quality and compliance'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '3 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '10',
      title: 'Healthcare Operations Manager',
      company: 'Fortis Healthcare',
      location: 'Delhi, NCR',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹8.0 - 12.0 LPA',
      skills: ['Healthcare Management', 'Operations', 'Team Leadership', 'Process Improvement'],
      responsibilities: [
        'Manage healthcare operations',
        'Lead cross-functional teams',
        'Implement process improvements',
        'Ensure quality healthcare delivery'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '2 days ago',
      course: 'MBA Healthcare',
      industry: 'Healthcare'
    },
    {
      id: '11',
      title: 'Biostatistician',
      company: 'Glenmark Pharmaceuticals',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6.0 - 8.5 LPA',
      skills: ['Biostatistics', 'SAS', 'R Programming', 'Clinical Trial Design', 'Statistical Analysis'],
      responsibilities: [
        'Design statistical analysis plans',
        'Perform statistical analysis of clinical data',
        'Prepare statistical reports',
        'Support regulatory submissions'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '4 days ago',
      course: 'Clinical SAS',
      industry: 'Pharmaceutical'
    },
    {
      id: '12',
      title: 'Quality Assurance Specialist',
      company: 'Cadila Healthcare',
      location: 'Ahmedabad, Gujarat',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3.5 - 5.5 LPA',
      skills: ['Quality Assurance', 'GMP Guidelines', 'Audit Management', 'Documentation'],
      responsibilities: [
        'Conduct quality audits',
        'Ensure GMP compliance',
        'Review and approve documentation',
        'Implement quality improvement initiatives'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '5 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '13',
      title: 'Clinical Research Coordinator',
      company: 'Mankind Pharma',
      location: 'Delhi, NCR',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹3.0 - 4.5 LPA',
      skills: ['Clinical Coordination', 'Patient Recruitment', 'Protocol Management', 'GCP'],
      responsibilities: [
        'Coordinate clinical trial activities',
        'Manage patient recruitment and retention',
        'Ensure protocol compliance',
        'Maintain trial documentation'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '1 day ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '14',
      title: 'Healthcare AI Specialist',
      company: 'Philips Healthcare',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹7.0 - 10.0 LPA',
      skills: ['Machine Learning', 'Healthcare AI', 'Python', 'Deep Learning', 'Medical Imaging'],
      responsibilities: [
        'Develop AI solutions for healthcare',
        'Implement machine learning algorithms',
        'Analyze medical data and images',
        'Collaborate with clinical teams'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '6 days ago',
      course: 'AI & ML Healthcare',
      industry: 'Healthcare Technology'
    },
    {
      id: '15',
      title: 'Medical Affairs Associate',
      company: 'Zydus Cadila',
      location: 'Ahmedabad, Gujarat',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4.0 - 6.0 LPA',
      skills: ['Medical Affairs', 'Scientific Communication', 'KOL Management', 'Medical Education'],
      responsibilities: [
        'Support medical affairs activities',
        'Manage key opinion leader relationships',
        'Develop medical education materials',
        'Provide scientific support to sales teams'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '1 week ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '16',
      title: 'Revenue Cycle Analyst',
      company: 'Max Healthcare',
      location: 'Delhi, NCR',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3.8 - 5.5 LPA',
      skills: ['Revenue Cycle Management', 'Medical Billing', 'Healthcare Finance', 'Data Analysis'],
      responsibilities: [
        'Analyze revenue cycle performance',
        'Identify billing and collection issues',
        'Implement process improvements',
        'Generate financial reports'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '3 days ago',
      course: 'Medical Coding',
      industry: 'Healthcare'
    },
    {
      id: '17',
      title: 'Clinical Trial Manager',
      company: 'Sanofi India',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹8.5 - 12.0 LPA',
      skills: ['Clinical Trial Management', 'Project Management', 'Team Leadership', 'Regulatory Knowledge'],
      responsibilities: [
        'Manage clinical trial operations',
        'Lead project teams',
        'Ensure timeline and budget compliance',
        'Coordinate with regulatory authorities'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '4 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    },
    {
      id: '18',
      title: 'Genomics Data Scientist',
      company: 'MedGenome Labs',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6.5 - 9.0 LPA',
      skills: ['Genomics', 'Bioinformatics', 'Python', 'NGS Data Analysis', 'Machine Learning'],
      responsibilities: [
        'Analyze genomic sequencing data',
        'Develop bioinformatics pipelines',
        'Interpret genetic variants',
        'Support precision medicine initiatives'
      ],
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/jobs',
      postedDate: '5 days ago',
      course: 'Bioinformatics',
      industry: 'Genomics'
    },
    {
      id: '19',
      title: 'Healthcare Consultant',
      company: 'McKinsey & Company',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹12.0 - 18.0 LPA',
      skills: ['Healthcare Consulting', 'Strategy', 'Analytics', 'Project Management', 'Client Management'],
      responsibilities: [
        'Provide strategic healthcare consulting',
        'Analyze healthcare market trends',
        'Develop business strategies',
        'Present findings to clients'
      ],
      source: 'Naukri.com',
      sourceUrl: 'https://www.naukri.com',
      postedDate: '1 week ago',
      course: 'MBA Healthcare',
      industry: 'Consulting'
    },
    {
      id: '20',
      title: 'Drug Safety Scientist',
      company: 'AstraZeneca',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6.0 - 8.5 LPA',
      skills: ['Pharmacovigilance', 'Drug Safety', 'Risk Assessment', 'Regulatory Reporting', 'Signal Detection'],
      responsibilities: [
        'Evaluate drug safety profiles',
        'Conduct risk-benefit assessments',
        'Prepare safety reports',
        'Monitor post-market surveillance data'
      ],
      source: 'Indeed',
      sourceUrl: 'https://www.indeed.com',
      postedDate: '2 days ago',
      course: 'Clinical Research',
      industry: 'Pharmaceutical'
    }
  ];

  const courses = ['All Courses', 'Clinical Research', 'Medical Coding', 'Clinical SAS', 'Bioinformatics', 'AI & ML Healthcare', 'MBA Healthcare'];
  const locations = ['All Locations', 'Mumbai', 'Bangalore', 'Hyderabad', 'Delhi NCR', 'Chennai', 'Pune', 'Ahmedabad'];
  const industries = ['All Industries', 'Pharmaceutical', 'Healthcare IT', 'Biotechnology', 'Healthcare', 'Healthcare Technology', 'Genomics', 'Consulting'];

  useEffect(() => {
    let filtered = jobListings;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCourse && selectedCourse !== 'All Courses') {
      filtered = filtered.filter(job => job.course === selectedCourse);
    }

    if (selectedLocation && selectedLocation !== 'All Locations') {
      filtered = filtered.filter(job => job.location.includes(selectedLocation));
    }

    if (selectedIndustry && selectedIndustry !== 'All Industries') {
      filtered = filtered.filter(job => job.industry === selectedIndustry);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedCourse, selectedLocation, selectedIndustry]);

  const downloadJobPDF = (job: JobListing) => {
    // In a real implementation, this would generate and download a PDF
    alert(`Downloading job details for ${job.title} at ${job.company}`);
  };

  const placementStats = [
    { icon: Users, number: '5000+', label: 'Students Placed', color: 'blue' },
    { icon: Building, number: '50+', label: 'Partner Companies', color: 'indigo' },
    { icon: TrendingUp, number: '95%', label: 'Placement Rate', color: 'blue' },
    { icon: Award, number: '₹18L', label: 'Highest Package', color: 'indigo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Career Opportunities" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 font-poppins">
              Career <span className="text-yellow-400">Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
              Discover exciting job opportunities in healthcare and clinical research. 
              Find your perfect role with our comprehensive placement support.
            </p>
            
            {/* Placement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {placementStats.map((stat, index) => (
                <div key={index} className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <stat.icon className="mx-auto mb-4 text-white" size={32} />
                  <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">{stat.number}</div>
                  <div className="text-white/80 text-xs md:text-sm font-poppins">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-poppins">Find Your Perfect Job</h2>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by job title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 text-base md:text-lg font-poppins"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
              >
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300 font-poppins"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-poppins">
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} 
            {searchTerm && ` for "${searchTerm}"`}
          </h3>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/80 hover:scale-105 transition-all duration-500 group">
              {/* Job Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 font-poppins">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2 font-poppins">
                      <Building className="mr-2" size={16} />
                      <span className="font-medium text-sm md:text-base">{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2 font-poppins">
                      <MapPin className="mr-2" size={16} />
                      <span className="text-sm md:text-base">{job.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 font-poppins">
                      {job.course}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-poppins">{job.postedDate}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 font-poppins">Experience:</span>
                    <div className="font-medium text-gray-900 font-poppins">{job.experience}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-poppins">Salary:</span>
                    <div className="font-medium text-green-600 font-poppins">{job.salary}</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 font-poppins text-sm md:text-base">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium font-poppins">
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="bg-gray-100 text-gray-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-poppins">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 font-poppins text-sm md:text-base">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {job.responsibilities.slice(0, 3).map((responsibility, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-gray-700 font-poppins">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source and Actions */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs md:text-sm text-gray-600 font-poppins">
                    Source: <span className="font-medium font-poppins">{job.source}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => downloadJobPDF(job)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Download Job Details"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => window.open(job.sourceUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-medium font-poppins text-sm md:text-base"
                >
                  <span>Apply Now</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <Briefcase className="mx-auto mb-4 text-gray-400" size={64} />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-poppins">No jobs found</h3>
            <p className="text-gray-600 mb-6 font-poppins">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCourse('');
                setSelectedLocation('');
                setSelectedIndustry('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-poppins"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Ready to Start Your Healthcare Career?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Join CliniGlobal and get 100% placement assistance with top healthcare companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base md:text-lg font-poppins">
                Explore Courses
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-base md:text-lg font-poppins">
                Schedule Counselling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementsPage;