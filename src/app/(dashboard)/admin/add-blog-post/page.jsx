"use client";

import { useMemo, useState } from "react";

const initialPosts = [
  {
    id: 1,
    title: "Designing thoughtful user experiences",
    description:
      "A simple reminder that even small design details can make a product feel more human, intuitive, and memorable.",
  },
  {
    id: 2,
    title: "Why clean interfaces win",
    description:
      "Clarity often matters more than complexity. A polished interface helps people understand, trust, and return to your work.",
  },
];

export default function BlogPostForm() {
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState({ title: "", description: "" });
  const [error, setError] = useState("");

  const descriptionCount = useMemo(() => form.description.length, [form.description]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = form.title.trim();
    const description = form.description.trim();

    if (!title || !description) {
      setError("Please add both a title and a description before publishing your blog post.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    setPosts((current) => [newPost, ...current]);
    setForm({ title: "", description: "" });
    setError("");
  };

  const handleClear = () => {
    setForm({ title: "", description: "" });
    setError("");
  };

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_35%),linear-gradient(135deg,#020817_0%,#0f172a_45%,#111827_100%)] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.28em] text-blue-300">
              Blog Studio
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Add blog post
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
            {posts.length} published
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-md sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-slate-200">
                  Post title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter a catchy blog title"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor="description" className="block text-sm font-medium text-slate-200">
                    Description
                  </label>
                  <span className="text-xs text-slate-400">{descriptionCount}/500</span>
                </div>
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  value={form.description}
                  onChange={(event) => {
                    if (event.target.value.length <= 500) {
                      handleChange(event);
                    }
                  }}
                  placeholder="Write your blog content here..."
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {error ? (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  Publish post
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-600 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
                >
                  Clear form
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Recent posts</h3>
              <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
                live preview
              </span>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900"
                >
                  <div className="mb-2 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    <span>Article</span>
                    <span>New</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{post.title}</h4>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-300">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
