import React from 'react';

const QuoteCard = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Simple Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Minimal genuine approach"
          className="w-full h-full object-cover"
        />
        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-darkBlue/80"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main Quote */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-light text-white/90">
              We Know...
            </h2>
            <div className="space-y-2">
              <p className="text-4xl lg:text-5xl font-medium">
                We Are Small,
              </p>
              <p className="text-5xl lg:text-6xl font-bold text-accentOrange italic">
                Yet "Genuine"
              </p>
            </div>
          </div>

          {/* Simple Divider */}
          <div className="my-8">
            <div className="w-32 h-0.5 bg-white/50 mx-auto"></div>
          </div>

          {/* Supporting Text */}
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Your trusted partner in technology solutions, where genuine relationships matter more than corporate size.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;