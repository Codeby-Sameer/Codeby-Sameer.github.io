// src/components/sections/OurClients.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const OurClients = () => {
  const clients = [
    { name: "TCS", logo: "/images/clients/tcs.svg" },
    { name: "Hitachi", logo: "/images/clients/hitachi.svg" },
    { name: "Amdocs", logo: "/images/clients/amdocs.svg" },
    { name: "Innominds", logo: "/images/clients/innominds.svg" },
    { name: "Comsense", logo: "/images/clients/comsense.png" },
    { name: "vCreatek", logo: "/images/clients/vCreatek.png" },
    { name: "Sonata", logo: "/images/clients/sonata.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue mb-3">
            Our Clients
          </h2>
          <p className="text-gray-600">
            Trusted by leading global enterprises and technology innovators.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          speed={800}
          breakpoints={{
            0:   { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024:{ slidesPerView: 4 },
          }}
          spaceBetween={20}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="bg-white rounded-xl border shadow-sm flex items-center justify-center py-6 px-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
