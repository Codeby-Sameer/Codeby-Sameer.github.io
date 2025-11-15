import React from 'react';

const ServicesPage= () => {
  const consultingServices = {
    title: "Consulting and Managed Service",
    subtitle: "Empowering Business Success with Strategic & Business Continuity",
    description: "GC Technologies empowers businesses by providing strategic IT consulting, aligning technology solutions with business goals to drive operational efficiency and growth. With tailored services such as cloud migration, AI powered operations and cybersecurity consulting, GC Technologies ensures businesses make informed IT investments. This comprehensive approach maximizes long-term success and business continuity.",
    
    categories: [
      {
        name: "Technology Consulting",
        icon: "💼",
        gradient: "from-primary to-blue-600",
        services: [
          "Cloud Strategy & Consulting help client develop and implement cloud adoption strategies",
          "Cybersecurity & Risk Management Consulting offers strategic guidance to enhance security posture, implement best practice and manage regulatory compliance",
          "Data Analytics & BI Consulting assists companies in harnessing the power of data through analytics and data driven solutions"
        ]
      },
      {
        name: "AI Powered IT Ops (AIOps)",
        icon: "🤖",
        gradient: "from-secondary to-purple-600",
        services: [
          "MSFT Copilot for automation and productivity enhancement of Office365",
          "IBM Watson AIOps for real time analysis and predictive insights to optimize IT Operations",
          "Moogsoft & Datadog APM for automated incident management and performance monitoring with ML"
        ]
      },
      {
        name: "Cloud Migration",
        icon: "☁️",
        gradient: "from-accentPink to-pink-600",
        services: [
          "Lift & Shift Migration from OnPrem to OnCloud eg Microsoft, AWS, IBM, Google etc",
          "Hybrid Cloud Migration that integrates OnPrem & OnCloud that meet specific data compliances or operational requirement",
          "Cloud to Cloud Migration enables clients to move workloads from between various platforms eg AWS to Azure"
        ]
      }
    ]
  };

  const managedServices = {
    title: "GCC, Hire-Train-Deploy, Application Services",
    description: "GC Technologies provides Application Services for SAP, Salesforce (SFDC), and PEGA, helping businesses implement and optimize enterprise solutions for greater efficiency. The Hire-Train-Deploy (HTD) model bridges the skills gap by sourcing, training, and deploying job-ready professionals tailored to client needs. With the Scalable Global Capability Center (GCC) offering, GC Technologies helps businesses establish agile and cost-effective offshore operational units, providing scalability and global talent access. These services drive business transformation, talent optimization, and operational efficiency.",
    
    services: [
      {
        name: "Application Services (AS)",
        icon: "🖥️",
        gradient: "from-accentOrange to-orange-500",
        features: [
          "Application management services",
          "Custom SAP, Salesforce, PEGA solutions",
          "Optimize processes for efficiency",
          "Seamless integration and support"
        ]
      },
      {
        name: "Hire Train Deploy (HTD)",
        icon: "👨‍💻",
        gradient: "from-green-500 to-emerald-600",
        features: [
          "Customized candidate selection process",
          "Intensive technical skills training",
          "Job-ready talent deployment",
          "Continuous performance monitoring"
        ]
      },
      {
        name: "Global Capability Center (GCC)",
        icon: "🌍",
        gradient: "from-indigo-500 to-purple-600",
        features: [
          "Agile, scalable operational units",
          "Offshore and nearshore setup",
          "Cost-effective global talent access",
          "End-to-end operational support"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-accentOrange/10">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-accentOrange to-accentPink  text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Comprehensive service offerings from enablement to transformation
          </p>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-accentOrange/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">
              {consultingServices.title}
            </h2>
            <p className="text-xl text-secondary font-semibold mb-6">
              {consultingServices.subtitle}
            </p>
            <p className="lg:text-lg text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {consultingServices.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultingServices.categories.map((category, index) => (
              <ServiceCategoryCard 
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section className="py-16 bg-accentOrange/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">
              Managed Services
            </h2>
            <p className="lg:text-lg text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {managedServices.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managedServices.services.map((service, index) => (
              <ManagedServiceCard 
                key={service.name}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accentOrange/10">
        <div className="max-w-8xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
            <h2 className="lg:text-3xl  text-xl font-bold mb-6">
              Ready to Empower Your Business Success?
            </h2>
            <p className="lg:text-xl text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let us help you drive operational efficiency and growth with our strategic IT consulting and comprehensive services.
            </p>
            <button className="bg-accentOrange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Category Card Component
const ServiceCategoryCard = ({ category, index }) => {
  return (
    <div 
      className="animate-fade-in-up bg-white  border border-gray-200 shadow-[20px_-20px_0_rgba(230,151,44,0.6)] hover:shadow-[20px_-20px_0_rgba(230,151,44,0.9)]  transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-4">{category.icon}</div>
          <h3 className="text-xl font-bold text-darkBlue">{category.name}</h3>
        </div>
        
        <ul className="space-y-3">
          {category.services.map((service, serviceIndex) => (
            <li key={serviceIndex} className="flex items-start text-gray-600">
              <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
              <span className="text-sm leading-relaxed">{service}</span>
            </li>
          ))}
        </ul>
        
       
      </div>
    </div>
  );
};

// Managed Service Card Component
const ManagedServiceCard = ({ service, index }) => {
  return (
    <div 
      className="animate-fade-in-up bg-white shadow-[20px_-20px_0_rgba(138,60,203,0.6)] hover:shadow-[20px_-20px_0_rgba(138,60,203,0.9)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
      style={{ animationDelay: `${index * 0.15}s` }}
    >

      <div className="p-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{service.icon}</div>
          <h3 className="text-lg font-bold text-darkBlue">{service.name}</h3>
        </div>
        
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start text-gray-600 group">
              <svg 
                className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            {service.name === "Application Services (AS)" && "Enterprise solutions"}
            {service.name === "Hire Train Deploy (HTD)" && "Talent transformation"}
            {service.name === "Global Capability Center (GCC)" && "Global operations"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;