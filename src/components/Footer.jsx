import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex  flex-col mb-4">
            <div>
              <img src="/images/logo.jpg" alt="" className='w-36 mb-2' />
            </div>
              <span className="text-xl font-bold">GC Technologies</span>
            </div>
            <p className="text-gray-300 text-sm">
              Growth & Creative solutions for your business transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/staffing" className="text-gray-300 hover:text-white transition-colors">Staffing</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@gctech.com</li>
              <li>Phone: <span>+91 9066647855 /+91 8886051410</span></li>
              <li>Asia-Hyderabad, India</li>
              <li>2nd Floor, Serenity Square, Madhapur, 500072</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
  <span className="sr-only">Instagram</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
  </svg>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors">
  <span className="sr-only">WhatsApp</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a9.93 9.93 0 00-7.07 2.93A9.93 9.93 0 002 12c0 1.76.46 3.48 1.33 5.01L2 22l5.09-1.33A9.93 9.93 0 0012 22c2.65 0 5.15-1.03 7.07-2.93A9.93 9.93 0 0022 12c0-2.65-1.03-5.15-2.93-7.07A9.93 9.93 0 0012 2zm0 18a8.01 8.01 0 01-4.24-1.24l-.3-.18-3.02.79.8-2.95-.2-.31A8.01 8.01 0 014 12a8 8 0 0116 0c0 2.13-.83 4.14-2.34 5.66A7.97 7.97 0 0112 20zm3.71-5.29c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.22.15-.42.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.16-1.11-1.36-.11-.2-.01-.31.08-.41.08-.08.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.61-1.45-.16-.39-.33-.34-.44-.35h-.38c-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.65s.72 1.91.82 2.04c.1.13 1.41 2.15 3.42 3.01.48.21.85.34 1.14.44.48.15.92.13 1.27.08.39-.06 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23z"/>
  </svg>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors">
  <span className="sr-only">Facebook</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2V12h2.2V9.8c0-2.18 1.3-3.38 3.3-3.38.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 2.9h-2.03v7.05A10 10 0 0022 12z"/>
  </svg>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors">
  <span className="sr-only">YouTube</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.5 20.5 12 20.5 12 20.5s7.5 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
          <p>&copy; 2024 GC Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;