import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  CheckCircle, 
  MessageCircle, 
  Video, 
  FileText, 
  ChevronDown,
  ChevronUp,
  Brain,
  Bot,
  Code,
  MessageSquare,
  ShieldCheck,
  Database,
  Cloud,
  Building,
  ShoppingCart,
  Factory,
  Car,
  Heart
} from 'lucide-react';

const StaffingPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const staffingFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "AI Driven Profiling",
      subtitle: "Powered by hirex.ai & Digiverifier",
      features: [
        "Candidate relevance score Vs job description",
        "Partial & Exact match search",
        "AI driven advanced search and resume parsing",
        "Predictive analytics on candidates",
        "WhatsApp business API integration",
        "Plugins and scripts to extract",
        "DIGIVERIFIED resumes from ViTS database"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Screening & Selection",
      features: [
        "Chatbots",
        "Voice-based BOT Interview",
        "Coding Assessments",
        "MCQs and Assignments",
        "Video Conferencing tools",
        "Autonomous candidate follow-ups",
        "Automated interview rounds"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "BGC Check Cleared",
      features: [
        "DigiLocker",
        "ITR 26AS",
        "UAN EPFO",
        "PROP DNHDB",
        "ID & Address",
        "Education",
        "Unlimited Employment"
      ]
    }
  ];

  const staffingTypes = [
    { name: "Contract" },
    { name: "Contract to Hire" },
    { name: "Permanent / Full time Hire" },
    { name: "Flexi Staffing (On demand)" },
    { name: "Work Ready Consultants (RTD)" }
  ];

  const domainExpertise = [
    "Expertise in sourcing PEGA Specialist",
    "DEVOPS and DATA ANALYTICS resources",
    "SAP (Functional, Technical, Niche requirements)",
    "MS Technologies",
    "PeopleSoft & Siebel",
    "Cloud Implementations & Migrations"
  ];

  const industries = [
    { icon: <Building className="w-5 h-5" />, name: "Banking / Financials" },
    { icon: <ShoppingCart className="w-5 h-5" />, name: "Retail" },
    { icon: <Factory className="w-5 h-5" />, name: "Manufacturing" },
    { icon: <Heart className="w-5 h-5" />, name: "Life Sciences / Healthcare" },
    { icon: <Car className="w-5 h-5" />, name: "Automotive" },
    { icon: <ShieldCheck className="w-5 h-5" />, name: "Insurance and others" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightGray to-white py-8 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-4 animate-fade-in-up">
          Staffing: Our <span className="text-primary">Differentiator</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          AI-powered staffing solutions that transform your hiring process
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mb-12">
        {staffingFeatures.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up"
            style={{animationDelay: `${0.3 + index * 0.1}s`}}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-primary text-white mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-darkBlue">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-sm text-secondary font-medium">{feature.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accentOrange mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Staffing Solutions Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkBlue mb-4">
            Staffing Solutions & Staffing Options
          </h2>
          <p className="text-gray-600 leading-relaxed">
            GCTechnologies is diversified across service lines and industry sectors to provide our clients 
            with the best possible HR services and solutions. We evolve with changing staffing, business, 
            and economic conditions while leveraging our worldwide network and staffing expertise.
          </p>
        </div>

        {/* Staffing Types */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Staffing Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {staffingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-lightGray rounded-lg p-4 text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="font-medium text-sm">{type.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mb-8">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('domain')}
          >
            <h3 className="text-2xl font-bold text-primary">Domain Expertise</h3>
            {activeSection === 'domain' ? <ChevronUp /> : <ChevronDown />}
          </div>
          {activeSection === 'domain' && (
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {domainExpertise.map((expertise, index) => (
                <div key={index} className="bg-lightGray rounded-lg p-4 hover:shadow-md transition-shadow">
                  <span className="text-gray-700">{expertise}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Industry Focus */}
        <div>
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('industry')}
          >
            <h3 className="text-2xl font-bold text-primary">Industry Focus</h3>
            {activeSection === 'industry' ? <ChevronUp /> : <ChevronDown />}
          </div>
          {activeSection === 'industry' && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-lightGray rounded-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-2 text-primary group-hover:text-white">
                    {industry.icon}
                  </div>
                  <span className="text-sm text-center font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Staffing Process?
          </h3>
          <p className="mb-6 opacity-90">
            Leverage our AI-powered platform and global expertise to find the perfect candidates.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-lightGray transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffingPage;