import React from 'react';
import StaffingSolutions from '../components/sections/check';

const StaffingPage = () => {
  const differentiators = [
    {
      phase: 'Sourcing',
      icon: '🔍',
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
      icon: '📋',
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
      icon: '✅',
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
    { type: 'Contract', icon: '📝' },
    { type: 'Contract to Hire', icon: '🔄' },
    { type: 'Permanent / Full time Hire', icon: '💼' },
    { type: 'Flexi Staffing (On demand)', icon: '⚡' },
    { type: 'Work Ready Consultants (RTD)', icon: '🎯' }
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
      <div cclassName="max-w-7xl ">
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
        <div className="mb-16 animate-fade-in-up ">
          <div className="bg-gradient-to-r from-primary to-secondary  p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AI Driven Profiling</h2>
              <p className="text-xl opacity-90">Powered by hirex.ai & Digiverifier</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <div key={item.phase} className="bg-white bg-opacity-10  p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-4">{item.icon}</div>
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
        <StaffingSolutions/>

    

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