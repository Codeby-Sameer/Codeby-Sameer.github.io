import React, { useState } from 'react';
import QuoteCard from './sections/QuoteCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '🌐',
      title: 'Website',
      value: 'www.gctechsoft.com',
      link: 'http://www.gctechsoft.com'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'info@gctechsoft.com',
      link: 'mailto:info@gctechsoft.com'
    },
    {
      icon: '🏢',
      title: 'Headquarters',
      value: '2nd Floor, Serenity Square, Madhapur, Hyderabad, 500072',
      link: null
    },
    {
      icon: '🌍',
      title: 'Location',
      value: 'Asia-Hyderabad, India',
      link: null
    }
  ];

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
          <div className="animate-fade-in-up  " style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-darkBlue mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="staffing">Staffing Solutions</option>
                      <option value="services">IT Services</option>
                      <option value="solutions">Technology Solutions</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-darkBlue to-primary rounded-xl shadow-lg p-8 text-white h-full">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">{info.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
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
                ))}
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4">Why Choose GC Technologies?</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    AI-driven staffing solutions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Comprehensive IT services
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Industry-specific technology solutions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Global capability center support
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-200 italic">
                  "We are small, yet genuine in our commitment to your success."
                </p>
              </div>
            </div>
          </div>
        </div>
        <QuoteCard/>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-darkBlue mb-6 text-center">Our Location</h2>
            <div className="bg-lightGray rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-lg font-semibold">Hyderabad, India</p>
                <p className="text-sm">2nd Floor, Serenity Square, Madhapur, 500072</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;