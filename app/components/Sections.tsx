'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import ContactForm from './ContactForm';

const skills = [
  {
    name: 'Java',
    icon: FaJava,
    level: 'Advanced',
    description: 'Object-oriented programming, Data structures, Algorithms',
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    level: 'Advanced',
    description: 'ES6+, DOM manipulation, Async programming',
  },
  {
    name: 'React',
    icon: FaReact,
    level: 'Intermediate',
    description: 'Hooks, Context API, Component lifecycle',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    level: 'Intermediate',
    description: 'Express, REST APIs, Authentication',
  },
  {
    name: 'Database',
    icon: FaDatabase,
    level: 'Intermediate',
    description: 'SQL, MongoDB, Database design',
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    level: 'Intermediate',
    description: 'Version control, Collaboration, GitHub',
  },
];

export default function Sections() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            About Me
          </motion.h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              I'm a passionate software developer with a Computer Science degree from the University of Debrecen. 
              I specialize in building modern web applications using cutting-edge technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Backend</h3>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Express, Python, Django</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">Database</h3>
                <p className="text-gray-600 dark:text-gray-300">MongoDB, PostgreSQL, MySQL</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chess Puzzle Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="group relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform-gpu"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ♟️
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                  Chess Puzzle
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  A Java-based chess puzzle game where pieces can only move in specific directions. 
                  The king can only move up, the queen can only move diagonally, and the rook can only move horizontally.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    Java
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    Chess Logic
                  </span>
                </div>
                <a
                  href="https://github.com/SHTOZO/Chess-Puzzle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group-hover:translate-x-1"
                >
                  <FaGithub className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View on GitHub
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* ONventory Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="group relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform-gpu"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                  ONventory
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  A full-stack inventory management system with product tracking, stock management, 
                  and user authentication features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    Full Stack
                  </span>
                </div>
                <a
                  href="https://github.com/SHTOZO/ONventory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group-hover:translate-x-1"
                >
                  <FaGithub className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View on GitHub
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Stopwatch Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="group relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform-gpu"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ⏱️
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                  Stopwatch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  A simple and intuitive stopwatch application built in Java with start, stop, 
                  and reset functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    Java
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    GUI
                  </span>
                </div>
                <a
                  href="https://github.com/SHTOZO/Stopwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm group-hover:translate-x-1"
                >
                  <FaGithub className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View on GitHub
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Skills
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="text-3xl text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {skill.level}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </>
  );
} 