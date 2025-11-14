import { Building2, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-darkBlue to-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accentPink rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  <span className="text-primary">GC</span>
                  <span className="text-secondary"> Tech</span>
                </span>
                <span className="text-sm text-accentOrange italic font-light">
                  Growth & Creative Technologies
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4 max-w-md">
              We deliver innovative software solutions that drive growth and foster creativity. 
              Small in size, but genuine in our commitment to excellence.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@gctechsoft.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accentOrange transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-secondary">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accentPink" />
                <span className="text-white/70 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accentPink" />
                <span className="text-white/70 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {currentYear} GC Technologies. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/80 text-sm italic">
                We are small, yet "Genuine"
              </p>
              <a 
                href="https://www.gctechsoft.com" 
                className="text-accentOrange hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                www.gctechsoft.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;