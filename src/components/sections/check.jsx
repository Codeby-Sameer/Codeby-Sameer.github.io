import React from 'react';
import {
  FaUsers,
  FaFileAlt,
  FaExchangeAlt,
  FaBriefcase,
  FaBolt,
  FaBullseye,
  FaMagic,
  FaChartBar,
  FaBuilding,
  FaWindows,
  FaUserFriends,
  FaCloud,
  FaLaptopCode,
  FaUniversity,
  FaShoppingBag,
  FaIndustry,
  FaMicroscope,
  FaCarSide,
  FaShieldAlt,
  FaGlobeAmericas,
} from 'react-icons/fa';

export const StaffingTypesCard = ({ types }) => {
  const getIcon = (type) => {
    const map = {
      'Contract': <FaFileAlt className="text-lg" />,
      'Contract to Hire': <FaExchangeAlt className="text-lg" />,
      'Permanent / Full time Hire': <FaBriefcase className="text-lg" />,
      'Flexi Staffing (On demand)': <FaBolt className="text-lg" />,
      'Work Ready Consultants (RTD)': <FaBullseye className="text-lg" />
    };
    return map[type] || <FaUsers className="text-lg" />;
  };

  return (
    <div className="bg-white shadow-[20px_-20px_0_rgba(0,0,255,0.3)] hover:shadow-[20px_-20px_0_rgba(0,0,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
            <FaUsers className="text-xl text-primary" />
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Staffing Types</h3>
        </div>
        
        <ul className="space-y-4">
          {types.map((type, index) => (
            <li 
              key={index}
              className="flex items-center p-3 bg-lightGray rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                {getIcon(type)}
              </span>
              <span className="font-medium text-sm">{type}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Flexible staffing solutions tailored to your needs
          </p>
        </div>
      </div>
    </div>
  );
};


export const DomainExpertiseCard = ({ expertise }) => {
  const getTechIcon = (expertiseItem) => {
    if (expertiseItem.includes('PEGA')) return <FaMagic className="text-lg" />;
    if (expertiseItem.includes('DEVOPS') || expertiseItem.includes('DATA')) return <FaChartBar className="text-lg" />;
    if (expertiseItem.includes('SAP')) return <FaBuilding className="text-lg" />;
    if (expertiseItem.includes('MS Technologies')) return <FaWindows className="text-lg" />;
    if (expertiseItem.includes('PeopleSoft') || expertiseItem.includes('Siebel')) return <FaUserFriends className="text-lg" />;
    if (expertiseItem.includes('Cloud')) return <FaCloud className="text-lg" />;
    return <FaLaptopCode className="text-lg" />;
  };

  return (
    <div className="bg-white shadow-[20px_-20px_0_rgba(138,60,203,0.6)] hover:shadow-[20px_-20px_0_rgba(138,60,203,0.9)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
            <FaBullseye className="text-xl text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Domain Expertise</h3>
        </div>
        
        <ul className="space-y-4">
          {expertise.map((item, index) => (
            <li 
              key={index}
              className="flex items-start p-3 bg-lightGray rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <span className="text-lg mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                {getTechIcon(item)}
              </span>
              <span className="font-medium text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Specialized skills for complex requirements
          </p>
        </div>
      </div>
    </div>
  );
};


export const IndustryFocusCard = ({ industries }) => {
  const getIndustryIcon = (industry) => {
    const map = {
      'Banking / Financials': <FaUniversity className="text-lg" />,
      'Retail': <FaShoppingBag className="text-lg" />,
      'Manufacturing': <FaIndustry className="text-lg" />,
      'Life Sciences / Healthcare': <FaMicroscope className="text-lg" />,
      'Automotive': <FaCarSide className="text-lg" />,
      'Insurance and others...': <FaShieldAlt className="text-lg" />,
    };
    return map[industry] || <FaBuilding className="text-lg" />;
  };

  return (
    <div className="bg-white shadow-[20px_-20px_0_rgba(230,151,44,0.6)] hover:shadow-[20px_-20px_0_rgba(230,151,44,0.9)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-accentOrange bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
            <FaGlobeAmericas className="text-xl text-accentOrange" />
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Industry Focus</h3>
        </div>
        
        <ul className="space-y-4">
          {industries.map((industry, index) => (
            <li 
              key={index}
              className="flex items-center p-3 bg-lightGray rounded-lg hover:bg-accentOrange hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                {getIndustryIcon(industry)}
              </span>
              <span className="font-medium text-sm">{industry}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Cross-industry experience and insights
          </p>
        </div>
      </div>
    </div>
  );
};


const StaffingSolutions = () => {
  const staffingData = {
    description:
      "GC Technologies is diversified across service lines and industry sectors to provide our clients with the best possible HR services and solutions. We can evolve with the changing staffing, business and economic conditions nationwide. Additionally, by leveraging our worldwide network and staffing expertise, GC Technologies is equipped to guide our clients through their most complex and challenging staffing undertakings. We have used our expertise to assist our clients in developing strategic staffing plans, consult on long-term HR projects and fully staff complex projects with the best candidates.",
    
    staffingTypes: [
      "Contract",
      "Contract to Hire",
      "Permanent / Full time Hire",
      "Flexi Staffing (On demand)",
      "Work Ready Consultants (RTD)"
    ],
    
    domainExpertise: [
      "Expertise in sourcing PEGA Specialist",
      "DEVOPS and DATA ANALYTICS resources",
      "SAP (Functional, Technical, Niche requirements such as CRM, Success Factors, ISU etc.)",
      "MS Technologies",
      "PeopleSoft & Siebel",
      "Cloud Implementations & Migrations"
    ],
    
    industryFocus: [
      "Banking / Financials",
      "Retail",
      "Manufacturing",
      "Life Sciences / Healthcare",
      "Automotive",
      "Insurance and others..."
    ]
  };

  return (
    <div className="py-12 lg:px-4 px-6 bg-gray-200">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">
            Staffing Solutions & Staffing Options
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {staffingData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Staffing Types */}
          <div className="animate-fade-in-up">
            <StaffingTypesCard types={staffingData.staffingTypes} />
          </div>

          {/* Domain Expertise */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <DomainExpertiseCard expertise={staffingData.domainExpertise} />
          </div>

          {/* Industry Focus */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <IndustryFocusCard industries={staffingData.industryFocus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingSolutions;
