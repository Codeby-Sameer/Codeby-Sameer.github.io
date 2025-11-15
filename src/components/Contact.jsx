import { Mail, MapPin, Phone, Send, Clock, Users, MessageCircle, Star } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits'),
      company: Yup.string(),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.log('Form submitted:', values);
        setIsSubmitted(true);
        resetForm();
        setSubmitting(false);
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 2000);
    }
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      content: "2nd Floor, Serenity Square\nMadhapur, Hyderabad\nIndia - 500072",
      color: "blue",
      delay: 0.1
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hanu@gctechsoft.com",
      link: "mailto:hanu@gctechsoft.com",
      color: "violet",
      delay: 0.2
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 9066647855\n+91 8886051410",
      color: "blue",
      delay: 0.3
    }
  ];

  const stats = [
    { icon: <Clock className="w-5 h-5" />, value: "24-48h", label: "Response Time", color: "blue" },
    { icon: <Users className="w-5 h-5" />, value: "50+", label: "Happy Clients", color: "violet" },
    { icon: <MessageCircle className="w-5 h-5" />, value: "100%", label: "Satisfaction", color: "blue" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        light: 'blue-50',
        border: 'blue-200',
        text: 'blue-600',
        bg: 'blue-500'
      },
      violet: {
        gradient: 'from-violet-500 to-violet-600',
        light: 'violet-50',
        border: 'violet-200',
        text: 'violet-600',
        bg: 'violet-500'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-200 via-white to-blue-500">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Let's Start a <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Conversation</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Share your vision with us and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => {
                const color = getColorClasses(item.color);
                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative"
                  >
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-blue-300">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color.gradient} flex items-center justify-center text-white shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.icon}
                        </motion.div>
                        
                        {/* Text */}
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold text-${color.text} mb-2`}>
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-slate-600 hover:text-slate-900 transition-colors text-sm whitespace-pre-line leading-relaxed"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Hover effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                    </div>
                  </motion.div>
                );
              })}

              {/* Stats */}
              <motion.div
                variants={cardVariants}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-blue-500 mr-2" />
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => {
                    const color = getColorClasses(stat.color);
                    return (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <div className={`w-12 h-12 bg-${color.light} rounded-xl flex items-center justify-center mx-auto mb-2 border border-${color.border}`}>
                          <div className={`text-${color.text}`}>{stat.icon}</div>
                        </div>
                        <div className={`text-${color.text} font-bold text-lg`}>{stat.value}</div>
                        <div className="text-slate-500 text-xs">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 relative"
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <Send className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="font-semibold">Thank you! We'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm">
                {/* Form Header */}
                <motion.div variants={itemVariants} className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </motion.div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-3">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                          formik.touched.name && formik.errors.name
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                            : 'border-slate-200 focus:ring-blue-100 focus:border-blue-400'
                        } text-slate-900 placeholder-slate-400`}
                        placeholder="Your full name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                          <span>•</span>
                          <span>{formik.errors.name}</span>
                        </div>
                      )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-3">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                          formik.touched.email && formik.errors.email
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                            : 'border-slate-200 focus:ring-blue-100 focus:border-blue-400'
                        } text-slate-900 placeholder-slate-400`}
                        placeholder="your.email@example.com"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                          <span>•</span>
                          <span>{formik.errors.email}</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-slate-700 text-sm font-medium mb-3">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                          formik.touched.phone && formik.errors.phone
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                            : 'border-slate-200 focus:ring-blue-100 focus:border-blue-400'
                        } text-slate-900 placeholder-slate-400`}
                        placeholder="+91 1234567890"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                          <span>•</span>
                          <span>{formik.errors.phone}</span>
                        </div>
                      )}
                    </motion.div>

                    {/* Company Field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="company" className="block text-slate-700 text-sm font-medium mb-3">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 text-slate-900 placeholder-slate-400 transition-all"
                        placeholder="Your company name"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-4 transition-all resize-none ${
                        formik.touched.message && formik.errors.message
                          ? 'border-red-300 focus:ring-red-100 focus:border-red-400'
                          : 'border-slate-200 focus:ring-blue-100 focus:border-blue-400'
                      } text-slate-900 placeholder-slate-400`}
                      placeholder="Tell us about your project, challenges, or how we can help you..."
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-500 text-sm mt-2 flex items-center space-x-1">
                        <span>•</span>
                        <span>{formik.errors.message}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    whileHover={{ scale: formik.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative z-10 flex items-center justify-center space-x-3">
                      {formik.isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;