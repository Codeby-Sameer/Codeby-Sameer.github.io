import { hover, motion } from 'framer-motion';
import { Briefcase, Facebook, FacebookIcon, Instagram, Linkedin, LinkedinIcon, Youtube } from 'lucide-react';

function SocialMedia() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon:   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>,
                 color: 'text-gray-400 hover:text-gray-300',
                
     
    },
    {
      name: 'Facebook',
      url: '#',
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.2V12h2.2V9.8c0-2.18 1.3-3.38 3.3-3.38.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 2.9h-2.03v7.05A10 10 0 0022 12z"/>
  </svg>,
      color: 'text-gray-400 hover:text-gray-300',
     
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
  </svg>,
      color: 'text-gray-400 hover:text-gray-300',
     
    },
    {
      name: 'YouTube',
      url: '#',
      icon:  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.5 20.5 12 20.5 12 20.5s7.5 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>,
      color: 'text-gray-400 hover:text-gray-300',
     
    }
  ];

  return (
    <>
      {/* Desktop Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-2 top-1/3 transform -translate-y-1/2 z-40 flex-col items-center space-y-8 hidden sm:flex"
      >
        <div className="flex flex-col items-center space-y-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-2 rounded-full ${social.color} transition-all duration-300 hover:scale-110 relative`}
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 1.4 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3 + index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {social.icon}
              </motion.div>

              {/* Desktop Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
              bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
              pointer-events-none z-50">
                {social.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 
                border-4 border-transparent border-r-slate-900" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="relative text-xs font-semibold text-transparent bg-gradient-to-b from-white to-black bg-clip-text -rotate-90 origin-center whitespace-nowrap mb-8 overflow-hidden"
        >
          <span className="">Follow Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine" />
        </motion.div>
      </motion.div>

      {/* Mobile Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="sm:hidden fixed left-1 bottom-1/4 z-40 flex flex-col items-center space-y-6"
      >
        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-1.5 rounded-full ${social.color} transition-all duration-300 relative`}
              whileHover={{ 
                scale: 1.2,
                y: -2,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 1.4 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3 + index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {social.icon}
              </motion.div>

              {/* Mobile Tooltip - Fixed */}
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 
              bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
              pointer-events-none z-50">
                {social.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 
                border-3 border-transparent border-r-slate-900" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="relative   text-xs font-semibold text-transparent bg-gradient-to-b from-white to-black bg-clip-text -rotate-90 origin-center whitespace-nowrap mb-8 overflow-hidden"
        >
          <span className=""> Follow Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine " />
        </motion.div>
      </motion.div>
    </>
  );
}

export default SocialMedia;