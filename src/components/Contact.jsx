import React from 'react';
import { useFormik } from 'formik';
import {
  FaGlobe,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import QuoteCard from './sections/QuoteCard';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaGlobe,
      title: 'Website',
      value: 'www.gctechsoft.com',
      link: 'http://www.gctechsoft.com',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@gctechsoft.com',
      link: 'mailto:info@gctechsoft.com',
    },
    {
      icon: FaBuilding,
      title: 'Headquarters',
      value: '2nd Floor, Serenity Square, Madhapur, Hyderabad, 500072',
      link: null,
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Asia-Hyderabad, India',
      link: null,
    },
  ];
  const isDev = import.meta.env.MODE === "development";

  const API_URL = isDev
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.name.trim()) {
        errors.name = 'Full name is required';
      }

      if (!values.email.trim()) {
        errors.email = 'Email is required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.subject) {
        errors.subject = 'Subject is required';
      }

      if (!values.message.trim()) {
        errors.message = 'Message is required';
      }

      return errors;
    },
  onSubmit: async (values, { resetForm, setSubmitting }) => {
  try {
    const response = await fetch(
      `${API_URL}${import.meta.env.VITE_CONTACT_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
   

    alert("Thank you for your message! We will get back to you soon.");
    resetForm();
  } catch (error) {
   
    alert("Something went wrong. Please try again later.");
  } finally {
    setSubmitting(false); // 🔴 VERY IMPORTANT
  }
},

  });




  return (
    <div className="min-h-screen py-12 bg-lightGray">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our solutions can drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4 px-4 sm:px-6 lg:px-10">
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-darkBlue mb-6">
                Send us a Message
              </h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="staffing">Staffing Solutions</option>
                      <option value="services">IT Services</option>
                      <option value="solutions">Technology Solutions</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {formik.touched.subject && formik.errors.subject && (
                      <p className="mt-1 text-xs text-red-500">
                        {formik.errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows="6"
                    className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

               <button
  type="submit"
  disabled={formik.isSubmitting}
  className={`w-full bg-primary text-white font-semibold py-5 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105
    ${formik.isSubmitting ? "opacity-60 cursor-not-allowed hover:scale-100" : "hover:bg-blue-700"}
  `}
>
  {formik.isSubmitting ? "Sending..." : "Send Message"}
</button>

              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-darkBlue to-primary rounded-xl shadow-lg p-8 text-white h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start">
                      <span className="mr-4 mt-1">
                        <Icon className="text-2xl" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-200 hover:text-white transition-colors duration-300 underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4">
                  Why Choose GC Technologies?
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {[
                    'AI-driven staffing solutions',
                    'Comprehensive IT services',
                    'Industry-specific technology solutions',
                    'Global capability center support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheckCircle className="mr-2 text-accentOrange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </div>

        <QuoteCard />

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-darkBlue mb-6 text-center">
              Our Location
            </h2>
            <div className="bg-lightGray rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="mb-4 flex justify-center">
                  <FaMapMarkerAlt className="text-4xl text-primary" />
                </div>
                <p className="text-lg font-semibold">Hyderabad, India</p>
                <p className="text-sm">
                  2nd Floor, Serenity Square, Madhapur, 500072
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
