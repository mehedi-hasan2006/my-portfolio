"use client";

import { motion } from "framer-motion";
import {
  User,
  Code2,
  GraduationCap,
  MapPin,
  Briefcase,
  Heart,
  Coffee,
  Download,
  Mail,
  ArrowRight,
  Sparkles,
  Laptop,
  Server,
  Database,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";

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
  const skills = [
    {
      name: "Frontend",
      icon: Laptop,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      name: "Backend",
      icon: Server,
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      name: "Database",
      icon: Database,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      name: "UI/UX",
      icon: Palette,
      color: "text-pink-500",
      bg: "bg-pink-100 dark:bg-pink-900/30",
    },
    {
      name: "Web",
      icon: Globe,
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    },
    // {
    //   name: "Mobile",
    //   icon: Smartphone,
    //   color: "text-indigo-500",
    //   bg: "bg-indigo-100 dark:bg-indigo-900/30",
    // },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Student",
      details: "Pursuing degree with focus on web development",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: Code2,
      title: "Specialization",
      description: "MERN Stack Developer",
      details: "Building full-stack web applications",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Kurigram, Bangladesh",
      details: "Available for remote opportunities",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Open Source & Learning",
      details: "Love contributing to community",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto container px-4 py-16 lg:py-14"
      id="about"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            Get to know me
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Passionate developer crafting digital experiences with modern
          technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Image & Quick Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-75"></div>
              <img
                src="https://avatars.githubusercontent.com/u/202413245?v=4"
                alt="MD. Mehedi Hasan"
                className="relative w-full h-full object-cover rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl"
              />
              {/* Online Status */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            {[
              { label: "Experience", value: "1+ Years" },
              { label: "Projects", value: "10+" },
              // { label: "Clients", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Introduction */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Md. Mehedi Hasan
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate Computer Science student and MERN Stack Developer
              from Bangladesh. I love building scalable web applications,
              contributing to open-source projects, and constantly learning new
              technologies to stay ahead in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-4 rounded-xl border ${item.border} ${item.bg} transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${item.bg}`}>
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

          {/* Skills Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-500" />
              What I Do
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={skillIconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${skill.bg} border border-gray-200 dark:border-gray-700`}
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/25"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
            >
              <Mail className="w-5 h-5" />
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Fun Fact / Quote */}
      <motion.div variants={itemVariants} className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 px-6 py-4 rounded-2xl border border-purple-200 dark:border-purple-800">
          <Coffee className="w-6 h-6 text-purple-500" />
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Fun fact:</span> I turn coffee into
            code and ideas into reality! ☕✨
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
