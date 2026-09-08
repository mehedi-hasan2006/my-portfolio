"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { createBlogPost } from "@/lib/APIs/APIs";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function BlogPostForm({ latestPostsData }) {
  const initialPosts = latestPostsData;
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  console.log("inital post : ", initialPosts);

  // get session
  const session = authClient.useSession();
  const user = session.data?.user;

  const descriptionCount = useMemo(
    () => form.description.length,
    [form.description],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError("");
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    // Replace 'YOUR_IMGBB_API_KEY' with your actual ImgBB API key
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.data.url;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //token verification for client components
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    console.log(token);

    if (!token) {
      toast.error(" Authorization Failed. Please login again.");
      return;
    }

    const title = form.title.trim();
    const description = form.description.trim();

    if (!title || !description) {
      setError(
        "Please add both a title and a description before publishing your blog post.",
      );
      return;
    }

    try {
      setIsUploading(true);
      let imageUrl = "";

      // Only upload image to ImgBB when publish button is clicked
      if (selectedImage) {
        imageUrl = await uploadToImgBB(selectedImage);
      }

      const newPost = {
        title,
        description,
        image:
          imageUrl ||
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
        author: user?.name || "Anonymous",
        userId: user?.id || null,
      };

      const addBlog = await createBlogPost(newPost, {
        authorization: `Bearer ${token}` || "",
        "Content-Type": "application/json",
      });

      // Fix: Check addBlog instead of result
      if (addBlog?.ok || addBlog?.success || addBlog?.data) {
        toast.success("Blog post created successfully!");

        // Only update local state if the API call was successful
        setPosts((current) => [newPost, ...current]);
        setForm({ title: "", description: "" });
        setSelectedImage(null);
        setImagePreview("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setError("");
      } else {
        // Handle API error
        toast.error(addBlog?.message || "Failed to create blog post");
      }
    } catch (err) {
      console.error("Error creating blog post:", err);
      setError("Failed to create blog post. Please try again.");
      toast.error("Failed to create blog post. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    setForm({ title: "", description: "" });
    setSelectedImage(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setError("");
  };

  return (
    <section
      id="blog"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_35%),linear-gradient(135deg,#020817_0%,#0f172a_45%,#111827_100%)] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-blue-300">
            Blog Studio
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Create Your Blog Post
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Share your thoughts, ideas, and stories with the world
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form Section */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-md sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title Input */}
              <div className="space-y-3">
                <label
                  htmlFor="title"
                  className="block text-lg font-semibold text-white"
                >
                  Post Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter a catchy blog title..."
                  className="w-full rounded-2xl border-2 border-slate-700 bg-slate-950/60 px-5 py-4 text-lg text-white outline-none transition-all duration-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 placeholder:text-slate-500"
                />
              </div>

              {/* Description Textarea - Larger */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="block text-lg font-semibold text-white"
                  >
                    Blog Content
                  </label>
                  <span
                    className={`text-sm ${descriptionCount > 1450 ? "text-yellow-400" : "text-slate-400"}`}
                  >
                    {descriptionCount}/1500
                  </span>
                </div>
                <textarea
                  id="description"
                  name="description"
                  rows={15}
                  value={form.description}
                  onChange={(event) => {
                    if (event.target.value.length <= 1500) {
                      handleChange(event);
                    }
                  }}
                  placeholder="Write your detailed blog content here... You can write up to 1500 characters."
                  className="w-full resize-y rounded-2xl border-2 border-slate-700 bg-slate-950/60 px-5 py-4 text-base leading-relaxed text-white outline-none transition-all duration-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 placeholder:text-slate-500 min-h-75 max-h-150"
                />
                <p className="text-xs text-slate-400">
                  Tip: Write detailed content to engage your readers better
                </p>
              </div>

              {/* Image Upload Section */}
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-white">
                  Featured Image
                </label>

                {!imagePreview ? (
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-600 bg-slate-900/50 px-6 py-12 text-center transition-all duration-300 hover:border-blue-400 hover:bg-slate-800/50"
                    >
                      <svg
                        className="mb-4 h-16 w-16 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-lg font-medium text-slate-300">
                        Click to upload image
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={800}
                      height={400}
                      className="h-64 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 rounded-full bg-red-500/90 p-2 text-white transition hover:bg-red-600"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-sm text-white">
                        Image selected - will upload on publish
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
                  <div className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-600 bg-slate-900/70 px-6 py-4 text-base font-semibold text-slate-200 transition-all duration-300 hover:border-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Recent Posts Section */}
          <aside className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-md sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Recent Posts</h3>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                {posts.length} posts
              </span>
            </div>

            <div className="space-y-5 max-h-200 overflow-y-auto pr-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {post.image && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="rounded-full bg-blue-500/10 px-2 py-1 font-medium text-blue-300">
                      Article
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h4>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
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
