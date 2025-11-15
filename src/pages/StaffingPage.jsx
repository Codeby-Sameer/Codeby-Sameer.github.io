import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  CheckCircle, 
  ChevronDown,
  ChevronUp,
  Brain,
  ShieldCheck,
  Database,
  Cloud,
  Building,
  ShoppingCart,
  Factory,
  Car,
  Heart,
  X,
  Clock,
  Calendar,
  UserCheck,
  TrendingUp,
  Globe,
  Award,
  Cpu,
  Code,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffingPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedStaffingType, setSelectedStaffingType] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setSelectedStaffingType(null);
  };

  const openStaffingModal = (type) => {
    setSelectedStaffingType(type);
  };

  // Domain icons mapping
  const domainIcons = {
    "Expertise in sourcing PEGA Specialist": <Cpu className="w-6 h-6" />,
    "DEVOPS and DATA ANALYTICS resources": <BarChart3 className="w-6 h-6" />,
    "SAP (Functional, Technical, Niche requirements)": <Database className="w-6 h-6" />,
    "MS Technologies": <Code className="w-6 h-6" />,
    "PeopleSoft & Siebel": <Users className="w-6 h-6" />,
    "Cloud Implementations & Migrations": <Cloud className="w-6 h-6" />
  };

  // Industry stats
  const industryStats = {
    "Banking / Financials": { projects: 150, successRate: "98%", specialists: 45 },
    "Retail": { projects: 120, successRate: "95%", specialists: 38 },
    "Manufacturing": { projects: 180, successRate: "96%", specialists: 52 },
    "Life Sciences / Healthcare": { projects: 90, successRate: "99%", specialists: 28 },
    "Automotive": { projects: 110, successRate: "94%", specialists: 35 },
    "Insurance and others": { projects: 200, successRate: "97%", specialists: 60 }
  };

  // Helper function for industry roles
  const getIndustryRoles = (industryName) => {
    const rolesMap = {
      "Banking / Financials": ["Risk Analysts", "Compliance Officers", "Financial Developers", "FinTech Specialists"],
      "Retail": ["E-commerce Architects", "Supply Chain Managers", "Retail Analysts", "CRM Specialists"],
      "Manufacturing": ["Production Engineers", "Quality Assurance", "Supply Chain", "Industrial Designers"],
      "Life Sciences / Healthcare": ["Clinical Researchers", "Healthcare IT", "Regulatory Affairs", "Medical Developers"],
      "Automotive": ["Automotive Engineers", "Embedded Systems", "Manufacturing Tech", "Supply Chain"],
      "Insurance and others": ["Actuarial Analysts", "Claims Specialists", "Underwriting Tech", "Insurance Developers"]
    };
    return rolesMap[industryName] || ["Specialized Professionals", "Technical Experts", "Industry Specialists"];
  };

  // Main Feature Modal
  const renderFeatureModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-blue-600 text-white mr-4">
              {selectedCard.details?.icon || selectedCard.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedCard.title}</h3>
              {selectedCard.subtitle && (
                <p className="text-blue-500 font-medium">{selectedCard.subtitle}</p>
              )}
            </div>
          </div>
          <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6 text-lg">
            {selectedCard.details.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Benefits</h4>
            <div className="grid gap-2">
              {selectedCard.details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">Features</h4>
            <div className="grid gap-2">
              {selectedCard.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Domain Expertise Modal
  const renderDomainModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-green-600 text-white mr-4">
              {domainIcons[selectedCard.name] || <Code className="w-8 h-8" />}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedCard.name}</h3>
              <p className="text-green-600 font-medium">Domain Expertise</p>
            </div>
          </div>
          <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="text-green-800 text-lg font-medium">
              {selectedCard.details}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Our Capabilities</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Specialized Talent Pool</span>
                </div>
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Technical Assessment Tools</span>
                </div>
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <Globe className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Global Recruitment Network</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Success Metrics</h4>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">48h</div>
                    <div className="text-sm opacity-90">Avg. Time to Fill</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Industry Recognition</h4>
            <p className="text-blue-700 text-sm">
              Certified partners with leading technology providers in this domain, ensuring access to top-tier talent and latest industry certifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Industry Focus Modal
  const renderIndustryModal = () => {
    const stats = industryStats[selectedCard.name];
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-purple-600 text-white mr-4">
                {selectedCard.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedCard.name}</h3>
                <p className="text-purple-600 font-medium">Industry Focus</p>
              </div>
            </div>
            <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <p className="text-purple-800 text-lg">
                {selectedCard.details}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.projects}+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.successRate}</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.specialists}</div>
                <div className="text-sm text-gray-600">Specialists</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Roles We Fill</h4>
                <div className="space-y-2">
                  {getIndustryRoles(selectedCard.name).map((role, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {role}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Our Expertise</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Industry-specific compliance knowledge
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Domain-specific technical assessments
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Regulatory requirement understanding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main modal renderer
  const renderModal = () => {
    if (!selectedCard) return null;

    // Determine which modal to show based on card type
    if (selectedCard.type === 'domain') {
      return renderDomainModal();
    } else if (selectedCard.type === 'industry') {
      return renderIndustryModal();
    } else if (selectedCard.details) {
      return renderFeatureModal();
    }
    
    return null;
  };

  // Your existing data arrays
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
      ],
      details: {
        description: "Our AI-driven profiling system leverages cutting-edge machine learning algorithms to match candidates with job requirements with unprecedented accuracy.",
        benefits: [
          "95% accuracy in candidate-job matching",
          "Reduces screening time by 70%",
          "Real-time candidate scoring",
          "Automated resume parsing and analysis"
        ],
        icon: <Brain className="w-8 h-8" />
      }
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
      ],
      details: {
        description: "Comprehensive screening solutions that combine AI-powered tools with human expertise to identify the best talent efficiently.",
        benefits: [
          "Multi-stage automated screening",
          "Real-time coding assessments",
          "AI-powered interview analysis",
          "Automated candidate engagement"
        ],
        icon: <UserCheck className="w-8 h-8" />
      }
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
      ],
      details: {
        description: "Thorough background verification process ensuring complete transparency and reliability in candidate selection.",
        benefits: [
          "100% digital verification process",
          "Real-time document validation",
          "Compliance with industry standards",
          "Comprehensive employment history check"
        ],
        icon: <Award className="w-8 h-8" />
      }
    }
  ];

  const staffingTypes = [
    { 
      name: "Contract",
      details: {
        title: "Contract Staffing",
        description: "Flexible staffing solutions for project-based work and temporary positions.",
        duration: "3-12 months",
        benefits: [
          "Quick onboarding process",
          "Flexible engagement models",
          "Cost-effective solution",
          "Specialized skill access"
        ],
        bestFor: ["Project-based work", "Seasonal demands", "Specialized skill requirements"],
        icon: <Clock className="w-6 h-6" />
      }
    },
    { 
      name: "Contract to Hire",
      details: {
        title: "Contract to Hire",
        description: "Evaluate candidates on the job before making permanent hiring decisions.",
        duration: "3-6 months trial",
        benefits: [
          "Reduced hiring risk",
          "Cultural fit assessment",
          "Performance evaluation",
          "Seamless transition"
        ],
        bestFor: ["Long-term positions", "Cultural fit critical roles", "Performance-sensitive roles"],
        icon: <Calendar className="w-6 h-6" />
      }
    },
    { 
      name: "Permanent / Full time Hire",
      details: {
        title: "Permanent Staffing",
        description: "Comprehensive permanent staffing solutions for long-term organizational needs.",
        duration: "Permanent",
        benefits: [
          "Dedicated resources",
          "Long-term commitment",
          "Company culture integration",
          "Career growth planning"
        ],
        bestFor: ["Core team members", "Leadership positions", "Long-term strategic roles"],
        icon: <UserCheck className="w-6 h-6" />
      }
    },
    { 
      name: "Flexi Staffing (On demand)",
      details: {
        title: "Flexi Staffing",
        description: "On-demand staffing solutions for fluctuating business requirements.",
        duration: "As needed",
        benefits: [
          "Instant scalability",
          "Pay-per-use model",
          "Zero overhead costs",
          "24/7 availability"
        ],
        bestFor: ["Peak season demands", "Short-term projects", "Emergency replacements"],
        icon: <TrendingUp className="w-6 h-6" />
      }
    },
    { 
      name: "Work Ready Consultants (RTD)",
      details: {
        title: "Work Ready Consultants",
        description: "Pre-screened, trained consultants ready to deploy immediately.",
        duration: "Immediate deployment",
        benefits: [
          "Zero training time",
          "Industry certified",
          "Immediate productivity",
          "Quality guaranteed"
        ],
        bestFor: ["Urgent requirements", "Specialized projects", "Quality-critical work"],
        icon: <Award className="w-6 h-6" />
      }
    }
  ];

  const domainExpertise = [
    {
      name: "Expertise in sourcing PEGA Specialist",
      details: "Specialized in recruiting PEGA certified professionals with hands-on experience in Pega PRPC, case management, and decisioning analytics."
    },
    {
      name: "DEVOPS and DATA ANALYTICS resources",
      details: "Comprehensive DevOps and Data Analytics talent pool with expertise in CI/CD, cloud platforms, big data technologies, and business intelligence tools."
    },
    {
      name: "SAP (Functional, Technical, Niche requirements)",
      details: "End-to-end SAP recruitment covering all modules including FI/CO, MM, SD, PP, and specialized roles like SAP HANA, Fiori, and S/4HANA."
    },
    {
      name: "MS Technologies",
      details: "Microsoft technology experts including .NET, Azure, Dynamics 365, Power Platform, and SharePoint developers and architects."
    },
    {
      name: "PeopleSoft & Siebel",
      details: "Specialized recruitment for Oracle PeopleSoft and Siebel CRM implementations, upgrades, and support projects."
    },
    {
      name: "Cloud Implementations & Migrations",
      details: "Cloud specialists across AWS, Azure, and GCP with experience in cloud architecture, migration strategies, and multi-cloud implementations."
    }
  ];

  const industries = [
    { icon: <Building className="w-5 h-5" />, name: "Banking / Financials", details: "Staffing solutions for banking, financial services, and insurance sectors with compliance-focused hiring." },
    { icon: <ShoppingCart className="w-5 h-5" />, name: "Retail", details: "Retail and e-commerce staffing expertise including supply chain, merchandising, and digital commerce roles." },
    { icon: <Factory className="w-5 h-5" />, name: "Manufacturing", details: "Manufacturing industry specialists for production, quality control, supply chain, and industrial engineering." },
    { icon: <Heart className="w-5 h-5" />, name: "Life Sciences / Healthcare", details: "Healthcare and life sciences staffing with focus on regulatory compliance and specialized medical expertise." },
    { icon: <Car className="w-5 h-5" />, name: "Automotive", details: "Automotive industry recruitment covering manufacturing, design, engineering, and supply chain management." },
    { icon: <ShieldCheck className="w-5 h-5" />, name: "Insurance and others", details: "Insurance sector specialists and diverse industry coverage for all your staffing needs." }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-20 mb-28 bg-gradient-to-br from-blue-900 via-blue-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Staffing: Our <span className="text-white">Differentiator</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              AI-powered staffing solutions that transform your hiring process
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mb-12">
        {staffingFeatures.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
            onClick={() => openModal(feature)}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-blue-600 text-white mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-sm text-blue-500 font-medium">{feature.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Staffing Solutions Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Staffing Solutions & Options
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            GCTechnologies is diversified across service lines and industry sectors to provide our clients 
            with the best possible HR services and solutions. We evolve with changing staffing, business, 
            and economic conditions while leveraging our worldwide network and staffing expertise.
          </p>
        </div>

        {/* Staffing Types */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Staffing Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staffingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-5 border border-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:shadow-lg group"
                onClick={() => openStaffingModal(type)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {type.name}
                  </h4>
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    {type.details.icon}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {type.details.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    {type.details.duration}
                  </span>
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    View details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mb-8">
          <div 
            className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('domain')}
          >
            <h3 className="text-2xl font-bold text-blue-600">Domain Expertise</h3>
            {activeSection === 'domain' ? 
              <ChevronUp className="text-blue-600" /> : 
              <ChevronDown className="text-blue-600" />
            }
          </div>
          {activeSection === 'domain' && (
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {domainExpertise.map((expertise, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-200"
                  onClick={() => openModal({...expertise, type: 'domain'})}
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{expertise.name}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{expertise.details}</p>
                  <span className="text-blue-600 text-xs font-medium mt-2 inline-block hover:text-blue-700">
                    Read more →
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Industry Focus */}
        <div>
          <div 
            className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('industry')}
          >
            <h3 className="text-2xl font-bold text-blue-600">Industry Focus</h3>
            {activeSection === 'industry' ? 
              <ChevronUp className="text-blue-600" /> : 
              <ChevronDown className="text-blue-600" />
            }
          </div>
          {activeSection === 'industry' && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer hover:border-blue-200 group"
                  onClick={() => openModal({...industry, type: 'industry'})}
                >
                  <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">
                      {industry.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {industry.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Staffing Process?
          </h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Leverage our AI-powered platform and global expertise to find the perfect candidates for your organization.
          </p>
          <Link to="/contact" className="bg-white my-2 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Render the appropriate modal */}
      {renderModal()}

      {/* Staffing Type Detail Modal */}
      {selectedStaffingType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className="p-3 rounded-xl bg-blue-600 text-white mr-4">
                  {selectedStaffingType.details.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedStaffingType.details.title}</h3>
                  <p className="text-blue-500 font-medium">{selectedStaffingType.name}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 text-lg mb-4">
                  {selectedStaffingType.details.description}
                </p>
                <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg inline-flex">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Typical Duration: <strong>{selectedStaffingType.details.duration}</strong></span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Benefits</h4>
                  <div className="space-y-2">
                    {selectedStaffingType.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">Best For</h4>
                  <div className="space-y-2">
                    {selectedStaffingType.details.bestFor.map((useCase, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffingPage;