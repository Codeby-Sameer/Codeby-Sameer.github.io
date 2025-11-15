import { motion } from 'framer-motion';
import { Briefcase, Facebook, FacebookIcon, Instagram, Linkedin, LinkedinIcon, Youtube } from 'lucide-react';

function SocialMedia() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: <LinkedinIcon className="sm:w-5 sm:h-5 w-[22px] h-[22px]" fill='white'/>,
      color: 'bg-blue-600 hover:bg-blue-700',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: <FacebookIcon className="sm:w-5 sm:h-5 w-[22px] h-[22px]" fill='white'/>,
      color: 'bg-blue-600 hover:bg-blue-700',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <Instagram className="sm:w-5 sm:h-5 w-[22px] h-[22px]" fill='white'/>,
      color: 'bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 hover:from-yellow-300 hover:via-red-400 hover:to-purple-500',
      hoverColor: 'hover:bg-gradient-to-br from-yellow-300 via-red-400 to-purple-500'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: <Youtube className="sm:w-5 sm:h-5 w-[22px] h-[22px]" fill='white' />,
      color: 'bg-red-600 hover:bg-red-700',
      hoverColor: 'hover:bg-red-700'
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
          className="relative text-xs font-semibold text-transparent bg-gradient-to-b from-white to-black bg-clip-text -rotate-90 origin-center whitespace-nowrap mb-8 overflow-hidden"
        >
          <span className="">Follow Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine" />
        </motion.div>
      </motion.div>
    </>
  );
}

export default SocialMedia;