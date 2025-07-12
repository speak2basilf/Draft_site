import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowLeft, Search, Tag, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Clinical Research: Trends and Innovations',
      excerpt: 'Explore the latest trends shaping the clinical research industry, from AI-powered drug discovery to virtual clinical trials.',
      content: `
        <div class="blog-content">
          <h2>Introduction</h2>
          <p>The clinical research industry is undergoing a revolutionary transformation. With technological advancements and changing regulatory landscapes, the way we conduct clinical trials is evolving rapidly.</p>
          
          <img src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Clinical Research Laboratory" class="blog-image" />
          
          <h2>Key Trends Shaping Clinical Research</h2>
          
          <h3>1. Artificial Intelligence and Machine Learning</h3>
          <p>AI is revolutionizing clinical research by:</p>
          <ul>
            <li>Accelerating drug discovery processes</li>
            <li>Improving patient recruitment and retention</li>
            <li>Enhancing data analysis and interpretation</li>
            <li>Predicting trial outcomes more accurately</li>
          </ul>
          
          <h3>2. Virtual and Decentralized Clinical Trials</h3>
          <p>The COVID-19 pandemic accelerated the adoption of virtual trials, offering benefits such as:</p>
          <ul>
            <li>Increased patient accessibility</li>
            <li>Reduced costs and timelines</li>
            <li>Enhanced data quality through real-time monitoring</li>
            <li>Greater patient diversity and inclusion</li>
          </ul>
          
          <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Digital Healthcare Technology" class="blog-image" />
          
          <h3>3. Real-World Evidence (RWE)</h3>
          <p>Regulatory agencies are increasingly accepting real-world evidence to support drug approvals, leading to:</p>
          <ul>
            <li>Faster regulatory decisions</li>
            <li>More comprehensive safety profiles</li>
            <li>Better understanding of treatment effectiveness</li>
          </ul>
          
          <h2>Career Opportunities in Modern Clinical Research</h2>
          <p>These innovations are creating new career paths and opportunities:</p>
          <ul>
            <li><strong>Clinical Data Scientists:</strong> Professionals who can analyze complex datasets and derive meaningful insights</li>
            <li><strong>Digital Health Specialists:</strong> Experts in implementing and managing digital health technologies</li>
            <li><strong>Virtual Trial Coordinators:</strong> Specialists in managing remote clinical trials</li>
            <li><strong>AI/ML Clinical Researchers:</strong> Professionals who can bridge the gap between technology and clinical research</li>
          </ul>
          
          <h2>Preparing for the Future</h2>
          <p>To succeed in this evolving landscape, clinical research professionals should:</p>
          <ul>
            <li>Stay updated with technological advancements</li>
            <li>Develop skills in data analysis and interpretation</li>
            <li>Understand regulatory requirements for digital health</li>
            <li>Embrace continuous learning and adaptation</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>The future of clinical research is bright and full of opportunities. By embracing these trends and continuously updating our skills, we can contribute to bringing life-saving treatments to patients faster and more efficiently than ever before.</p>
        </div>
      `,
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Clinical Research',
      tags: ['AI', 'Virtual Trials', 'Innovation', 'Future Trends'],
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Medical Coding: A Gateway to Healthcare Career Success',
      excerpt: 'Discover how medical coding offers a stable and rewarding career path in the growing healthcare industry.',
      content: `
        <div class="blog-content">
          <h2>What is Medical Coding?</h2>
          <p>Medical coding is the process of transforming healthcare diagnoses, procedures, medical services, and equipment into universal medical alphanumeric codes. These codes are essential for billing, insurance claims, and maintaining accurate medical records.</p>
          
          <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Medical Coding and Documentation" class="blog-image" />
          
          <h2>Why Choose Medical Coding?</h2>
          
          <h3>1. High Demand and Job Security</h3>
          <p>The healthcare industry is experiencing unprecedented growth, creating a high demand for skilled medical coders. Key statistics include:</p>
          <ul>
            <li>15% projected job growth through 2029 (much faster than average)</li>
            <li>Over 200,000 medical coding jobs available nationwide</li>
            <li>Recession-proof career with stable employment</li>
          </ul>
          
          <h3>2. Competitive Salary and Benefits</h3>
          <p>Medical coding offers attractive compensation packages:</p>
          <ul>
            <li>Entry-level: ₹2.5-4 LPA</li>
            <li>Experienced professionals: ₹6-10 LPA</li>
            <li>Senior coders and auditors: ₹10-15 LPA</li>
            <li>Comprehensive benefits including health insurance and retirement plans</li>
          </ul>
          
          <h3>3. Flexible Work Options</h3>
          <p>Medical coding offers various work arrangements:</p>
          <ul>
            <li>Remote work opportunities</li>
            <li>Flexible scheduling options</li>
            <li>Part-time and full-time positions</li>
            <li>Freelance and contract opportunities</li>
          </ul>
          
          <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Healthcare Professionals" class="blog-image" />
          
          <h2>Essential Skills for Medical Coders</h2>
          
          <h3>Technical Skills</h3>
          <ul>
            <li>Proficiency in ICD-10, CPT, and HCPCS coding systems</li>
            <li>Understanding of medical terminology and anatomy</li>
            <li>Knowledge of healthcare regulations and compliance</li>
            <li>Familiarity with electronic health records (EHR) systems</li>
          </ul>
          
          <h3>Soft Skills</h3>
          <ul>
            <li>Attention to detail and accuracy</li>
            <li>Analytical and problem-solving abilities</li>
            <li>Time management and organizational skills</li>
            <li>Communication and teamwork capabilities</li>
          </ul>
          
          <h2>Career Advancement Opportunities</h2>
          <p>Medical coding offers clear paths for career growth:</p>
          <ul>
            <li><strong>Senior Medical Coder:</strong> Lead coding teams and handle complex cases</li>
            <li><strong>Coding Auditor:</strong> Review and ensure coding accuracy and compliance</li>
            <li><strong>Coding Manager:</strong> Oversee coding departments and operations</li>
            <li><strong>Compliance Officer:</strong> Ensure adherence to healthcare regulations</li>
            <li><strong>Healthcare Consultant:</strong> Provide expertise to healthcare organizations</li>
          </ul>
          
          <h2>Getting Started in Medical Coding</h2>
          <p>To begin your medical coding career:</p>
          <ol>
            <li>Complete a comprehensive medical coding training program</li>
            <li>Obtain industry certifications (CPC, CCS, etc.)</li>
            <li>Gain practical experience through internships or entry-level positions</li>
            <li>Continue professional development and stay updated with industry changes</li>
          </ol>
          
          <h2>Conclusion</h2>
          <p>Medical coding represents an excellent opportunity for individuals seeking a stable, well-compensated career in healthcare. With proper training and certification, you can join this growing field and make a meaningful contribution to the healthcare industry.</p>
        </div>
      `,
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Medical Coding',
      tags: ['Career', 'Healthcare', 'Medical Coding', 'Job Market'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Bioinformatics: Where Biology Meets Technology',
      excerpt: 'Learn about the exciting field of bioinformatics and its role in advancing personalized medicine and drug discovery.',
      content: `
        <div class="blog-content">
          <h2>Introduction to Bioinformatics</h2>
          <p>Bioinformatics is an interdisciplinary field that combines biology, computer science, and statistics to analyze and interpret biological data. As we generate more genomic and proteomic data than ever before, bioinformatics has become crucial for understanding complex biological processes.</p>
          
          <img src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="Bioinformatics Research" class="blog-image" />
          
          <h2>Key Applications of Bioinformatics</h2>
          
          <h3>1. Genomic Medicine</h3>
          <p>Bioinformatics plays a vital role in:</p>
          <ul>
            <li>Genome sequencing and assembly</li>
            <li>Variant calling and annotation</li>
            <li>Pharmacogenomics studies</li>
            <li>Personalized treatment recommendations</li>
          </ul>
          
          <h3>2. Drug Discovery and Development</h3>
          <p>Modern drug discovery relies heavily on bioinformatics for:</p>
          <ul>
            <li>Target identification and validation</li>
            <li>Molecular modeling and simulation</li>
            <li>Drug-drug interaction prediction</li>
            <li>Clinical trial optimization</li>
          </ul>
          
          <h3>3. Precision Medicine</h3>
          <p>Bioinformatics enables precision medicine through:</p>
          <ul>
            <li>Biomarker discovery and validation</li>
            <li>Patient stratification algorithms</li>
            <li>Treatment response prediction</li>
            <li>Disease risk assessment</li>
          </ul>
          
          <img src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" alt="DNA Analysis" class="blog-image" />
          
          <h2>Essential Skills for Bioinformatics Professionals</h2>
          
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming languages (Python, R, Java, C++)</li>
            <li>Database management and querying</li>
            <li>Statistical analysis and machine learning</li>
            <li>High-performance computing</li>
            <li>Bioinformatics tools and pipelines</li>
          </ul>
          
          <h3>Biological Knowledge</h3>
          <ul>
            <li>Molecular biology and genetics</li>
            <li>Biochemistry and cell biology</li>
            <li>Evolutionary biology</li>
            <li>Systems biology concepts</li>
          </ul>
          
          <h2>Career Opportunities in Bioinformatics</h2>
          
          <h3>Industry Roles</h3>
          <ul>
            <li><strong>Bioinformatics Scientist:</strong> Develop algorithms and analyze biological data</li>
            <li><strong>Computational Biologist:</strong> Apply computational methods to biological problems</li>
            <li><strong>Data Scientist:</strong> Extract insights from large biological datasets</li>
            <li><strong>Software Developer:</strong> Create bioinformatics tools and applications</li>
          </ul>
          
          <h3>Academic and Research Positions</h3>
          <ul>
            <li>Research scientist in academic institutions</li>
            <li>Postdoctoral researcher</li>
            <li>Principal investigator</li>
            <li>Bioinformatics core facility manager</li>
          </ul>
          
          <h2>Salary Expectations</h2>
          <p>Bioinformatics offers competitive salaries:</p>
          <ul>
            <li>Entry-level: ₹4-6 LPA</li>
            <li>Mid-level: ₹8-12 LPA</li>
            <li>Senior-level: ₹15-25 LPA</li>
            <li>Leadership roles: ₹25+ LPA</li>
          </ul>
          
          <h2>Future Trends in Bioinformatics</h2>
          <p>The field is evolving rapidly with emerging trends:</p>
          <ul>
            <li>Single-cell genomics and multi-omics integration</li>
            <li>Artificial intelligence and deep learning applications</li>
            <li>Cloud computing and distributed analysis</li>
            <li>Real-time data analysis and interpretation</li>
          </ul>
          
          <h2>Getting Started in Bioinformatics</h2>
          <p>To begin your bioinformatics career:</p>
          <ol>
            <li>Build a strong foundation in biology and computer science</li>
            <li>Learn programming languages commonly used in bioinformatics</li>
            <li>Gain hands-on experience with bioinformatics tools and databases</li>
            <li>Participate in research projects and internships</li>
            <li>Stay updated with the latest developments in the field</li>
          </ol>
          
          <h2>Conclusion</h2>
          <p>Bioinformatics represents the future of biological research and healthcare. As we continue to generate vast amounts of biological data, the need for skilled bioinformatics professionals will only grow. This field offers exciting opportunities to make meaningful contributions to human health and scientific discovery.</p>
        </div>
      `,
      author: 'Dr. Michael Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Bioinformatics',
      tags: ['Bioinformatics', 'Genomics', 'Technology', 'Career'],
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'Clinical Research', 'Medical Coding', 'Bioinformatics', 'Healthcare Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
        {/* Article Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </button>
            
            <div className="mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Healthcare <span className="text-yellow-400">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and developments in healthcare, clinical research, and medical technology
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70 transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/80 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div onClick={() => setSelectedPost(post)}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <ChevronRight className="text-blue-600 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;