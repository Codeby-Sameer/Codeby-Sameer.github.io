import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import { img } from 'framer-motion/client';
import SocialMedia from './sections/SocailMedia';
import QuoteCard from './sections/QuoteCard';

const Home = () => {
  const offerings = [
    {
      title: 'Staffing',
      description: 'Exclusive and verified HR resources with specialist skills and cross-industry experience.',
      img:"/images/Digital1.avif",
      path: '/staffing',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Services',
      description: 'Comprehensive service from enablement to transformation aligned to your growth and business outcomes.',
      img: '/images/People.avif',
      path: '/services',
      gradient: 'from-accentPink to-accentOrange'
    },
    {
      title: 'Solution',
      description: 'Build digital capabilities, deploy applications, technology and infrastructure specific to industry solutions.',
      img: '/images/Server-cuate.avif',
      path: '/solutions',
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
    <section className="relative  text-white py-32  overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/background1.jpg"
      alt="Technology Background"
      className="w-full h-full object-cover"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate/10 to-primary/80"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        GC Technologies
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90">
        Growth & Creative
      </p>
      <p className="text-lg md:text-xl px-3 max-w-3xl mx-auto mb-10 opacity-80">
        Transforming businesses with innovative staffing solutions, comprehensive services, and cutting-edge technology solutions.
      </p>
      <Link
        to="/about"
        className="inline-block bg-accentOrange hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        Learn More
      </Link>
    </div>
  </div>
</section>
<SocialMedia/>

      {/* Offerings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-4">
              Our Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to drive your business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Link to={offering.path}>
                  <div className="bg-white border border-1 border-gray-200  shadow-[20px_-20px_0_rgba(0,0,255,0.3)] hover:shadow-[20px_-20px_0_rgba(0,0,255,0.6)] transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 overflow-hidden">
                    {/* <div className={`h-2 bg-gradient-to-r ${offering.gradient}`}></div> */}
                    <div className="p-6">
                   <div>
                    <img src={offering.img} alt="" />
                   </div>
                      <h3 className="text-xl font-bold text-darkBlue mb-3">
                        {offering.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {offering.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-semibold">
                        <span>Explore</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About/>
      {/* CTA Section */}
      <section className="py-16 mb-8 bg-gradient-to-br from-darkBlue to-primary ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how our solutions can drive your success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      <QuoteCard/>
    </div>
  );
};

export default Home;