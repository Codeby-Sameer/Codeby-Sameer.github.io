import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/staffing', label: 'Staffing' },
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 py-3 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight whitespace-nowrap">
                <span className="text-blue-600">GC</span>
                <span className="text-violet-600">Tech</span>
              </span>
              <span className="text-[10px] text-blue-500 italic font-light leading-tight">
                Growth & Creative
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919066647855"
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-50"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 9066647855</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative z-60"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden fixed inset-0 top-0 bg-white transition-all duration-500 ease-in-out overflow-y-auto z-50 ${
            isMobileMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  <span className="text-blue-600">GC</span>
                  <span className="text-violet-600">Tech</span>
                </span>
                <span className="text-[10px] text-blue-500 italic font-light leading-tight">
                  Growth & Creative
                </span>
              </div>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col pt-4 pb-8">
            <div className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between p-4 rounded-2xl text-base font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center space-x-3">
                    <div 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-slate-300 group-hover:bg-blue-600'
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive(item.path) 
                        ? 'text-blue-600 transform scale-110' 
                        : 'text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Contact Section */}
            <div className="px-4 pt-8 mt-4 border-t border-slate-200">
              {/* Quick Contact */}
              <div className="space-y-3 mb-6">
                <a 
                  href="tel:+919066647855"
                  className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 9066647855</span>
                </a>
                <a 
                  href="mailto:hanu@gctechsoft.com"
                  className="flex items-center justify-center space-x-2 p-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Mail className="w-5 h-5" />
                  <span>hanu@gctechsoft.com</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-4 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Project
              </Link>

              {/* Company Info */}
              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-medium">
                  GC Technologies
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Growth & Creative Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;