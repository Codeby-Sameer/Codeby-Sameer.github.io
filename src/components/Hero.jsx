import { ArrowRight, Sparkles, Users, Code, Cloud, Shield, Rocket, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staffing",
      description: "Exclusive verified HR resources with specialist skills",
      stats: "500+",
      statLabel: "Verified Candidates",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      delay: 400
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Services",
      description: "Comprehensive enablement to transformation solutions",
      stats: "50+",
      statLabel: "Projects Delivered",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-400",
      delay: 500
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Solutions",
      description: "Industry-specific digital capabilities and applications",
      stats: "15+",
      statLabel: "Industries Served",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-400 to-red-400",
      delay: 600
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-darkBlue via-primary to-secondary pt-16 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-accentPink/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-accentOrange/20 rounded-full filter blur-3xl animate-float delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float delay-4000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5000}ms`,
              animationDuration: `${3000 + Math.random() * 4000}ms`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-2xl mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accentOrange fill-current" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">Empowering Growth Through Innovation</span>
              <Sparkles className="w-4 h-4 text-accentOrange" />
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <span className="text-white block mb-2">Welcome to</span>
              <span className="bg-gradient-to-r from-accentPink via-accentOrange to-yellow-400 bg-clip-text text-transparent animate-gradient">
                GC Technologies
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg md:text-xl text-white/90 mb-4 transition-all duration-700 delay-300 italic font-light ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Growth & Creative
            </p>

            {/* Description */}
            <p className={`text-base md:text-lg lg:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              We are a technology consulting and staffing firm committed to delivering innovative solutions
              that drive business transformation and operational excellence across global enterprises.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button className="group relative px-8 py-4 bg-white text-darkBlue rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accentOrange to-accentPink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl group-hover:border-transparent transition-all duration-300" />
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-2xl font-bold hover:bg-white hover:text-darkBlue transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white transition-all duration-300" />
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative backdrop-blur-lg rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${feature.delay}ms` : '0ms',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Border Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.borderGradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accentPink group-hover:to-accentOrange group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-bold text-white">{feature.stats}</div>
                      <div className="text-xs text-white/60">{feature.statLabel}</div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <Rocket className="w-5 h-5 text-accentOrange" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="inline-flex flex-col items-center space-y-2 text-white/60">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;