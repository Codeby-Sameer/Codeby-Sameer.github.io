import { Users, Code, Cloud, Rocket, Database, Server, Smartphone, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

function ServicesCards() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'IT Staffing',
      description: 'Exclusive verified HR resources with specialist skills across all technology domains. Find the perfect talent for your projects.',
      features: ['500+ Verified Candidates', 'Quick Onboarding', 'Diverse Skill Sets'],
      stat: '500+',
      statLabel: 'Verified Candidates',
      borderGradient: 'from-sky-400 to-cyan-400',
      chip: 'from-sky-50 to-cyan-50',
      delay: 0.1,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development Services',
      description: 'End-to-end digital transformation from strategy to implementation with cutting-edge technologies.',
      features: ['50+ Projects Delivered', 'Agile Methodology', 'Quality Assurance'],
      stat: '50+',
      statLabel: 'Projects Delivered',
      borderGradient: 'from-violet-400 to-fuchsia-400',
      chip: 'from-violet-50 to-fuchsia-50',
      delay: 0.2,
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Industry-specific digital capabilities and cloud-native applications for scalable growth.',
      features: ['Multi-Cloud Expertise', 'Cost Optimization', '24/7 Monitoring'],
      stat: '15+',
      statLabel: 'Industries Served',
      borderGradient: 'from-amber-400 to-orange-400',
      chip: 'from-amber-50 to-orange-50',
      delay: 0.3,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and BI solutions.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
      stat: '100+',
      statLabel: 'Data Projects',
      borderGradient: 'from-emerald-400 to-teal-400',
      chip: 'from-emerald-50 to-teal-50',
      delay: 0.4,
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Create engaging mobile experiences with native and cross-platform applications.',
      features: ['iOS & Android', 'React Native', 'Flutter Expertise'],
      stat: '75+',
      statLabel: 'Mobile Apps',
      borderGradient: 'from-rose-400 to-pink-400',
      chip: 'from-rose-50 to-pink-50',
      delay: 0.5,
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Risk Assessment', 'Security Audits', 'Compliance Management'],
      stat: '99.9%',
      statLabel: 'Security Uptime',
      borderGradient: 'from-red-400 to-rose-400',
      chip: 'from-red-50 to-rose-50',
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward. 
            From staffing to full-scale digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-3xl p-8 bg-white/5 backdrop-blur-sm border border-white/10
              shadow-2xl transition-all duration-500 hover:bg-white/10"
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              {/* Inner content */}
              <div className="relative z-10">
                {/* Icon chip */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.chip} border border-white/20
                  flex items-center justify-center text-slate-700 mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/70 text-sm">
                      <div className="w-2 h-2 bg-current rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.stat}</div>
                    <div className="text-sm text-white/60">{service.statLabel}</div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCards;