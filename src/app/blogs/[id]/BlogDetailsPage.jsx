"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function BlogDetailsPage({ blogs }) {
  const blog = blogs;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Blog not found
          </h1>
          <Link href="/blogs" className="text-blue-600 hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const isBengali = (text) => /[\u0980-\u09FF]/.test(text);
  const getFontClass = (text, type = "body") => {
    if (isBengali(text)) {
      return type === "heading" ? "font-bangla-heading" : "font-bangla-body";
    }
    return "font-english";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation */}
     

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={blog.image || "/default-blog-image.jpg"}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

        <Link
          href="/blogs"
          className="absolute left-4 top-20 flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-md transition bg-white/80 text-gray-900 hover:bg-white dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blogs
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            {blog.category && (
              <span className="mb-4 inline-block rounded-full bg-blue-600/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                {blog.category}
              </span>
            )}
            <h1
              className={`text-4xl sm:text-5xl font-bold text-white ${getFontClass(blog.title, "heading")}`}
            >
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between rounded-2xl p-6 bg-white border border-gray-100 shadow-lg dark:bg-slate-800/50 dark:border-slate-700"
        >
          <div className="flex items-center space-x-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold text-white">
              {blog.author?.charAt(0) || "A"}
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-white">
                {blog.author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog.createdAt).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {blog.description.split(/\s+/).length} words
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {Math.ceil(blog.description.split(/\s+/).length / 200)} min read
            </p>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.1 }}
          className={`prose prose-lg max-w-none dark:prose-invert ${getFontClass(blog.description)}`}
        >
          <p className="whitespace-pre-wrap leading-8 text-lg text-gray-700 dark:text-gray-300">
            {blog.description}
          </p>
        </motion.div>

        {/* Share Section */}
        <div className="mt-12 flex items-center justify-between rounded-2xl p-6 bg-white border border-gray-100 shadow-lg dark:bg-slate-800/50 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Share this post
          </h3>
          <div className="flex space-x-3">
            <button className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button className="rounded-full bg-blue-500 p-3 text-white transition hover:bg-blue-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className="rounded-full bg-green-600 p-3 text-white transition hover:bg-green-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
