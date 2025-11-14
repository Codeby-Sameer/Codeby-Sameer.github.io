import { Building2, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
   <>
   
    {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">GC Technologies</h3>
              <p className="text-white/60 leading-relaxed">
                Empowering businesses through innovative technology solutions and expert staffing services.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/60">
                <li>IT Staffing</li>
                <li>Development Services</li>
                <li>Cloud Solutions</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li>About Us</li>
                <li>Careers</li>
                <li>Case Studies</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@gctech.com</span>
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