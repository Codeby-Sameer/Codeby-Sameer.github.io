import React from 'react';
import IndustrySolutions from '../components/sections/IndustrySolutions';

const SolutionsPage = () => {
  const capabilities = [
    {
      area: "Technology Stack",
      items: ["Microsoft Technologies", "SAP Solutions", "Salesforce Platform", "PEGA Systems", "Cloud Platforms (AWS, Azure, GCP)"]
    },
    {
      area: "Implementation Expertise", 
      items: ["Agile Methodology", "DevOps Practices", "CI/CD Pipelines", "Quality Assurance", "Project Management"]
    },
    {
      area: "Industry Specialization",
      items: ["Pharmaceuticals", "Banking & Finance", "Healthcare", "Manufacturing", "Retail & E-commerce"]
    }
  ];

  return (
    <div className="min-h-screen bg-lightGray">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-darkBlue to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Building digital capabilities, deploying applications, technology and infrastructure specific to industry solutions
          </p>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <IndustrySolutions />

      {/* Capabilities Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkBlue text-center mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={capability.area} className="text-center animate-fade-in-up">
                <div className="bg-lightGray border border-gray-300 p-6 h-full  shadow-[20px_-20px_0_rgba(0,0,255,0.3)] hover:shadow-[20px_-20px_0_rgba(0,0,255,0.6)]  transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-darkBlue mb-4">{capability.area}</h3>
                  <ul className="space-y-2">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="lg:text-3xl text-xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="lg:text-xl text-md opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how our industry-specific solutions can drive efficiency, quality, and growth for your organization.
          </p>
          <button className="bg-accentOrange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;