import React from 'react';
import { 
  FaSearch,
  FaClipboardCheck,
  FaCheckCircle,
  FaFileAlt,
  FaExchangeAlt,
  FaBriefcase,
  FaBolt,
  FaBullseye
} from 'react-icons/fa';
import StaffingSolutions from '../components/sections/check';

const StaffingPage = () => {
  const differentiators = [
    {
      phase: 'Sourcing',
      icon: <FaSearch className="text-3xl text-yellow-300" />,
      features: [
        'AI Driven Candidate Relevance Score',
        'Partial & Exact Match Search',
        'Advanced Resume Parsing',
        'Predictive Analytics',
        'WhatsApp Business API Integration',
        'DIGIVERIFIED Resumes'
      ]
    },
    {
      phase: 'Screening & Selection',
      icon: <FaClipboardCheck className="text-3xl text-blue-300" />,
      features: [
        'AI Chatbots & Voice BOT Interviews',
        'Coding Assessments & MCQs',
        'Video Conferencing Tools',
        'Autonomous Candidate Follow-ups',
        'Automated Interview Rounds'
      ]
    },
    {
      phase: 'Background Check',
      icon: <FaCheckCircle className="text-3xl text-green-300" />,
      features: [
        'DigiLocker Verification',
        'ITR & UAN EPFO Checks',
        'Property & Database Verification',
        'ID & Address Validation',
        'Education & Employment History'
      ]
    }
  ];

  const staffingTypes = [
    { type: 'Contract', icon: <FaFileAlt className="text-primary" /> },
    { type: 'Contract to Hire', icon: <FaExchangeAlt className="text-secondary" /> },
    { type: 'Permanent / Full time Hire', icon: <FaBriefcase className="text-accentOrange" /> },
    { type: 'Flexi Staffing (On demand)', icon: <FaBolt className="text-accentPink" /> },
    { type: 'Work Ready Consultants (RTD)', icon: <FaBullseye className="text-darkBlue" /> }
  ];

  const domains = [
    'PEGA Specialist',
    'DEVOPS and DATA ANALYTICS',
    'SAP (Functional, Technical, CRM, Success Factors, ISU)',
    'MS Technologies',
    'PeopleSoft & Siebel',
    'Cloud Implementations & Migrations'
  ];

  const industries = [
    'Banking / Financials',
    'Retail',
    'Manufacturing',
    'Life Sciences / Healthcare',
    'Automotive',
    'Insurance and others...'
  ];

  return (
    <div className="min-h-screen py-12 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            Staffing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive and verified HR resources with specialist skills and cross-industry experience to address your business requirements.
          </p>
        </div>

        {/* AI Differentiator */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AI Driven Profiling</h2>
              <p className="text-xl opacity-90">Powered by hirex.ai & Digiverifier</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <div 
                  key={item.phase} 
                  className="bg-white bg-opacity-10 p-6 backdrop-blur-sm rounded-xl"
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.phase}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm opacity-90 flex items-start">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <StaffingSolutions />

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in px-8">
          <div className="bg-darkBlue rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Perfect Talent Match?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Leverage our AI-driven staffing solutions and extensive network to find the right candidates for your business.
            </p>
            <button className="bg-accentOrange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingPage;
