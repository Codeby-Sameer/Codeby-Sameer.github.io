// src/components/sections/OurClients.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurClients = () => {
  const clients = [
    { name: 'TCS', logo: '/images/clients/tcs.svg' },
    { name: 'Hitachi', logo: '/images/clients/hitachi.svg' },
    { name: 'Amdocs', logo: '/images/clients/amdocs.svg' },
    { name: 'Innominds', logo: '/images/clients/innominds.svg' },
    { name: 'Comsense', logo: '/images/clients/comsense.png' },
    { name: 'vCreatek', logo: '/images/clients/vCreatek.png' },
    { name: 'Sonata', logo: '/images/clients/sonata.png' }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    pauseOnHover: true,
    slidesToShow: 4,         // 🖥️ default: desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,    // <= 1024px
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,     // <= 768px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,     // <= 640px (phones)
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-3">
            Our Clients
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Trusted by leading global enterprises and technology innovators.
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-lightGray rounded-2xl px-3 sm:px-6 py-6 sm:py-8 shadow-md">
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.name}>
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-full flex items-center justify-center py-6 px-4 hover:shadow-md transition-shadow duration-300 mx-3">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full max-h-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
