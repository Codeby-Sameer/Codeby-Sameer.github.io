import React from 'react';

const IndustrySolutions = () => {
  const solutions = {
    chAInIQ: {
      name: "chAInIQ",
      title: "Pharmaceutical Quality Management Solution",
      description: "ChAInIQ is GC Technologies' advanced distributed quality management solution designed to address the supply chain challenges faced by pharmaceutical companies, particularly on the manufacturing floor. The solution is tailored for injectable production lines, where efficiency, precision, and compliance are critical.",
      fullDescription: "ChAInIQ transforms how pharmaceutical companies manage their production lines by integrating IoT and AI technology, optimizing operations, and providing deep insights into every aspect of the supply chain. This solution not only addresses immediate manufacturing challenges but also ensures long-term operational success and product quality in the highly regulated pharma sector.",
      icon: "💊",
      gradient: "from-green-500 to-emerald-600",
      features: [
        {
          title: "IoT Data Integration",
          icon: "📡",
          points: [
            "ChAInIQ gathers real-time data from IoT-enabled machines across the manufacturing floor, particularly in the injectable production process",
            "These machines include critical production assets that require constant monitoring for optimal performance and quality control"
          ]
        },
        {
          title: "Cloud-Based Data Lake",
          icon: "☁️",
          points: [
            "All the IoT data collected from production machines is uploaded to a centralized cloud-based data lake",
            "This enables seamless data aggregation, storage, and access for further analysis, allowing companies to maintain a holistic view of their production processes"
          ]
        },
        {
          title: "AI-Driven Insights",
          icon: "🤖",
          points: [
            "ChAInIQ employs advanced AI and machine learning tools to analyze the data, providing actionable insights for manufacturers"
          ]
        }
      ],
      benefits: [
        "Real-time production monitoring",
        "Predictive quality control",
        "Regulatory compliance assurance",
        "Supply chain optimization",
        "Reduced operational costs"
      ]
    },
    atlas: {
      name: "@las",
      title: "Application Tracking System",
      tagline: "AI at the Heart of Smarter Hiring",
      description: "Atlas is a boutique solution tailored specifically for small and medium-sized businesses. It focuses on smart matching using embedded AI, ensuring that you can find the right talent quickly and efficiently without the complexities of larger ATS platforms. Its lightweight, AI-driven approach makes it perfect for businesses looking for an intuitive, streamlined recruitment tool that prioritizes accuracy and speed in matching candidates to roles.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-600",
      features: [
        {
          title: "AI-Powered Smart Matching",
          description: "Atlas uses embedded AI to intelligently match candidates to job roles, ensuring faster and more accurate hiring decisions tailored to small and medium businesses.",
          icon: "🧠"
        },
        {
          title: "Seamless API Integrations",
          description: "Integrated with Digiverifier and Hirex.ai, Atlas automates candidate verification and advanced resume parsing, streamlining the recruitment process with reliable and verified data.",
          icon: "🔗"
        },
        {
          title: "Efficiency and Scalability",
          description: "Designed for scalability, Atlas simplifies every stage of the recruitment process—from job posting to onboarding—allowing businesses to grow while maintaining recruitment efficiency.",
          icon: "⚡"
        }
      ],
      benefits: [
        "Reduced time-to-hire by 60%",
        "95% candidate match accuracy",
        "Seamless third-party integrations",
        "Scalable for business growth",
        "User-friendly interface"
      ]
    }
  };

  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto  ">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions designed to address specific industry challenges with AI and advanced technology
          </p>
        </div>

        {/* chAInIQ Solution */}
        <div className="mb-20">
          <SolutionCard solution={solutions.chAInIQ} />
        </div>

        {/* Atlas Solution */}
        <div>
          <SolutionCard solution={solutions.atlas} />
        </div>
      </div>
    </div>
  );
};

// Main Solution Card Component
const SolutionCard = ({ solution }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="bg-primary text-white overflow-hidden border border-gray-100">
        {/* Solution Header */}
        <div className={` text-white p-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-4xl mr-4">{solution.icon}</div>
              <div>
                <h2 className="text-3xl font-bold">{solution.name}</h2>
                <p className="text-xl opacity-90 mt-1">{solution.title}</p>
                {solution.tagline && (
                  <p className="text-lg opacity-80 mt-2 italic">{solution.tagline}</p>
                )}
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <span className="font-semibold">Industry Solution</span>
            </div>
          </div>
        </div>

        {/* Solution Content */}
        <div className="lg:p-8 p-4">
          {/* Description */}
          <div className="mb-8">
            <p className="lg:text-lg text-md text-white leading-relaxed mb-4">
              {solution.description}
            </p>
            {solution.fullDescription && (
              <p className="text-white leading-relaxed">
                {solution.fullDescription}
              </p>
            )}
          </div>

          {/* Features Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solution.features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title} 
                  feature={feature} 
                  index={index}
                  solutionName={solution.name}
                />
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-gray-50 to-lightGray rounded-xl p-6">
            <h3 className="text-xl font-bold text-darkBlue mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

     
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index, solutionName }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-3xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h4 className="text-lg font-bold text-darkBlue mb-3">{feature.title}</h4>
      
      {solutionName === "chAInIQ" ? (
        <ul className="space-y-2">
          {feature.points.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start text-gray-600 text-sm">
              <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
      )}
    </div>
  );
};

export default IndustrySolutions;