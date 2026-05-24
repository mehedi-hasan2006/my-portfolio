"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaPaintBrush,
  FaGlobe,
  FaHeart,
  FaCoffee,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaRocket,
  FaBook,
  FaCamera,
  FaGamepad,
  FaBicycle,
  FaBolt,
  FaStar,
  FaCloud,
  FaBullseye,
  FaMagic,
  FaSpinner,
  FaSmile,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function AboutMe() {
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState(0);

  // skills with icons and colors
  const skills = [
    {
      name: "Frontend",
      icon: FaReact,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      name: "Backend",
      icon: FaNodeJs,
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      name: "Database",
      icon: FaDatabase,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      name: "UI/UX",
      icon: FaPaintBrush,
      color: "text-pink-500",
      bg: "bg-pink-100 dark:bg-pink-900/30",
    },
    {
      name: "Web",
      icon: FaGlobe,
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    },
    // {
    //   name: "TypeScript",
    //   icon: SiTypescript,
    //   color: "text-blue-600",
    //   bg: "bg-blue-100 dark:bg-blue-900/30",
    // },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  // Programming Journey Timeline
  const programmingJourney = [
    {
      year: 2023,
      title: "First Line of Code",
      description: "Started learning HTML, CSS, and JavaScript basics",
      icon: FaCode,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Completed first responsive website",
        "Learned JavaScript fundamentals",
        "Built first interactive project",
      ],
    },
    {
      year: 2024,
      title: "Python & Backend Discovery",
      description: "Diving into Python and exploring backend concepts",
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Mastered Python syntax and libraries",
        "Learned OOP and file handling",
      ],
    },
    {
      year: "2025-2026",
      title: "MERN Stack Mastery",
      description: "Dived into React, Node.js, Express, and MongoDB",
      icon: FaReact,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Built 7+ full-stack projects",
        "Contributed to open source",
        "Started freelancing journey",
        "Learning Next.js & TypeScript",
      ],
    },
  ];

  // Personal highlights
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Computer Science Student",
      details: "Pursuing degree with focus on web development",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: FaCode,
      title: "Specialization",
      description: "MERN Stack Developer",
      details: "Building full-stack web applications",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      description: "Kurigram, Bangladesh",
      details: "Available for remote opportunities",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800",
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "Open Source & Learning",
      details: "Love contributing to community",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
    },
  ];

  // Work preferences
  const workPreferences = [
    {
      type: "Full-Stack Development",
      description:
        "Building complete web applications from frontend to backend",
      icon: FaLaptopCode,
      color: "text-blue-500",
    },
    {
      type: "Frontend Magic",
      description:
        "Creating beautiful, responsive, and interactive user interfaces",
      icon: FaPaintBrush,
      color: "text-pink-500",
    },
    {
      type: "API Design",
      description: "Designing RESTful APIs and microservices architecture",
      icon: FaCloud,
      color: "text-purple-500",
    },
    {
      type: "Problem Solving",
      description: "Tackling complex challenges with efficient solutions",
      icon: FaBullseye,
      color: "text-orange-500",
    },
    {
      type: "Team Collaboration",
      description: "Working in agile teams and code reviews",
      icon: FaUser,
      color: "text-green-500",
    },
    {
      type: "Open Source",
      description:
        "Contributing to community projects and learning from others",
      icon: FaGithub,
      color: "text-gray-700 dark:text-gray-400",
    },
  ];

  // Hobbies and interests
  const hobbies = [
    {
      name: "Programming",
      icon: FaCode,
      description: "Building cool applications and solving problems",
      color: "from-blue-500 to-cyan-500",
      emoji: "💻",
    },
    {
      name: "Traveling",
      icon: FaMapMarkerAlt,
      description: "Exploring new places and cultures",
      color: "from-purple-500 to-pink-500",
      emoji: "✈️",
    },
    {
      name: "Photography",
      icon: FaCamera,
      description: "Capturing moments and landscapes during travels",
      color: "from-cyan-500 to-blue-500",
      emoji: "📸",
    },
    {
      name: "Gaming",
      icon: FaGamepad,
      description: "Playing strategy and adventure games",
      color: "from-green-500 to-emerald-500",
      emoji: "🎮",
    },
    {
      name: "Cycling",
      icon: FaBicycle,
      description: "Long rides and exploring new places",
      color: "from-orange-500 to-red-500",
      emoji: "🚴‍♂️",
    },
    {
      name: "Reading",
      icon: FaBook,
      description: "Tech blogs, sci-fi, and self-improvement books",
      color: "from-indigo-500 to-purple-500",
      emoji: "📚",
    },
  ];

  // Personality traits
  const personalityTraits = [
    {
      trait: "Curious",
      description: "Always eager to learn new things",
      icon: FaMagic,
    },
    {
      trait: "Detail-oriented",
      description: "Pixel-perfect and clean code",
      icon: FaBullseye,
    },
    {
      trait: "Creative",
      description: "Think outside the box",
      icon: FaPaintBrush,
    },
    {
      trait: "Collaborative",
      description: "Love working in teams",
      icon: FaUser,
    },
    {
      trait: "Resilient",
      description: "Never give up on challenges",
      icon: FaBolt,
    },
    { trait: "Passionate", description: "Code with heart", icon: FaHeart },
    {
      trait: "Innovative",
      description: "Always seeking better solutions",
      icon: FaRocket,
    },
    {
      trait: "Adaptable",
      description: "Quick to learn new technologies",
      icon: FaSmile,
    },
  ];

  // Fun facts
  const funFacts = [
    {
      fact: "I once debugged a code for 2 hours only to find a missing semicolon! 🔍",
      emoji: "😅",
    },
    { fact: "I drink 4+ cups of coffee while coding ☕", emoji: "☕" },
    {
      fact: "My first computer had 2GB RAM - still coded like a pro! 💻",
      emoji: "🚀",
    },
    { fact: "I can type 100+ words per minute ⌨️", emoji: "⚡" },
    { fact: "I've helped 50+ developers learn coding 👨‍🏫", emoji: "🎓" },
    { fact: "I dream in JavaScript sometimes 💭", emoji: "💭" },
    { fact: "Stack Overflow is my second home 🏠", emoji: "🏠" },
    { fact: "I refactor code for fun 🔧", emoji: "🔧" },
  ];

  const nextFunFact = () => {
    setCurrentFunFact((prev) => (prev + 1) % funFacts.length);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto container px-4 py-16 lg:py-24"
      id="about"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Section Header */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-5 py-2 rounded-full mb-4 shadow-sm">
          <FaMagic className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            Get to know me
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Developer by day, creator by night — passionate about building
          meaningful digital experiences that make a difference
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* Left Column - Image & Quick Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Profile Image with Enhanced Design */}
          <div className="relative group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-all duration-500 opacity-75 group-hover:opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-500 opacity-75 group-hover:opacity-100"></div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mb-10">
                <img
                  src="https://i.ibb.co.com/LXmbnFRJ/mehedi-port2.png"
                  alt="MD. Mehedi Hasan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Online Status Badge */}
              {/* <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Available for work
                </span>
              </div> */}
            </div>
          </div>

          {/* Quick Stats with Enhanced Design */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { label: "Experience", value: "2+ Years", icon: FaCode },
              { label: "Projects", value: "15+", icon: FaRocket },
              { label: "Coffee/Week", value: "☕ 20+", icon: FaCoffee },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-2">
                  {stat.value.includes("☕") ? (
                    stat.value
                  ) : (
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Personality Section - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaStar className="w-5 h-5 text-yellow-500" />
              My Personality
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {personalityTraits.map((trait, idx) => {
                const IconComponent = trait.icon;
                return (
                  <motion.div
                    key={trait.trait}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all"
                  >
                    <IconComponent className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {trait.trait}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {trait.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Introduction with Enhanced Typography */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Md. Mehedi Hasan
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate Computer Science student and MERN Stack Developer
              from Bangladesh. My coding journey started with curiosity and
              turned into a lifelong passion. I love building things that live
              on the internet and solving real-world problems through code.
              Every line of code I write is a step towards making the digital
              world better.
            </p>
          </div>

          {/* Programming Journey Timeline - Enhanced */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaClock className="w-5 h-5 text-blue-500" />
              My Programming Journey
            </h4>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="space-y-4">
                {programmingJourney.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-12"
                    >
                      <div
                        className={`absolute left-0 top-1 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h5>
                          <span className="text-xs font-mono bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full"
                            >
                              ✓ {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Section - Enhanced */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <FaCode className="w-5 h-5 text-purple-500" />
              Technologies I Work With
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={skillIconVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${skill.bg} border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    <IconComponent className={`w-4 h-4 ${skill.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights & Work Preferences Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 relative z-10">
        {/* Highlights Grid */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center lg:justify-start gap-2">
            <FaStar className="w-6 h-6 text-yellow-500" />
            Personal Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`p-4 rounded-xl border ${item.border} ${item.bg} transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${item.bg} group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.title}
                      </h4>
                      <p className={`text-sm font-medium ${item.color}`}>
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Work Preferences */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
            <FaBriefcase className="w-6 h-6 text-purple-500" />
            Work I Enjoy
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workPreferences.map((work, index) => {
              const IconComponent = work.icon;
              return (
                <motion.div
                  key={work.type}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-5 h-5 ${work.color}`} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        {work.type}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hobbies & Interests Section - Enhanced */}
      <motion.div variants={itemVariants} className="mt-12 relative z-10">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
          <FaHeart className="w-6 h-6 text-red-500 animate-pulse" />
          Beyond the Code - My Hobbies
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group overflow-hidden p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl animate-bounce group-hover:animate-none">
                      {hobby.emoji}
                    </div>
                    <IconComponent
                      className={`w-5 h-5 ${hobby.color.split(" ")[0]}`}
                    />
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {hobby.name}
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-12">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Fun Facts Section - Interactive Enhanced */}
      <motion.div variants={itemVariants} className="mt-12 relative z-10">
        <div className="relative">
          <button
            onClick={() => {
              setShowFunFact(!showFunFact);
              if (!showFunFact) nextFunFact();
            }}
            className="w-full group"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 px-6 py-5 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <FaCoffee className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      ✨ Fun Corner:
                    </span>{" "}
                    Click to discover something about me!
                  </p>
                </div>
                <FaArrowRight
                  className={`w-5 h-5 text-purple-500 transition-all duration-300 ${showFunFact ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </div>
            </div>
          </button>

          <AnimatePresence mode="wait">
            {showFunFact && (
              <motion.div
                key={currentFunFact}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800 shadow-xl"
              >
                <div className="text-center">
                  <div className="inline-block p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-3 shadow-lg">
                    <FaSmile className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {funFacts[currentFunFact].fact}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={nextFunFact}
                      className="text-sm px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaSpinner className="w-3 h-3 animate-spin" />
                      Next Fun Fact
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Tap the button above to close • {currentFunFact + 1}/
                    {funFacts.length} facts
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Call to Action - Enhanced */}
      <motion.div
        variants={itemVariants}
        className="mt-12 text-center relative z-10"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://drive.google.com/file/d/1Pclr6-K1DCioUK_8uaKxnaj-OFu4LjGp/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload className="w-5 h-5" />
              Download Resume
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaEnvelope className="w-5 h-5" />
              Get in Touch
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
