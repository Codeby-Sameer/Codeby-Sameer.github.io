import { ArrowRight, Sparkles, Star, Target, Globe, Shield, Zap, Rocket } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  // Particle configuration
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5000,
        duration: 3000 + Math.random() * 4000,
        size: 2 + Math.random() * 4,
      })),
    []
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: '50+', label: 'Global Clients', icon: <Globe className="w-5 h-5" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '24/7', label: 'Support', icon: <Shield className="w-5 h-5" /> },
    { number: '2x', label: 'Growth Acceleration', icon: <Zap className="w-5 h-5" /> },
  ];

  const technologies = [
    'Cloud Architecture', 'AI/ML', 'DevOps', 'Cybersecurity', 'Data Analytics', 'IoT'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner1.avif')",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-800 backdrop-blur-sm " />
      </div>

      {/* Enhanced Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-200/30 via-fuchsia-200/20 to-rose-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-amber-200/30 to-pink-200/20 blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-white/30 to-white/20"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration / 1000,
              delay: p.delay / 1000,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-2xl mb-7"
            >
              <div className="flex items-center space-x-1 text-amber-300">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <Star className="w-4 h-4 fill-amber-300/90" />
                  </motion.div>
                ))}
              </div>
              <span className="text-white text-sm font-semibold">Empowering Growth Through Innovation</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5">
                <span className="block mb-2 text-white">Welcome to</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  GC Technologies
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-4 italic font-light"
            >
              Growth & Creative - Where Innovation Meets Execution
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              We are a premier technology consulting and staffing firm committed to delivering innovative 
              solutions that drive digital transformation and operational excellence across global enterprises. 
              Your partner in navigating the complex digital landscape.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-xs text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 1.2 }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <motion.div
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl cursor-pointer
                hover:shadow-3xl transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Explore Our Services</span>
              </motion.div>

              <motion.div
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold
                text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20
                transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Target className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span>Schedule Consultation</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex flex-col items-center space-y-2 text-white/70 cursor-pointer"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;