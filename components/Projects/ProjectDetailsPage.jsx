// app/projects/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Calendar,
  Code2,
  Target,
  Lightbulb,
  Rocket,
  AlertTriangle,
  ArrowLeft,
  Star,
  GitFork,
  Eye,
  Globe,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function ProjectDetailsPage({ project }) {
  console.log("Project Data:", project);


  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {project.date || "2026"}
              </span>
              {/* <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Star className="w-4 h-4 text-yellow-500" />
                {project.stars || 0} stars
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <GitFork className="w-4 h-4" />
                {project.forks || 0} forks
              </span> */}
              <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Eye className="w-4 h-4" />
                {project.views || 0} views
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Globe className="w-5 h-5" />
                View Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <FaGithub className="w-5 h-5" />
                View Source Code
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Project Images */}
          {project.image && (
            <motion.div variants={itemVariants} className="mb-12">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Technology Stack */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Technology Stack
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech?.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Challenges Faced */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Challenges Faced
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.challenges ? (
                    project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="flex gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800"
                      >
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {challenge.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {challenge.description}
                          </p>
                          {challenge.solution && (
                            <div className="mt-2 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-green-700 dark:text-green-400">
                                <span className="font-medium">Solution:</span>{" "}
                                {challenge.solution}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            State Management Complexity
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Managing complex state across multiple components
                            while ensuring data consistency and real-time
                            updates.
                          </p>
                          <div className="mt-2 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-green-700 dark:text-green-400">
                              <span className="font-medium">Solution:</span>{" "}
                              Implemented Redux with middleware for centralized
                              state management and optimistic updates.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Performance Optimization
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Initial page load times were slow due to large
                            bundle sizes and unoptimized API calls.
                          </p>
                          <div className="mt-2 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-green-700 dark:text-green-400">
                              <span className="font-medium">Solution:</span>{" "}
                              Implemented code splitting, lazy loading, and
                              server-side caching to reduce load times by 60%.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Third-Party Integration
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Integrating multiple third-party services while
                            maintaining security and user experience.
                          </p>
                          <div className="mt-2 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-green-700 dark:text-green-400">
                              <span className="font-medium">Solution:</span>{" "}
                              Created abstraction layers and fallback mechanisms
                              for seamless integration.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Potential Improvements & Future Plans */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Future Improvements
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.futurePlans ? (
                    project.futurePlans.map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="flex gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800"
                      >
                        <Lightbulb className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {plan.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {plan.description}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                        <Rocket className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            TypeScript Migration
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Plan to migrate the entire codebase to TypeScript
                            for better type safety and developer experience.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                        <Rocket className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            PWA Implementation
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add Progressive Web App capabilities for offline
                            support and native app-like experience.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                        <Rocket className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            AI Feature Integration
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Integrate AI-powered features like smart
                            recommendations and automated content generation.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                        <Rocket className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Microservices Architecture
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Break down the monolithic backend into microservices
                            for better scalability and maintenance.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="space-y-6">
              {/* Quick Links */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg sticky top-24"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Quick Links
                </h3>

                <div className="space-y-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 dark:border-blue-800 rounded-xl text-blue-700 dark:text-blue-400 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all group"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all group"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
