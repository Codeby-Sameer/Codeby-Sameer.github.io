import { useState } from 'react';
import { Cloud, Cpu, ShieldCheck, Database, GraduationCap, Building, X, CheckCircle, ArrowRight, Users, Target, Globe, Zap } from 'lucide-react';

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAdditionalService, setSelectedAdditionalService] = useState(null);

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const openAdditionalServiceModal = (service) => {
    setSelectedAdditionalService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    setSelectedAdditionalService(null);
  };

  const services = [
    {
      title: 'Technology Consulting',
      icon: ShieldCheck,
      items: [
        'Cloud Strategy & Consulting help client develop and implement cloud adoption strategies',
        'Cybersecurity & Risk Management Consulting offers strategic guidance to enhance security posture',
        'Data Analytics & BI Consulting assists companies in harnessing the power of data'
      ],
      gradient: 'from-blue-600 to-purple-600',
      details: {
        description: 'Strategic technology consulting services that align IT infrastructure with business objectives for optimal performance and security.',
        features: [
          'Comprehensive technology assessment',
          'Strategic roadmap development',
          'Security and compliance auditing',
          'Digital transformation guidance'
        ],
        benefits: [
          'Reduced operational costs by 30%',
          'Enhanced security posture',
          'Improved system performance',
          'Future-proof technology stack'
        ],
        caseStudy: 'Helped Fortune 500 company reduce IT costs by 35% while improving security compliance.'
      }
    },
    {
      title: 'AI Powered IT Ops (AIOps)',
      icon: Cpu,
      items: [
        'MSFT Copilot for automation and productivity enhancement of Office365',
        'IBM Watson AIOps for real time analysis and predictive insights',
        'Moogsoft & Datadog APM for automated incident management and performance monitoring'
      ],
      gradient: 'from-purple-600 to-pink-500',
      details: {
        description: 'Leverage artificial intelligence to automate IT operations, predict issues, and enhance system reliability.',
        features: [
          'Predictive incident management',
          'Automated root cause analysis',
          'Intelligent alert correlation',
          'Self-healing infrastructure'
        ],
        benefits: [
          '90% faster incident resolution',
          '70% reduction in false alerts',
          '24/7 automated monitoring',
          'Proactive issue prevention'
        ],
        caseStudy: 'Reduced mean time to resolution by 85% for global e-commerce platform.'
      }
    },
    {
      title: 'Cloud Migration',
      icon: Cloud,
      items: [
        'Lift & Shift Migration from OnPrem to OnCloud (Microsoft, AWS, IBM, Google)',
        'Hybrid Cloud Migration that integrates OnPrem & OnCloud',
        'Cloud to Cloud Migration enables clients to move workloads between platforms'
      ],
      gradient: 'from-pink-500 to-orange-500',
      details: {
        description: 'Seamless cloud migration services that ensure business continuity and optimize cloud infrastructure costs.',
        features: [
          'Comprehensive migration planning',
          'Zero-downtime migration',
          'Cost optimization strategies',
          'Post-migration support'
        ],
        benefits: [
          '50% reduction in infrastructure costs',
          '99.9% uptime guarantee',
          'Enhanced scalability',
          'Improved disaster recovery'
        ],
        caseStudy: 'Migrated 200+ applications to cloud with zero business disruption for financial institution.'
      }
    }
  ];

  const additionalServices = [
    {
      title: 'Application Services',
      icon: Database,
      description: 'Custom SAP, Salesforce, PEGA solutions with seamless integration and support',
      items: [
        'Application management services',
        'Optimize processes for efficiency',
        'Custom SAP, Salesforce, PEGA solutions'
      ],
      details: {
        description: 'End-to-end application services from development to maintenance, ensuring optimal performance and user experience.',
        features: [
          'Custom application development',
          'Legacy system modernization',
          'API integration services',
          'Performance optimization'
        ],
        technologies: ['SAP', 'Salesforce', 'PEGA', 'MuleSoft', 'Dell Boomi'],
        benefits: [
          'Faster time-to-market',
          'Reduced maintenance costs',
          'Enhanced user experience',
          'Scalable solutions'
        ]
      }
    },
    {
      title: 'Hire Train Deploy',
      icon: GraduationCap,
      description: 'Bridge the skills gap with job-ready professionals',
      items: [
        'Customized candidate selection process',
        'Intensive technical skills training',
        'Continuous performance monitoring'
      ],
      details: {
        description: 'Comprehensive talent development program that identifies, trains, and deploys skilled professionals tailored to your needs.',
        features: [
          'Customized training curriculum',
          'Hands-on project experience',
          'Mentorship programs',
          'Performance tracking'
        ],
        successMetrics: [
          '95% placement success rate',
          '85% retention after 2 years',
          '30% faster ramp-up time',
          'Customized skill development'
        ],
        programs: ['Full Stack Development', 'Cloud Engineering', 'Data Science', 'Cybersecurity']
      }
    },
    {
      title: 'Global Capability Center',
      icon: Building,
      description: 'Agile, scalable operational units for cost-effective global talent access',
      items: [
        'Offshore and nearshore setup',
        'Cost-effective global talent access',
        'End-to-end operational support'
      ],
      details: {
        description: 'Establish dedicated offshore centers that function as extensions of your team with full operational support.',
        features: [
          'Complete setup and infrastructure',
          'Talent acquisition and management',
          'Compliance and legal support',
          'Continuous improvement programs'
        ],
        locations: ['India', 'Eastern Europe', 'Latin America', 'Southeast Asia'],
        benefits: [
          '60% cost savings',
          'Access to specialized talent',
          '24/7 operational coverage',
          'Cultural alignment programs'
        ]
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              GC Tech offers comprehensive service from enablement to transformation
              aligned to your growth and business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Consulting and Managed Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Empowering Business Success with Strategic & Business Continuity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer group"
                onClick={() => openServiceModal(service)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-4 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1 text-lg flex-shrink-0">•</span>
                      <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Complementary services to enhance your digital transformation journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                onClick={() => openAdditionalServiceModal(service)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span className="mr-2">View details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedService.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  <selectedService.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
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
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedService.details.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {selectedService.details.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                      <Target className="w-5 h-5 text-green-500 mr-2" />
                      Business Benefits
                    </h4>
                    <div className="space-y-3">
                      {selectedService.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    Success Story
                  </h4>
                  <p className="text-blue-700">{selectedService.details.caseStudy}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">Service Overview</h4>
                <ul className="space-y-3">
                  {selectedService.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mt-1 mr-3 text-lg flex-shrink-0">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Service Detail Modal */}
      {selectedAdditionalService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <selectedAdditionalService.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedAdditionalService.title}</h3>
                  <p className="text-blue-500 font-medium">{selectedAdditionalService.description}</p>
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
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedAdditionalService.details.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {selectedAdditionalService.details.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                      <Target className="w-5 h-5 text-green-500 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-3">
                      {selectedAdditionalService.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedAdditionalService.details.technologies && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                      <Globe className="w-5 h-5 text-purple-500 mr-2" />
                      Technologies & Platforms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAdditionalService.details.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAdditionalService.details.successMetrics && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Success Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedAdditionalService.details.successMetrics.map((metric, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                          <span className="text-green-700 font-semibold text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAdditionalService.details.locations && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Available Locations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAdditionalService.details.locations.map((location, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAdditionalService.details.programs && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Training Programs</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAdditionalService.details.programs.map((program, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;