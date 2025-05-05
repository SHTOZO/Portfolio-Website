'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Hi, I'm <span className="text-primary">Ossama</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Computer Science Graduate',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            University of Debrecen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a 
            href="/OssamaSafaResume.pdf" 
            download="OssamaSafaResume.pdf"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaFileDownload className="text-2xl text-gray-800 dark:text-white" />
          </a>
          <a 
            href="https://github.com/SHTOZO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-2xl text-gray-800 dark:text-white" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ossama-safa-266105305/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-2xl text-blue-600" />
          </a>
          <a 
            href="mailto:osamasafa@hotmail.com" 
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope className="text-2xl text-gray-800 dark:text-white" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <a 
            href="#about" 
            onClick={handleScroll}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span>Scroll to explore</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </div>
  );
} 