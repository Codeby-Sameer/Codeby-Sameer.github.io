import { Heart, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easing },
  },
};

function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-24 md:py-28 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50  overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accentPink/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-accentPink/20 to-accentOrange/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="relative bg-gradient-to-r from-primary via-secondary to-accentPink bg-clip-text text-transparent drop-shadow-sm">
                About GC Technologies
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="inline-flex items-center justify-center rounded-full border border-gray-200/80 bg-white/60 px-4 py-1.5 text-sm md:text-base text-gray-700 shadow-sm backdrop-blur"
            >
              Growth & Creative
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-2">
            {/* Left: Copy */}
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                We Know... We Are Small, Yet{" "}
                <span className="text-accentOrange underline decoration-accentOrange/40 decoration-4 underline-offset-4">
                  "Genuine"
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At GC Technologies, we believe in empowering businesses through innovation, technology,
                and genuine partnerships. Our commitment to excellence drives us to deliver solutions
                that truly make a difference.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                We combine deep industry expertise with cutting-edge technology to help organizations
                navigate their digital transformation journey. From staffing solutions to comprehensive
                IT services, we're your trusted partner for growth.
              </p>
            </motion.div>

            {/* Right: Feature cards */}
            <motion.div
              variants={container}
              className="space-y-6"
            >
              {/* Card 1 */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative transform-gpu"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 bg-gradient-to-br from-primary/30 to-secondary/30" />
                <div className="relative rounded-2xl p-6 border border-gray-200/60 bg-white/70 backdrop-blur-xl shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Our Vision
                      </h4>
                      <p className="text-gray-600">
                        To be the trusted partner for businesses seeking innovative technology solutions and exceptional talent.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative transform-gpu"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 bg-gradient-to-br from-secondary/30 to-accentPink/30" />
                <div className="relative rounded-2xl p-6 border border-gray-200/60 bg-white/70 backdrop-blur-xl shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accentPink rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Our Mission
                      </h4>
                      <p className="text-gray-600">
                        Delivering growth-driven solutions through creative technology implementation and strategic consulting.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative transform-gpu"
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 bg-gradient-to-br from-accentPink/30 to-accentOrange/30" />
                <div className="relative rounded-2xl p-6 border border-gray-200/60 bg-white/70 backdrop-blur-xl shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accentPink to-accentOrange rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Our Values
                      </h4>
                      <p className="text-gray-600">
                        Genuine partnerships, innovation, excellence, and unwavering commitment to client success.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;