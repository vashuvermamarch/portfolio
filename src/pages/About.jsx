import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaJs, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-300' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
    { name: 'Node.js', icon: <FaNode />, color: 'text-green-500' },
  ];

  const certifications = [
    {
      title: 'Python Programming - Self Paced',
      issuer: 'GeeksforGeeks',
      date: '2024',
      description: 'Comprehensive Python programming course covering fundamentals to advanced topics',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Who I Am</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Hello! I'm Vashu Verma, a passionate developer from Gorakhpur, Uttar Pradesh, India. 
            I graduated from Deen Dayal Upadhyaya (DDU) Gorakhpur University in 2023, and since then, 
            I've been on an exciting journey in the world of software development.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My primary expertise lies in Python programming, where I've developed a strong foundation 
            through courses and hands-on projects. I'm constantly expanding my skill set and currently 
            exploring full-stack web development with technologies like React, Node.js, and modern web frameworks.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Education</h2>
          <div className="border-l-4 border-blue-400 pl-6">
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-white">Deen Dayal Upadhyaya (DDU) Gorakhpur University</h3>
              <p className="text-gray-400">Graduated: 2023</p>
              <p className="text-gray-400">Location: Gorakhpur, Uttar Pradesh, India</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-all"
              >
                <div className={`text-5xl mb-3 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-400 font-semibold">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Interested in working together? Let's connect!
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <a
              href="mailto:karanverma24march@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              karanverma24march@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
