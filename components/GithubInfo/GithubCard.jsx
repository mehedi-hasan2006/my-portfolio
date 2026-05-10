
"use client";

import { motion } from "framer-motion";
import {
  Computer,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
  FolderGit2,
  Users,
  UserPlus,
  GitFork,
  Star,
  GitPullRequest,
  Activity,
  TrendingUp,
  Flame,
  CalendarDays,
  GitCommit,
  BarChart3,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

// Contribution Graph Component
function ContributionGraph() {
  const months = [
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
  ];

  const days = ["Mon", "Wed", "Fri"];

  // Generate contribution data (simulated)
  const generateContributionData = () => {
    const data = [];
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        // Simulate contribution levels (0-4)
        const rand = Math.random();
        let level = 0;
        if (rand > 0.7) level = 1;
        if (rand > 0.85) level = 2;
        if (rand > 0.93) level = 3;
        if (rand > 0.98) level = 4;
        weekData.push(level);
      }
      data.push(weekData);
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getColor = (level) => {
    const colors = [
      "bg-gray-100 dark:bg-gray-800", // Level 0
      "bg-green-200 dark:bg-green-900", // Level 1
      "bg-green-400 dark:bg-green-700", // Level 2
      "bg-green-600 dark:bg-green-500", // Level 3
      "bg-green-800 dark:bg-green-300", // Level 4
    ];
    return colors[level];
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[750px]">
        {/* Months Header */}
        <div className="flex mb-2 ml-10">
          {months.map((month, index) => (
            <div
              key={month}
              className="text-xs text-gray-500 dark:text-gray-400"
              style={{
                width: `${index === 0 ? 14 : index === 1 ? 18 : index === 2 ? 14 : index === 3 ? 14 : index === 4 ? 18 : index === 5 ? 14 : index === 6 ? 14 : index === 7 ? 18 : index === 8 ? 14 : index === 9 ? 18 : index === 10 ? 14 : 18}%`,
              }}
            >
              {month}
            </div>
          ))}
        </div>

        <div className="flex gap-0.5">
          {/* Days Labels */}
          <div className="flex flex-col gap-0.5 pr-2 pt-0">
            {days.map((day, index) => (
              <div
                key={day}
                className="text-xs text-gray-500 dark:text-gray-400 h-3"
                style={{
                  marginTop: index === 0 ? "0" : index === 1 ? "12px" : "12px",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-0.5">
            {contributionData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-0.5">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (weekIndex * 7 + dayIndex) * 0.001,
                      duration: 0.2,
                    }}
                    className={`w-2.5 h-2.5 rounded-sm ${getColor(day)} transition-colors duration-200 hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300`}
                    title={`${day} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-2.5 h-2.5 rounded-sm ${getColor(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default function GithubCard({ data }) {
  // Calculate account age
  const createdDate = new Date(data.created_at);
  const now = new Date();
  const diffTime = Math.abs(now - createdDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);

  // Calculate contribution score (estimated)
  const contributionScore =
    data.public_repos * 10 + data.followers * 5 + diffDays;

  // Simulated contribution stats
  const totalContributions = 758;
  const currentStreak = 5;
  const longestStreak = 32;
  const streakStart = "May 5";
  const streakEnd = "May 9";
  const longestStreakStart = "Dec 28, 2025";
  const longestStreakEnd = "Jan 28, 2026";

  // Calculate activity level
  const getActivityLevel = () => {
    if (data.public_repos > 30)
      return { level: "High", color: "text-green-500", bg: "bg-green-500" };
    if (data.public_repos > 15)
      return { level: "Medium", color: "text-yellow-500", bg: "bg-yellow-500" };
    return { level: "Growing", color: "text-blue-500", bg: "bg-blue-500" };
  };

  const activityLevel = getActivityLevel();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto container px-4 py-12 lg:py-16"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="text-fuchsia-600 font-semibold flex items-center gap-2 mb-3">
          <p className="w-7 h-1 bg-fuchsia-600 rounded-full"></p>
          <span className="tracking-wider uppercase text-sm">GitHub</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white py-3">
          Contributions & Activity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Track my open-source journey, repositories, and community engagement
        </p>
      </motion.div>

      <div className=" flex gap-6 flex-col lg:flex-row">
        {/* Main Profile Card */}
        <div className="relative bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300">
          {/* Gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <div className="p-6 sm:p-8">
            {/* Header with Avatar and Name */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-5 mb-6"
            >
              <motion.a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <img
                  src={data.avatar_url}
                  alt={`${data.login}'s avatar`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/50 group-hover:ring-4 transition-all duration-300"></div>
              </motion.a>

              <div className="text-center sm:text-left flex-1">
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight"
                >
                  {data.name || data.login}
                </motion.h2>
                <motion.a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                >
                  @{data.login}
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Bio */}
            {data.bio && (
              <motion.p
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 mb-6 text-center sm:text-left leading-relaxed italic border-l-4 border-purple-500 pl-4"
              >
                {data.bio}
              </motion.p>
            )}

            {/* Location and additional details */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8 justify-center sm:justify-start text-sm"
            >
              {data.location && (
                <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-red-500" />
                  {data.location}
                </span>
              )}
              <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300">
                <Calendar className="w-4 h-4 text-blue-500" />
                Joined{" "}
                {createdDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300">
                <Clock className="w-4 h-4 text-green-500" />
                {diffYears}y {diffMonths}m on GitHub
              </span>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6"
            >
              {[
                {
                  label: "Repositories",
                  value: data.public_repos,
                  icon: FolderGit2,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  label: "Followers",
                  value: data.followers,
                  icon: Users,
                  color: "from-pink-500 to-rose-600",
                },
                {
                  label: "Following",
                  value: data.following,
                  icon: UserPlus,
                  color: "from-amber-500 to-orange-600",
                },
              ].map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="bg-gray-50 dark:bg-gray-800/80 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 transition-colors"
                  >
                    <IconComponent className="w-6 h-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                    <motion.p
                      variants={numberVariants}
                      className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action Button */}
            <motion.div variants={itemVariants} className="flex">
              <motion.a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md"
              >
                <Computer className="w-5 h-5" />
                View Full Profile
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Contribution Activity Card */}
        <motion.div
          variants={itemVariants}
          className="relative bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-green-400 via-emerald-500 to-teal-600" />

          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contribution Activity
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="mb-8">
              <ContributionGraph />
            </div>

            {/* Contribution Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Total Contributions */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Total Contributions
                  </span>
                </div>
                <motion.p
                  variants={numberVariants}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  {totalContributions.toLocaleString()}
                </motion.p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Sep 30, 2023 - Present
                </p>
              </motion.div>

              {/* Current Streak */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Streak
                  </span>
                </div>
                <motion.p
                  variants={numberVariants}
                  className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                >
                  {currentStreak}
                </motion.p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {streakStart} - {streakEnd}
                </p>
              </motion.div>

              {/* Longest Streak */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Longest Streak
                  </span>
                </div>
                <motion.p
                  variants={numberVariants}
                  className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {longestStreak}
                </motion.p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {longestStreakStart} - {longestStreakEnd}
                </p>
              </motion.div>
            </div>

            {/* Contribution Score */}
            <motion.div
              variants={itemVariants}
              className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Contribution Score
                  </span>
                </div>
                <motion.span
                  variants={numberVariants}
                  className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                >
                  {contributionScore.toLocaleString()}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
