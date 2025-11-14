
import { motion } from 'framer-motion';
import { 
  Globe, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import ServicesCards from './sections/ServiceCards';
import SocialMedia from './sections/SocailMedia';
import Banner from './sections/Banner';

function Home() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Serving clients across 20+ countries with localized expertise and global standards.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services for uninterrupted operations.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience in diverse technology domains.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Consistent delivery of projects that exceed client expectations and drive business growth.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechInnovate',
      content: 'GC Technologies transformed our digital infrastructure. Their expertise in cloud solutions helped us scale efficiently.',
      company: 'TechInnovate'
    },
    {
      name: 'Michael Chen',
      role: 'Product Director at GlobalRetail',
      content: 'Outstanding staffing solutions. They provided us with top-tier talent that perfectly matched our requirements.',
      company: 'GlobalRetail'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO at StartupGrid',
      content: 'Partnering with GC Technologies was the best decision for our digital transformation journey.',
      company: 'StartupGrid'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SocialMedia />
      <Banner />
      <ServicesCards />
      
      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">GC Technologies</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic mb-4">"{testimonial.content}"</p>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how GC Technologies can help you achieve your digital transformation goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold cursor-pointer shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.div>
              
              <motion.div
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-2xl font-semibold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
}

export default Home;