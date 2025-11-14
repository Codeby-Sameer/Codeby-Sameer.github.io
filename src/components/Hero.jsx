import { ArrowRight, Sparkles, Users, Code, Cloud, Rocket, Star, ChevronDown, Globe, Shield, Zap, Target } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

function Hero() {
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

  // Enhanced Social media links with authentic colors and popping animations
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      ),
      bgColor: 'bg-[#0077B5]',
      hoverColor: 'hover:bg-[#0077B5]',
      color: 'text-white'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      ),
      bgColor: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#1877F2]',
      color: 'text-white'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
              </linearGradient>
            </defs>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      ),
      bgColor: 'bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600',
      hoverColor: 'hover:from-yellow-500 hover:via-red-600 hover:to-purple-700',
      color: 'text-white'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg className="w-5 h-5" fill="#FF0000" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
      ),
      bgColor: 'bg-[#FF0000]',
      hoverColor: 'hover:bg-[#FF0000]',
      color: 'text-white'
    }
  ];

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

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const features = [
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Staffing',
      description: 'Exclusive verified HR resources with specialist skills across all technology domains',
      stats: '500+',
      statLabel: 'Verified Candidates',
      borderGradient: 'from-sky-400 to-cyan-400',
      chip: 'from-sky-50 to-cyan-50',
      delay: 0.3,
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Services',
      description: 'End-to-end digital transformation from strategy to implementation',
      stats: '50+',
      statLabel: 'Projects Delivered',
      borderGradient: 'from-violet-400 to-fuchsia-400',
      chip: 'from-violet-50 to-fuchsia-50',
      delay: 0.4,
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: 'Solutions',
      description: 'Industry-specific digital capabilities and cloud-native applications',
      stats: '15+',
      statLabel: 'Industries Served',
      borderGradient: 'from-amber-400 to-orange-400',
      chip: 'from-amber-50 to-orange-50',
      delay: 0.5,
    },
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
        <div className="absolute inset-0 bg-slate-900/40" />
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

      {/* Floating Social Media Icons - Left Side for Both Desktop and Mobile */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 flex-col items-center space-y-4 hidden sm:flex"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-2xl ${social.bgColor} ${social.color} 
            backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 
            ${social.hoverColor} hover:shadow-xl hover:scale-110`}
            whileHover={{ 
              scale: 1.15,
              y: -5,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                delay: 1.4 + index * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            {/* Popping Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3 + index * 0.5,
                ease: "easeInOut"
              }}
            >
              {social.icon}
            </motion.div>

            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
            bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg opacity-0 
            group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
            pointer-events-none">
              {social.name}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 
              border-4 border-transparent border-r-white" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Social Media Icons - Same Position (Left Side) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="sm:hidden fixed left-4 top-1/2 transform -translate-y-1/2 z-30 flex-col items-center space-y-3 flex"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl ${social.bgColor} ${social.color} 
            backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 
            ${social.hoverColor}`}
            whileHover={{ 
              scale: 1.2,
              y: -3,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                delay: 1.4 + index * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            {/* Popping Animation for Mobile */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3 + index * 0.5,
                ease: "easeInOut"
              }}
            >
              {social.icon}
            </motion.div>

            {/* Mobile Tooltip */}
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 
            bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
            pointer-events-none">
              {social.name}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 
              border-3 border-transparent border-r-white" />
            </div>
          </motion.a>
        ))}
      </motion.div>

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

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.button
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl
                hover:shadow-3xl transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold
                text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20
                transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Consultation</span>
                <Target className="w-5 h-5 transition-transform group-hover:scale-110" />
              </motion.button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                custom={index}
                className="group relative rounded-3xl p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20
                shadow-2xl transition-all duration-500"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                {/* Inner content */}
                <div className="relative z-10">
                  {/* Icon chip */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.chip} border border-white/20
                    flex items-center justify-center text-white mb-5`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div>
                      <div className="text-2xl font-bold text-white">{feature.stats}</div>
                      <div className="text-xs text-white/60">{feature.statLabel}</div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Rocket className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center mb-16"
          >
            <p className="text-white/70 text-sm font-medium mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
              {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="text-white font-semibold text-lg"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>

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

export default Hero;