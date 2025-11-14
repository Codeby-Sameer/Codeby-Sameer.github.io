import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

function SocialMedia() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: <Facebook className="w-5 h-5" />,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <Instagram className="w-5 h-5" />,
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: <Youtube className="w-5 h-5" />,
      color: 'text-red-600 hover:text-red-700'
    }
  ];

  return (
    <>
      {/* Desktop Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-6 top-1/3 transform -translate-y-1/2 z-50 flex-col items-center space-y-8 hidden sm:flex"
      >
      
        
        <div className="flex flex-col items-center space-y-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300 hover:scale-110`}
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

              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
              bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
              pointer-events-none">
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
          className="text-xs font-semibold text-white -rotate-90 origin-center whitespace-nowrap mb-8"
        >
          Follow Us
        </motion.div>
      </motion.div>

      {/* Mobile Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="sm:hidden fixed left-4 bottom-1/4 z-50 flex flex-col items-center space-y-8"
      >
      
        
        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300`}
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

              {/* Tooltip for mobile */}
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 
              bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
              pointer-events-none">
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
          className="text-xs font-semibold  text-white -rotate-90 whitespace-nowrap "
        >
          Follow Us
        </motion.div>
      </motion.div>
    </>
  );
}

export default SocialMedia;