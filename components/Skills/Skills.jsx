
"use client";
import { FaBootstrap , FaNodeJs , FaReact , FaGithub ,FaFigma , FaPython ,FaJava  } from "react-icons/fa";
import { SiMysql, SiExpress, SiBetterauth, SiNetlify   } from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Zap,
  Star,
  Trophy,
  Target,
  Layers,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", icon: <FaReact />, level: "Intermediate", category: "Library" },
      { name: "Next.js", icon: "▲", level: "Advanced", category: "Framework" },
      { name: "JavaScript", icon: <IoLogoJavascript />, level: "Intermediate", category: "Programming Language" },
      { name: "TailwindCSS", icon: <RiTailwindCssFill />, level: "Expert", category: "CSS Framework" },
      { name: "HTML5/CSS3", icon: "🌐", level: "Expert", category: "Markup" },
      { name: "Framer Motion", icon: "🎭", level: "Beginner", category: "Animation" },
      { name: "Bootstrap", icon: <FaBootstrap />, level: "Advanced", category: "CSS Framework" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating robust server-side applications",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate", category: "Runtime" },
      { name: "Express.js", icon: <SiExpress />, level: "Intermediate", category: "Framework" },
      { name: "REST APIs", icon: "🔌", level: "Intermediate", category: "Architecture" },
      { name: "SQL", icon: <PiFileSqlLight />, level: "Beginner", category: "Query Language" },
      { name: "Better Auth", icon: <SiBetterauth />, level: "Intermediate", category: "Security" },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    description: "Managing and optimizing data solutions",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript />, level: "Intermediate", category: "Programming Language" },
      { name: "MySQL", icon: <SiMysql />, level: "Intermediate", category: "Relational" },
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Writing efficient and maintainable code",
    icon: Code2,
    color: "from-indigo-500 to-violet-500",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript />, level: "Intermediate", category: "Programming Language" },
      { name: "Python", icon: <FaPython />, level: "Beginner", category: "Programming Language" },
      { name: "Java", icon: <FaJava />, level: "Beginner", category: "Programming Language" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Development environment and workflow",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: [
      { name: "GitHub", icon: <FaGithub />, level: "Intermediate", category: "Version Control" },
      { name: "VS Code", icon: <VscVscode />, level: "Expert", category: "Editor" },
      { name: "Figma", icon: <FaFigma />, level: "Intermediate", category: "Design" },
      { name: "Docker", icon: "🐳", level: "Beginner", category: "Container" },
      { name: "Vercel", icon: "▲", level: "Intermediate", category: "Deployment" },
      { name: "Netlify", icon: <SiNetlify />, level: "Intermediate", category: "Deployment" },
      
    ],
  },
];

const expertiseLevels = [
  { level: "Expert", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
  { level: "Advanced", icon: Star, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { level: "Intermediate", icon: Target, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
  { level: "Beginner", icon: Zap, color: "text-gray-500", bg: "bg-gray-100 dark:bg-gray-800" },
];

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

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.categoryId === activeCategory);

  return (
    <section className="relative bg-white dark:bg-gray-950 py-16 lg:py-24 overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [45, 0, 45] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {expertiseLevels.map((level) => {
            const IconComponent = level.icon;
            return (
              <div
                key={level.level}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${level.bg} ${level.color}`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                {level.level}
              </div>
            );
          })}
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Skills", icon: Layers },
            ...skillCategories.map((cat) => ({
              id: cat.id,
              label: cat.title,
              icon: cat.icon,
            })),
          ].map((filter) => {
            const IconComponent = filter.icon;
            const isActive = activeCategory === filter.id;
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(filter.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {filter.label}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${skill.categoryId}`}
              layout
              variants={skillCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Skill Icon */}
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {skill.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {skill.category}
              </p>

              {/* Expertise Level Badge */}
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  expertiseLevels.find((l) => l.level === skill.level)?.bg
                } ${expertiseLevels.find((l) => l.level === skill.level)?.color}`}
              >
                {skill.level}
              </span>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Cards (Detailed View) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${category.iconBg}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${category.textColor}`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-current hover:shadow-md transition-all cursor-default"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Skill Count */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    {category.skills.length} technologies
                  </span>
                  <div className="flex -space-x-2">
                    {category.skills.slice(0, 4).map((skill, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center text-xs"
                        title={skill.name}
                      >
                        {skill.icon}
                      </div>
                    ))}
                    {category.skills.length > 4 && (
                      <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-600 border-2 border-gray-200 dark:border-gray-500 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                        +{category.skills.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}