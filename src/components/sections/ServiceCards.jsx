import { Users, Code, Cloud, Rocket, Database, Smartphone, Lock, Server, Cpu, Shield, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

function ServicesCards() {
  const services = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'IT Staffing',
      description: 'Exclusive verified HR resources with specialist skills across all technology domains. Find the perfect talent for your projects.',
      features: ['500+ Verified Candidates', 'Quick Onboarding', 'Diverse Skill Sets'],
      stat: '500+',
      statLabel: 'Verified Candidates',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      iconColor: 'text-white',
      borderColor: 'border-blue-200',
      delay: 0.1,
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Development Services',
      description: 'End-to-end digital transformation from strategy to implementation with cutting-edge technologies.',
      features: ['50+ Projects Delivered', 'Agile Methodology', 'Quality Assurance'],
      stat: '50+',
      statLabel: 'Projects Delivered',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      iconColor: 'text-white',
      borderColor: 'border-purple-200',
      delay: 0.2,
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Cloud Solutions',
      description: 'Industry-specific digital capabilities and cloud-native applications for scalable growth.',
      features: ['Multi-Cloud Expertise', 'Cost Optimization', '24/7 Monitoring'],
      stat: '15+',
      statLabel: 'Industries Served',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      iconColor: 'text-white',
      borderColor: 'border-amber-200',
      delay: 0.3,
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and BI solutions.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
      stat: '100+',
      statLabel: 'Data Projects',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      iconColor: 'text-white',
      borderColor: 'border-emerald-200',
      delay: 0.4,
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Mobile Development',
      description: 'Create engaging mobile experiences with native and cross-platform applications.',
      features: ['iOS & Android', 'React Native', 'Flutter Expertise'],
      stat: '75+',
      statLabel: 'Mobile Apps',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
      iconColor: 'text-white',
      borderColor: 'border-rose-200',
      delay: 0.5,
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Risk Assessment', 'Security Audits', 'Compliance Management'],
      stat: '99.9%',
      statLabel: 'Security Uptime',
      iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
      iconColor: 'text-white',
      borderColor: 'border-red-200',
      delay: 0.6,
    },
    {
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'DevOps',
      description: 'Streamline your development and operations with automated CI/CD pipelines and infrastructure.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Containerization'],
      stat: '200+',
      statLabel: 'Deployments',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500',
      iconColor: 'text-white',
      borderColor: 'border-indigo-200',
      delay: 0.7,
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'AI & ML',
      description: 'Leverage artificial intelligence and machine learning to drive intelligent business decisions.',
      features: ['Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
      stat: '30+',
      statLabel: 'AI Models',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
      iconColor: 'text-white',
      borderColor: 'border-violet-200',
      delay: 0.8,
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Digital Transformation',
      description: 'Comprehensive strategy and implementation for your digital evolution journey.',
      features: ['Digital Strategy', 'Change Management', 'Process Automation'],
      stat: '40+',
      statLabel: 'Enterprises',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      iconColor: 'text-white',
      borderColor: 'border-cyan-200',
      delay: 0.9,
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
    <section className="py-16 border  sm:py-20 bg-slate-300">
      <div className="container mx-auto  px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6    sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white border-2 border-gray-100
              shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-gray-200
              hover:-translate-y-2"
              whileHover={{ 
                scale: 1.02,
              }}
            >
              {/* Inner content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${service.iconBg} ${service.borderColor}
                  flex items-center justify-center ${service.iconColor} mb-4 sm:mb-6 border-2
                  group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{service.stat}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{service.statLabel}</div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </motion.div>
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </section>
  );
}

export default ServicesCards;