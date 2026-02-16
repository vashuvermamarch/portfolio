import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-4">
                <span className="text-blue-400 text-lg">Hi, I'm</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                Vashu Verma
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-2xl md:text-3xl text-gray-300 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Python Developer
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-400 mb-8 max-w-lg"
              >
                A passionate developer from Gorakhpur, India, specializing in
                Python programming. Currently exploring full-stack development
                and building amazing web applications.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                  >
                    View Projects <FaArrowRight />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-400/10 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mt-12"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">1</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Simplified Animated Circle (lighter) */}
            <div className="relative hidden md:block">
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-4 border-blue-500/30 border-t-blue-500"
                />

                {/* Middle rotating ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 rounded-full border-4 border-purple-500/30 border-t-purple-500"
                />

                {/* Inner circle with gradient */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gray-900 m-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">💻</div>
                      <div className="text-xl font-bold">Full Stack</div>
                      <div className="text-sm text-gray-400">Developer</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements - simplified */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 rounded-lg backdrop-blur-sm flex items-center justify-center text-2xl"
                >
                  🐍
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/20 rounded-lg backdrop-blur-sm flex items-center justify-center text-2xl"
                >
                  ⚛️
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
