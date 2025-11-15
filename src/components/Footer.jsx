import { Phone, MapPin, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
   <>
   
    {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logo.jpg" alt="" className='w-36' />
              <h3 className="text-white text-lg font-bold mb-4">GC Technologies</h3>
              <p className="text-white/60 leading-relaxed">
                Empowering businesses through innovative technology solutions and expert staffing services.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/60 flex flex-col">
                <Link to="/staffing">IT Staffing</Link>
                <Link to="/services">Development Services</Link>
                <Link to="/services">Cloud Solutions</Link>
                <Link to="/services">Data Analytics</Link>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <Link to="/about">About Us</Link>
                <li>Careers</li>
                <li>Case Studies</li>
                <Link>Blog</Link>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin  size={32} />
                  <span>2nd Floor, Serenity Square Madhapur, Hyderabad India 500072</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91 9066647855 <br /> +91 8886051410</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={16} />
                  <span>info@gctechsoft.com
                    <br />hr@gctechsoft.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 GC Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer></>
  );
}

export default Footer;