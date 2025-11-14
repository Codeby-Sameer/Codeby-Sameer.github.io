import { Mail, MapPin, Phone } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
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
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', values);
        alert('Thank you for your message! We will get back to you soon.');
        resetForm();
        setSubmitting(false);
      }, 1000);
    }
  });

  return (
    <section className="py-20 bg-gradient-to-br from-darkBlue via-primary to-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-white/80 text-lg">
              Let's discuss how we can help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-white/80 text-sm">
                      2nd Floor, Serenity Square<br />
                      Madhapur, Hyderabad<br />
                      India - 500072
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a 
                      href="mailto:hanu@gctechsoft.com" 
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      hanu@gctechsoft.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-white/80 text-sm">
                      +91 9066647855<br />
                      +91 8886051410
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        formik.touched.name && formik.errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/20 focus:ring-white/40'
                      } text-white placeholder-white/50`}
                      placeholder="Your full name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-300 text-sm mt-1">{formik.errors.name}</div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/20 focus:ring-white/40'
                      } text-white placeholder-white/50`}
                      placeholder="your.email@example.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-300 text-sm mt-1">{formik.errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        formik.touched.phone && formik.errors.phone
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/20 focus:ring-white/40'
                      } text-white placeholder-white/50`}
                      placeholder="+91 1234567890"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-300 text-sm mt-1">{formik.errors.phone}</div>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.company}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-white/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-white/20 focus:ring-white/40'
                    } text-white placeholder-white/50`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-300 text-sm mt-1">{formik.errors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-gradient-to-r from-accentOrange to-accentPink text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;