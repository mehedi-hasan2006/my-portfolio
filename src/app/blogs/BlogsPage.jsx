"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


function BlogsPage({ blogs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Detect if text is Bengali
  const isBengali = (text) => {
    return /[\u0980-\u09FF]/.test(text);
  };

  // Get appropriate font class
  const getFontClass = (text, type = 'body') => {
    if (isBengali(text)) {
      return type === 'heading' ? 'font-bangla-heading' : 'font-bangla-body';
    }
    return 'font-english';
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const defaultCategories = ['All', 'Technology', 'Design', 'Development', 'Tutorial', 'Other'];
    const blogCategories = blogs.map(blog => blog.category).filter(Boolean);
    return [...new Set([...defaultCategories, ...blogCategories])];
  }, [blogs]);

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.description.toLowerCase().includes(searchLower) ||
        blog.author.toLowerCase().includes(searchLower)
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => 
        blog.category === selectedCategory || 
        (!blog.category && selectedCategory === 'Other')
      );
    }

    if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === 'title') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [blogs, searchTerm, selectedCategory, sortBy]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getReadTime = (description) => {
    const wordsPerMinute = isBengali(description) ? 150 : 200;
    const words = description.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-lg border-b bg-white/80 border-gray-200 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl">
                B
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Blog
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Search in navbar */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 rounded-xl px-4 py-2 pl-10 text-sm outline-none transition-all border-2 bg-gray-100 text-gray-900 border-transparent focus:border-blue-500 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:focus:border-blue-500"
                />
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              
             
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-bangla-heading text-gray-900 dark:text-white">
              আমার ব্লগ পোস্ট
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Explore my thoughts, tutorials, and insights on web development and technology
            </p>
          </div>

          {/* Mobile Search */}
          <div className="mb-8 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl px-4 py-3 pl-10 text-sm outline-none transition-all border-2 bg-white text-gray-900 border-gray-200 focus:border-blue-500 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category and Sort Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-600/30'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 dark:border-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl px-4 py-2 text-sm font-medium outline-none transition-all border-2 bg-white text-gray-700 border-gray-200 dark:bg-slate-800 dark:text-white dark:border-slate-700"
              >
                <option value="newest">নতুন প্রথমে</option>
                <option value="oldest">পুরানো প্রথমে</option>
                <option value="title">শিরোনাম অনুসারে</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'blog' : 'blogs'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <motion.article
                    key={blog._id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white hover:shadow-blue-200/50 border border-gray-100 dark:bg-slate-800/50 dark:hover:shadow-blue-900/30 dark:border-slate-700"
                  >
                    <Link href={`/blogs/${blog._id}`}>
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={blog.image || '/default-blog-image.jpg'}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {blog.category && (
                          <span className="absolute left-4 top-4 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {blog.category}
                          </span>
                        )}
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between text-xs text-white/80">
                            <span className="font-medium">{blog.author}</span>
                            <span>{getReadTime(blog.description)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-3 flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-gray-400">
                            {formatDate(blog.createdAt)}
                          </span>
                        </div>
                        
                        <h3 className={`mb-3 line-clamp-2 text-xl font-bold transition-colors text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 ${getFontClass(blog.title, 'heading')}`}>
                          {blog.title}
                        </h3>
                        
                        <p className={`line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300 ${getFontClass(blog.description)}`}>
                          {blog.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 dark:border-slate-700 pt-4">
                          <div className="flex items-center space-x-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-bold text-white">
                              {blog.author?.charAt(0) || 'A'}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {blog.author}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 dark:text-blue-400">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800">
                <svg className="h-12 w-12 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                কোনো ব্লগ পাওয়া যায়নি
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                আপনার সার্চ বা ফিল্টার পরিবর্তন করে দেখুন
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                ফিল্টার পরিষ্কার করুন
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogsPage;