"use client";
import {
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMysql, SiExpress, SiBetterauth, SiNetlify } from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Code2, Server, Database, Sparkles, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600 dark:text-blue-400",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", icon: <FaReact />, category: "Library" },
      { name: "Next.js", icon: "▲", category: "Framework" },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        category: "Programming Language",
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill />,
        category: "CSS Framework",
      },
      { name: "HTML5/CSS3", icon: "🌐", category: "Markup" },
      { name: "Framer Motion", icon: "🎭", category: "Animation" },
      { name: "Bootstrap", icon: <FaBootstrap />, category: "CSS Framework" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating robust server-side applications",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-600 dark:text-green-400",
    bgColor:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, category: "Runtime" },
      { name: "Express.js", icon: <SiExpress />, category: "Framework" },
      { name: "REST APIs", icon: "🔌", category: "Architecture" },
      { name: "SQL", icon: <PiFileSqlLight />, category: "Query Language" },
      { name: "Better Auth", icon: <SiBetterauth />, category: "Security" },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    description: "Managing and optimizing data solutions",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600 dark:text-purple-400",
    bgColor:
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    skills: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        category: "Programming Language",
      },
      { name: "MySQL", icon: <SiMysql />, category: "Relational" },
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Writing efficient and maintainable code",
    icon: Code2,
    color: "from-indigo-500 to-violet-500",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bgColor:
      "bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500",
    skills: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        category: "Programming Language",
      },
      { name: "Python", icon: <FaPython />, category: "Programming Language" },
      { name: "Java", icon: <FaJava />, category: "Programming Language" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Development environment and workflow",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-600 dark:text-orange-400",
    bgColor:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: [
      { name: "GitHub", icon: <FaGithub />, category: "Version Control" },
      { name: "VS Code", icon: <VscVscode />, category: "Editor" },
      { name: "Figma", icon: <FaFigma />, category: "Design" },
      { name: "Docker", icon: "🐳", category: "Container" },
      { name: "Vercel", icon: "▲", category: "Deployment" },
      { name: "Netlify", icon: <SiNetlify />, category: "Deployment" },
    ],
  },
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

export default function Skills() {
  return (
    <section
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-24 overflow-hidden"
      id="skills"
    >
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
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build amazing digital experiences
          </p>
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
                    <h3
                      className={`text-lg font-semibold ${category.textColor}`}
                    >
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
