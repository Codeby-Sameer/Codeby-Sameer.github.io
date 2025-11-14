import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

function SocialMedia() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
         <Linkedin className="w-5 h-5" />
        </div>
      ),
    //   bgColor: 'bg-[#0077B5]',
      hoverColor: 'hover:bg-[#0077B5]',
      color: 'text-white'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
        <Facebook className="w-5 h-5" />
        </div>
      ),
    //   bgColor: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#1877F2]',
      color: 'text-white'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
         <Instagram className="w-5 h-5" />
        </div>
      ),
    //   bgColor: 'bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600',
      hoverColor: 'bg-gradient-to-br  hover:from-yellow-500 hover:via-red-600 hover:to-purple-700',
      color: 'text-white'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
         <Youtube className="w-5 h-5" />
        </div>
      ),
    //   bgColor: 'bg-[#FF0000]',
      hoverColor: 'hover:bg-[#FF0000]',
      color: 'text-white'
    }
  ];

  return (
    <>
      {/* Desktop Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-4 sm:left-6 top-1/3 transform -translate-y-1/2 z-50 flex-col items-center space-y-4 hidden sm:flex"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-2xl ${social.bgColor} ${social.color} 
            backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 
            ${social.hoverColor} hover:shadow-xl hover:scale-110`}
            whileHover={{ 
              scale: 1.15,
              y: -5,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
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

            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
            bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg opacity-0 
            group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
            pointer-events-none">
              {social.name}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 
              border-4 border-transparent border-r-white" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="sm:hidden fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center space-y-3 flex"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-xl ${social.bgColor} ${social.color} 
            backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 
            ${social.hoverColor}`}
            whileHover={{ 
              scale: 1.2,
              y: -3,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
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
                scale: [1, 1.3, 1],
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

            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 
            bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg
            pointer-events-none">
              {social.name}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 
              border-3 border-transparent border-r-white" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}

export default SocialMedia;