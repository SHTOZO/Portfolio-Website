'use client';

import { motion } from 'framer-motion';
import { FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';

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

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="text-4xl text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 