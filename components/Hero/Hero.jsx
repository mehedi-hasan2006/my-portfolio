"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import {
  Mail,
  Download,
  ArrowRight,
  Sparkles,
  MapPin,
  Code2,
  Coffee,
  Terminal,
  FileJson,
  Braces,
  ChevronRight,
} from "lucide-react";

const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

const coderData = {
  name: "Mehedi Hasan",
  role: "MERN STACK Web Developer",
  seniority: "Mid-Level",
  location: "Kurigram, Bangladesh",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "CSS",
    "Figma",
    "GitHub",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ],
};

// Terminal Window Component
const CoderProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-25 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

        <div className="relative bg-white dark:bg-[#0a0a1a] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="px-4 lg:px-6 py-3 flex justify-between items-center bg-gray-100 dark:bg-[#0d0d1a] border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>mehedi@portfolio</span>
              <span className="text-gray-400 dark:text-gray-600">~/bio.js</span>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Body */}
          <div className="relative overflow-hidden px-4 lg:px-6 py-4 lg:py-6">
            {/* Background Effects */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-5 filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-5 filter blur-3xl"></div>

            <div className="relative flex">
              {/* Line Numbers */}
              <div className="hidden md:flex flex-col items-end pr-4 text-gray-400 dark:text-gray-600 font-mono text-xs select-none">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="leading-relaxed">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code Content */}
              <code className="font-mono text-xs md:text-sm lg:text-base w-full">
                <div className="flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-yellow-500" />
                  <span className="text-pink-500 dark:text-pink-400 font-semibold">
                    const
                  </span>
                  <span className="text-violet-500 dark:text-violet-400 font-semibold">
                    coder
                  </span>
                  <span className="text-pink-500 dark:text-pink-400">=</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {"{"}
                  </span>
                </div>
                <div className="pl-6 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors rounded">
                  <span className="text-blue-600 dark:text-blue-400">
                    name:
                  </span>
                  <span className="text-gray-500">&#39;</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {coderData.name}
                  </span>
                  <span className="text-gray-500">&#39;,</span>
                </div>
                <div className="pl-6 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors rounded">
                  <span className="text-blue-600 dark:text-blue-400">
                    role:
                  </span>
                  <span className="text-gray-500">&#39;</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {coderData.role}
                  </span>
                  <span className="text-gray-500">&#39;,</span>
                </div>
                <div className="pl-6 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors rounded">
                  <span className="text-blue-600 dark:text-blue-400">
                    seniority:
                  </span>
                  <span className="text-gray-500">&#39;</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {coderData.seniority}
                  </span>
                  <span className="text-gray-500">&#39;,</span>
                </div>
                <div className="pl-6 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors rounded">
                  <span className="text-blue-600 dark:text-blue-400">
                    location:
                  </span>
                  <span className="text-gray-500">&#39;</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {coderData.location}
                  </span>
                  <span className="text-gray-500">&#39;,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-600 dark:text-blue-400">
                    skills:
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {"["}
                  </span>
                  <div className="pl-6 flex flex-wrap gap-x-1">
                    {coderData.skills.map((skill, index) => (
                      <span key={skill} className="inline-flex items-center">
                        <span className="text-gray-500">&#39;</span>
                        <span className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-400 transition-colors">
                          {skill}
                        </span>
                        <span className="text-gray-500">&#39;</span>
                        {index < coderData.skills.length - 1 && (
                          <span className="text-gray-500">, </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    {"],"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">
                    {"};"}
                  </span>
                </div>
              </code>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 lg:px-6 py-2 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <Braces className="w-3 h-3" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>Ln 12, Col 2</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Hero Component
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-[#000000] dark:via-[#000022] dark:to-[#010133]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 filter blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 dark:opacity-10"></div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for opportunities</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">
                  Hello, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Mehedi Hasan
                </span>
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"
              ></motion.div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm">{coderData.location}</span>
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {[
                "🚀 MERN Stack Developer",
                "⚛️ React Enthusiast",
                "💡 Open Source Lover",
                "🎨 UI/UX Designer",
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 sm:px-4 py-2 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              <Coffee className="w-5 h-5 inline-block mr-1 text-yellow-600" />
              Passionate about crafting beautiful, functional web experiences.
              Turning complex problems into simple, elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-900/80 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-2"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/mehedi-hasan2006",
                  label: "GitHub",
                },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaFacebook, href: "#", label: "Facebook" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Terminal Card */}
          <div className="order-1 lg:order-2">
            <CoderProfileCard />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-600 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
