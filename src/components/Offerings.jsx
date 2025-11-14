import { Users, Settings, Lightbulb, ArrowRight } from 'lucide-react';



function Offerings({ onNavigate }) {
  const offerings = [
    {
      id: 'staffing',
      number: '1',
      icon: Users,
      title: 'Staffing',
      description: 'GC Tech has a pool of exclusive and verified HR resources with specialist skills and cross-industry experience to address your business requirements.',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 'services',
      number: '2',
      icon: Settings,
      title: 'Services',
      description: 'GC Tech offers comprehensive service from enablement to transformation aligned to your growth and business outcomes.',
      gradient: 'from-secondary to-accentPink'
    },
    {
      id: 'solutions',
      number: '3',
      icon: Lightbulb,
      title: 'Solutions',
      description: 'GC Tech can help build digital capabilities, deploy applications, technology and infrastructure specific to industry solutions.',
      gradient: 'from-accentPink to-accentOrange'
    }
  ];

  return (
    <section className="py-20 bg-lightGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accentPink bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${offering.gradient}`} />

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {offering.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {offering.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offering.description}
                </p>

                <button
                  onClick={() => onNavigate(offering.id)}
                  className="group/btn flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${offering.gradient} opacity-5 rounded-tl-full transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offerings;
