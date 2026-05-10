"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  School,
  Trophy,
  BookOpen,
  Award,
  Star,
  Sparkles,
  ChevronRight,
  Clock,
  Target,
  Medal,
  Zap,
  Users,
  Code2,
  Globe,
} from "lucide-react";
import { useState } from "react";

const educationData = [
  {
    id: "1",
    degree: "Diploma in Computer Science & Technology",
    institution: "Kurigram Polytechnic Institute",
    location: "Kurigram, Bangladesh",
    date: "2023 - Present",
    type: "Current",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    icon: GraduationCap,
    highlights: [
      "Programming Contest Finalist",
      "Open Source Contributor",
      "Leadership Role",
    ],
    description:
      "Currently pursuing diploma with focus on programming, networking, and system design.",
    progress: 75,
  },
  {
    id: "2",
    degree: "Bachelor of Social Science (BSS) in Economics",
    institution: "Kurigram Government College",
    location: "Kurigram, Bangladesh",
    date: "2024 - Present",
    type: "Current",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-500/30",
    icon: GraduationCap,
    highlights: [
      "Economics Research",
      "Data Analysis",
      "Academic Excellence",
    ],
    description:
      "Studying economics alongside tech education for data-driven development approach.",
    progress: 30,
  },
  {
    id: "3",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhurungamari Government College",
    location: "Bhurungamari, Kurigram",
    date: "2022 - 2024",
    type: "Completed",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    icon: School,
    highlights: ["GPA 4.83", "Dept of Humanities", "Scholarship"],
    description:
      "Achieved excellent results with scholarship. Active in co-curricular activities.",
    progress: 100,
  },
  {
    id: "4",
    degree: "Secondary School Certificate (SSC)",
    institution: "Char Baruitari Alim Madrasah",
    location: "Bhurungamari, Kurigram",
    date: "2017 - 2022",
    type: "Completed",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    icon: BookOpen,
    highlights: ["GPA 4.83", "Best Student Award", "Debate Champion"],
    description:
      "Outstanding academic performance with multiple extracurricular achievements.",
    progress: 100,
  },
  {
    id: "5",
    degree: "MERN Stack Development",
    institution: "Programming Hero",
    location: "Online",
    date: "2026",
    type: "Certification",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30",
    icon: Award,
    highlights: ["Full-Stack Certified", "10+ Projects", "API Integration"],
    description:
      "Intensive bootcamp covering MongoDB, Express, React, and Node.js.",
    progress: 100,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
};

export default function EducationGrid() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? educationData
      : educationData.filter((item) => item.type.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Academic Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            Education & Qualifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey and continuous learning in tech & beyond
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["all", "current", "completed", "certification"].map(
              (filterType) => (
                <motion.button
                  key={filterType}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === filterType
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </motion.button>
              )
            )}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: BookOpen, label: "Qualifications", value: "5", color: "text-blue-500" },
            { icon: Award, label: "Certifications", value: "3+", color: "text-purple-500" },
            { icon: Star, label: "GPA Average", value: "4.8+", color: "text-yellow-500" },
            { icon: Globe, label: "Skills", value: "10+", color: "text-green-500" },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center shadow-lg"
              >
                <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                  onClick={() => setSelectedCard(selectedCard === item.id ? null : item.id)}
                  className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-10, 10],
                          x: [-5, 5],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                        style={{
                          top: `${20 + i * 30}%`,
                          left: `${10 + i * 25}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress Bar for Current Items */}
                  {item.type === "Current" && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {item.degree}
                          </h3>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className={`text-xs px-2.5 py-1 rounded-full border ${
                              item.type === "Current"
                                ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 animate-pulse"
                                : item.type === "Certification"
                                ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
                                : "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                            }`}
                          >
                            <span className="flex items-center gap-1">
                              {item.type === "Current" && (
                                <Zap className="w-3 h-3" />
                              )}
                              {item.type}
                            </span>
                          </motion.span>
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            <School className="w-3.5 h-3.5" />
                            {item.institution}
                          </span>
                          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </span>
                        </div>

                        {/* Animated Highlights */}
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          className="flex flex-wrap gap-2"
                        >
                          {item.highlights.map((highlight, idx) => (
                            <motion.span
                              key={idx}
                              variants={highlightVariants}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm"
                            >
                              <Trophy className="w-3 h-3 text-yellow-500" />
                              {highlight}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* Expandable Description */}
                        <AnimatePresence>
                          {selectedCard === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {item.description}
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                  <Target className="w-4 h-4 text-blue-500" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                    {item.type === "Current"
                                      ? "In Progress"
                                      : "Completed"}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line on Hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No education entries found for this filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}