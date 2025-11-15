import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and AI to deliver exceptional solutions.',
      icon: '🚀',
      color: 'text-primary'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and staffing solutions.',
      icon: '⭐',
      color: 'text-accentOrange'
    },
    {
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success.',
      icon: '🤝',
      color: 'text-secondary'
    },
    {
      title: 'Integrity',
      description: 'Genuine and transparent in all our business dealings.',
      icon: '🔒',
      color: 'text-accentPink'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            About GC Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a dynamic technology company dedicated to driving business growth through innovative staffing solutions, comprehensive services, and cutting-edge technology implementations.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up">
            <div className="bg-white  shadow-lg shadow-[20px_-20px_0_rgba(0,0,255,0.3)] p-8 border-l-4 border-primary">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-darkBlue mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with strategic IT solutions, exceptional talent, and innovative technology that drives operational efficiency, growth, and long-term success.
              </p>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-[20px_-20px_0_rgba(0,0,255,0.3)] shadow-lg p-8 border-l-4 border-secondary">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-darkBlue mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading partner for businesses seeking transformative technology solutions and exceptional talent in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-darkBlue text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-fade-in-up bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl mb-4 ${value.color}`}>{value.icon}</div>
                <h3 className="text-xl font-bold text-darkBlue mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose GC Technologies?</h2>
            <p className="text-lg opacity-90 mb-6">
              We understand that we are small, yet "genuine" in our approach to every client relationship. 
              Our size allows us to provide personalized attention and tailored solutions that larger firms often overlook.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                <p className="text-sm opacity-90">Customized approaches for your unique business needs</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Rapid Deployment</h4>
                <p className="text-sm opacity-90">Quick implementation without compromising quality</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Personal Partnership</h4>
                <p className="text-sm opacity-90">Direct access to our team and decision-makers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;