import { Cloud, Cpu, ShieldCheck, Database, GraduationCap, Building } from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      title: 'Technology Consulting',
      icon: ShieldCheck,
      items: [
        'Cloud Strategy & Consulting help client develop and implement cloud adoption strategies',
        'Cybersecurity & Risk Management Consulting offers strategic guidance to enhance security posture',
        'Data Analytics & BI Consulting assists companies in harnessing the power of data'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'AI Powered IT Ops (AIOps)',
      icon: Cpu,
      items: [
        'MSFT Copilot for automation and productivity enhancement of Office365',
        'IBM Watson AIOps for real time analysis and predictive insights',
        'Moogsoft & Datadog APM for automated incident management and performance monitoring'
      ],
      gradient: 'from-secondary to-accentPink'
    },
    {
      title: 'Cloud Migration',
      icon: Cloud,
      items: [
        'Lift & Shift Migration from OnPrem to OnCloud (Microsoft, AWS, IBM, Google)',
        'Hybrid Cloud Migration that integrates OnPrem & OnCloud',
        'Cloud to Cloud Migration enables clients to move workloads between platforms'
      ],
      gradient: 'from-accentPink to-accentOrange'
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
      ]
    },
    {
      title: 'Hire Train Deploy',
      icon: GraduationCap,
      description: 'Bridge the skills gap with job-ready professionals',
      items: [
        'Customized candidate selection process',
        'Intensive technical skills training',
        'Continuous performance monitoring'
      ]
    },
    {
      title: 'Global Capability Center',
      icon: Building,
      description: 'Agile, scalable operational units for cost-effective global talent access',
      items: [
        'Offshore and nearshore setup',
        'Cost-effective global talent access',
        'End-to-end operational support'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-secondary via-primary to-darkBlue text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              GC Tech offers comprehensive service from enablement to transformation
              aligned to your growth and business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Consulting and Managed Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Empowering Business Success with Strategic & Business Continuity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-lightGray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accentPink bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
