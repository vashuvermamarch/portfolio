import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = memo(() => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Featured projects (you can customize these)
  const featuredProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion featuring smooth animations and interactive components.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/vashuvermamarch/',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Python Projects',
      description: 'Collection of Python projects showcasing various programming concepts and practical applications.',
      technologies: ['Python', 'Data Structures', 'Algorithms'],
      githubUrl: 'https://github.com/vashuvermamarch/',
      featured: true,
    },
  ];

  useEffect(() => {
    // Check cache first
    const cachedRepos = sessionStorage.getItem('githubRepos');
    const cacheTime = sessionStorage.getItem('githubReposTime');
    const now = new Date().getTime();
    
    // Use cache if less than 5 minutes old
    if (cachedRepos && cacheTime && (now - parseInt(cacheTime)) < 300000) {
      setRepos(JSON.parse(cachedRepos));
      setLoading(false);
      return;
    }

    // Fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch('https://api.github.com/users/vashuvermamarch/repos?sort=updated&per_page=6', {
      signal: controller.signal
    })
      .then((response) => response.json())
      .then((data) => {
        clearTimeout(timeoutId);
        setRepos(data);
        // Cache the results
        sessionStorage.setItem('githubRepos', JSON.stringify(data));
        sessionStorage.setItem('githubReposTime', now.toString());
        setLoading(false);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        console.error('Error fetching repos:', error);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and Python programming
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Repositories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">GitHub Repositories</h2>
            <a
              href="https://github.com/vashuvermamarch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaGithub className="text-2xl" /> View All on GitHub
            </a>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
              />
              <p className="text-gray-400 mt-4">Loading repositories...</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {repos.length > 0 && !repos.message ? (
                repos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">{repo.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch />
                        {repo.forks_count}
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaGithub /> View Repository
                    </a>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-400">
                  <p>No repositories found. Check back later!</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Let's Talk
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
