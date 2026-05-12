"use client";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
  Send,
  Calendar,
  Coffee,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mehedihasan811914@gmail.com",
    href: "mailto:mehedihasan811914@gmail.com",
    color: "from-red-500 to-pink-500",
    bgColor:
      "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    borderColor: "border-red-200 dark:border-red-800",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    description: "Send me an email anytime",
    availability: "Response within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kurigram, Bangladesh",
    href: "https://maps.google.com/?q=Kurigram,Bangladesh",
    color: "from-blue-500 to-cyan-500",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: "Available for remote work",
    availability: "Open to relocation",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1612-243365",
    href: "tel:+8801612243365",
    color: "from-green-500 to-emerald-500",
    bgColor:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    description: "Call or WhatsApp me",
    availability: "Sat-Thu, 9AM-12AM (GMT+6)",
  },
  {
    icon: Calendar,
    label: "Schedule Call",
    value: "Book a Meeting",
    href: "#",
    color: "from-purple-500 to-violet-500",
    bgColor:
      "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description: "Schedule a video call",
    availability: " Sun-Thu, 6PM-11PM (GMT+6) ",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/mehedi-hasan2006",
    username: "@mehedi-hasan2006",
    color:
      "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
    stats: "35+ repos",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehedi-hasan-2006/",
    username: "@mehedi-hasan2006",
    color: "hover:bg-blue-600 hover:text-white",
    stats: "50+ connections",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/mdmehedi.hasan2006",
    username: "@mdmehedi.hasan2006",
    color: "hover:bg-blue-500 hover:text-white",
    stats: "4K+ followers",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    href: "https://discord.com/users/mehedi.hasan2006",
    username: "mehedi.hasan2006",
    color: "hover:bg-indigo-500 hover:text-white",
    stats: "Active daily",
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      className="relative bg-white dark:bg-gray-950 py-16 lg:py-24 overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [45, 0, 45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
            <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Get in Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`group relative ${contact.bgColor} border-2 ${contact.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                  >
                    {/* Gradient Border on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 rounded-xl ${contact.iconBg}`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${contact.iconColor}`}
                          />
                        </motion.div>

                        {/* Copy Button */}
                        {contact.label !== "Schedule Call" && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              copyToClipboard(contact.value, index)
                            }
                            className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            title="Copy to clipboard"
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-500" />
                            )}
                          </motion.button>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.label}
                      </h3>

                      <a
                        href={contact.href}
                        target={
                          contact.label === "Location" ? "_blank" : undefined
                        }
                        rel={
                          contact.label === "Location"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`text-sm font-medium bg-gradient-to-r ${contact.color} bg-clip-text text-transparent hover:underline inline-flex items-center gap-1 group/link`}
                      >
                        {contact.value}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>

                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        {contact.description}
                      </p>

                      <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500 dark:text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{contact.availability}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Message Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Let's Grab a Virtual Coffee! ☕
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm always excited to connect with fellow developers,
                    potential clients, or anyone interested in tech. Whether you
                    have a project idea, need help with development, or just
                    want to chat about web technologies - I'm here!
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Available for new projects
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Response time: within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Social & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {/* Social Links Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className={`flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${social.color} group`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                            {social.label}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {social.username}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {social.stats}
                        </span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Have a Project?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Let's discuss your ideas and bring them to life with modern
                  web technologies.
                </p>

                <div className="space-y-3">
                  <motion.a
                    href="mailto:mehedi.hasan@example.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-blue-600 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Quick Email
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-sm hover:bg-white/30 transition-all border border-white/30"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Meeting
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Availability Status */}
            {/* <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Working Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM (GMT+6)" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM (GMT+6)" },
                  { day: "Friday", time: "Closed / Family Time" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between text-sm py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
