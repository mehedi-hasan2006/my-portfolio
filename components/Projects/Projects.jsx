
"use client";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Eye,
  Sparkles,
  Trophy,
  TrendingUp,
  Clock,
  Users,
  Code2,
  Server,
  Palette,
  Globe,
  Search,
  X,
  ArrowUpRight,
  ChevronRight,
  Bookmark,
  Share2,
} from "lucide-react";
import { useState } from "react";

const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, cart system, Stripe payment integration, admin dashboard, and order management.",
    longDescription:
      "Built a complete e-commerce platform with React frontend and Node.js backend. Features include JWT authentication, product catalog with search/filter, shopping cart, Stripe payment processing, order tracking, admin dashboard for inventory management, and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
    category: "fullstack",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 45,
    forks: 12,
    views: 1234,
    date: "2024",
    duration: "3 months",
    role: "Full Stack Developer",
    featured: true,
    highlights: [
      "10K+ monthly active users",
      "99.9% uptime",
      "60% faster page loads",
      "PCI compliant payments",
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop Kanban board, team chat, and productivity analytics.",
    longDescription:
      "Developed a comprehensive project management application featuring real-time collaboration using WebSocket, drag-and-drop interface for task organization, team messaging, file attachments, deadline tracking with notifications, and detailed analytics dashboard for productivity insights.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    category: "fullstack",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 32,
    forks: 8,
    views: 892,
    date: "2024",
    duration: "2 months",
    role: "Full Stack Developer",
    featured: true,
    highlights: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Team productivity +40%",
      "Cross-platform support",
    ],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Personal portfolio with dark mode, smooth animations, responsive design, and optimized performance showcasing projects and skills.",
    longDescription:
      "Created a modern portfolio website using Next.js with server-side rendering for optimal performance. Features include dark/light mode, page transitions with Framer Motion, contact form with email integration, blog section, and comprehensive SEO optimization achieving 98+ Lighthouse scores.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "MDX"],
    category: "frontend",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 28,
    forks: 5,
    views: 567,
    date: "2024",
    duration: "1 month",
    role: "Frontend Developer",
    featured: false,
    highlights: [
      "Lighthouse score 98",
      "Perfect accessibility",
      "SEO optimized",
      "0.8s load time",
    ],
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search, 7-day forecasts, interactive maps, and weather alerts.",
    longDescription:
      "Built a weather dashboard consuming OpenWeather API with features like geolocation-based weather, search by city, 7-day forecast with charts, interactive weather maps, severe weather alerts, and save favorite locations. Implemented responsive design and offline support with service workers.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tech: ["React", "OpenWeather API", "Chart.js", "PWA"],
    category: "frontend",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 18,
    forks: 3,
    views: 445,
    date: "2023",
    duration: "2 weeks",
    role: "Frontend Developer",
    featured: false,
    highlights: [
      "Real-time updates",
      "Interactive maps",
      "Offline support",
      "Multiple locations",
    ],
  },
  {
    id: "5",
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js REST API with authentication, validation, error handling, rate limiting, and API documentation.",
    longDescription:
      "Developed a comprehensive REST API boilerplate following best practices. Includes JWT authentication with refresh tokens, request validation with Joi, centralized error handling, rate limiting, CORS configuration, MongoDB integration with Mongoose, automated API documentation with Swagger, and unit/integration tests with Jest.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
    category: "backend",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 52,
    forks: 15,
    views: 2100,
    date: "2024",
    duration: "1 month",
    role: "Backend Developer",
    featured: true,
    highlights: [
      "200+ clones",
      "API documentation",
      "Test coverage 90%",
      "Rate limiting built-in",
    ],
  },
  {
    id: "6",
    title: "Chat Application",
    description:
      "Real-time messaging app with private chats, group conversations, file sharing, online status, and message history.",
    longDescription:
      "Built a feature-rich chat application with real-time messaging using Socket.io. Features include private and group chats, file/image sharing, typing indicators, online/offline status, message read receipts, message search, chat history with pagination, and end-to-end encryption for secure communication.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    tech: ["React", "Socket.io", "Node.js", "Redis", "AWS S3"],
    category: "fullstack",
    github: "https://github.com/mehedi-hasan2006",
    live: "#",
    stars: 38,
    forks: 10,
    views: 1567,
    date: "2023",
    duration: "2 months",
    role: "Full Stack Developer",
    featured: false,
    highlights: [
      "1000+ concurrent users",
      "Message encryption",
      "File sharing support",
      "Message search",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Globe, count: projectsData.length },
  { id: "frontend", label: "Frontend", icon: Palette, count: projectsData.filter((p) => p.category === "frontend").length },
  { id: "backend", label: "Backend", icon: Server, count: projectsData.filter((p) => p.category === "backend").length },
  { id: "fullstack", label: "Full Stack", icon: Code2, count: projectsData.filter((p) => p.category === "fullstack").length },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortBy, setSortBy] = useState("stars");

  const filteredProjects = projectsData
    .filter((project) => selectedCategory === "all" || project.category === selectedCategory)
    .filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "stars") return b.stars - a.stars;
      if (sortBy === "newest") return b.date.localeCompare(a.date);
      if (sortBy === "views") return b.views - a.views;
      return 0;
    });

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-16 lg:py-24 overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-4 py-2 rounded-full mb-6 border border-green-200 dark:border-green-800"
          >
            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-300 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my best work and personal projects
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Code2, label: "Total Projects", value: projectsData.length, color: "text-blue-500" },
            { icon: Star, label: "Total Stars", value: projectsData.reduce((acc, p) => acc + p.stars, 0), color: "text-yellow-500" },
            { icon: GitFork, label: "Total Forks", value: projectsData.reduce((acc, p) => acc + p.forks, 0), color: "text-green-500" },
            { icon: Eye, label: "Total Views", value: projectsData.reduce((acc, p) => acc + p.views, 0).toLocaleString(), color: "text-purple-500" },
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center shadow-lg"
              >
                <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="stars">Sort by Stars</option>
            <option value="newest">Sort by Newest</option>
            <option value="views">Sort by Views</option>
          </select>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {cat.label}
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                  isActive ? "bg-white/20" : "bg-gray-100 dark:bg-gray-700"
                }`}>
                  {cat.count}
                </span>
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        {/* <Github className="w-4 h-4" /> */}
                        Source Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                        <Trophy className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* View Count */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.views.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title & Date */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {project.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* View All Button */}
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* <Github className="w-5 h-5" /> */}
            View All Projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}