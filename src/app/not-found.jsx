// app/not-found.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ArrowLeft,
  Search,
  FileQuestion,
  Compass,
  Sparkles,
  Ghost,
  Rocket,
  Coffee,
  Terminal,
} from "lucide-react";
import { useState } from "react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function NotFound() {
  const [memeText, setMemeText] = useState(0);

  const memes = [
    "Oops! This page went on a coffee break ☕",
    "404: Page not found. Even our code can't find it! 🤷‍♂️",
    "This page is like a bug - it disappeared! 🐛",
    "You've reached the void of the internet 🌌",
    "Plot twist: The page was never created 🎬",
  ];

  const rotateMeme = () => {
    setMemeText((prev) => (prev + 1) % memes.length);
  };

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-950 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 dark:opacity-10"></div>

        {/* Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, -45, 45],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center"
      >
        {/* 404 Number */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            animate={floatingAnimation}
            className="relative inline-block"
          >
            <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-black leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none">
              404
            </h1>

            {/* Floating Elements Around 404 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 -right-10"
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 -left-10"
            >
              <Ghost className="w-10 h-10 text-purple-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-16"
            >
              <Coffee className="w-6 h-6 text-orange-500" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-16"
            >
              <Terminal className="w-8 h-8 text-green-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>

          {/* Meme Text */}
          <motion.p
            key={memeText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={rotateMeme}
          >
            {memes[memeText]}
          </motion.p>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            Click the message for more developer humor 😄
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
        >
          Looks like you've ventured into uncharted territory. The page you're
          looking for might have been moved, deleted, or never existed in the
          first place.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all group"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:shadow-lg transition-all group"
            >
              <Compass className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <FileQuestion className="w-5 h-5 text-blue-500" />
            Maybe you were looking for...
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Home", href: "/", icon: Home },
              { label: "About", href: "/#about", icon: Compass },
              { label: "Projects", href: "/#projects", icon: Rocket },
              { label: "Contact", href: "/#contact", icon: Coffee },
            ].map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-xs text-gray-400 dark:text-gray-600"
        >
          Error Code: 404 • Lost in Cyberspace • Page Not Found
        </motion.p>
      </motion.div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}
