// components/SkillsProjects.js
"use client";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Palette,
  Globe,
  Smartphone,
  Sparkles,
  ExternalLink,

  Star,
  GitFork,
  Eye,
  Calendar,
  Tag,
  Filter,
  X,
  ChevronRight,
  FolderGit2,
  Users,
  TrendingUp,
  Zap,
  Target,
  Award,
} from "lucide-react";
import { useState } from "react";

// Skills Data
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "JavaScript", level: 88, icon: "📜" },
      { name: "TypeScript", level: 70, icon: "🔷" },
      { name: "TailwindCSS", level: 92, icon: "🎨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    skills: [
      { name: "Node.js", level: 82, icon: "🟢" },
      { name: "Express", level: 80, icon: "🚂" },
      { name: "REST APIs", level: 85, icon: "🔌" },
      { name: "GraphQL", level: 60, icon: "◈" },
      { name: "Python", level: 55, icon: "🐍" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgColor:
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Mongoose", level: 80, icon: "🦫" },
      { name: "Firebase", level: 65, icon: "🔥" },
      { name: "PostgreSQL", level: 50, icon: "🐘" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    bgColor:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      { name: "Git/GitHub", level: 88, icon: "📦" },
      { name: "Figma", level: 75, icon: "🎯" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Docker", level: 45, icon: "🐳" },
      { name: "Vercel", level: 78, icon: "▲" },
    ],
  },
];

// Projects Data
const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, cart system, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    github: "#",
    live: "#",
    stars: 45,
    forks: 12,
    date: "2024",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "fullstack",
    github: "#",
    live: "#",
    stars: 32,
    forks: 8,
    date: "2024",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Personal portfolio with dark mode, animations, and responsive design showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    category: "frontend",
    github: "#",
    live: "#",
    stars: 28,
    forks: 5,
    date: "2024",
    featured: false,
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search, forecasts, and interactive maps integration.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tech: ["React", "OpenWeather API", "Chart.js"],
    category: "frontend",
    github: "#",
    live: "#",
    stars: 18,
    forks: 3,
    date: "2023",
    featured: false,
  },
  {
    id: "5",
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js REST API with authentication, validation, error handling, and documentation.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    github: "#",
    live: "#",
    stars: 52,
    forks: 15,
    date: "2024",
    featured: true,
  },
  {
    id: "6",
    title: "Chat Application",
    description:
      "Real-time messaging app with private chats, group conversations, file sharing, and online status.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    tech: ["React", "Socket.io", "Node.js", "Redis"],
    category: "fullstack",
    github: "#",
    live: "#",
    stars: 38,
    forks: 10,
    date: "2023",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: FolderGit2 },
  { id: "frontend", label: "Frontend", icon: Palette },
  { id: "backend", label: "Backend", icon: Server },
  { id: "fullstack", label: "Full Stack", icon: Code2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

// Skill Progress Bar Component
function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div
      className="bg-gray-50 dark:bg-gray-950 py-16 lg:py-24"
      id="skills-projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SKILLS SECTION ==================== */}
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
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
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
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            {
              icon: Code2,
              label: "Technologies",
              value: "20+",
              color: "text-blue-500",
            },
            {
              icon: FolderGit2,
              label: "Projects",
              value: "35+",
              color: "text-green-500",
            },
            {
              icon: Users,
              label: "GitHub Followers",
              value: "7+",
              color: "text-purple-500",
            },
            {
              icon: TrendingUp,
              label: "Learning",
              value: "Daily",
              color: "text-orange-500",
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center shadow-lg"
              >
                <IconComponent
                  className={`w-6 h-6 mx-auto mb-2 ${stat.color}`}
                />
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

        {/* ==================== PROJECTS SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-4 py-2 rounded-full mb-6 border border-green-200 dark:border-green-800"
          >
            <FolderGit2 className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-300 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      {/* <Github className="w-5 h-5" /> */}
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mehedi-hasan2006"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* <Github className="w-5 h-5" /> */}
            View More on GitHub
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
