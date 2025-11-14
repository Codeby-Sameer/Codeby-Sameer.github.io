import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, ChevronRight } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/staffing', label: 'Staffing' },
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-secondary to-accentPink rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold leading-tight">
                <span className="text-primary">GC</span>
                <span className="text-secondary">Tech</span>
              </span>
              <span className="text-xs text-accentOrange italic font-light leading-tight hidden sm:block">
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
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-primary bg-blue-50/80'
                    : 'text-gray-700 hover:text-primary hover:bg-blue-50/50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-gray-700 hover:text-primary transition-all duration-300 relative group"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden bg-white fixed inset-0 top-16  transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? ' translate-x-0' 
              : ' translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-8 pb-6">
            <div className="flex-1 space-y-2 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-semibold transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-primary bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50/80'
                  }`}
                  style={{
                    animationDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <div 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 group-hover:bg-primary'
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive(item.path) 
                        ? 'text-primary transform scale-110' 
                        : 'text-gray-400 group-hover:text-primary group-hover:translate-x-1'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="px-4 pt-6 border-t border-gray-200/50">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 text-center">
                <p className="text-sm text-gray-600">
                  Ready to transform your business?
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;