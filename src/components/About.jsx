import React from 'react';
import { 
  FaRocket, 
  FaStar, 
  FaHandshake, 
  FaLock, 
  FaBullseye, 
  FaEye, 
  FaBolt 
} from "react-icons/fa";

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and AI to deliver exceptional solutions.',
      Icon: FaRocket,
      gradient: 'from-primary to-accentPink'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and staffing solutions.',
      Icon: FaStar,
      gradient: 'from-accentOrange to-primary'
    },
    {
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and mutual success.',
      Icon: FaHandshake,
      gradient: 'from-secondary to-primary'
    },
    {
      title: 'Integrity',
      description: 'Genuine and transparent in all our business dealings.',
      Icon: FaLock,
      gradient: 'from-accentPink to-secondary'
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
          <p className="md:text-xl text-md text-gray-600 max-w-3xl mx-auto">
            We are a dynamic technology company dedicated to driving business growth through innovative staffing solutions, comprehensive services, and cutting-edge technology implementations.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up">
            <div className="bg-white shadow-lg shadow-[20px_-20px_0_rgba(0,0,255,0.3)] p-8 border-l-4 border-primary rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accentPink text-white shadow-md transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-darkBlue ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with strategic IT solutions, exceptional talent, and innovative technology that drives operational efficiency, growth, and long-term success.
              </p>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-[20px_-20px_0_rgba(0,0,255,0.3)] shadow-lg p-8 border-l-4 border-secondary rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 flex items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-md transform transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-darkBlue ml-4">Our Vision</h3>
              </div>
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
            {values.map((value, index) => {
              const Icon = value.Icon;
              return (
                <div
                  key={value.title}
                  className="group animate-fade-in-up bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                  >
                    <div className={`bg-gradient-to-br ${value.gradient} text-white rounded-2xl flex items-center justify-center h-full w-full`}>
                      <Icon className="text-2xl drop-shadow-sm" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-darkBlue mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose GC Technologies?</h2>
            <p className="md:text-lg text-md opacity-90 mb-6">
              We understand that we are small, yet "genuine" in our approach to every client relationship. 
              Our size allows us to provide personalized attention and tailored solutions that larger firms often overlook.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="group bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 text-white shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <FaBullseye className="text-xl" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                <p className="text-sm opacity-90">Customized approaches for your unique business needs</p>
              </div>

              <div className="group bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 text-white shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <FaBolt className="text-xl" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Rapid Deployment</h4>
                <p className="text-sm opacity-90">Quick implementation without compromising quality</p>
              </div>

              <div className="group bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-emerald-400 text-white shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <FaHandshake className="text-xl" />
                  </div>
                </div>
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
