import { getBlogPosts } from "@/lib/APIs/APIs";
import React from "react";
import BlogsPage from "./BlogsPage";

async function Blogs() {
  const getBlogs = async () => {
    try {
      const res = await getBlogPosts();
      return res.data;
    } catch (error) {
      console.log(error);
      return "Blogs not found";
    }
  };

  const blogs = await getBlogs();

  return (
    <div>
      <BlogsPage blogs={blogs} />
    </div>
  );
}

export default Blogs;
