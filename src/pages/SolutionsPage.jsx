import { useState } from 'react';
import { Activity, Cloud, Brain, FileText, X, CheckCircle, ArrowRight, Users, Target, Zap, Shield, Database, BarChart, Play, Calendar, Clock, Award } from 'lucide-react';

function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedATSFeature, setSelectedATSFeature] = useState(null);

  const openSolutionModal = (solution) => {
    setSelectedSolution(solution);
  };

  const openFeatureModal = (feature) => {
    setSelectedFeature(feature);
  };

  const openATSFeatureModal = (feature) => {
    setSelectedATSFeature(feature);
  };

  const closeModal = () => {
    setSelectedSolution(null);
    setSelectedFeature(null);
    setSelectedATSFeature(null);
  };

  const chAInIQFeatures = [
    {
      title: "IoT Data Integration",
      icon: Activity,
      gradient: "from-blue-600 to-purple-600",
      items: [
        "Real-time data from IoT-enabled machines",
        "Critical production assets monitoring",
        "Injectable production process focus"
      ],
      details: {
        description: "Comprehensive IoT integration that captures real-time data from pharmaceutical manufacturing equipment and sensors.",
        features: [
          "Real-time sensor data collection",
          "Equipment performance monitoring",
          "Environmental condition tracking",
          "Automated data validation"
        ],
        benefits: [
          "99.9% data accuracy",
          "Real-time anomaly detection",
          "Predictive maintenance alerts",
          "Reduced manual data entry"
        ],
        technologies: ["IoT Sensors", "PLC Integration", "OPC-UA", "MQTT Protocol"],
        caseStudy: "Implemented for leading pharma company, reducing production downtime by 45%"
      }
    },
    {
      title: "Cloud-Based Data Lake",
      icon: Cloud,
      gradient: "from-purple-600 to-pink-500",
      items: [
        "Centralized cloud-based data storage",
        "Seamless data aggregation and access",
        "Holistic view of production processes"
      ],
      details: {
        description: "Scalable cloud infrastructure that centralizes all manufacturing data for comprehensive analysis and insights.",
        features: [
          "Unified data repository",
          "Real-time data processing",
          "Secure data encryption",
          "Cross-platform compatibility"
        ],
        benefits: [
          "Single source of truth",
          "Enhanced data security",
          "Scalable storage capacity",
          "Faster data retrieval"
        ],
        technologies: ["AWS S3", "Azure Data Lake", "Snowflake", "Apache Spark"],
        caseStudy: "Reduced data processing time from hours to minutes for batch analysis"
      }
    },
    {
      title: "AI-Driven Insights",
      icon: Brain,
      gradient: "from-pink-500 to-orange-500",
      items: [
        "Advanced AI and machine learning tools",
        "Actionable insights for manufacturers",
        "Optimized operations and quality control"
      ],
      details: {
        description: "Advanced AI algorithms that transform raw data into actionable intelligence for quality optimization.",
        features: [
          "Predictive quality analytics",
          "Anomaly detection algorithms",
          "Automated compliance reporting",
          "Prescriptive recommendations"
        ],
        benefits: [
          "30% improvement in quality control",
          "Early defect detection",
          "Automated regulatory compliance",
          "Optimized production parameters"
        ],
        technologies: ["TensorFlow", "PyTorch", "MLflow", "Kubernetes"],
        caseStudy: "Achieved 99.8% quality compliance rate through predictive analytics"
      }
    }
  ];

  const atsFeatures = [
    {
      title: "AI-Powered Smart Matching",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      description: "Uses embedded AI to intelligently match candidates to job roles, ensuring faster and more accurate hiring decisions.",
      details: {
        description: "Advanced AI algorithms that analyze candidate profiles and job requirements to deliver perfect matches.",
        features: [
          "Semantic resume analysis",
          "Skill gap identification",
          "Cultural fit scoring",
          "Predictive success analytics"
        ],
        benefits: [
          "85% better candidate matching",
          "60% reduction in screening time",
          "Improved candidate quality",
          "Reduced hiring bias"
        ],
        metrics: [
          "95% match accuracy",
          "3x faster shortlisting",
          "40% better retention"
        ]
      }
    },
    {
      title: "Seamless API Integrations",
      icon: Activity,
      gradient: "from-purple-600 to-pink-500",
      description: "Integrated with Digiverifier and Hirex.ai, automating candidate verification and advanced resume parsing.",
      details: {
        description: "Comprehensive integration ecosystem that connects with leading verification and assessment platforms.",
        features: [
          "Real-time background verification",
          "Automated resume parsing",
          "Skill assessment integration",
          "Video interviewing platforms"
        ],
        benefits: [
          "End-to-end automation",
          "Reduced manual verification",
          "Faster candidate processing",
          "Enhanced candidate experience"
        ],
        integrations: ["Digiverifier", "Hirex.ai", "LinkedIn", "Indeed", "Glassdoor"]
      }
    },
    {
      title: "Efficiency and Scalability",
      icon: FileText,
      gradient: "from-pink-500 to-orange-500",
      description: "Simplifies every stage from job posting to onboarding, allowing businesses to grow while maintaining efficiency.",
      details: {
        description: "Scalable platform designed to grow with your business while maintaining operational efficiency.",
        features: [
          "Automated workflow management",
          "Customizable hiring pipelines",
          "Collaborative hiring tools",
          "Advanced analytics dashboard"
        ],
        benefits: [
          "70% faster hiring process",
          "Scalable to 1000+ hires/month",
          "Reduced administrative overhead",
          "Improved team collaboration"
        ],
        scalability: ["Startup (1-50 hires)", "Growth (50-500 hires)", "Enterprise (500+ hires)"]
      }
    }
  ];

  const solutions = [
    {
      title: "chAInIQ - Pharmaceutical Solution",
      type: "Industry Solution",
      description: "Advanced distributed quality management solution for pharmaceutical manufacturing",
      gradient: "from-blue-600 to-purple-600",
      features: chAInIQFeatures,
      overview: "ChAInIQ transforms how pharmaceutical companies manage their production lines by integrating IoT and AI technology, optimizing operations, and providing deep insights into every aspect of the supply chain. This solution not only addresses immediate manufacturing challenges but also ensures long-term operational success and product quality in the highly regulated pharma sector.",
      benefits: [
        "Real-time quality monitoring",
        "Predictive maintenance",
        "Regulatory compliance automation",
        "Supply chain optimization"
      ]
    },
    {
      title: "@laS - Application Tracking System",
      type: "HR Technology",
      description: "AI at the Heart of Smarter Hiring",
      gradient: "from-purple-600 to-pink-500",
      features: atsFeatures,
      overview: "Atlas is a boutique solution tailored specifically for small and medium-sized businesses. It focuses on smart matching using embedded AI, ensuring that you can find the right talent quickly and efficiently without the complexities of larger ATS platforms.",
      benefits: [
        "AI-powered candidate matching",
        "Seamless integration ecosystem",
        "Scalable for business growth",
        "Enhanced hiring efficiency"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              GC Tech can help build digital capabilities, deploy applications,
              technology and infrastructure specific to industry solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* chAInIQ Solution */}
            <div className="mb-20">
              <div 
                className="text-center mb-12 cursor-pointer group"
                onClick={() => openSolutionModal(solutions[0])}
              >
                <h2 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Industry Solution – Pharm: "chAInIQ"
                  </span>
                </h2>
                <p className="text-gray-600 text-lg group-hover:text-blue-600 transition-colors">
                  Advanced distributed quality management solution for pharmaceutical manufacturing
                </p>
                <div className="flex justify-center mt-4">
                  <span className="text-blue-500 font-semibold flex items-center">
                    View complete solution <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {chAInIQFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 cursor-pointer group"
                    onClick={() => openFeatureModal(feature)}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <ul className="space-y-3 mb-4">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                      <span className="mr-2 text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className="bg-gradient-to-br from-blue-900 to-purple-800 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openSolutionModal(solutions[0])}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg leading-relaxed group-hover:text-blue-100 transition-colors">
                    {solutions[0].overview}
                  </p>
                  <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-blue-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* @laS ATS Solution */}
            <div>
              <div 
                className="text-center mb-12 cursor-pointer group"
                onClick={() => openSolutionModal(solutions[1])}
              >
                <h2 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Application Tracking System: "@laS"
                  </span>
                </h2>
                <p className="text-gray-600 text-lg italic group-hover:text-purple-600 transition-colors">
                  AI at the Heart of Smarter Hiring
                </p>
                <div className="flex justify-center mt-4">
                  <span className="text-purple-500 font-semibold flex items-center">
                    Explore ATS features <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 mb-8 border border-purple-100">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {solutions[1].overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {atsFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 cursor-pointer group"
                      onClick={() => openATSFeatureModal(feature)}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-purple-600 font-semibold group-hover:text-pink-600 transition-colors">
                        <span className="mr-2 text-sm">View details</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedSolution.title}</h3>
                <p className="text-blue-500 font-medium">{selectedSolution.type}</p>
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
                  {selectedSolution.overview}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
                    <Target className="w-5 h-5 text-blue-500 mr-2" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedSolution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center bg-blue-50 rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-blue-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {selectedSolution.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
                      onClick={() => selectedSolution.title.includes("chAInIQ") ? openFeatureModal(feature) : openATSFeatureModal(feature)}
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-3`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">{feature.title}</h5>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {feature.items ? feature.items[0] : feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedFeature.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  <selectedFeature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedFeature.title}</h3>
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedFeature.details.description}
                </p>
                
                <div className="grid gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {selectedFeature.details.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                      <Target className="w-5 h-5 text-green-500 mr-2" />
                      Business Benefits
                    </h4>
                    <div className="space-y-2">
                      {selectedFeature.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedFeature.details.technologies && (
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFeature.details.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    Success Story
                  </h4>
                  <p className="text-blue-700">{selectedFeature.details.caseStudy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ATS Feature Detail Modal */}
      {selectedATSFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedATSFeature.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  <selectedATSFeature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedATSFeature.title}</h3>
                  <p className="text-purple-500 font-medium">@laS ATS Feature</p>
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedATSFeature.details.description}
                </p>
                
                <div className="grid gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Features</h4>
                    <div className="space-y-2">
                      {selectedATSFeature.details.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Benefits</h4>
                    <div className="space-y-2">
                      {selectedATSFeature.details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedATSFeature.details.metrics && (
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedATSFeature.details.metrics.map((metric, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                          <span className="text-green-700 font-semibold text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedATSFeature.details.integrations && (
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Integrated Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedATSFeature.details.integrations.map((integration, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedATSFeature.details.scalability && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Scalability Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedATSFeature.details.scalability.map((scale, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {scale}
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

export default SolutionsPage;